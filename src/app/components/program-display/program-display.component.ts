import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProgramCardModel } from 'src/app/model/ProgramCardModel';
import { ProgramDetailsService } from '../../services/program-details.service';

@Component({
  selector: 'app-program-display',
  templateUrl: './program-display.component.html',
  styleUrls: ['./program-display.component.scss']
})
export class ProgramDisplayComponent implements OnInit,OnDestroy {
  programDetailsArray:ProgramCardModel[];
  launchYear:string;
  launchSuccess:string;
  landSuccess:string;
  routeSub:Subscription;
  serviceSub:Subscription;
  filtersObj:any;
  constructor(private programDetailsService:ProgramDetailsService,private Activatedroute:ActivatedRoute) { 
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
              this.callAPIService();
            });
  }

  ngOnInit(): void {
    this.callAPIService();
  }

  callAPIService(){
    this.serviceSub=this.programDetailsService.sendGETRequestWithParameters(this.filtersObj).subscribe(response=>{
      if(response && response.length){
        this.programDetailsArray=response;
      }
      else{
        this.programDetailsArray=[];
      }
    })
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe();
    this.serviceSub.unsubscribe();
  }

}
