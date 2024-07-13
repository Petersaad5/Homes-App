import { Component , inject } from '@angular/core'; // importing inject to grab info from url (id in our case)
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; //  ActivateRoute is the route grabbed from url

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{housingLocationId}}
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute  = inject(ActivatedRoute); //injecting the route 
  housingLocationId = 0;

  constructor() {
    this.housingLocationId = Number (this.route.snapshot.params['id']); //grabbing the id from the url
  }
}
