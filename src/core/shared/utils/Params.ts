import { IFilter } from "../interfaces/IFilter";
import { IParams } from "../interfaces/IParams";
import { ISort } from "../interfaces/ISort";

export class Params implements IParams {
    constructor(fields?: string[] | undefined, filters?: IFilter[] | undefined, sorts?: ISort[] | undefined) {
        if (fields) this.fields = fields;
        if (filters) this.filters = filters;
        if (sorts) this.sorts = sorts;
    }

    fields?: string[];
    filters?: IFilter[];
    sorts?: ISort[];
}