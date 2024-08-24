import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { PropertCardComponent } from "./property/property-card/property-card.component";
import { BrowserModule } from "@angular/platform-browser";
import { PropertyListComponent } from "./property/property-list/property-list.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
    declarations: [	
        AppComponent,
        PropertCardComponent,
        PropertyListComponent,
      NavBarComponent
   ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}