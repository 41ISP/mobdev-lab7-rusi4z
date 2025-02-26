import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useStore } from 'zustand';

const LoginScreen: React.FC = () => {
    const [userId, setUserId] = useState('');
    const setUser = useStore((state) => state.setUser);

    const handleLogin = () => {
        if (userId.trim() === '') {
            Alert.alert('Ошибка', 'Введите уникальный ID');
            return;
        }
        setUser(userId);
    };

    return (
        <View>
            <TextInput 
              placeholder="Введите свой ID"
              value={userId}
              onChangeText={setUserId}
            />
            <Button title="Войти" onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;
