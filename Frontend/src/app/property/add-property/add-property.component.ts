import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') propertyViewForm: NgForm;
  @ViewChild('formTabSet') formTabSet?: TabsetComponent;

  propertyTypes : Array<string> = ['House','Apartment','Duplex'];
  furnishTypes : Array<string> = ['Semi','Fully','Unfurnished'];
  direction : Array<string> = ['East','West','North','South'];

  constructor(
    private route:Router
  ) { }

  ngOnInit() {
  }

  selectTab(tabId: number) {
    if (this.formTabSet?.tabs[tabId]) {
      this.formTabSet.tabs[tabId].active = true;
    }
  }

  onSubmit(Form: NgForm) {
    console.log(Form)

  }

}
