import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    } as ViewStyle,

    button: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#2295e2",
    } as ViewStyle,

    buttonText: {
        color: "white",
        fontSize: 20
    } as TextStyle,

    title: {
        fontSize: 50
    } as TextStyle,
});

export default styles;