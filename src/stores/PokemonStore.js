import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher'

let _pokemon= 6;
let _pokemonArr = [];

class PokemonStore extends EventEmitter{
  constructor(){
    super();
    AppDispatcher.register(action=>{
      switch(action.type){
        case 'RECEIVE_POKEMON':
        _pokemon = action.payload.pokemon;
        this.emit('CHANGE');
        break;
      
       case 'RECEIVE_ALL':
       _pokemonArr=[];
       _pokemonArr.push(action.payload.allPokemon.results);
       this.emit('CHANGE');
       break;
      }
    })
  }

  startListening(cb){
    this.on('CHANGE',cb);
  }
  stopListening(cb){
    this.removeListener('CHANGE',cb)
  }

  getPokemon(){
    return _pokemon;
  }
  getAllPokemon(){
    return _pokemonArr;
  }

}
export default new PokemonStore();