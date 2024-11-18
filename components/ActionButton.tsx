import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ActionButtonProps {
    name?: string;
    color?: string;
    icon?: string;
    label?: string;
    path?: string;
    navigation: any;
}

const ActionButton: React.FC<ActionButtonProps> = ({ color, icon, label, path, navigation }) => {
    return (
        <TouchableOpacity
            style={styles.action}
            onPress={() => {
                if (path) {
                    navigation.navigate('Item');
                } else {
                    console.log('No path provided');
                }
            }}
        >
            <View
                style={[
                    styles.actionButton,
                    { backgroundColor: color ? color : "#7b48f4" },
                ]}
            >
                <Icon
                    name={icon ? icon : "attach-money"}
                    size={32}
                    color="white"
                />
            </View>

            <Text style={styles.actionText}>
                {label ? label : "Label"}
            </Text>
        </TouchableOpacity>
    );
};

export default ActionButton;

const styles = StyleSheet.create({
    action: {
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
    },
    actionButton: {
        width: 68,
        height: 68,
        borderRadius: 34,
        justifyContent: "center",
        alignItems: "center",
    },
    actionText: {
        color: "#fff",
    },
});
