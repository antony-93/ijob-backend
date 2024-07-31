import { createQueryBuilder, SelectQueryBuilder } from "typeorm";
import { IFilter } from "../interfaces/IFilter";
import { ISort } from "../interfaces/ISort";
import { IParams } from "../interfaces/IParams";

export function createDefaultQuery<T>(queryName: string, params?: IParams) {
    const query: SelectQueryBuilder<T> = createQueryBuilder(queryName);

    applyParams(query, params);

    return query;
}

export function applyParams(query: SelectQueryBuilder<any>, params: IParams) {
    if (query && params) {
        applySelectFields(query, params.fields);
        applyFilters(query, params.filters);
        applySorts(query, params.sorts);
    }
}

export function applyFilters(query: SelectQueryBuilder<any>, filters: IFilter[]) {
    if (filters && filters.length) {
        filters.forEach(filter => {
            const { field, operator, value } = filter;
            switch (operator) {
                case 'equal':
                    query.andWhere(`${field} = :value`, { value });
                    break;

                case 'different':
                    query.andWhere(`${field} != :value`, { value });
                    break;

                case 'bigger':
                    query.andWhere(`${field} > :value`, { value });
                    break;

                case 'less':
                    query.andWhere(`${field} < :value`, { value });
                    break;

                case 'biggerOrEqual':
                    query.andWhere(`${field} >= :value`, { value });
                    break;

                case 'lessOrEqual':
                    query.andWhere(`${field} <= :value`, { value });
                    break;

                case 'like':
                    query.andWhere(`${field} LIKE :value`, { value: `%${value}%` });
                    break;
                    
                default:
                    throw new Error(`Operador de filtro '${operator}' não suportado.`);
            }
        })
    }
}

export function applySorts(query: SelectQueryBuilder<any>, sorts: ISort[]) {
    if (sorts && sorts.length) {
        sorts.forEach((sort: ISort) => {
            const { field, direction } = sort;
            query.addOrderBy(`${field}`, direction.toUpperCase() as 'ASC' | 'DESC');
        });
    }
}

export function applySelectFields(query: SelectQueryBuilder<any>, fields: string[]) {
    query.addSelect(fields);
}