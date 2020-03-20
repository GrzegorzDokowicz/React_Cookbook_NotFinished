import appConfig from '../../config';
import runQueryCollection from "../core/helpers/runQueryCollection";
import readFile from "../core/helpers/readFile";
import CLIAction from "../core/CLIAction";

class DeployCLIAction extends CLIAction {
    prepareInitScripts() {
        const isCreation = this.hasParameter('--creation');
        const withForce = this.hasParameter('--force');
        let scripts = [];

        if (isCreation) {
            const database = appConfig.database.toString();

            if (withForce) {
                scripts = [`DROP DATABASE ${database}`]
            }

            scripts = [
                ...scripts,
                `CREATE DATABASE ${database}`,
                `USE ${database}`,
            ];
        }

        return scripts;
    }

    getSchemaName() {
        const fileName = this.params[2];

        if (!fileName) {
            throw new Error("Schema sql not found.");
        }

        return fileName;
    }

    run() {
        readFile(this.getSchemaName()).then(data => {
            const fileScripts = data.split(';')
                .map(element => element.toString().replace(/\n/g, ""))
                .filter(element => element.length);

            runQueryCollection([
                ...this.prepareInitScripts(),
                ...fileScripts
            ]);
        }).catch(error => {
            throw new Error('Cannot read schema sql.');
        });
    }
}

export default new DeployCLIAction(true, false);
