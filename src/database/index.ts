import "reflect-metadata"
import "dotenv/config"
import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: process.env.DATABASE_TYPE as any,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + '/../entities/*.ts'],
    migrations: [__dirname + '/../migrations/*.ts'],
        
});

AppDataSource.initialize()
    .then(() => {
        console.log("DB has been initialized!")
    })
    .catch((err) => {
        console.error("Error during DB initialization", err)
    });

export { AppDataSource };