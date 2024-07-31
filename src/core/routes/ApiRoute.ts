import { Application, Router } from 'express';
import MainUserRoute from '../../modules/Usuario/routes';
import MainPrestadorRoute from '../../modules/Prestador/routes';
import MainTipoServicoRouter from '../../modules/TipoServico/routes';
import MainGrupoServicoRoute from '../../modules/GrupoServico/routes';

const route = Router()

export default (app: Application) => {
    app.use('/api', route)
    
    MainUserRoute(route);
    MainPrestadorRoute(route);
    MainTipoServicoRouter(route);
    MainGrupoServicoRoute(route);
}