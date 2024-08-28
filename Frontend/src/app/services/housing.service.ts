import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
// import { Property } from '../property/interface';
import { Observable } from 'rxjs';
import { IPropertyBase } from '../models/iPropertybase';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(
    private http:HttpClient
  ) { }

  getProperty(id:number) {
    return this.getAllProperties().pipe(
      map(propertiesArray => {
          return propertiesArray.find(x=> x.Id === id);
      })
    );
  }

  getAllProperties(sellRent? : number) : Observable<Property[]> {
    return this.http.get<{ [key: string]: Property }>('data/properties.json').pipe(
      map (data => {
        const propertiesArray : Array<Property> = [];
        const localStorageData:any = localStorage.getItem('newProp');
        const parseData = JSON.parse(localStorageData);
        if(parseData) {
          for (const id in parseData) {
            if(sellRent) {
            if(parseData[id].SellRent == sellRent) {
              propertiesArray.push(parseData[id]);
            }
          } else {
            propertiesArray.push(parseData[id]);
          }
          }
        }
        for (const id in data) {
          if(sellRent) {
          if(data[id].SellRent === sellRent) {
            propertiesArray.push(data[id]);
          }
        } else {
          propertiesArray.push(data[id]);
        }
        }
        return propertiesArray;
      })
    );
    return this.http.get<Property[]>('data/properties.json');
  }

  addProperty(property: Property) {
    let newProp = [property];
    const ifPropExists = localStorage.getItem('newProp');
    if(ifPropExists) {
      newProp = [property, ...JSON.parse(ifPropExists)]
    }
    localStorage.setItem('newProp', JSON.stringify(newProp));

  }

  newPropId() {
    const localStorag = localStorage.getItem('PID');
    if(localStorag) {
      localStorage.setItem('PID',localStorag+1);
      const newID = localStorage.getItem('PID');
      return newID;
    } else {
      localStorage.setItem('PID','101');
      return 101;
    }
  }
}
