import React from 'react';
import { SafeAreaView } from 'react-native';
import { useStore } from 'zustand';
import LoginScreen from '@/components/LoginScreen';
import ChatScreen from '@/components/ChatScreen';

const App: React.FC = () => {
    const userId = useStore((state) => state.userId);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {userId ? <ChatScreen /> : <LoginScreen />}
        </SafeAreaView>
    );
};

export default App;
