import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  public user: any;
  constructor(private base: BaseService) {
    super(base.http);
  }

  public createUser(userObj: any) {
    return this.base.postReq('http://localhost:3000/users', userObj);
  }

  public getEmail(email: any) {
    return this.base.getReq('http://localhost:3000/users?email=' + email);
  }
}
