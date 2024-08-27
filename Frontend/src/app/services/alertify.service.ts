import { Injectable } from '@angular/core';
import * as alertifyjs from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
error(arg0: string) {
  throw new Error('Method not implemented.');
}

constructor() { }

sucess(message:string) {
    alertifyjs.success(message);
}
warning(message:string) {
  alertifyjs.error(message);
}

}
