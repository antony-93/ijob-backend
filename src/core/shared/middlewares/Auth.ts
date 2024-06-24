import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

export default function auth(req: Request, res: Response, next: NextFunction) {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json({ 
                message: 'Unauthorized' 
            });
        }

        const token = authorization.replace('Bearer', '').trim();
    
        const data = jwt.verify(token, 'secret'),
            {id} = data as { id: string };

        req.userId = id;
        
        return next();
    } catch(error) {
        return res.status(401).json({ 
            message: 'Unauthorized' 
        });
    }
}