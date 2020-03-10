import Action from "../Action";
import MysqlError from "../MysqlError";

class CreateProductAction extends Action {
    getConfiguration() {
        return {
            model: Object,
            data: {}
        }
    }

    render() {
        const {model, data} = this.getConfiguration();
        const modelObject = new model(data);

        if (modelObject.validate()) {
            modelObject.create().then(() => {
                this.response.status(200).send();
            }).catch(error => {
                this.response.status(400).send(new MysqlError(MysqlError.CANNOT_CREATE_OBJECT, error));
            });

            return;
        }

        this.response.status(400).send(new MysqlError(MysqlError.VALIDATION_ERROR, modelObject.validationErrors));
    }
}

export default CreateProductAction;
