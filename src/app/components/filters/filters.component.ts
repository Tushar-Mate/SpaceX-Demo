import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as data from '../../../assets/data/filter.json';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit,OnDestroy {
  filtersData:any;
  filterQueryObj:any={};
  selectedFilter:any=[];
  launchYear:string;
  launchSuccess:string;
  filtersObj:any;
  landSuccess:string;
  routeSub:Subscription;
  constructor(private Activatedroute:ActivatedRoute,
    private router:Router) {
      this.routeSub = this.Activatedroute.queryParamMap
        .subscribe(params => {
              this.launchYear = params.get('launch_year');  
              this.launchSuccess = params.get('launch_success');
              this.landSuccess = params.get('land_success');
              this.filtersObj={
                "launch_year" : this.launchYear,
                "launch_success" : this.launchSuccess,
                "land_success" : this.landSuccess
              }
              for (const key in this.filtersObj) {
                if (Object.prototype.hasOwnProperty.call(this.filtersObj, key)) {
                  if (this.filtersObj[key] === null || this.filtersObj[key] === undefined) {
                    delete this.filtersObj[key];
                  }
                  else {
                    var index = this.selectedFilter.findIndex(it => it.text === key);
                      if (index === -1) {
                        this.selectedFilter.push({"option" : this.filtersObj[key] , "text" : key});
                      } else {
                        this.selectedFilter[index] = {"option" : this.filtersObj[key] , "text" : key};
                      }
                    let queryStr=this.selectedFilter[index==-1 ? 0 : index ]['text'];
                    let queryVal=this.selectedFilter[index==-1 ? 0 : index ]['option'];
                    let queryObj = { [queryStr]: queryVal };
                    queryObj = {...this.filterQueryObj,...queryObj};
                    this.filterQueryObj=queryObj;
                }
              }
            }});
     }

  ngOnInit(): void {
    this.filtersData=data['default'].data;
  }

  highlightSelected(optionObj){
    var contains = this.selectedFilter.some(elem =>{
      return JSON.stringify(optionObj) === JSON.stringify(elem);
    });
    return contains;
  }

  onFilterClick(filterObj){
    var index = this.selectedFilter.findIndex(it => it.text === filterObj.text);
    if (index === -1) {
      this.selectedFilter.push(filterObj);
    } else {
      this.selectedFilter[index] = filterObj;
    }
    let queryStr=filterObj['text'];
    let queryVal=filterObj['option'];
    let queryObj = { [queryStr]: queryVal };
    queryObj = {...this.filterQueryObj,...queryObj};
    this.filterQueryObj=queryObj;
    this.router.navigate(['/landing'], { queryParams: queryObj }); 
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }
}
