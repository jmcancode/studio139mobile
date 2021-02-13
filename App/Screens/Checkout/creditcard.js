import React, { Component } from "react";
import { StyleSheet, View, Switch } from "react-native";
import {
  CreditCardInput,
  LiteCreditCardInput,
} from "react-native-credit-card-input"; // 0.4.1
// import createStripe from "stripe-client";

// const stripe = createStripe("pk_live_aKmLtnUBlTx1h5svA93dUVqF");
const s = StyleSheet.create({
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "#F5F5F5",
    marginTop: 60,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
});

export default class CreditEdit extends Component {
  state = { useLiteCreditCardInput: false };
  _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
  _onFocus = (field) => console.log("focusing", field);
  _setUseLiteCreditCardInput = (useLiteCreditCardInput) =>
    this.setState({ useLiteCreditCardInput });

  render() {
    return (
      <View style={s.container}>
        <Switch
          style={s.switch} 
          onValueChange={this._setUseLiteCreditCardInput}
          value={this.state.useLiteCreditCardInput}
        />

        {this.state.useLiteCreditCardInput ? (
          <LiteCreditCardInput
            autoFocus
            inputStyle={s.input}
            cardImageFront={require("../../../assets/images/lifestyle.jpg")}
            validColor={"black"}
            invalidColor={"red"}
            placeholderColor={"darkgray"}
            onFocus={this._onFocus}
            onChange={this._onChange}
          />
        ) : (
          <CreditCardInput
            autoFocus
            requiresName
            requiresCVC
            requiresPostalCode
            cardScale={1.0}
            labelStyle={s.label}
            inputStyle={s.input}
            validColor={"black"}
            invalidColor={"red"}
            placeholderColor={"darkgray"}
            onFocus={this._onFocus}
            onChange={this._onChange}
          />
        )}
      </View>
    );
  }
}
