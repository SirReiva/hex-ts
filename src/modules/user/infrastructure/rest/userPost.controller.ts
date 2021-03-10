import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
	BaseHttpController,
	controller,
	httpPost,
	request,
	response,
} from 'inversify-express-utils';
import { CommandBus } from '../../../../shared/cqrs/CommandBus';
import { RegisterUserCommand } from '../../application/commands/register-user.command';

@controller('/users')
export class UserPostController extends BaseHttpController {
	constructor(private readonly commandBus: CommandBus) {
		super();
	}

	@httpPost('')
	getUser(@request() req: Request, @response() res: Response) {
		const command = new RegisterUserCommand(
			Math.random().toString(),
			req.body.name,
			req.body.email
		);
		this.commandBus.execute(command);
		return res.status(StatusCodes.CREATED).send();
	}
}
