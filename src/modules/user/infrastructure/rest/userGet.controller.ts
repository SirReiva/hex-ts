import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
    BaseHttpController,
    controller,
    httpGet,
    request,
    response,
} from "inversify-express-utils";
import { FindUserQuery } from "../../application/queries/find-user.query";
import { FindUserUsecase } from "../../application/use-cases/find-user.usecase";

@controller("/users")
export class UserGetController extends BaseHttpController {
    constructor(private readonly findUserUseCase: FindUserUsecase) {
        super();
    }

    @httpGet("/:id")
    getUser(@request() req: Request, @response() res: Response) {
        try {
            const query = new FindUserQuery(req.params.id);
            const userResponse = this.findUserUseCase.execute(query);
            return this.json(userResponse);
        } catch (error) {
            return this.notFound();
        }
    }
}
