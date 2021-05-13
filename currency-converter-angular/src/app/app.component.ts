import { ConversorService } from "./conversor.service";
import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "currency converter";
  formulario: any;
  valorConvertido: number;
  visibilidadeValorConvertido: boolean;

  constructor(private conversorService: ConversorService) {}

  ngOnInit(): void {
    this.visibilidadeValorConvertido = false;
    this.formulario = new FormGroup({
      valor: new FormControl(null)
    });
  }

  Converter(): void {
    const valor = this.formulario.value.valor;
    this.visibilidadeValorConvertido = true;
    this.conversorService.RealizarConversao().subscribe(({ USD_BRL }) => {
      this.valorConvertido = Number((valor * USD_BRL).toFixed(2));
    });
  }
}
