import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Footer } from '../../components'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './blackjack.style'

const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";

const BlackJack = () => {
  const [cards, getCards] = useState({
    "success": true,
    "deck_id": "",
    "shuffled": true,
    "remaining": 52
  });
  const [card, setCard] = useState({});
  const [error, setError] = useState(null);

  const fetchCards = async () => {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle`);
    // To Print the Data of the Object ----> console.log(deck.data);
    // cards.deck_id = deck.data.deck_id;
    // This below will create a new deck and pull 1 card
    let newDeck = await axios.get(`${API_BASE_URL}/new/draw/?count=10`);

    /*
   let cardDeck = newDeck.data.cards;
   
   for (let i = 0; i < cardDeck.length; i++){
     setCard({
       image: newDeck.data.cards[i].image,
       value: newDeck.data.cards[i].value,
     });
   }
   */
    // Set the image and value of the card below
    setCard({
      image: newDeck.data.cards[0].image,
      value: newDeck.data.cards[0].value,
    });

    console.log(card);
    //console.log(newDeck.data.cards[0].image);

  };

  return (
    <View style={styles.container}>

      <Text style={styles.titleText}>Dealer</Text>

      {/* DEALER VIEW */}
      <View style={styles.boardSpaceContainer}>
        <TouchableOpacity style={styles.boardSpaceWithCard}>
          <Image style={styles.cardImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.boardSpace} onPress={() => ({})}>
          <Text style={styles.boardText}> </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boardSpace} onPress={() => ({})}>
          <Text style={styles.boardText}> </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boardSpace} onPress={() => ({})}>
          <Text style={styles.boardText}> </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boardSpace} onPress={() => ({})}>
          <Text style={styles.boardText}> </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.titleText}>Player</Text>

      {/* PLAYER VIEW */}
      <View style={styles.boardSpaceContainer}>
        <TouchableOpacity style={styles.boardSpaceWithCard}>
          <Image style={styles.cardImage} source={card.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.boardSpace} onPress={() => ({})}>
          <Text style={styles.boardText}> </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boardSpace} onPress={() => ({})}>
          <Text style={styles.boardText}> </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boardSpace} onPress={() => ({})}>
          <Text style={styles.boardText}> </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boardSpace} onPress={() => ({})}>
          <Text style={styles.boardText}> </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.boardButtonContainer}>
        {/* whenClicked it should SPLIT */}
        <TouchableOpacity style={styles.boardButton} onPress={() => ({})}></TouchableOpacity>
        {/* whenClicked it should DOUBLE DOWN */}
        <TouchableOpacity style={styles.boardButton} onPress={() => ({})}></TouchableOpacity>
        {/* whenClicked it should grant INSURANCE. */}
        <TouchableOpacity style={styles.boardButton} onPress={() => ({})}></TouchableOpacity>
        {/* whenClicked it should SURRENDER */}
        <TouchableOpacity style={styles.boardButton} onPress={() => ({})}></TouchableOpacity>
      </View>

      <View style={styles.boardTextContainer}>
        <Text style={styles.boardTextMed}> SPLIT </Text>
        <Text style={styles.boardTextMed}> DOUBLE </Text>
        <Text style={styles.boardTextSmall}> INSURANCE </Text>
        <Text style={styles.boardTextSmall}> SURRENDER </Text>
      </View>

      <View style={styles.boardButtonContainer}>
        {/* whenClicked it should change SOUND property */}
        <TouchableOpacity style={styles.boardButton} onPress={() => ({})}></TouchableOpacity>
        {/* whenClicked it should DEAL a card. */}
        <TouchableOpacity style={styles.boardButton} onPress={() => ({})}></TouchableOpacity>
        {/* whenClicked it should STAND */}
        <TouchableOpacity style={styles.boardButton} onPress={() => ({})}></TouchableOpacity>
        {/* whenClicked it should SHUFFLE */}
        <TouchableOpacity style={styles.boardButton} onPress={() => ({})}></TouchableOpacity>
      </View>

      <View style={styles.boardTextContainer}>
        <Text style={styles.boardTextBot}> SOUND </Text>
        <Text style={styles.boardTextBot}> DEAL/HIT </Text>
        <Text style={styles.boardTextBot}> STAND </Text>
        <Text style={styles.boardTextBot}> SHUFFLE </Text>
      </View>

      <View style={styles.boardButtonGameContainer}>
        {/* whenClicked it should DEAL a card. */}
        <TouchableOpacity style={styles.boardPlayButton} onPress={fetchCards}></TouchableOpacity>
      </View>

      <Text style={styles.boardTextPlay}> PLAY </Text>

    </View>


  )
}

export default BlackJack