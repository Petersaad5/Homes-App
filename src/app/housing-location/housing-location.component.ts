import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousingLocation} from '../housing-location';
import { RouterModule } from '@angular/router'; //importing router config should be done in the file where the href is used 

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
    <section class ="listing">
      <img class = "listing-photo" [src] = "housingLocation.photo" alt = "Exterior photo of {{housingLocation.name}}">
      <h2 class = "listing-heading">{{housingLocation.name}}</h2>
      <p class = "listing-location">{{housingLocation.city}},{{housingLocation.state}}</p>
      <a [routerLink]="['details',housingLocation.id]">Learn More</a> <!-- putting [] makes the router link dynamic always this syntax  --> 
    </section>
  
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation !: HousingLocation;
}
