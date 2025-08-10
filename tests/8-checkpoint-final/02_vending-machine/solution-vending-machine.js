class VM {
  constructor(inventory) {
    this.inventory = inventory;
  }

  sale(itemID) {
    let item = this.inventory[itemID];
    if (item && item.stock > 0) {
      item.stock--;
      return `1 ${item.name} - Thank you and come again!`;
    }
  }

  stockTotal() {
    const totalStock = Object.values(this.inventory)
      .map((item) => item.stock)
      .reduce((sum, stock) => sum + stock, 0);

    return totalStock > 0 ? `${totalStock} item(s)` : "Out of Stock";
  }
}
