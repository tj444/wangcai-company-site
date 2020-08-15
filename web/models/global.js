export default {
  namespace: 'global',
  state: {
    modal: false,
    title: undefined,
  },
  reducers: {
    setModal(state, { payload }) {
      return {
        ...state,
        modal: payload,
      };
    },
    setTitle(state, { payload }) {
      return {...state, title: payload};
    },
  },
  effects: {},
};
