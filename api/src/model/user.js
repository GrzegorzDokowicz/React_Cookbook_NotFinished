import Model from "../core/Model";
import Connection from "../core/MysqlConnection";
import sha1 from 'sha1';
import Query from "../core/Query";
import {fieldsObjectToQueryFields, queryString, toStringForQuery} from "../core/helpers/mysqlDatabseHelpers";

const fields = [
    'name',
    'password',
    'email'
];


class AccountModel extends Model {
    constructor(data) {
        super("accounts", data, fields);
        this.connection = Connection.getInstance();
    }

    getCreationData() {
        return {
            name: queryString(this.data.name),
            password: queryString(sha1(this.data.password)),
            email: queryString(this.data.email),
            creation: 0
        };
    }

    create() {
        const data = this.getCreationData();
        const fields = fieldsObjectToQueryFields(Object.keys(data).join(", ");
        const values = Object.values(data).join(", ");
        const string = `INSERT INTO ${this.tableName} (${fields}) VALUES (${values})`;

        this.connection.query(string);
    }

    getBy(field, name) {
        const string = `SELECT * FROM ${this.tableName}  WHERE ${queryString(field)} = ${toStringForQuery(name)}`;

        return Query(string);
    }

    checkPassword(password) {
        return sha1(password) === this.data.password;
    }
}


export default AccountModel;
