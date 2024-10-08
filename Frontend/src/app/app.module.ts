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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserService } from './services/user.service';
import { AlertifyService } from './services/alertify.service';
import { AuthenticationService } from './services/authentication.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PropertyDetailsResolverService } from './property/property-detail/property-details-resolver.service';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

const routes: Routes = [
    {path: '', component: PropertyListComponent},
    { path: 'rent-property', component: PropertyListComponent},
    { path: 'property-detail/:id', component: PropertyDetailComponent, resolve: {prp: PropertyDetailsResolverService}},
    { path: 'add-property', component: AddPropertyComponent},
    { path: 'user/login', component: UserLoginComponent},
    { path: 'user/register', component: UserRegisterComponent},
    { path: '**', component: PropertyListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PropertCardComponent,
    PropertyListComponent,
    NavBarComponent,
    PropertyDetailComponent,
    AddPropertyComponent,
    UserLoginComponent,
    UserRegisterComponent,
    SortPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(routes),
    NgxGalleryModule
],
  providers: [
    HousingService,
    UserService,
    AlertifyService,
    AuthenticationService,
    PropertyDetailsResolverService
],
  bootstrap: [
    AppComponent
],
})
export class AppModule {}
