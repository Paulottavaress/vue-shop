export default {
  addProductToCart(context, payload) {
    const productInCartIndex = context.getters.items.findIndex(
      (ci) => ci.productId === payload.id
    );

    if (productInCartIndex >= 0) {
      context.commit('increaseProductQty', productInCartIndex);
    } else {
      const newItem = {
        productId: payload.id,
        title: payload.title,
        image: payload.image,
        price: payload.price,
        qty: 1,
      };
      context.commit('addItem', newItem);
    }
    context.commit('increaseTotalQty');
    context.commit('increaseTotalPrice', payload.price);
  },
  removeProductFromCart(context, payload) {
    const productInCartIndex = context.getters.items.findIndex(
      (cartItem) => cartItem.productId === payload
    );
    const prodData = context.getters.items[productInCartIndex];
    context.commit('decreaseProductQty', productInCartIndex);
    context.commit('decreaseTotalQty', prodData.qty);
    context.commit('decreaseTotalPrice', {
      price: prodData.price,
      qty: prodData.qty
    });
  }
};