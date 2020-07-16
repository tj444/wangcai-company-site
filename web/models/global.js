export default {
  namespace: 'global',
  state: {
    modal: false,
  },
  reducers: {
    setModal(state, { payload }) {
      return {
        ...state,
        modal: payload,
      };
    },
  },
  effects: {},
};
