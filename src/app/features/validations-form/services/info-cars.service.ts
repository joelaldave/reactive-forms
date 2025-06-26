import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export interface CarBrand {
  id: number;
  name: string;
}

export interface CarModel {
  id: number;
  name: string;
}

const carBrands: CarBrand[] = [
  { id: 1, name: 'Toyota' },
  { id: 2, name: 'Honda' },
  { id: 3, name: 'Ford' },
  { id: 4, name: 'Chevrolet' },
  { id: 5, name: 'Nissan' }
];

const carModels: Record<number, CarModel[]> = {
  1: [
    { id: 1, name: 'Corolla' },
    { id: 2, name: 'Camry' },
    { id: 3, name: 'RAV4' }
  ],
  2: [
    { id: 4, name: 'Civic' },
    { id: 5, name: 'Accord' },
    { id: 6, name: 'CR-V' }
  ],
  3: [
    { id: 7, name: 'Focus' },
    { id: 8, name: 'Mustang' },
    { id: 9, name: 'Explorer' }
  ],
  4: [
    { id: 10, name: 'Malibu' },
    { id: 11, name: 'Impala' },
    { id: 12, name: 'Equinox' }
  ],
  5: [
    { id: 13, name: 'Altima' },
    { id: 14, name: 'Sentra' },
    { id: 15, name: 'Rogue' }
  ]
};

@Injectable({
  providedIn: 'root'
})
export class InfoCarsService {

  getBrands(): Observable<CarBrand[]> {
    return of<CarBrand[]>(carBrands).pipe(
      // Simula una llamada a una API con un retraso de 1 segundo
      delay(2000)
    );
  }

  getModelsByBrand(brandId: number): Observable<CarModel[]> {

    const models: Record<number, CarModel[]> = carModels;

    return of(models[brandId] || []).pipe(
      // Simula una llamada a una API con un retraso de 1 segundo
      delay(2000)
    );
  }

}
