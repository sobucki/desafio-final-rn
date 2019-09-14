/* eslint-disable max-len */
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  addItemToCart: ['item'],
});

export const CartTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  totalValue: 0,
  items: [],
  loading: false,
});

// const addItem = (state, {item}) => {

// };

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_ITEM_TO_CART]: (state, { item }) => {
    const newItem = { ...item, idCart: new Date() };
    const items = [...state.items, newItem];
    let total = 0;
    items.forEach((item) => {
      total += new Number(item.price);
    });
    // console.tron.log(total);
    return state.merge({ items: [...state.items, newItem], loading: false, totalValue: total });
  },
});
