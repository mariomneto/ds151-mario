import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import { ScreenNavigationProp, ScreenRouteProp } from "../../App";

interface ScreenBProps {
    navigation: ScreenNavigationProp;
    route: ScreenRouteProp;
}

const ScreenB: React.FC<ScreenBProps> = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
                <Text style={styles.title}>Tela B</Text>
            <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar</Text>
            </Pressable>
        </View>
    );
}

export default ScreenB;