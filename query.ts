export class Query {
    data: any[];
    column: any;
    
    constructor() {
        this.data = [];
        this.column = undefined;
    }
    
    select(column?: any) {
        this.column = column;
        return this;
    }

    from(data: any[]) {
        this.data = data;
        return this;
    }

    execute() {

    }
}