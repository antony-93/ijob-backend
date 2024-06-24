import { Application, Router } from 'express';
import MainUserRoute from '../../modules/Usuario/routes';

const route = Router()

export default (app: Application) => {
    app.use('/api', route)
    
    MainUserRoute(route);    
}