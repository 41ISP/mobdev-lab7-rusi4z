import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = ({ message }) => {
  return (
    <View style={[styles.container, message.sender === 'me' ? styles.myMessage : styles.otherMessage]}>
      <Text>{message.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F8DCDB',
  },
});

export default Message;