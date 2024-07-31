import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Welcome to DGK Hair App</Text>
            <Button
                title="View Users"
                onPress={() => navigation.navigate('User')}
            />
            <Button
                title="View Salons"
                onPress={() => navigation.navigate('Salon')}
            />
        </View>
    );
};

export default HomeScreen;
