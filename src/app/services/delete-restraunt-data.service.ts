import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, timeout } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CardData } from '../models/carddata-model';

@Injectable({
  providedIn: 'root'
})
export class DeleteRestaurantDataService {

  serverUrl = environment.serverUrl;

  constructor(private http : HttpClient) { }

  deleteRestaurantData(payload: CardData): Observable<CardData>{
    return this.http.delete<CardData>(`${this.serverUrl}/${payload.id}`
      ).pipe(map((resp:CardData) => {
        return resp;
      }),
      timeout(20000),
      catchError((err: any) => {
        // this.openSnackBar(err.statusText, 'Ok')
        throw "err";
      })
      );
  }
  
  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open(message, action, {
  //     duration: 3000
  //   });
  // }
}




