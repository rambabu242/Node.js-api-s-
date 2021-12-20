import {
	Request, Response
} from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {
	deleteUser, getUser, insertUsers, updateUser 
} from '../services/user.services';
import { User } from '../entity/User';
import { token } from 'morgan';

// user register function
export async function Register(req: Request, res: Response) {
	// get inputparam from body
	const {
		firstName, lastName, phoneNumber, email, password 
	} = req.body;
	//generate salt and hashing the password by using bcrypt

	// validated the input params
	if (firstName === ' ' && firstName === null) {
		res.send('Please fill firstname');
		return; 
	} else if (lastName === ' ' && lastName === null) {
		res.send('Please fill lastname');
		return;
	} else if (email === ' ' && email === null) {
		res.send('Please fill email');
		return;
	} else if (phoneNumber === ' ' && phoneNumber === null) {
		res.send('Please fill phoneNumber');
		return;
	} else if (password === ' ' && password === null) {
		res.send('Please fill password');
		return;
	}
	//    next();
	const salt = await bcrypt.genSalt();
	const hashedPassword = await bcrypt.hash(password, salt);
	const rows: User | undefined = await getUser(email);
	console.log(rows);
	if (rows) {
		return res.send({
			code: 406,
			user_message: 'Already user exists with this email',
		});
	} else {
		// try{
		const results: User = await insertUsers(firstName, lastName, phoneNumber, email, hashedPassword);
		if (results) {
			res.send({
				code: 200,
				user_message: 'Registred successfully'
			});
		} else {
			res.send({
				code: 500,
				user_message: 'erors occured'
			});
		}

	}

}
// user login function
export async function Login(req: Request, res: Response) {
	//get input params from body
	const { email, password } = req.body;
	// validate inputparams
	if (email === ' ' && email === null) {
		res.send('Please fill email');
		return;
	} else if (password === ' ' && password === null) {
		res.send('Please fill password');
		return;
	}
	// mysqlConnection.query(`SELECT * FROM userDetails WHERE email="${email}"`, async (errs: any, rows: any) => {
	const rows: User | undefined = await getUser(email);
	console.log(rows)
	if (rows !== undefined) {
		// if condition success compare passwords
		bcrypt.compare(password, rows.password, (errs: Error | undefined, results: boolean) => {
			// if passwore is not macth throw errs   
			if (errs) {
				res.send({
					code: 400,
					user_message: errs
				});
				return;
			} else if (results) {
				//create a token with the email in the pay load
				//and the token expries which mentioned some particular time and or after issue
				const token = jwt.sign({ email: email }, 'the-super-strong-secret', { expiresIn: '3hr' })
				// if it login success send response with token
				res.send({
					code: 200,
					user_message: 'login successful',
					token: token,
					user: {
						firstName: rows.firstName,
						lastName: rows.lastName,
						email: rows.email,
						phoneNumber: rows.phoneNumber
					}
				});
				return;
			}
			// if login failed send else response
			else {
				res.send({
					code: 400,
					user_message: 'Password is Incorrect!!'
				});
				return;
			}
		})
		// if condition fails then send else response 
	} else {
		return res.send({
			code: 400,
			user_message: 'Please check your credintials'
		});
	}
}
// user update function
export const Update = async (req: Request, res: Response) => {
	// // get input params from body
	const {
		firstName, lastName, phoneNumber, email 
	} = req.body;
	if (firstName === ' ' && firstName === null) {
		res.send('Please fill firstname');
		return;
	} else if (lastName === ' ' && lastName === null) {
		res.send('Please fill lastname');
		return;
	} else if (phoneNumber === ' ' && phoneNumber === null) {
		res.send('please fill phoneNumber');
		return;
	}
	else if (email === ' ' && email === null) {
		res.send('please fill email');
		return;
	}
	const updatedData = {
		firstName,
		lastName,
		phoneNumber,
		email
	}
	const rows: User | undefined = await getUser(email);
	console.log(rows);
	if (rows == undefined) {
		res.send({
			code: 400,
			user_message: 'errors occured'
		});
		return;
	}
	else {
		const results: boolean = await updateUser(firstName, lastName, phoneNumber, email);
		console.log(results);
		if (results) {
			res.send({
				code: 200,
				user_message: 'updated successfully',
				updatedData: updatedData
			});
		}
		else {
			res.send({
				code: 400,
				user_message: 'errors occured'
			});
		}
		return;
	}
}
// delete user function
export const Delete = async (req: Request, res: Response) => {
	const { email } = req.body;
	const rows: User | undefined = await getUser(email);
	console.log(rows);
	if (rows == undefined) {
		res.send({
			code: 400,
			user_message: 'user not exists'
		});
		return;
	} else {
		const results: boolean = await deleteUser(email);
		if (results) {
			res.send({
				code: 200,
				user_message: 'deleted successfully'
			});
		} else {
			res.send({
				code: 400,
				user_message: 'errors occured'
			});
		}
		return;
	}
}

export async function GetUser(req: Request, res: Response) {
	const{
		firstName, lastName, phoneNumber, email 
	} = req.body;
	
	const rows: User | undefined = await getUser(email);
	console.log(rows);
	if (rows == undefined) {
		res.send({
			code: 400,
			user_message: 'errors occured'
		});
		return;
	}else {
		res.send({
			code: 200,
			user_message: 'getuser successfully',
			userData: rows
		})
	}

}