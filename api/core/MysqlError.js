class MysqlError {
    static get VALIDATION_ERROR() {
        return 'Model validation error';
    }

    static get CANNOT_FIND_OBJECT() {
        return 'Cannot find object error';
    }

    static get CANNOT_CREATE_OBJECT() {
        return 'Cannot create object error';
    }

    static get WRONG_QUERY() {
        return 'Wrong in query logic';
    }

    constructor(type, details = {}) {
        this.type = type;
        this.details = details;
    }
}

export default MysqlError;
