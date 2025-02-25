import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Message from './Message'; //Компонент для отображения одного сообщения

const MessageList = ({ messages }) => {
  return (
    <FlatList
      style={styles.list}
      data={messages}
      keyExtractor={(item) => item.id} //Убедитесь, что у ваших сообщений есть уникальный ID
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