const Product = {
  namespaced: true,
  state: {
    product: {

    }
  },
  getters: {
    getProduct: ({ product }) => product
  },
  mutations: {
    SAVEDATASERVER(state, data){
      state.product = data

    }
  },
  actions: {
    getServerData({commit}, data){
      commit("SAVEDATASERVER", data)
    }
  },
}

export default Product
