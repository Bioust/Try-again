import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { Property } from '../interface';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from '../../models/iPropertybase';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.scss',
})
export class PropertyListComponent implements OnInit {
  properties: Array<IPropertyBase> = [];
  sellRent : Number = 1;
  Today = new Date();
  City = '';
  SearchCity = '';
  SortbyParam = '';
  SortDirection = 'asc';

  constructor(
    private activatedRoute: ActivatedRoute,
    private housingService: HousingService
  ) {

  }

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.url.toString()) {
      this.sellRent = 2;
    }
    this.housingService.getAllProperties(+this.sellRent).subscribe(
      res=> {
        this.properties = res;
        // const localStorageData = localStorage.getItem('newProp');
        // if(localStorageData) {
        //   const newProperty = JSON.parse(localStorageData);
        //   if(newProperty.SellRent === this.sellRent) {
        //     this.properties = [newProperty, ...this.properties];
        //   }
        // }
      }, error => {
        console.log(error)
      }
    )
  }

  onCityFilter() {
    this.SearchCity = this.City;
  }

  onCityFilterClear() {
    this.SearchCity = '';
    this.City = '';
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }
}
