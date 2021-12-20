import {
	Request, Response, NextFunction 
} from 'express';
import jwt from 'jsonwebtoken';

export const authentication = (req: Request, res: Response, next: NextFunction)=> {
	//check if the user has a token or ot
	if (
	  !req.headers.authorization ||
      !req.headers.authorization.startsWith('Bearer') ||
      !req.headers.authorization.split(' ')[1]
	) {
		res.status(422).json({
			message: 'Please provide the token',
		});
		return;
	}
	else if(req.headers.authorization.split(' ')[1]){
		//get the token from the header
		const theToken = req.headers.authorization.split(' ')[1];
		//verify the token
		jwt.verify(theToken, 'the-super-strong-secret', async(err: any, payload: any) => {
			if (err) {
				res.json({ message: 'Not Authorized' });
				return;
			} else {
				req.body = Object.assign({},req.body,payload);
				// decoded = payload;
				next();
			}
		});
	}
	// next();
}