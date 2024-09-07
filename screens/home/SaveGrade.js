import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import SemesterMetrics from '../../components/SemesterMetrics'

export default function SaveGrade({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <SemesterMetrics />
        <Button title="Next" onPress={() => navigation.jumpTo("Database")} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5"
    }
})