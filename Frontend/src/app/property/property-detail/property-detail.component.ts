import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { Property } from '../../models/property';
import { IPropertyBase } from '../../models/iPropertybase';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit, OnChanges {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  public propertyId: number;
  property = new Property();

  constructor(
    private activeRoute : ActivatedRoute,
    private router : Router,
    private housingService : HousingService
  ) { }

  ngOnInit() {
    this.propertyId = +this.activeRoute.snapshot.params['id'];
    this.activeRoute.data.subscribe(
      data => {
        if(data) {
          this.property = data['prp'] as Property;
        }
      }
    )
    // this.activeRoute.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id'];
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       (data: IPropertyBase | undefined) => {
    //         if(data) {
    //           this.property = data as Property;
    //         }
    //       }, error => (this.router.navigate(['/']))
    //     );
    //   }
    // )
    this.galleryOptions = [
      {
        width: '100%',
        height: '474px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      // {
      //   breakpoint: 800,
      //   width: '100%',
      //   height: '600px',
      //   imagePercent: 80,
      //   thumbnailsPercent: 20,
      //   thumbnailsMargin: 20,
      //   thumbnailMargin: 20
      // },
      // max-width 400
      // {
      //   breakpoint: 400,
      //   preview: false
      // }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/1-small.jpeg',
        medium: 'assets/images/1-small.jpeg',
        big: 'assets/images/1-small.jpeg'
      },
      {
        small: 'assets/images/2-small.jpeg',
        medium: 'assets/images/2-small.jpeg',
        big: 'assets/images/2-small.jpeg'
      },
      {
        small: 'assets/images/1-meadium.jpeg',
        medium: 'assets/images/1-meadium.jpeg',
        big: 'assets/images/1-meadium.jpeg'
      },{
        small: 'assets/images/4-small.webp',
        medium: 'assets/images/4-small.webp',
        big: 'assets/images/4-small.webp'
      },
      {
        small: 'assets/images/3-small.webp',
        medium: 'assets/images/3-small.webp',
        big: 'assets/images/3-small.webp'
      }
    ];
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
