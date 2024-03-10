import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  pokemonList:any = [] 
  // [
  //   {
  //     id: 123,
  //     name: 'Pikachu'
  //   },
  //   {
  //     id: 456,
  //     name: 'Bulbassur'
  //   },
  //   {
  //     id: 789,
  //     name: 'Charmander'
  //   }
  // ]

  constructor(private pokemonService: PokemonService){}

  ngOnInit(): void {
    this.pokemonService.searchPokemons()
    .subscribe({
      next: (data: any) => {
        const { results } = data
        this.pokemonList = results
        // console.log(results)
      },
      error: () => {}
    })
  }

  searchCtrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$')
    ]
  })
  
}
