import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TopBar: React.FC<{ onSelectChat: () => void }> = ({ onSelectChat }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={onSelectChat}>
                <Text>Чаты</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <Text>Контакты</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TopBar;
