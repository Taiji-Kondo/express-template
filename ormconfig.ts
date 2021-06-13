import dotenv from 'dotenv'
dotenv.config()

export default [
  {
    name: 'default',
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    synchronize: false,
    logging: false,
    entities: ['src/models/**/*.ts'],
    migrations: ['src/database/migrations/**/*.ts'],
    subscribers: ['src/database/subscribers/**/*.ts'],
    cli: {
      entitiesDir: 'src/models',
      migrationsDir: 'src/database/migrations',
      subscribersDir: 'src/database/subscribers',
    },
  },
]
