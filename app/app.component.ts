import { Component } from '@angular/core';
import { Pizza } from './shared/pizza.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tp2';
  pizzas: Pizza[] = [];

  onPizzaSelected(pizza: Pizza): void {
    console.log('Pizza sélectionnée :', pizza);

  }
}
