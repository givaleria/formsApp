import { Component } from '@angular/core';

interface Person {
  name: string;
  favs: Favourite[];
}

interface Favourite {
  id: number;
  name: string;
}



@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  newGame: string = '';

  person: Person = {
    name: 'Bryan',
    favs: [
      {
        id: 1,
        name: 'God of War'
      },
      {
        id: 2,
        name: 'Detroit: Become Human'
      }
    ]
  }

  save() {
    console.log('Form saved')
  }

  delete(index: number) {
    this.person.favs.splice(index, 1);
  }

  addGame() {
    const newFav: Favourite = {
      id: this.person.favs.length + 1,
      name: this.newGame
    }

    this.person.favs.push({...newFav});
    this.newGame = '';
  }
}
