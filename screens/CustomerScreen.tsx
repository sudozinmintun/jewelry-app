import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Appbar, Card, Text, Provider } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';


const initialUsers = [
    { id: 1, name: "John Doe", phone: "123-456-7890", joinDate: "2023-01-15" },
    { id: 2, name: "Jane Smith", phone: "987-654-3210", joinDate: "2024-02-20" },
    { id: 3, name: "Mike Johnson", phone: "456-789-1234", joinDate: "2023-05-30" },
];

function CustomerScreen() {
    const navigation = useNavigation();
    const [users, setUsers] = useState(initialUsers);

    return (
        <Provider>
            <View style={styles.screen}>

                <Appbar.Header>
                    <Appbar.Content title="Customers" />
                    <Appbar.Action icon="plus" onPress={() => navigation.navigate('CustomerAdd')} />
                </Appbar.Header>

                <ScrollView style={styles.container}>
                    {users.map((user) => (
                        <Card key={user.id} style={styles.card}>
                            <Card.Content>
                                <Text style={styles.name}>{user.name}</Text>
                                <Text style={styles.info}>📞 {user.phone}</Text>
                                <Text style={styles.info}>📅 Joined: {user.joinDate}</Text>
                            </Card.Content>
                        </Card>
                    ))}
                </ScrollView>
            </View>
        </Provider>
    );
}

export default CustomerScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        padding: 10,
    },
    card: {
        marginBottom: 10,
        elevation: 3,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    info: {
        fontSize: 14,
        color: "#555",
        marginTop: 5,
    },
});
