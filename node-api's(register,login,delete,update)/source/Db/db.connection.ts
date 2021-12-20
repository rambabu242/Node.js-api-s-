import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from '../entity/User';



// dotenv.config();
// create my sql database connection
// let mysqlConnection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE
// })
// mysqlConnection.connect((err)=> {
//     if(!err) {
//         console.log("Db Connecton succeed");

//     }else {
//         console.log("Db Connecton Failed")
//     }
// });

// export default mysqlConnection;
const connection = createConnection({
	type:'postgres',
	host:'localhost',
	port:4000,
	username:'ram',
	password:'Passw0rd',
	database:'ram_nodeapi',
	entities: [
		User
	],
	synchronize: true,
	logging: true
})
connection.then(connected => {
	console.log('Db Connected');
}).catch (error => console.log(error));

export default connection;
