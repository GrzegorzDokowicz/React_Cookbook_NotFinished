class Action {
    setFunctionArguments(request, response) {
        this.request = request;
        this.response = response;
    }

    getRequestData() {
        if (this.request) {
            const {body, query, params} = this.request;
            const variables = [
                body,
                query,
                params
            ];

            for (let param of variables) {
                if (param && Object.keys(param).length > 0) {
                    return param;
                }
            }
        }

        return {};
    }

    render() {
    }

    getId() {
        return this.getParameter('id');
    }

    getParameter(name) {
        return new Promise((resolve, reject) => {
            const data = this.getRequestData();

            if (!data.hasOwnProperty(name)) {
                reject(`Parameter ${name} isn\'t defined`);
            } else {
                resolve(data[name]);
            }
        })
    }

    static toFunction() {
        return (request, response) => {
            const instance = new this();

            instance.setFunctionArguments(request, response);
            instance.render();

            return instance;
        }
    }
}

export default Action;
