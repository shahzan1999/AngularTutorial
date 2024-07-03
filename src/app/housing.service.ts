import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  baseUrl: String;
  housingLocationList: HousingLocation[];
   constructor() { 

    this.baseUrl = 'https://angular.dev/assets/tutorials/common';
    this.housingLocationList = [
    {
      id: 0,
      name: 'Acmmmkke Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true,
    }
  ]

   }

    getAllHousingLocations(): HousingLocation[] {
      return this.housingLocationList;
    }
    getHousingLocationById(id: number): HousingLocation | undefined {
      return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
    }
}
