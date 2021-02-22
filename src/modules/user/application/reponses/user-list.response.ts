import { IResponse } from "../../../../shared/application/IResponse";
import { User } from "../../domain/user";

export interface UserListResponse extends IResponse {
    data: User[];
}
