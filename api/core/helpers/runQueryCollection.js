import MysqlConnection from "../MysqlConnection";

const runQueryCollection = (collection) => {
    const [queryString, ...newCollection] = collection;

    if (queryString) {
        MysqlConnection.getInstance().query(queryString, (error) => {
            if (!error && newCollection.length > 0) {
                runQueryCollection(newCollection)
            } else if (error) {
                throw new Error(error);
            }
        });
    }
};

export default runQueryCollection;
