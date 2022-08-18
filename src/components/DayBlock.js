import { View, Text, StyleSheet, Pressable } from 'react-native'
import design from '../constants/global'

// single block that takes in a date number

const DayBlock = ({ Number, Navigation }) => {

  const openNote = () => Navigation.navigate('Note', { dayTitle: `Day of 8/${Number}/2022` })

  const onPressing = () => console.log(Number)

  return (

    <Pressable style={[styles.container, styles.border]} onPress={openNote}>
        <Text style={styles.text}>{Number}</Text>
    </Pressable>
  )
}

export default DayBlock


/*
width: 100,
height: 100,

*/

const styles = StyleSheet.create({
    container: {
        backgroundColor: design.COLOR_PAPER,
        padding: design.BIG_SPACING,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
    border: {
        borderColor: '#000',
        borderWidth: 2,
    },
})