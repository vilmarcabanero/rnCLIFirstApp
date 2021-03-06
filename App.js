import React, {useState} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

const App = () => {
  const [outputText, setOutputText] = useState('Hello G! Good night!');

  const ask = () => {
    setOutputText('Can I?');
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{outputText}</Text>
        <Button title="G, can I ask you something?" onPress={ask} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: 'steelblue',
    marginBottom: 5,
    fontSize: 16,
  },
});

export default App;
