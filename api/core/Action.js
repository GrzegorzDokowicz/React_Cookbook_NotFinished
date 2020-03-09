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


        console.log(this.request.params);

        return this.request && this.request.body ? this.request.body :
            (this.request && this.request.query ? this.request.query : false);
    }

    render() {


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
