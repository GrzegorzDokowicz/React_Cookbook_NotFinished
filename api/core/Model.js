import Connection from "../core/MysqlConnection";
import Query from "../core/Query";
import {
    fieldsObjectToQueryFields,
    getInsertValue, objectKeysToFields,
    queryString,
    toStringForQuery
} from "../core/helpers/mysqlDatabseHelpers";

class Model {
    static getInsertString(table, fields, values) {
        return `INSERT INTO ${table} (${fields}) VALUES ${values}`;
    }

    static getQueryString(table) {
        return `SELECT * FROM ${table}`;
    }

    constructor(table, data, fieldsValidation) {
        this.data = data;
        this.tableName = queryString(table);
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


    getBy(field, value, parse = true) {
        const string = `${Model.getQueryString(this.tableName)} WHERE ${queryString(field)} = ${toStringForQuery(value)}`;

        return Query(string).then(results => parse && results ? (results.length >= 1 ? results[0] : {}) : results);
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
        const string = Model.getQueryString(this.tableName);

        return Query(string)
    }

    getCreationData() {
        return {};
    }
}

export default Model;
