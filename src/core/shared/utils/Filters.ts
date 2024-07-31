import { IFilter } from "../interfaces/IFilter";

export class Filter implements IFilter {

    constructor(field: string, operator: string, value: any) {
        this.field = field;
        this.operator = operator;
        this.value = value;
    }

    field: string;
    operator: string;
    value: any;
}