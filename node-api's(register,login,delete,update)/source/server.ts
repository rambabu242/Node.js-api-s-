import express, {
	Request, Response, NextFunction 
} from 'express';
// import { register } from 'ts-node';
// const { validationResult, check } = require('express-validator')
// import * as dotenv from "dotenv";
import { routes } from './routes/user.routes';
// import cors from 'cors';

// import { Register } from './controllers/user.controller';
// import { Login } from './controllers/user.controller';
// import { Update } from './controllers/user.controller';

// dotenv.config();
const app: any = express();
const PORT = 3000;
// const PORT = 5434;

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
// app.use(cors({
//     origin: '*',
//     methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
//     allowedHeaders: '*'
// }));
app.use(function(req: Request,res: Response, next: NextFunction) {
	res.setHeader('Access-Control-Allow-Origin', '*'),
	res.setHeader('Access-Control-Allow-Methods',['GET','POST','DELETE','UPDATE','PUT','PATCH']),
	res.setHeader('Access-Control-Allow-Headers', '*'),
	next();
})



// app.post('/register', Register);
// app.post('/login', Login);
// app.put('/update', Update)
for (let i = 0; i < routes.length; i++) {
	if(routes[i].middleware) {
		app[routes[i].verb](routes[i].path, routes[i].middleware, routes[i].handler);
	}
	else {
		app[routes[i].verb](routes[i].path, routes[i].handler);
	}
}
app.listen(PORT, ()=> {
	console.log(`Application listening on this port "${PORT}"`)
});

