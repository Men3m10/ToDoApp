import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Pressable,
  Alert,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";

import CustomBtn from "../assest/component/Touchable";

const Home = () => {
  const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handelText = (Text) => {
    setEnteredText(Text);
  };

  const _addGoalHandler = () => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
    setEnteredText("");
    setShowModal(false);
  };

  const createAlert = (data) =>
    Alert.alert("Wanna Delete This Goal!!", "Be Carefull", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK", onPress: () => deleteGoal(data) },
    ]);

  const deleteGoal = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  const modalOn = () => {
    setShowModal(true);
  };

  return (
    <View style={styles.container}>
      <CustomBtn text={"ADD NEW GOAL!"} onPress={modalOn} />

      <Modal visible={showModal} animationType="slide">
        <View style={styles.inputStyle}>
          <Image
            source={require("../assest/images/goal.png")}
            style={styles.ImageStyle}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Add Your Goal ......"
            placeholderTextColor={"#5e0aac"}
            onChangeText={handelText}
            value={enteredText}
          />
          <View style={styles.buttons}>
            <Button
              title="Add Goal"
              onPress={_addGoalHandler}
              color={"#5e0aac"}
              disabled={enteredText === "" ? true : false}
            />
            <Button
              title="Cancel"
              color={"#5e0aac"}
              onPress={() => {
                setShowModal(false);
                setEnteredText("");
              }}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData, index) => {
            return (
              <View key={index} style={styles.goalsStyle}>
                <Pressable
                  android_ripple={{ color: "#210644" }}
                  onPress={() => {
                    createAlert(itemData.item.id);
                  }}
                >
                  <Text style={styles.textINgoal}>{itemData.item.text}</Text>
                </Pressable>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#BCC5FC",
  },
  inputStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    backgroundColor: "#BCC5FC",
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#5e0aac",
    borderRadius: 5,
    width: "80%",
    marginRight: 8,
    padding: 18,
    color: "#5e0aac",
  },
  listContainer: {
    flex: 5.5,
  },
  goalsStyle: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#BCC5FC",
    borderColor: "#BCC5FC",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  textINgoal: {
    color: "#5e0aac",
    padding: 15,
  },
  buttons: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-around",
    margin: 20,
  },
  ImageStyle: {
    width: 150,
    height: 150,
    margin: 20,
  },
});

export default Home;
