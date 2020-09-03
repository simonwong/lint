export default {
  namespace: 'global',
  state: {
    scrollHeight: {
      applyOrder: 0,
    },
  },
  effects: {},
  reducers: {
    setData(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
    setScrollHeight(state, { payload }) {
      return {
        ...state,
        scrollHeight: {
          ...state.scrollHeight,
          ...payload,
        },
      }
    },
  },
}
