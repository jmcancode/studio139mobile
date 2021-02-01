import React from "react";
import { StyleSheet, View } from "react-native";
import ChatBot from "react-native-chatbot";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const steps = [
  {
    id: "0",
    message: "Thank you for contacting us! How may we be of assitance?",
    trigger: "1",
  },
  {
    id: "1",
    message: "Bye!",
    end: true,
  },
];

export const CustomerService = () => {
  return (
    <View>
      <View>
        <ChatBot steps={steps} />
      </View>
    </View>
  );
};

export default CustomerService;
