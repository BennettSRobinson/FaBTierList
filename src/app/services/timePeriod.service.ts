import { Injectable, signal } from '@angular/core';
import { AppSettings, defaults } from '../config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TimePeriodService {
    private apiEndPoint = 'http://localhost:4000/graphql'

    constructor (private http: HttpClient){}

    getTimePeriodId(year: number, month: string): Observable<any>{
      const query = `
        query($month: String!, $year: Float!) {
          time_period(month: $month, year: $year) {
            id
          }
        }
      `;
      const variables = {year, month};

      return this.http.post(this.apiEndPoint, {query, variables});
    }
}
