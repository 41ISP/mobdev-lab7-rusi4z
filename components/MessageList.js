import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Message from './Message';

const MessageList = ({ messages }) => {
  return (
    <FlatList
      style={styles.list}
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Message message={item} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default MessageList;