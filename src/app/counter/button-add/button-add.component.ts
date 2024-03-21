import { Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-button-add',
  standalone: true,
  //imports: [],
  templateUrl: './button-add.component.html',
  styleUrl: './button-add.component.css'
})
export class ButtonAddComponent {
  @Input()
  contador: number = 0;

  @Output() onAdd: EventEmitter<number> = new EventEmitter();

  add(){ 
    //console.log(this.contador);
    this.contador++;
    this.onAdd.emit(this.contador);
  }
}
