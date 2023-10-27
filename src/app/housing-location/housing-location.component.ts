import { Component, Input } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterLink } from '@angular/router';     
import { RouterOutlet } from '@angular/router';   

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule,
    RouterLink,               //to make [routerLink] work
    RouterOutlet              //to make [routerLink] work
  ],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation2.photo" alt="Exterior photo of {{housingLocation2.name}}">
    <h2 class="listing-heading">{{ housingLocation2.name }}</h2>
    <p class="listing-location">{{ housingLocation2.city}}, {{housingLocation2.state }}</p>
    <a [routerLink]="['/details', housingLocation2.id]">Learn More</a>
  </section>
`,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation2!: HousingLocation;
}

//fot practicing

//   template: `
//   <section class="listing">
//   <img class="listing-photo"  alt="Exterior photo of ">
//   <h2 class="listing-heading"></h2>
//   <p class="listing-location">, </p>
//   <a >Learn More</a>
//   </section>
//   `,
