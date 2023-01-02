import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { RestAPIService } from "../share/rest-api.service";
import { User } from "./user.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn:"root"
})

export class UserResolverService implements Resolve<User[]>{

    constructor(private apiRest: RestAPIService){}

    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): User[] | Observable<User[]>{

      return  this.apiRest.getUserList();
    }
}