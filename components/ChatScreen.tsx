import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import useStore from '@/store/useStore';
import io from 'socket.io-client';

const socket = io('http://your-server-url'); // Замените на свой URL

const ChatScreen: React.FC = () => {
    const userId = useStore((state) => state.userId);
    const [messages, setMessages] = useState<string[]>([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        socket.on('receive-message', (message: string) => {
            setMessages((prev) => [...prev, message]);
        });
        
        return () => {
            socket.off('receive-message');
        };
    }, []);

    const sendMessage = () => {
        if (newMessage.trim()) {
            socket.emit('send-message', { userId, message: newMessage });
            setNewMessage('');
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList 
              data={messages}
              renderItem={({ item }) => <Text>{item}</Text>}
              keyExtractor={(item, index) => index.toString()}
            />
            <TextInput 
              value={newMessage}
              onChangeText={setNewMessage}
              placeholder="Введите сообщение"
            />
            <Button title="Отправить" onPress={sendMessage} />
        </View>
    );
};

export default ChatScreen;
