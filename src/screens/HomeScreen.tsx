import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { ScreenNavigationProp, ScreenRouteProp } from "../../App";
import styles from "./styles";

interface HomeScreenProps {
    navigation: ScreenNavigationProp;
    route: ScreenRouteProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Início</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('ScreenA')}>
                <Text style={styles.buttonText}>Tela A</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => navigation.navigate('ScreenB')}>
                <Text style={styles.buttonText}>Tela B</Text>
            </Pressable>
        </View>
    );
}

export default HomeScreen;