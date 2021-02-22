import { IResponse } from "../../../../shared/application/IResponse";
import { User } from "../../domain/user";

export interface UserResponse extends IResponse {
    data: User;
}
