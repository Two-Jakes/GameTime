import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './tictactoe.style'

const TicTacToe = () => {
  let initialBoard = [
    {id: 0, value: ''},
    {id: 1, value: ''}, 
    {id: 2, value: ''},
    {id: 3, value: ''},
    {id: 4, value: ''},
    {id: 5, value: ''},
    {id: 6, value: ''},
    {id: 7, value: ''},
    {id: 8, value: ''}
  ];
  
  const [board, updateBoard] = useState(initialBoard);

  //HELPER FUNCTIONS

  handlePress = (item) => {
    console.log("Item", item, board[0].value);
    if (board[item].value === ''){
      updateBoard([{value: "X"}]);
    } else if (board[item].value === 'X'){
      updateBoard([{value: "O"}]);
    }
  }

  return (
    <View>
      <Text style={styles.toeText}>Welcome to Tic Tac Toe</Text>

      {/* -----------------------------ROW ONE------------------------------------ */}
      <View style={styles.boardSpaceContainer}>
          <TouchableOpacity style={styles.boardSpace} onPress={() => this.handlePress(0)}>
              <Text style={styles.toeText}>{board[0].value}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boardSpace} onPress={() => console.log(1,2)}>
          <Text style={styles.toeText}>1,2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boardSpace} onPress={() => console.log(1,3)}>
          <Text style={styles.toeText}>1,3</Text>
          </TouchableOpacity>
      </View>
      {/* -----------------------------ROW ONE------------------------------------ */}

      {/* -----------------------------ROW TWO------------------------------------ */}
      <View style={styles.boardSpaceContainer}>
          <TouchableOpacity style={styles.boardSpace} onPress={() => console.log(2,1)}>
              <Text style={styles.toeText}>2,1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boardSpace} onPress={() => console.log(2,2)}>
          <Text style={styles.toeText}>2,2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boardSpace} onPress={() => console.log(2,3)}>
          <Text style={styles.toeText}>2,3</Text>
          </TouchableOpacity>
      </View>
      {/* -----------------------------ROW TWO------------------------------------ */}

      {/* -----------------------------ROW THREE------------------------------------ */}
      <View style={styles.boardSpaceContainer}>
          <TouchableOpacity style={styles.boardSpace} onPress={() => console.log(3,1)}>
              <Text style={styles.toeText}>3,1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boardSpace} onPress={() => console.log(3,2)}>
          <Text style={styles.toeText}>3,2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boardSpace} onPress={() => console.log(3,3)}>
          <Text style={styles.toeText}>3,3</Text>
          </TouchableOpacity>
      </View>
      {/* -----------------------------ROW THREE------------------------------------ */}
    </View>
  )
}

export default TicTacToe