import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class CardsList extends Component {
  
  state = {
    cards: [],
  }
  
  componentDidMount() {
    axios.get('https://api.magicthegathering.io/v1/cards')
      .then((response)=> {
        // console.log(response)
        const cardsFromAPI  = response.data.cards;
        this.setState({
          cards: cardsFromAPI,
        })

      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
  return (
    <>
    <h2>CardsList page</h2>
    <section className='container'>

      {this.state.cards.length > 0 ? this.state.cards.map((card, index) => {
        return (
          <article key={card.id}>
          <h3>{card.name}</h3>
          <p>{card.type}</p>
          <Link to = {`/cards/${card.id}`} ><img src={card.imageUrl} alt={card.name}/></Link>
          </article>
        )
      }): <p>Loading...</p> }
    </section>
    </>
  );
  }
}
export default CardsList;