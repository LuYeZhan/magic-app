import React, { Component } from 'react';
// import axios from 'axios';
import magicService from '../services/magicService'

class CardsDetails extends Component {

  state = {
    card: null,
  }

  componentDidMount(){
    const {id} = this.props.match.params;
    // axios.get(`https://api.magicthegathering.io/v1/cards/${id}`)
    magicService.getOneCard(id)
    .then((response) =>{
      this.setState({
        card: response.data.card,
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  goToPreviousPage = () => {
    // history.goBack te va al historial y te devuelve a la pantalla anterior
    this.props.history.goBack();
  }

  render() {
    return (
      <div className= 'image-container'>
      <button onClick={this.goToPreviousPage}>Go back</button>
      {this.state.card ? <img src={this.state.card.imageUrl} alt={this.state.card.name} className='image-details'/>: <p>Loading...</p> }
      </div>
    )
  }
}

export default CardsDetails;