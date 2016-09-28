// We will have the data received from Server
import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receivePokemon(pokemon){
    AppDispatcher.dispatch({
      type:'RECEIVE_POKEMON',
      payload:{pokemon}
    })
  },
  receiveAll(allPokemon){
    AppDispatcher.dispatch({
      type:'RECEIVE_ALL',
      payload:{allPokemon}
    })
  }
}
export default ServerActions;