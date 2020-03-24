import Connection from "../core/MysqlConnection";
import Query from "../core/Query";
import {
    getInsertValue,
    objectKeysToFields,
    queryString,
    toStringForQuery
} from "../core/helpers/mysqlDatabseHelpers";

const getAliasString = field => `${field} AS "${field}"`;

class Model {
    static getInsertString(table, fields, values) {
        return `INSERT INTO ${table} (${fields}) VALUES ${values}`;
    }

    static getQueryString(table, fields = false) {
        return `SELECT ${!fields ? '*' : fields} FROM ${table}`;
    }

    constructor(table, data, fieldsValidation, primaryKey = 'id', joins = []) {
        this.data = data;
        this.table = table;
        this.joins = joins;
        this.tableName = queryString(table);
        this.primaryKey = primaryKey;
        this.fieldsValidation = fieldsValidation;
        this.connection = Connection.getInstance();
        this.validationErrors = {};
    }

    validate() {
        this.validationErrors = this.fieldsValidation.filter(field => {
            return !this.data.hasOwnProperty(field) || (!this.data[field] && this.data[field] !== 0);
        });

        return this.validationErrors.length === 0;
    }

    setData(data) {
        this.data = data;
    }

    create() {
        const data = this.getCreationData();
        const string = Model.getInsertString(this.tableName, objectKeysToFields(data), getInsertValue(Object.values(data)));

        return Query(string);
    }

    getSelectString() {
        const fields = this.getSelectAttributes();

        return Model.getQueryString(this.table, fields);
    }

    mapper(data) {
        return Object.keys(data).reduce((prev, key) => {
            const [table, fieldName] = key.split('.');

            if (table === this.table) {
                prev[fieldName] = data[key];
            } else {
                if (!prev[table]) {
                    prev[table] = {}
                }

                prev[table][fieldName] = data[key]
            }

            return prev;
        }, {})
    }

    getSelectAttributes() {
        const mapFieldName = table => (field => `${table}.${field}`);
        const mapTableFields = ({table, fields}) => fields.map(mapFieldName(table)).map(getAliasString).join(', ');
        const currentFields = this.primaryKey ? [this.primaryKey] : [];

        return [
            {
                table: this.table,
                fields: currentFields.concat(this.fieldsValidation)
            },
            ...this.joins
        ].map(mapTableFields).join(', ');
    }

    getBy(field, value, singleParse = true) {
        const mapJoinToString = ({table, field, value}) => `LEFT JOIN ${table} ${table} ON ${this.table}.${field} = ${table}.${value}`;
        const joinString = this.joins.map(mapJoinToString).join(' ');
        const string = `${this.getSelectString()} ${joinString} WHERE ${queryString(field)} = ${toStringForQuery(value)}`;

        return this.runGet(string, singleParse);
    }

    getSingleBy(field, name) {
        return this.getBy(field, name, true).then(response => {
            if (response[field]) {
                return response
            }

            throw new Error("Object not found");
        })
    }

    getAll() {
        return this.runGet(this.getSelectString(), false)
    }

    runGet(string, singleParse = true) {
        return Query(string).then(results => {
            if (!results || results.length === 0) {
                throw new Error("Results not found");
            }

            return results.map(result => this.mapper(result));
        }).then(results => singleParse ? results[0] : results);
    }

    getCreationData() {
        return {};
    }
}

export default Model;
