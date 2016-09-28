import API from '../API'

const PokemonActions ={
 fetchPokemon(number){
   API.fetchPokemon(number)
  },
  fetchAll(){
    API.fetchAll()
  },
  projectMe(id){
    API.projectMe(id)
  }
}

export default PokemonActions;