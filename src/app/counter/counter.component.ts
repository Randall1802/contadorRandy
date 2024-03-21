import { Component } from "@angular/core";
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonDisComponent } from "./button-dis/button-dis.component";

@Component({
    standalone: true,
    selector: "app-contador",
    templateUrl: "./counter.component.html",
    imports: [ButtonAddComponent, ButtonDisComponent],

})

export class CounterComponent {
  contador : number = 20;

  handleCount(value: number){
    //console.log("Emitido desde add");
    this.contador = value;
  }
  
  
}