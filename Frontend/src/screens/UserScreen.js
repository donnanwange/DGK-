import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const UserScreen = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/users')
            .then(response => setUsers(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <View>
            <Text>User List</Text>
            <FlatList
                data={users}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.screen_name}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default UserScreen;
