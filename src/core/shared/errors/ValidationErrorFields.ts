import { IErrorFields } from "../interfaces/IErrorFields";

export class ValidationErrorFields extends Error {
  
  private field: string;
  private errorFields: IErrorFields[];
  
  constructor(message: string, error?: { field?: string, errorFields?: IErrorFields[] }) {
    super(message);
    this.name = 'ValidationError';
    this.field = error?.field || null;
    this.errorFields = error?.errorFields || [];
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      field: this.field,
      errorFields: this.errorFields
    };
  }

}