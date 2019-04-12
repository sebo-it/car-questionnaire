import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vote } from './vote';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  private baseURL: string = environment.MLAB_BASE_URL;
  private apiKey: string = environment.MLAB_API_KEY;

  constructor(private _http: HttpClient) { }

  getVotes(): Observable<Vote[]> {
    return this._http.get<Vote[]>(this.baseURL + 'databases/prosta-ankieta/collections/results?apiKey=' + this.apiKey);
  }

  putVote(choose: string): Observable<Vote>{
    let voteToUpdate: Vote;

    return this.getVotes().pipe(
      map( results => results.filter( r => r.name === choose) ),
      switchMap(
      result => {

        voteToUpdate = result[0];
        voteToUpdate.count += 1;

        return this._http.put<Vote>(this.baseURL + 'databases/prosta-ankieta/collections/results/'+ voteToUpdate._id.$oid + '?apiKey=' + this.apiKey, voteToUpdate);
      }
    ))
  }

}
