import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Pizza } from '../shared/pizza.model';
@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  public pizzas: Pizza[] = [];
@Output() 
pizzaSelected = new EventEmitter<Pizza>();
ngOnInit(): void {
  this.pizzas = [

    new Pizza('Pizza Napoletana', 'napoletana.jpg', 'Une pizza napolitaine authentique avec une croûte moelleuse et des ingrédients simples.'),
    new Pizza('Pizza Canibale', 'pizzacanibale.jpg', 'Une pizza composée d\'un assortiment des viandes succulentes. '),
    new Pizza('Pizza Prosciutto e Funghi', 'prosciutto-funghi.jpg', 'Une pizza avec du jambon et des champignons, une combinaison classique.'),
    new Pizza('Pizza quatro Fromages', 'pizza4.jpg', 'Une délicieuse pizza généreusement garnie avec un mélange savoureux de 4 fromages différents. '),
    new Pizza('Pizza Diavola (Diable)', 'diavola.jpg', 'Une pizza épicée avec du pepperoni et des piments.'),
    new Pizza('Pizza Margherita', 'margherita.jpg', 'La classique Margherita avec de la tomate et de la mozzarella.'),
    new Pizza('Pizza Capricciosa', 'capricciosa.jpg', 'Une pizza garnie de jambon, d\'artichauts, de champignons et d\'olives.'),
    new Pizza('Pizza Fruit de mer', 'frutti-di-mare.jpg', 'Une pizza aux fruits de mer avec des crevettes, des moules et des calmars.'),
    new Pizza('Pizza Végétarienne', 'vegetarian.jpg', 'Une option saine et délicieuse avec une variété de légumes frais.'),
    new Pizza('Pizza Bianca', 'bianca.jpg', 'Une pizza blanche avec une base d\'huile d\'olive, de fromage et d\'herbes.'),
    new Pizza('Pizza Funghi', 'funghi.jpg', 'Une pizza aux champignons pour les amateurs de saveurs terreuses.'),
    new Pizza('Pizza Pepperoni', 'pepperoni.jpg', 'Une pizza épicée avec du pepperoni et du fromage fondant.'),
    new Pizza('Pizza Tonno e Cipolla', 'tonno-cipolla.jpg', 'Une pizza avec du thon et des oignons, une combinaison savoureuse.'),
    new Pizza('Pizza Hawaïenne', 'hawaiian.jpg', 'Une pizza exotique avec du jambon, de l\'ananas et du fromage fondant.'),

   
  ];
              }
  selectPizza(pizza : Pizza):void {
    console.log('..... cest choisie :', pizza);
    this.pizzaSelected.emit(pizza);
  }        


}

