declare namespace Express {
    interface Request {
        userId: string;
    }

    interface Response {
        success: (content: any) => void;
        notFound: (content: any) => void;
        serverError: (content: any) => void;
        badRequest: (content: any) => void;
    }
}