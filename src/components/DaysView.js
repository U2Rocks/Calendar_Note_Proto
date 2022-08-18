import { View, Text, StyleSheet, FlatList } from 'react-native'
import DayBlock from './DayBlock'
import { useState, useEffect } from 'react'


// component that holds all the dayblocks and formats their spacing

const DaysView = ( { DateNumbers, navigate } ) => {

    const [numData, setNumData] = useState(null)
    useEffect( () => {
        setNumData(DateNumbers)
    }, [])

    const renderDayBlock = ({ item }) => {
        return <DayBlock Number={item.val} Navigation={navigate}/>
    }

    const getBlockKey = (item) => item.id


  return (
    <View style={[styles.container, styles.border]}>
        <View style={styles.flexRow}>
            <FlatList
            numColumns={3}
            style={{flexDirection: "column"}}
            data={numData}
            renderItem={renderDayBlock}
            keyExtractor={getBlockKey} 
            />
        </View>
    </View>
  )
}

export default DaysView

const styles = StyleSheet.create({
    container: {
        flex: 5,
    },
    border: {
        borderColor: '#000',
        borderWidth: 1,
    },
    flexRow: {
        flex: 1,
    },
})