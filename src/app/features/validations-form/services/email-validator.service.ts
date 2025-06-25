import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService {

  checkEmail(email: string): Observable<boolean> {
    const forbiddenEmails = ['test@test.com', 'test1@test.com'];
    // Simula una petición HTTP con un retraso de 1 segundo
    // y verifica si el email está en la lista de correos prohibidos
    // devuelve un observable que emite true si el email es permitido y false si no lo es
    return of(email).pipe(
      delay(1000),
      map(value => forbiddenEmails.includes(value) ? false : true)
    );
  }
}
