import { Request, Response } from 'express';
import {
	BaseHttpController,
	controller,
	httpGet,
	request,
	response,
} from 'inversify-express-utils';
import { QueryBus } from '../../../../shared/cqrs/QueryBus';
import { FindUserQuery } from '../../application/queries/find-user.query';

@controller('/users')
export class UserGetController extends BaseHttpController {
	constructor(private readonly queryBus: QueryBus) {
		super();
	}

	@httpGet('/:id')
	async getUser(@request() req: Request, @response() res: Response) {
		try {
			const query = new FindUserQuery(req.params.id);
			const userResponse = await this.queryBus.execute(query);
			return this.json(userResponse);
		} catch (error) {
			return this.notFound();
		}
	}
}
