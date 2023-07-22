import { StyleSheet, Text, View } from "react-native";
import ProfilePicture from "./components/ProfilePicture";
import SaveProfile from "./components/SaveProfile";

export default function App() {
    return (
        <View style={styles.container}>
            <SaveProfile />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
