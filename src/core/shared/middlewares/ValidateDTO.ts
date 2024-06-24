// validateDTO.ts
import { plainToClass, plainToClassFromExist, plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { IErrorFields } from '../interfaces/IErrorFields';
import { ValidationErrorFields } from '../errors/ValidationErrorFields';

export function validateDTO<T>(dtoClass: new () => T) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const dtoInstance: T = plainToInstance(dtoClass, req.body),
            errors: ValidationError[] = await validate(Object(dtoInstance));

        if (errors.length > 0) {
            const errorFields: IErrorFields[] = []

            errors.forEach(error => {
                let errorField = errorFields.find(e => e.field === error.property);

                if (!errorField) {
                    errorField = { field: error.property, messages: [] };
                    errorFields.push(errorField);
                }

                Object.keys(error.constraints || {}).forEach(key => {
                    errorField.messages.push(error.constraints[key]);
                });
            });

            const validationError = new ValidationErrorFields(
                errors[0].constraints[Object.keys(errors[0].constraints)[0]], 
                { field: errors[0].property , errorFields: errorFields }
            )

            return res.badRequest(validationError);
        }

        req.body = dtoInstance;
        next();
    };
}
