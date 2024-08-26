import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PropertCardComponent } from './property/property-card/property-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './services/housing.service';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {path: '', component: PropertyListComponent},
    { path: 'rent-property', component: PropertyListComponent},
    { path: 'property-detail/:id', component: PropertyDetailComponent},
    { path: 'add-property', component: AddPropertyComponent},
    { path: '**', component: PropertyListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PropertCardComponent,
    PropertyListComponent,
    NavBarComponent,
    PropertyDetailComponent,
    AddPropertyComponent 
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
],
  providers: [
    HousingService
],
  bootstrap: [
    AppComponent
],
})
export class AppModule {}
