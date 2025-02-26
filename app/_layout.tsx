import React from 'react';
import { SafeAreaView } from 'react-native';
import LoginScreen from '@/components/LoginScreen';
import ChatScreen from '@/components/ChatScreen';
import useStore from '@/store/useStore';


const RootLayout = () => {
    const userId = useStore();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {userId ? <ChatScreen /> : <LoginScreen />}
        </SafeAreaView>
    );
};

export default RootLayout;
