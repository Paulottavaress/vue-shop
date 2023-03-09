export default {
  increaseTotalQty(state) {
    state.qty += 1;
  },
  increaseTotalPrice(state, payload) {
    state.total += payload;
  },
  increaseProductQty(state, payload) {
    state.items[payload].qty++;
  },
  addItem(state, payload) {
    state.items.push(payload);
  },
  decreaseTotalQty(state) {
    state.qty -= 1;
  },
  decreaseTotalPrice(state, payload) {
    state.total -= payload.price * payload.qty;
  },
  decreaseProductQty(state, payload) {
    state.items.splice(payload, 1);
  },
}