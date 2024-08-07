import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url="http://localhost:3000/locations"; 

  constructor() {}

  async getAllHousingLocations() : Promise<HousingLocation[]>{
    const data = await fetch(this.url); //data will get the locations from surver 
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number) : Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string){
    console.log(firstName, lastName, email);
  }
}
