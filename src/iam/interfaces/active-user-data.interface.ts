// import { Role } from '../../users/enums/role.enum';
// import { PermissionType } from '../authorization/permission.type';

import { Role } from "src/users/enums/role.enum";

export interface ActiveUserData {
  /**
   * The "subject" of the token. The value of this property is the user ID
   * that granted this token.
   */
  sub: number;

  /**
   * The subject's (user) email.
   */
  email: string;

  role: Role;
}
