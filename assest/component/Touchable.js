import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomBtn = (props) => {
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <TouchableOpacity
        style={styles.BTN}
        onPress={() => {
          props.onPress();
        }}
      >
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  BTN: {
    backgroundColor: "#8390E6",
    width: "90%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
  },
  text: { textAlign: "center", color: "white", fontWeight: "bold" },
});
