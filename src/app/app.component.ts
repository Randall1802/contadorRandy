import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { CounterModule } from './counter/counter.module';
import { CounterComponent } from './counter/counter.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
