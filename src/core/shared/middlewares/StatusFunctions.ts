import { Request, Response, NextFunction } from 'express';

export default function statusFunctions (req: Request, res: Response, next: NextFunction) {
    res.success = (content: any) => {
        res.status(200).json(content);
    };

    res.notFound = (content: any) => {
        res.status(404).json(content);
    };

    res.serverError = (content: any) => {
        res.status(500).json(content);
    };

    res.badRequest = (content: any) => {
        res.status(400).json(content);
    };

    next();
};