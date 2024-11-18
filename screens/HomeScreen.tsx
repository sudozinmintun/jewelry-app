import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import ActionButton from "../components/ActionButton";
import {
    View,
    StyleSheet,
    SafeAreaView,
    Platform,
} from "react-native";
import BalanceCard from "../components/BalanceCard";
import Transactions from "../components/Transactions";
import { Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={["rgba(0,0,0,0.8)", "transparent"]}
                style={styles.background}
            />
            <BalanceCard />
            <View>
                <View style={styles.actions}>
                    <ActionButton
                        color="#ff009d"
                        icon="diamond"
                        label="Items"
                        path="/item"
                        navigation={navigation}
                    />
                    <ActionButton
                        color="#0e9ce2"
                        icon="point-of-sale"
                        label="POS"
                        path="/item"
                        navigation={navigation}
                    />
                    <ActionButton
                        color="#7b48f4"
                        icon="attach-money"
                        label="Invoice"
                        path="/item"
                        navigation={navigation}
                    />
                    <ActionButton
                        color="#ff379e"
                        icon="pie-chart"
                        label="Report"
                        path="/item"
                        navigation={navigation}
                    />
                </View>
            </View>

            <View style={styles.moreActionBar}></View>
            <View style={styles.transactions}>
                <Text style={styles.text.label}>
                    Recent Transactions
                </Text>
                <Transactions />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 100,
        height: 300,
    },
    container: {
        paddingTop: Platform.OS === "android" ? 25 : 0,
        backgroundColor: "#6d25e5",
    },
    actions: {
        paddingTop: 30,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 25,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    moreActionBar: {
        width: 100,
        height: 4,
        backgroundColor: "#ddd",
        borderRadius: 50,
        alignSelf: "center",
        marginBottom: 8,
    },

    transactions: {
        padding: 20,
        gap: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "#f1f1f1",
    },
    text: {
        label: {
            fontWeight: "bold",
            color: "#aaa",
        },
    },

});
