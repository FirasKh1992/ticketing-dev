export class DatabaseConnectionError extends Error{
    reason="database connection error"
    constructor(){
        super();

        Object.setPrototypeOf(this,DatabaseConnectionError.prototype);
    }
}