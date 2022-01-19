import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  countryFrom:any="";
  countryTo:any="";
  dateFrom="";
  dateTo="";
  data:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: any) => {
        console.log("prams",params);
        this.data = params;
        this.countryFrom = params.from;
        this.countryTo = params.to;
        this.dateFrom = params.dates[0].slice(0,15);
        this.dateTo = params.dates[1].slice(0,15);
      }
    )
  }

  handleBooking(){
    this.router.navigate(['../book'],
    {relativeTo: this.route, queryParams: {...this.data}});
  }

}
