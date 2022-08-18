import { View, Text, StyleSheet} from 'react-native'
import design from '../constants/global'

// large header that shows the month and has a button(currently useless)

const Header = ({ Year, Month }) => {
  return (
    <View style={[styles.container, styles.border]}>
      <Text style={styles.text}>{Month} of {Year}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: design.PRIMARY_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: design.COLOR_WHITE,
        fontSize: 48,
        fontWeight: 'bold',
    },
    border: {
        borderColor: '#000',
        borderWidth: 3,
    },
})