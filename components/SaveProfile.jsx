import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import ProfilePicture from "./ProfilePicture";

const SaveProfile = () => {
    const [username, setUsername] = useState("");
    const [email, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [data, setData] = useState([]);

    function handleSetData() {
        let tempData = [];
        tempData.push(username);
        tempData.push(email);
        tempData.push(phone);
        setData(tempData);
        // alert data
        Alert.alert(
            "Save Profile",
            `Name: ${data[0]} \nEmail: ${data[1]} \nPhone: ${data[2]}`,
            [
                {
                    text: "Cancel",
                    onPress: () => Alert.alert("Cancel"),
                    style: "cancel",
                },
                {
                    text: "Save",
                    onPress: () => Alert.alert("Save"),
                    style: "default",
                },
            ]
        );
    }
    return (
        <View style={{flex: 1}}>
            <ProfilePicture username={username} />
            <View style={styles.container}>
                <View style={{ marginVertical: 10, paddingHorizontal: 10 }}>
                    <AntDesign
                        style={{ position: "absolute", left: 15, top: 6 }}
                        name="user"
                        size={24}
                        color="black"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Your Name"
                        onChangeText={setUsername}
                    ></TextInput>
                </View>
                <View style={{ marginVertical: 10, paddingHorizontal: 10 }}>
                    <AntDesign
                        style={{ position: "absolute", left: 15, top: 6 }}
                        name="mail"
                        size={24}
                        color="black"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        onChangeText={setMail}
                    ></TextInput>
                </View>
                <View style={{ marginVertical: 10, paddingHorizontal: 10 }}>
                    <AntDesign
                        style={{ position: "absolute", left: 15, top: 6 }}
                        name="phone"
                        size={24}
                        color="black"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Phone"
                        onChangeText={setPhone}
                    ></TextInput>
                </View>
                <View
                    style={{ position: "absolute", bottom: 1, width: "100%" }}
                >
                    <TouchableOpacity
                        style={styles.buttonSave}
                        onPress={handleSetData}
                    >
                        <Text
                            style={{
                                color: "white",
                                textAlign: "center",
                                fontSize: 18,
                            }}
                        >
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SaveProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1.2,
    },
    textInput: {
        borderRadius: 10,
        padding: 5,
        paddingLeft: 30,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "black",
        fontSize: 22,
    },
    buttonSave: {
        backgroundColor: "#2F80ED",
        padding: 10,
        margin: 10,
    },
});
