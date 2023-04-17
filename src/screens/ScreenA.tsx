import { RouteProp, useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import { ScreenNavigationProp, ScreenRouteProp } from "../../App";

interface ScreenAProps {
    navigation: ScreenNavigationProp;
    route: ScreenRouteProp;
}

const ScreenA: React.FC<ScreenAProps> = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
                <Text style={styles.title}>Tela A</Text>
            <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar</Text>
            </Pressable>
        </View>
    );
}

export default ScreenA;