import { decorate, observable } from "mobx";

class CartStore {
  constructor() {
    this.items = [];
  }
  addItemToCart(order) {
    let found = this.items.find(item => {
      return item.drink === order.drink && item.option === order.option;
    });
    if (!found) {
      this.items.push(order);
    } else {
      found.quantity += order.quantity;
    }
  }
  removeItemFromCart(order) {
    this.items = this.items.filter(item => {
      item !== order;
    });
  }
  checkoutCart() {
    this.items = [];
    alert("order placed");
  }
}

decorate(CartStore, {
  items: observable
});

export default new CartStore();
