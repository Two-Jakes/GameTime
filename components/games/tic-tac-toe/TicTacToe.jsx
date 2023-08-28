import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './tictactoe.style'

const TicTacToe = () => {
  let initialBoard = [
    { id: 0, value: 'X' },
    { id: 1, value: ' ' },
    { id: 2, value: ' ' },
    { id: 3, value: ' ' },
    { id: 4, value: 'X' },
    { id: 5, value: ' ' },
    { id: 6, value: ' ' },
    { id: 7, value: ' ' },
    { id: 8, value: 'X' }
  ];

  const [board, updateBoard] = useState(initialBoard);

  //HELPER FUNCTIONS

  handlePress = (item) => {
    console.log("Clicked on Grid", item, "with a value of", board[item].value);
    //updateBoard([{id: item, value: "X"}]);
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.toeText}>Tic Tac Toe</Text>
      </View>

      {/* -----------------------------ROW ONE------------------------------------ */}
      <View style={styles.boardSpaceContainer}>
        <TouchableOpacity style={styles.boardSpace} onPress={() => this.handlePress(0)}>
          <Text style={styles.boardText}>{board[0].value}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boardSpace} onPress={() => this.handlePress(1)}>
          <Text style={styles.boardText}>{board[1].value}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boardSpace} onPress={() => this.handlePress(2)}>
          <Text style={styles.boardText}>{board[2].value}</Text>
        </TouchableOpacity>
      </View>
      {/* -----------------------------ROW ONE------------------------------------ */}

      {/* -----------------------------ROW TWO------------------------------------ */}
      <View style={styles.boardSpaceContainer}>
        <TouchableOpacity style={styles.boardSpace} onPress={() => this.handlePress(3)}>
          <Text style={styles.boardText}>{board[3].value}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boardSpace} onPress={() => this.handlePress(4)}>
          <Text style={styles.boardText}>{board[4].value}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boardSpace} onPress={() => this.handlePress(5)}>
          <Text style={styles.boardText}>{board[5].value}</Text>
        </TouchableOpacity>
      </View>
      {/* -----------------------------ROW TWO------------------------------------ */}

      {/* -----------------------------ROW THREE------------------------------------ */}
      <View style={styles.boardSpaceContainer}>
        <TouchableOpacity style={styles.boardSpace} onPress={() => this.handlePress(6)}>
          <Text style={styles.boardText}>{board[6].value}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boardSpace} onPress={() => this.handlePress(7)}>
          <Text style={styles.boardText}>{board[7].value}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boardSpace} onPress={() => this.handlePress(8)}>
          <Text style={styles.boardText}>{board[8].value}</Text>
        </TouchableOpacity>
      </View>
      {/* -----------------------------ROW THREE------------------------------------ */}
    </View>
  )
}

export default TicTacToe