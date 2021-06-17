import { createConnection, getConnectionOptions } from 'typeorm'
import { Connection } from 'typeorm/connection/Connection'

export class Repository<T> {
  protected readonly MODEL: T
  protected constructor(model: T, private readonly connectionName = 'default') {
    this.MODEL = model
  }

  protected async createConnection(): Promise<Connection> {
    const connectionOptions = await getConnectionOptions(this.connectionName)
    return await createConnection(connectionOptions)
  }
}
