import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const SalonScreen = () => {
    const [salons, setSalons] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/salons')
            .then(response => setSalons(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <View>
            <Text>Salon List</Text>
            <FlatList
                data={salons}
                keyExtractor={item => item.salon_id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.sname}</Text>
                        <Text>{item.city}, {item.us_state}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default SalonScreen;
