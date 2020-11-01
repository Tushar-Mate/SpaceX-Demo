import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpParams } from "@angular/common/http";
import { ProgramCardModel } from '../model/ProgramCardModel';
import {catchError, map, timeout, share, finalize} from 'rxjs/operators';
import { ApplicationConstants } from '../utils/ApplicationConstants';

@Injectable({
  providedIn: 'root'
})
export class ProgramDetailsService {

  constructor(private httpClient: HttpClient) { }

  public sendGETRequestWithParameters(metaObj){
    return this.httpClient.get<ProgramCardModel[]>(ApplicationConstants.HOST_URL, {params : this.buildParams(metaObj)})
    .pipe(
      timeout(ApplicationConstants.AJAX_TIMEOUT),
      map((data: any[]) => data.map((item: any) => new ProgramCardModel(
        item.links.mission_patch_small,
        item.mission_name,
        item.flight_number,
        item.mission_id,
        item.launch_year,
        item.launch_success,
        item.rocket.first_stage.cores[0].land_success
      ))),
  );;
  }

  getFilters (filters) {
    let defaultFilter = {
      limit :  "100",
    };
    for (const key in filters) {
      if (Object.prototype.hasOwnProperty.call(filters, key)) {
        if (filters[key] === null || filters[key] === undefined) {
          delete filters[key];
        }
      }
    }
    let filter = {...defaultFilter, ...filters};
    return filter;
  }

  buildParams(metaObj : any) : HttpParams{
    let filters = this.getFilters(metaObj);
    return new HttpParams({fromObject : filters});
  }
}
