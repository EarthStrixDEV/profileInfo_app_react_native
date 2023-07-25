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

    const [showUsername ,setShowUsername] = useState("");
    
    function handleSetData() {
        setShowUsername(username);
        // alert data
        Alert.alert(
            "Save Profile",
            `Name: ${username} \nEmail: ${email} \nPhone: ${phone}`,
            [
                {
                    text: "Cancel",
                    onPress: function() {
                        setUsername("");
                        setMail("");
                        setPhone("");
                    },
                    style: "cancel",
                },
                {
                    text: "Save",
                    onPress: () =>
                        (username === "undefined" || username === "") &&
                        (email === "undefined" || email === "") &&
                        (phone === "undefined" || phone === "")
                            ? Alert.alert(
                                  "Don't make all input blank or empty to continue!"
                              )
                            : Alert.alert(
                                  "Save",
                                  "Save your data successfully!!!"
                              ),
                    style: "default",
                },
            ]
        );
    }
    return (
        <View style={{flex: 1}}>
            <ProfilePicture username={showUsername} />
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
                        onChangeText={ value => setUsername(value) }
                        value={username}
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
                        onChangeText={ value => setMail(value) }
                        value={email}
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
                        onChangeText={value => setPhone(value)}
                        keyboardType={ 'numeric' }
                        value={phone}
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
        fontSize: 20,
    },
    buttonSave: {
        backgroundColor: "#2F80ED",
        padding: 10,
        margin: 10,
    },
});
