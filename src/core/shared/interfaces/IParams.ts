import { IFilter } from "./IFilter";
import { ISort } from "./ISort";

export interface IParams {
    id?: string,
    fields?: string[],
    filters?: IFilter[],
    sorts?: ISort[]
}