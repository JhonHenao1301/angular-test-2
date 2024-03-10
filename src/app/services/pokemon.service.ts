import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  LIMIT = 1302
  PAGE = 0
  API_URL = `https://pokeapi.co/api/v2/pokemon?offset=${this.PAGE}&limit=${this.LIMIT}`
  
  constructor(private http: HttpClient) {}

  searchPokemons() {
    return this.http.get(this.API_URL)
  }
}
