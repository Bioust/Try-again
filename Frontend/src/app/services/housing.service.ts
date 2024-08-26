import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Property } from '../property/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(
    private http:HttpClient
  ) { }

  getAllProperties(sellRent : number) : Observable<Property[]> {
    return this.http.get<{ [key: string]: Property }>('data/properties.json').pipe(
      map (data => {
        const propertiesArray : Array<any> = [];
        for (const id in data) {
          if(data[id].SellRent === sellRent) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}
