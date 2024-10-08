import { Component, Input } from "@angular/core";
import { Property } from "../interface";
import { IPropertyBase } from "../../models/iPropertybase";

@Component({
    selector: 'app-property-card',
    templateUrl:'property-card.component.html',
    styleUrl: 'property-card.component.scss'
})
export class PropertCardComponent {
    //String interpolition always returns value as string and data always flow in one direction
    //from component to html element
    @Input () propert_name : IPropertyBase | undefined;
    @Input() hideIcons: boolean;

}