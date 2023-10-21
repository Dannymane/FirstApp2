import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation2.photo" alt="Exterior photo of {{housingLocation2.name}}">
    <h2 class="listing-heading">{{ housingLocation2.name }}</h2>
    <p class="listing-location">{{ housingLocation2.city}}, {{housingLocation2.state }}</p>
  </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation2!: HousingLocation;
}