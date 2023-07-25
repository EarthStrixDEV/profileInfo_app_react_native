import { StyleSheet, Text, View, ImageBackground, Image ,Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SaveProfile from "./SaveProfile";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";


const ProfilePicture = ({ username }) => {
    const profile_none = "https://i.ibb.co/y4n8n20/user.jpg";
    const [selectedImage, setSelectedImage] = useState(null);
    const pickImageAsync = async function () {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });
        !result.canceled
            ? setSelectedImage(result.assets[0].uri)
            : Alert.alert("you did not select an image");
    };
    const imageSource =
        selectedImage !== null ? { uri: selectedImage } : { uri: profile_none };
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={["#2F80ED", "#56CCF2"]}
                style={styles.container}
            >
                <Pressable onPress={pickImageAsync}>
                    <Image source={imageSource} style={styles.profileImage} />
                </Pressable>
                <Text style={styles.userName}>{username === "" || username === "undefined" || username === null ? "User Name" : username}</Text>
            </LinearGradient>
        </View>
    );
};

export default ProfilePicture;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: 'center',
    },
    profileImage: {
        borderRadius: 100,
        width: 170,
        height: 170,
        alignItems: "center",
        resizeMode: "contain",
    },
    userName: {
        fontSize: 25,
        fontWeight: "bold",
        color: "skyblue",
        marginVertical: 5,
    }
});
