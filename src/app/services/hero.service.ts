import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class HeroService {
    private apiEndPoint = 'http://localhost:4000/graphql'

    constructor(private http: HttpClient) {}

    getHeroTierList(timePeriodId: number) {
      const query = `
        query($timePeriodId: Int!){
          heroes(timePeriodId: $timePeriodId) {
            S { id, win_rate, total_talishar_plays, hero_details { name, url } }
            A { id, win_rate, total_talishar_plays, hero_details { name, url } }
            B { id, win_rate, total_talishar_plays, hero_details { name, url } }
            C { id, win_rate, total_talishar_plays, hero_details { name, url } }
            D { id, win_rate, total_talishar_plays, hero_details { name, url } }
          }
        }
      `;
      const variables = { timePeriodId };

      return this.http.post(this.apiEndPoint, { query, variables });
    }
}
