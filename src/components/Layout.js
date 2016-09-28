import React,{Component} from 'react'
import PokemonActions from '../actions/PokemonActions'
import PokemonStore from '../stores/PokemonStore'
import '../style.css'

export default class Layout extends Component {
  constructor(){
    super();
    this.state ={
      pokemon:PokemonStore.getPokemon(),
      pokemonAll:PokemonStore.getAllPokemon()
    }
    this.fetchPokemon = this.fetchPokemon.bind(this);
    this._onChange = this._onChange.bind(this);
    this.projectMe = this.projectMe.bind(this);

  }

  componentWillMount(){
    PokemonStore.startListening(this._onChange);
  }
  
  componentWillUnMount(){
    PokemonStore.stopListening(this._onChange);
  }
  _onChange(){
    this.setState({
      pokemon:PokemonStore.getPokemon(),
      pokemonAll:PokemonStore.getAllPokemon()
    })
  }
  fetchPokemon(){
   console.log("fetch Pokemon");
   let {pokemonNumber} = this.refs;
   let pokeNumber = pokemonNumber.value;
   console.log("pokemonNumber", pokeNumber);
   PokemonActions.fetchPokemon(pokeNumber);
  }
  fetchAll(){
    console.log("fetch All");
    PokemonActions.fetchAll();
  }
  projectMe(id){
    console.log('index',id);
    PokemonActions.projectMe(id);
  }
  render(){
  
    const {pokemon,pokemonAll} = this.state;

    var PokemonData = JSON.stringify(pokemon);

    let id = pokemon.id;
    let image="";
    if (pokemon.sprites) {
      image= pokemon.sprites.back_default;

    }
    else{
      image="";
    }
    var allPokemon = pokemonAll;
    var $row=''
    if(allPokemon.length) {
      var all = allPokemon[0].map((element,index)=> {
        let url_id = element.url.substr(-3, 2);
        return (
          // <li key={index} onClick={()=> this.projectMe(url_id)}>{element.name}</li>
           
                    <tr key={index} onClick={()=> this.projectMe(url_id)}>
                      <td>{index}</td>
                      <td>{url_id}</td>
                      <td>{element.name}</td>
                    </tr>
  
          ) 

      })

    }
     
    return (
    <div className = "container">
      <h1 className = 'text-center'>Flux Webpack Template</h1>
      <div className="row">
      <input type="number" name="" ref='pokemonNumber'/>
      <button onClick = {this.fetchPokemon} className="btn-primary">Get Pokemon</button>
      <button onClick={this.fetchAll} className="btn-primary">Get All </button>
      <div className="row">
         <img src={image} alt="N/A" width="150 px"/>
         <h3>Name : {pokemon.name}</h3>
         <h3>Id :{pokemon.id}</h3>
         <h3>Weight: {pokemon.weight}</h3>
         {/*<ul>
           {all}
         </ul>*/}
         <table className= "table table-striped">
           <thead>
            <tr>
             <th>Index</th>
             <th>Id</th>
             <th>Name</th>
            </tr>
           </thead>

           <tbody>
             {all}
           </tbody>
         </table>
      </div>
      </div>
    </div>
    )
  }
}