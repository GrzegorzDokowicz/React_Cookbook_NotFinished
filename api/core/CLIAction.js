import MysqlConnection from "./MysqlConnection";
import appConfig from "../../config";

const connect = (connectToDatabase) => {
    const params = {...appConfig};

    if (!connectToDatabase) {
        delete params.database;
    }

    if (!MysqlConnection.getInstance(params)) {
        throw new Error('Cannot initialize database.');
    }
};

class CLIAction {
    constructor(needConnection = true, connectToDatabase = true) {
        this.params = process.argv.slice(2);

        if (needConnection) {
            connect(connectToDatabase);
        }
    }

    hasParameter(name) {
        return this.params.indexOf(name) !== -1;
    }

    getParameterValue(name) {
        const parameter = this.findParameterString(name);

        if (parameter) {
            const [paramName, value] = parameter.toString().trim().split('=');

            return value;
        }

        throw new Error(`Cannot find parameter with name`)
    }

    findParameterString(name) {
        return this.params.find(param => param.indexOf(name) !== -1);
    }

    run() {

    }

    destroy() {
        if (MysqlConnection.getInstance()) {
            MysqlConnection.getInstance().end();
        }
    }
}

export default CLIAction;
