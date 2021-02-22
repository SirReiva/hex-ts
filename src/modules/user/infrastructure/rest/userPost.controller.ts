import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
    BaseHttpController,
    controller,
    httpPost,
    request,
    response,
} from "inversify-express-utils";
import { RegisterUserCommand } from "../../application/commands/register-user.command";
import { RegisterUserUseCase } from "../../application/use-cases/register-user.usecas";

@controller("/users")
export class UserPostController extends BaseHttpController {
    constructor(private readonly registerUserUseCase: RegisterUserUseCase) {
        super();
    }

    @httpPost("")
    getUser(@request() req: Request, @response() res: Response) {
        try {
            const command = new RegisterUserCommand(
                Math.random().toString(),
                req.body.name,
                req.body.email
            );
            this.registerUserUseCase.execute(command);
            return res.status(StatusCodes.CREATED).send();
        } catch (error) {}
    }
}
