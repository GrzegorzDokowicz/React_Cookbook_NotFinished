import MysqlConnection from "./MysqlConnection";
import appConfig from "../../config";

const connect = (connectToDatabase) => {
    if (!connectToDatabase) {
        delete appConfig.database;
    }

    if (!MysqlConnection.getInstance(appConfig)) {
        throw new Error('Cannot initialize database.');
    }
};

class CLIAction {
    constructor(needConnection = false, connectToDatabase = true) {
        this.params = process.argv.slice(2);

        if (needConnection) {
            connect(connectToDatabase);
        }
    }

    hasParameter(name) {
        return this.params.indexOf(name) !== -1;
    }

    getParamterValue(name) {
        const parameter = this.findParameterString(name);

        if (parameter) {
            const [paramName, value] = parameter.toString().trim().split('=');

            return value;
        }

        throw new Error(`Cannot find parameter with name`)
    }

    findParameterString(name) {
        return this.params.find(param => param.indexOf(name));
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
