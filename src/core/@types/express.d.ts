declare namespace Express {
    import { IParams } from "../shared/interfaces/IParams";

    interface Request {
        userId: string;
        prestadorId: string
        defaultParams: IParams
    }

    interface Response {
        success: (content: any) => void;
        notFound: (content: any) => void;
        serverError: (content: any) => void;
        badRequest: (content: any) => void;
    }
}