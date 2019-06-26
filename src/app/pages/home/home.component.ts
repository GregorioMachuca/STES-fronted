import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private myRatesApi
      = 'http://turismo/viaje';
      public myRates: any[] = null;
      public getMyRates() {
        this.httpClient
          .get<any[]>(this.myRatesApi)
          .subscribe(apiResult => (this.myRates = apiResult));
        }
    public postRates() {
      const rates = this.transformData();
      rates.forEach(rate =>
        this.httpClient
          .post(this.myRatesApi, rate)
          .subscribe()
      );
    }
    private transformData() {
      const current = this.currentEuroRates.rates;
      return Object.keys(current).map(key => ({
        date: this.currentEuroRates.date,
        currency: key,
        euros: current[key]
      }));
    }
    private urlapi
      = 'http://turismo/viaje';
    public currentEuroRates: any = null;
  
    constructor(private httpClient: HttpClient) {}
  
    ngOnInit() {
      this.getCurrentEuroRates();
    }
  
      private getCurrentEuroRates() {
        const currencies = 'USD,GBP,CHF,JPY';
        const url = `${this.urlapi}?symbols=${currencies}`;
        this.httpClient
          .get(url)
          .subscribe(apiData => (this.currentEuroRates = apiData));
    }
  }