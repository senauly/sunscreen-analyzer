export class Category {
    [key: string]: any;
    name: string;
    descriptionSuccess: string;
    descriptionFailure: string;
    info: string;
    filters: string[];

    constructor(name: string, descriptionSuccess: string, descriptionFailure: string, info: string, filters: string[]) {
        this.name = name;
        this.descriptionSuccess = descriptionSuccess;
        this.descriptionFailure = descriptionFailure;
        this.info = info;
        this.filters = filters;
    }
    
}