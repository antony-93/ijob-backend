import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
  const connectionOptions = await getConnectionOptions()

  const connection = await createConnection(connectionOptions);

  return connection;
};