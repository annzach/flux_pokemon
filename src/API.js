//File where we make API calls.
//In comparison to the request library(request), jquery will parse JSON for us.It automatically does the json parse.
//the data in callback will be pokemon.

import $ from 'jquery';
import ServerActions from './actions/ServerActions';

const API = {
  fetchPokemon(number){
    // 'GET METHOD MAKES THE HTTP REQUEST'
    $.get(`http://pokeapi.co/api/v2/pokemon/${number}`,(data,status)=>{
      console.log('status:',status);
      console.log('data:',data);
      ServerActions.receivePokemon(data);
    });
  },
  fetchAll(){
      $.get(`https://pokeapi.co/api/v2/pokemon/?limit=30&offset=10`,(data,status)=>{
      console.log('status:',status);
      console.log('data:',data);
      ServerActions.receiveAll(data);
    });
  },
  projectMe(id){
     $.get(`http://pokeapi.co/api/v2/pokemon/${id}`,(data,status)=>{
      console.log('status:',status);
      console.log('data:',data);
      ServerActions.receivePokemon(data);
    });
  }

}

export default API;