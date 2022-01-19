import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceService } from './../../service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  value:any = new Date();
  todayDate = new Date();
  fromCountries:any=[];
  toCountries:any=[];
  selectedFromCountries: any;
  selectedToCountries: any;

  flightData = new FormGroup({
    to: new FormControl('', Validators.required),
    from: new FormControl('', Validators.required),
    dates: new FormControl('', Validators.required),
  });


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ServiceService: ServiceService
  ) { }


  ngOnInit(): void {
    this.ServiceService.getSlider().subscribe(
      (response: any) => {
        console.log("yasser",response)
        this.fromCountries = response.map((country:any)=>{
          return {
            label: country.name.common
          }
        })
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleFromCountry(){
    let selectedCountry = this.selectedFromCountries.label;
    this.toCountries = this.fromCountries.filter((country:any)=>{
      return country.label !== selectedCountry;
    })
    this.selectedToCountries = "";
  }

  handleSubmission(){
    let data = {
      dates: this.value,
      to: this.selectedToCountries.label,
      from: this.selectedFromCountries.label
    }
    this.router.navigate(['../result'],
    {relativeTo: this.route, queryParams: {...data}});
  }

}
