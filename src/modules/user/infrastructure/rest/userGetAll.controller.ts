import { Request, Response } from "express";
import {
    BaseHttpController,
    controller,
    httpGet,
    request,
    response,
} from "inversify-express-utils";
import { FindAllUserQuery } from "../../application/queries/findAll-user.query";
import { FindAllUserUsecase } from "../../application/use-cases/findAll-user.usecase";

@controller("/users")
export class UserGetAllController extends BaseHttpController {
    constructor(private readonly findAllUserUseCase: FindAllUserUsecase) {
        super();
    }

    @httpGet("")
    getUser(@request() req: Request, @response() res: Response) {
        try {
            const query = new FindAllUserQuery();
            const userResponse = this.findAllUserUseCase.execute(query);
            return this.json({
                ...userResponse,
                count: userResponse.data.length,
            });
        } catch (error) {}
    }
}
