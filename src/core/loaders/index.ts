import 'reflect-metadata';
import server from './server';
import database from './database';
import { Application } from 'express';

export default async (app: Application) => {
    const connection = await database();
    console.log('DB loaded and connected!');

    await server(app);
    console.log('Server loaded!');
};