import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimePeriodService } from './timePeriod.service';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class HeroService {
    private apiEndPoint = environment.apiUrl

    constructor(private http: HttpClient, private tp: TimePeriodService) {}

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

    createHero({year, month, name, win_rate, total_talishar_plays, url, password}: {year: number, month: string, name: string, win_rate: number, total_talishar_plays: number, url: string, password: string}){
      const timePeriodQuery = `
        query($month: String!, $year: Float!) {
          time_period(month: $month, year: $year) {
            id
          }
        }
      `
      const query = `
        mutation($data: HeroInput!){
          createHero(data: $data) {
            id,
            win_rate,
            total_talishar_plays
            hero_details {
              name,
              url
            }
          }
        }
      `
      const timePeriodVariables = {month, year}
      return this.http.post(this.apiEndPoint, { query: timePeriodQuery, variables: timePeriodVariables }).pipe(
        switchMap((result: any) => {
          const timePeriodId = +result?.data?.time_period?.id;
          const variables = {
            data: {
              name: name ?? '',
              win_rate: win_rate ?? 0,
              total_talishar_plays: total_talishar_plays ?? 0,
              id_time_period: timePeriodId ?? 0,
              url: url ?? null,
              password
            }
          };
          return this.http.post(this.apiEndPoint, {
            query,
            variables
          });
        })
      );

    };

    editHero({id, win_rate, total_talishar_plays, password}: {id: number, win_rate: number, total_talishar_plays: number, password: string}) {
      const query = `
        mutation($data: HeroUpdateInput!, $updateHeroId: Int!){
          updateHero(data: $data, id: $updateHeroId) {
            id,
            win_rate,
            total_talishar_plays,
            hero_details {
              name,
              url
            }
          }
        }
      `;
      const variables = {
        updateHeroId: id,
        data: {
          password,
          win_rate,
          total_talishar_plays
        }
      };
      return this.http.post(this.apiEndPoint, {query, variables});
    }

    deleteHero(id: number, password: string){
      const query = `
        mutation($deleteHeroId: Int!){
          deleteHero(id: $deleteHeroId) {
            id
          }
        }
      `;

      const variables = {deleteHeroId: id, password};
      return this.http.post(this.apiEndPoint, {query, variables})
    }
}
