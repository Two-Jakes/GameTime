import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './tictactoe.style'

const TicTacToe = () => {
  let initialBoard = [
    { id: 0, value: 'X' },
    { id: 1, value: 'X' },
    { id: 2, value: 'X' },
    { id: 3, value: 'O' },
    { id: 4, value: 'O' },
    { id: 5, value: 'O' },
    { id: 6, value: 'X' },
    { id: 7, value: 'X' },
    { id: 8, value: 'X' }
  ];

  const [board, updateBoard] = useState(initialBoard);

  //HELPER FUNCTIONS

  handlePress = (item) => {
    console.log("Item", item, board[0].value);
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
        <TouchableOpacity style={styles.boardSpace} onPress={() => console.log(1, 3)}>
          <Text style={styles.boardText}>{board[2].value}</Text>
        </TouchableOpacity>
      </View>
      {/* -----------------------------ROW ONE------------------------------------ */}

      {/* -----------------------------ROW TWO------------------------------------ */}
      <View style={styles.boardSpaceContainer}>
        <TouchableOpacity style={styles.boardSpace} onPress={() => console.log(2, 1)}>
          <Text style={styles.boardText}>{board[3].value}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boardSpace} onPress={() => console.log(2, 2)}>
          <Text style={styles.boardText}>{board[4].value}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boardSpace} onPress={() => console.log(2, 3)}>
          <Text style={styles.boardText}>{board[5].value}</Text>
        </TouchableOpacity>
      </View>
      {/* -----------------------------ROW TWO------------------------------------ */}

      {/* -----------------------------ROW THREE------------------------------------ */}
      <View style={styles.boardSpaceContainer}>
        <TouchableOpacity style={styles.boardSpace} onPress={() => console.log(3, 1)}>
          <Text style={styles.boardText}>{board[6].value}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boardSpace} onPress={() => console.log(3, 2)}>
          <Text style={styles.boardText}>{board[7].value}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boardSpace} onPress={() => console.log(3, 3)}>
          <Text style={styles.boardText}>{board[8].value}</Text>
        </TouchableOpacity>
      </View>
      {/* -----------------------------ROW THREE------------------------------------ */}
    </View>
  )
}

export default TicTacToe