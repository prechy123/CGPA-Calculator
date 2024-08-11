import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Text>About Screen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5"
    }
})