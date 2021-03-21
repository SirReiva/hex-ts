import { Request, Response } from 'express';
import {
	BaseHttpController,
	controller,
	httpGet,
	request,
	response,
} from 'inversify-express-utils';
import { QueryBus } from '../../../../shared/cqrs/QueryBus';
import { FindAllUserQuery } from '../../application/queries/findAll-user.query';

@controller('/users')
export class UserGetAllController extends BaseHttpController {
	constructor(private readonly queryBus: QueryBus) {
		super();
	}

	/**
	 * @openapi
	 * /api/v1/users:
	 *   get:
	 *     description: Welcome to swagger-jsdoc!
	 *     responses:
	 *       200:
	 *         description: Returns a mysterious string.
	 */
	@httpGet('')
	async getUser(@request() req: Request, @response() res: Response) {
		const query = new FindAllUserQuery();
		const userResponse = await this.queryBus.execute(query);
		return this.json({
			...userResponse,
			count: userResponse.data.length,
		});
	}
}
