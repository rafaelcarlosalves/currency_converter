import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ConversorService {
  constructor(private http: HttpClient) {}

  RealizarConversao(): Observable<any> {
    const url = `https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=2e2282f1c1fd83c440ff`;

    return this.http.get<any>(url);
  }
}
