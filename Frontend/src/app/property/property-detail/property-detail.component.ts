import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit, OnChanges {

  public propertyId: number;

  constructor(
    private activeRoute : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
    this.propertyId = +this.activeRoute.snapshot.params['id'];
    this.activeRoute.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
      }
    )
  }

  ngOnChanges(changes: SimpleChanges) {
    this.activeRoute.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
      }
    )
  }

  onSelectNext() {
    this.propertyId += 1;
    //Navigate methhod always acts as an absolute path whether we add to it slash or not
    // In order to make it as a relative path we add one more parameter where we pass javaScript object
    // this.router.navigate(['property-detail',this.propertyId], {relativeTo : this.activeRoute})
    this.router.navigate(['property-detail',this.propertyId])
  }

}
