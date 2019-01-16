import { decorate, observable, computed } from "mobx";

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
  get countCart() {
    let totalQuantity = 0;
    this.items.forEach(item => (totalQuantity += item.quantity));
    return totalQuantity;
  }
}

decorate(CartStore, {
  items: observable,
  countCart: computed
});

export default new CartStore();
