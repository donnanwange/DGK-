import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        axios.post('http://localhost:3000/api/login', { email, password })
            .then(response => {
                if (response.data.message === 'Login successful') {
                    navigation.navigate('Home');
                } else {
                    Alert.alert('Error', 'Invalid email or password');
                }
            })
            .catch(error => {
                console.error(error);
                Alert.alert('Error', 'An error occurred');
            });
    };

    return (
        <View>
            <Text>Login Screen</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;
