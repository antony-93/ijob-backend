import statusFunctions from '../shared/middlewares/StatusFunctions'
import ApiRoute from '../routes/ApiRoute'
import { Application, json } from 'express'

export default async (app: Application) => {
    app.use(json())
    app.use(statusFunctions)

    ApiRoute(app)
}