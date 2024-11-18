import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ItemScreen() {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Item Screen</Text>
            <Button
                title="Back to Home"
                onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

export default ItemScreen;
