import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';	
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
	{
		//doing this adda as route to the home page so if the url doesnt have anything we go to the home page 
		path: '',
		component: HomeComponent,
		title: 'Home page'
	},
	{
		path: 'details/:id', // adding /:id makes the route dynamic with id being the changable parameter
		component: DetailsComponent,
		title: 'Details page'
	}
	
];

export default routeConfig