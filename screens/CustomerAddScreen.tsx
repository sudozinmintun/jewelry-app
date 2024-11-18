import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Appbar, TextInput, Button } from "react-native-paper";

export default function CustomerAddScreen() {
    const [newUser, setNewUser] = useState(
        {
            name: "",
            phone: "",
            email: "",
            address: "",
            nrc: "",
            description: "",
            joinDate: ""
        }
    );

    const handleInputChange = (field, value) => {
        setNewUser({ ...newUser, [field]: value });
    };

    return (
        <ScrollView>
            <View style={styles.screen}>
                <View style={styles.form}>
                    <TextInput
                        label="Name"
                        value={newUser.name}
                        onChangeText={(text) => handleInputChange("name", text)}
                        style={styles.input}
                    />

                    <TextInput
                        label="Email"
                        value={newUser.email}
                        onChangeText={(text) => handleInputChange("email", text)}
                        style={styles.input}
                    />


                    <TextInput
                        label="Address"
                        value={newUser.address}
                        onChangeText={(text) => handleInputChange("address", text)}
                        style={styles.input}
                    />

                    <TextInput
                        label="NRC"
                        value={newUser.nrc}
                        onChangeText={(text) => handleInputChange("nrc", text)}
                        style={styles.input}
                    />


                    <TextInput
                        label="Description"
                        value={newUser.description}
                        onChangeText={(text) => handleInputChange("description", text)}
                        style={styles.input}
                    />

                    <TextInput
                        label="Phone"
                        value={newUser.phone}
                        onChangeText={(text) => handleInputChange("phone", text)}
                        style={styles.input}
                        keyboardType="phone-pad"
                    />
                    <TextInput
                        label="Join Date"
                        value={newUser.joinDate}
                        onChangeText={(text) => handleInputChange("joinDate", text)}
                        style={styles.input}
                        placeholder="YYYY-MM-DD"
                    />
                    <Button mode="contained" style={styles.button}>
                        Save
                    </Button>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    form: {
        padding: 20,
    },
    input: {
        marginBottom: 10,
    },
    button: {
        marginTop: 20,
    },
});
