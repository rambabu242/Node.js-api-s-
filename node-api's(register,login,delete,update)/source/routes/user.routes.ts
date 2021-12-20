import * as controller from '../controllers/user.controller';
import * as middleware from '../middleware';

export const routes = [
	{
		verb: 'post',
		path: '/register',
		handler: controller.Register,
	},
	{
		verb: 'post',
		path: '/login',
		handler: controller.Login,
	},
	{
		verb: 'put',
		path: '/update',
		middleware: [middleware.authentication],
		handler: controller.Update,
	},
	{
		verb: 'delete',
		path: '/delete',
		middleware: [middleware.authentication],
		handler: controller.Delete,
	},
	{
		verb: 'get',
		path: '/getuser',
		middleware: [middleware.authentication],
		handler: controller.GetUser

	}
];
