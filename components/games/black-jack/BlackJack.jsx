import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './blackjack.style'

const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";

const BlackJack = () => {
  const [cards, getCards] = useState({
    "success": true,
    "deck_id": "",
    "shuffled": true,
    "remaining": 52
});
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchCards = async () => {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle`);
    // This below will create a new deck and pull 1 card
    let newDeck = await axios.get(`${API_BASE_URL}/new/draw/?count=1`);
    // cards.deck_id = deck.data.deck_id;
    console.log(deck.data);
    console.log(newDeck.data.cards[0].image);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.titleText}>Dealer</Text>

      <View style={styles.boardSpaceContainer}>
        <TouchableOpacity style={styles.boardSpace} onPress={fetchCards}>
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