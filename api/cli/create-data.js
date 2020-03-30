import Model from '../core/Model';
import CLIAction from "../core/CLIAction";

import readJSON from '../core/helpers/readJSON';
import {getInsertValue, objectKeysToFields} from "../core/helpers/mysqlDatabseHelpers";
import runQueryCollection from "../core/helpers/runQueryCollection";

const parseValues = valueObject => Object.values(valueObject).map(value => {
    if (Number.isNaN(Number.parseFloat(value))) {
        return `"${value}"`;
    }

    return value;
});

class CrateDataCliAction extends CLIAction {
    run() {
        readJSON('./mock-data.json').then(object => {
            const tables = Object.keys(object).sort((a, b) => object[a].order > object[b].order ? 1 : -1);
            const deletes = [...tables].reverse().map(table => {
                return `DELETE FROM ${table} WHERE id > 0;`
            });
            const scripts = tables.map(table => {
                    const {collection} = object[table];
                    const valuesCollection = collection.map(valueObject => getInsertValue(parseValues(valueObject)));

                    return Model.getInsertString(table, objectKeysToFields(collection[0]), valuesCollection)

                });

            runQueryCollection([...deletes, ...scripts]);
        }).catch(error => {
            throw new Error(error);
        });
    }
}

export default new CrateDataCliAction(true);
