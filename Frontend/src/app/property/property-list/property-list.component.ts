import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { Property } from '../interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.scss',
})
export class PropertyListComponent implements OnInit {
  properties: Array<Property> = [];
  sellRent : Number = 1;

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
      }, error => {
        console.log(error)
      }
    )
  }
}
