import { Button, Text, Icon } from "native-base";
import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import CartStore from "../store/cartStore";
import { observer } from "mobx-react";

class CartButton extends Component {
  render() {
    return (
      <Button
        light
        transparent
        onPress={() => this.props.navigation.navigate("CoffeeCart")}
      >
        <Text>
          {CartStore.countCart}
          <Icon
            type="FontAwesome"
            name="coffee"
            style={{ color: "white", fontSize: 15 }}
          />
        </Text>
      </Button>
    );
  }
}

export default withNavigation(observer(CartButton));
