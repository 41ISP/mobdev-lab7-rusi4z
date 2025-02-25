import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ setIsLoggedIn, setUserId }) => {
  const [userIdInput, setUserIdInput] = useState('');

  const handleLogin = () => {
    if (userIdInput.trim() !== '') {
      setIsLoggedIn(true);
      setUserId(userIdInput);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Введите ваш ID"
        value={userIdInput}
        onChangeText={setUserIdInput}
      />
      <Button title="Войти" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;