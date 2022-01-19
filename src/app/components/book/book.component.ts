import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  birthDate:any = "";
  fromDate:any="";
  toDate:any="";

  countryFrom:any="";
  countryTo:any="";
  dateFrom:any;
  dateTo:any;
  data:any;
  bookData={
    firstName:"",
    lastName:"",
    birthDate:"",
    phone:"",
    email:"",
    street:"",
    city:"",
    state:"",
    departure:"",
    return:"",
    departingFrom:"",
    destination:""
  }


  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: any) => {
        console.log("prams",params);
        this.data = params;
        this.bookData.departingFrom = params.from;
        this.bookData.destination = params.to;
        this.bookData.departure = String(new Date(params.dates[0].slice(0,15)));
        this.bookData.return = String(new Date(params.dates[1].slice(0,15)));
      }
    )
  }

  onSubmit(f:NgForm){
    this.router.navigate(["../"])
  }

}
