import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

export function autenticacaoUsuario(req: Request, res: Response, next: NextFunction) {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json({ 
                message: 'Unauthorized' 
            });
        }

        const token = authorization.replace('Bearer', '').trim();
    
        const data = jwt.verify(token, 'secret'),
            {userId} = data as { userId: string };

        if (!userId) {
            return res.status(401).json({ 
                message: 'Unauthorized' 
            });
        }

        req.userId = userId;
        
        return next();
    } catch(error) {
        return res.status(401).json({ 
            message: 'Unauthorized' 
        });
    }
}

export function autenticacaoPrestador(req: Request, res: Response, next: NextFunction) {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json({ 
                message: 'Unauthorized' 
            });
        }

        const token = authorization.replace('Bearer', '').trim();
    
        const data = jwt.verify(token, 'secret'),
            {prestadorId} = data as { prestadorId: string };

        if (!prestadorId) {
            return res.status(401).json({ 
                message: 'Unauthorized' 
            });
        }

        req.prestadorId = prestadorId;
        
        return next();
    } catch(error) {
        return res.status(401).json({ 
            message: 'Unauthorized' 
        });
    }
}