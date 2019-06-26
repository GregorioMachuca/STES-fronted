import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViajeService implements OnInit{
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