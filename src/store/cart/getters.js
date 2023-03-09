export default {
  qty(state) {
    return state.qty;
  },
  items(state) {
    return state.items;
  },
  total(state) {
    return state.total;
  },
  totalFormatted(state) {
    return state.total.toFixed(2);
  }
};