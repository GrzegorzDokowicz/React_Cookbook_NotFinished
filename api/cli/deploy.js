import appConfig from '../../config';
import runQueryCollection from "../core/helpers/runQueryCollection";
import readFile from "../core/helpers/readFile";
import CLIAction from "../core/CLIAction";

class DeployCLIAction extends CLIAction {
    prepareInitScripts() {
        const isCreation = this.hasParameter('--creation');
        const withForce = this.hasParameter('--force');
        const database = appConfig.database.toString();
        let scripts = [];

        if (isCreation) {

            if (withForce) {
                scripts = [`DROP DATABASE ${database}`]
            }

            scripts = [
                ...scripts,
                `CREATE DATABASE ${database}`,
            ];
        }

        scripts = [
            ...scripts,
            `USE ${database}`,
        ];

        console.log(scripts);

        return scripts;
    }

    getSchemaName() {
        const fileName = this.getParameterValue('--file');

        if (!fileName) {
            return '';
        }

        return fileName;
    }

    run() {
        const schemaName = this.getSchemaName();

        if (!schemaName) {
            console.log('Not found schema name.');
            return 1;
        }

        readFile(schemaName).then(data => {
            const fileScripts = data.split(';')
                .map(element => element.toString().replace(/\n/g, "").trim())
                .filter(element => element.length);
            const scripts = [
                ...this.prepareInitScripts(),
                ...fileScripts
            ];

            runQueryCollection(scripts);
        }).catch((error) => {
            console.log(error);
        })
    }
}

export default new DeployCLIAction(true, false);
