import { Injectable } from "@angular/core";
import { RestService } from './rest.service';

@Injectable()
export class AuthService{
   
    constructor(private restService:RestService) {

        
    }

    authenticate(username:string,password:string)
    {
        return this.restService.authentication(username,password);
    }

    get authenticated():boolean{
        return this.restService.token!=null;
    }
    clear(){
        this.restService.token=null;
    }
}