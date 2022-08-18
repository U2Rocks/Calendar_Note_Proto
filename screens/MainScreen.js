import { View, StyleSheet, SafeAreaView } from 'react-native'
import Header from '../src/components/Header'
import DaysView from '../src/components/DaysView'
import { dateList, monthList } from '../src/data/dateNumberList'
import design from '../src/constants/global'

// contains the Header, DayBlock, and DayView components which allows users to click on specific dates

const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header Year={2022} Month='August'/>
      <DaysView DateNumbers={dateList} navigate={navigation}/>
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: design.TERTIARY_COLOR,
    }
})