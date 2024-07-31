import statusFunctions from '../shared/middlewares/StatusFunctions'
import cors from 'cors'
import ApiRoute from '../routes/ApiRoute'
import { Application, json } from 'express'

export default async (app: Application) => {
    app.use(cors())
    app.use(json())
    app.use(statusFunctions)

    ApiRoute(app)
}