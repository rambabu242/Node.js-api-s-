import connection from '../Db/db.connection';
import { User } from '../entity/User';
// const util = require("util");
//import util from 'util';

// create getUser function for getting user through email
export async function getUser(email: string) {
    
	const userRepository = (await connection).getRepository(User);
	return userRepository.findOne({
		email: email,
		isArcheived: 0
	});
}
// create insertUsers functions and insert userDetails
export async function insertUsers(firstName:string,lastName:string,phoneNumber:string,email:string,password:string) {
   
	const userRepository = (await connection).getRepository(User);
	const user = new User();
	user.firstName = firstName;
	user.lastName = lastName;
	user.phoneNumber = phoneNumber;
	user.email = email;
	user.password = password;

	return await userRepository.save(user);

}
//create loginuser function for login user
// export async function loginUser(email: string) {
  
//     let userRepository = (await connection).getRepository(User);
//     return userRepository.findOne({email, isArcheived: 0});
// }
// create selectUser function for check with email property if it exists the upadate user
// export async function selectUser(email:string) {
 
//     let userRepository = (await connection).getRepository(User);
//     return userRepository.findOne({email: email, isArcheived: 0});
// }
// create updateUser function update user details
export async function updateUser(firstName:string,lastName:string,phoneNumber:string,email:string) {

	const userRepository = (await connection).getRepository(User);
	const userToUpdate: any = await userRepository.findOne({
		email, 
		isArcheived: 0
	});
	userToUpdate.firstName = firstName;
	userToUpdate.lastName = lastName;
	userToUpdate.phoneNumber= phoneNumber;
	userToUpdate.email= email;
	return await userRepository.save(userToUpdate);

}
// delete user 
export async function deleteUser(email: string) {

	const userRepository = (await connection).getRepository(User);
	const userToDelete: any = await userRepository.findOne({
		email, 
		isArcheived: 0
	});
	userToDelete.isArcheived = 1;
	return await userRepository.save(userToDelete);
}
// export async function getApi(email:string) {
	
// }