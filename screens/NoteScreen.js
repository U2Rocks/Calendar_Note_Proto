import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { useState, useEffect } from 'react'
import design from '../src/constants/global'
import { randomNotesList } from '../src/data/dateNumberList'

// contains a header from the page transition and a field to enter and save notes[MIGHT ADD FIELD LATER]

const NoteScreen = ({ navigation }) => {

  const [randomNote, setRandomNote] = useState("N/A")

  const dummyNote = "This is a dummy note that shows an obscene amount of text for no reason and is designed to test for UI issues regarding large text"

  useEffect(() => {
    setRandomNote(randomNotesList[[Math.floor(Math.random() * randomNotesList.length)]])
  }, [])

  // const { dayTitle } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>Note: {randomNote}</Text>
      </View>
    </SafeAreaView>
  )
}

export default NoteScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: design.COLOR_PAPER,
    padding: design.BIG_SPACING,
    flex: 1,
  },
  textStyle: {
    fontSize: 30, 
    color: '#000',
    textAlign: 'left',
  },
  textView: {
    flex: 1,
    marginLeft: 2,
  },
})