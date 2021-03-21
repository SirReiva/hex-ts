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

	/**
	 * @openapi
	 * /api/v1/users/:id:
	 *   get:
	 *     description: Welcome to swagger-jsdoc!
	 *     parameters:
	 *       - name: id
	 *         description: id of the stock to retrieve
	 *         in: path
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Returns a mysterious string.
	 */
	@httpGet('/:id')
	async getUser(@request() req: Request, @response() res: Response) {
		const query = new FindUserQuery(req.params.id);
		const userResponse = await this.queryBus.execute(query);
		return this.json(userResponse);
	}
}
