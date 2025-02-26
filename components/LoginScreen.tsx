import useUserStore from '@/store/useStore';
import useStore from '@/store/useStore';
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';


const LoginScreen: React.FC = () => {
    const [value, setValue] = useState('');
    const {setUserId} = useUserStore();

    const handleLogin = () => {
        if (value.trim() === '') {
            Alert.alert('Ошибка', 'Введите уникальный ID');
            return;
        }
        setUserId(value);
    };

    return (
        <View>
            <TextInput 
              placeholder="Введите свой ID"
              value={value}
              onChangeText={setValue}
            />
            <Button title="Войти" onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;
