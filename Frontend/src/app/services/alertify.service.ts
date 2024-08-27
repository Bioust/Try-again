import { Injectable } from '@angular/core';
import * as alertifyjs from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

sucess(message:string) {
    alertifyjs.success(message);
}
warning(message:string) {
  alertifyjs.error(message);
}

}
