import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViajeService } from '../services/viaje.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  private viajeApi
  = 'http://localhost:8080/turismo/viaje';
  public viaje: any[] = null;
  public getviaje() {
    this.httpClient
      .get<any[]>(this.viajeApi)
      .subscribe(apiResult => (this.viaje = apiResult));
    }

constructor(private httpClient: HttpClient) {}

ngOnInit() {
  this.getviaje 
}


}
