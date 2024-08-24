import { Component } from "@angular/core";

@Component({
    selector: 'app-property-card',
    templateUrl:'property-card.component.html',
    styleUrl: 'property-card.component.scss'
})
export class PropertCardComponent {
    //String interpolition always returns value as string and data always flow in one direction
    //from component to html element
    property : any = {
        "Id" : 1,
        "Name" : "Birla House",
        "Type" : "House",
        "Price" : 12000
    }

}