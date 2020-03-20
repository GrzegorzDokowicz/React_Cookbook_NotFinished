import Model from '../core/Model';
import CLIAction from "../core/CLIAction";

import readJSON from '../core/helpers/readJSON';
import {getInsertValue, objectKeysToFields} from "../core/helpers/mysqlDatabseHelpers";

const parseValues = valueObject => Object.values(valueObject).map(value => {
    if (Number.isNaN(Number.parseFloat(value))) {
        return `"${value}"`;
    }

    return value;
});

class CrateDataCliAction extends CLIAction {
    run() {
        readJSON('./mock-data.json').then(object => {
            const scripts = Object.keys(object)
                .sort((a, b) => object[a].order > object[b].order ? 1 : -1)
                .map(table => {
                    const {collection} = object[table];
                    const valuesCollection = collection.map(valueObject => getInsertValue(parseValues(valueObject)));

                    return Model.getInsertString(table, objectKeysToFields(collection[0]), valuesCollection);
                });

            console.log(scripts);
            //runQueryCollection(scripts);
        }).catch(error => {
            throw new Error(error);
        });
    }
}

export default new CrateDataCliAction(true);
