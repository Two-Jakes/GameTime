import React, { useState, useEffect } from 'react'
import axios from 'axios';
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
  const [card, setCard] = useState('');
  const [error, setError] = useState(null);

  const fetchCards = async () => {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle`);
    // To Print the Data of the Object ----> console.log(deck.data);
    // cards.deck_id = deck.data.deck_id;
    // This below will create a new deck and pull 1 card
    let newDeck = await axios.get(`${API_BASE_URL}/new/draw/?count=1`);
    // Set the image of the card below
    setCard(newDeck.data.cards[0].image);
    console.log(card);
    //console.log(newDeck.data.cards[0].image);
   
  };

  return (
    <View style={styles.container}>

      <Text style={styles.titleText}>Dealer</Text>

      <View style={styles.boardSpaceContainer}>
        <TouchableOpacity style={styles.boardSpaceWithCard} onPress={fetchCards}>
          <Image style={styles.cardImage} source={card} />
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

      <View style={styles.boardSpaceContainer}>
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
        <TouchableOpacity style={styles.boardSpace} onPress={() => ({})}>
          <Text style={styles.boardText}> </Text>
        </TouchableOpacity>
      </View>



    </View>


  )
}

export default BlackJack