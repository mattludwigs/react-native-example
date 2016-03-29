const cart = {
  _items: [],

  add(product) {
    this._items.push(product);
  }
}

export default cart;