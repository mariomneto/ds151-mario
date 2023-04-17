import { FlatList, Image, Text, View } from "react-native";
import { ScreenNavigationProp, ScreenRouteProp } from "../../App";
import styles from "./styles";

interface ListScreenProps {
    navigation: ScreenNavigationProp;
    route: ScreenRouteProp;
}

interface Data {
    id: number,
    color?: string,
    url?: string
}

const ListScreen: React.FC<ListScreenProps> = ({ navigation, route }) => {
    const list: Data[] = [
        { id: 1, color: "red" },
        { id: 2, url: "https://as2.ftcdn.net/v2/jpg/02/66/72/41/1000_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg" },
        { id: 3, color: "yellow" },
        { id: 4, color: "blue" },
        { id: 5, url: "https://as1.ftcdn.net/v2/jpg/02/95/94/94/1000_F_295949484_8BrlWkTrPXTYzgMn3UebDl1O13PcVNMU.jpg" },
        { id: 6, url: "https://as2.ftcdn.net/v2/jpg/00/09/71/85/1000_F_9718536_LeugTRSphvK0pmO8dnvgHzs79rJwJ49V.jpg" },
        { id: 7, url: "https://as2.ftcdn.net/v2/jpg/01/82/25/35/1000_F_182253513_g1U1140bP8g7Y9fyhrv8S3eRcHYpRlVy.jpg" },
        { id: 8, color: "cyan" },
    ];
 
    const Item: React.FC<{item : Data}> = ({ item }) => (
        <View style={{ padding: 10 }}>
            { 
                item.color &&
                <View style={styles.colorListItem(item.color)}/>
            }
            {
                item.url &&
                <Image source={{ uri: item.url }} style={styles.imageListItem}/>
            }
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista</Text>
            <FlatList
                data={list}
                renderItem={({ item }) => <Item item={item}/>}
                numColumns={2}
            />
        </View>
    );
}

export default ListScreen;