export const state = () => ({
  dialog: {
    isShow: false,
    title: '',
    message: ''
  },
  register: {
    firstname: '',
    lastname: '',
    gender: 1,
    email: '',
    phone: '',
    birthday: new Date().toISOString().substr(0, 10),
    company: '',
    position: ''
  }
})

export const getters = {
  getRegister(state){
    return state.register
  },
  getDialog(state){
    return state.dialog
  }
}

export const mutations = {
  SET_REGISTER(state, data){
    state.register = {
      ...state.register,
      ...data
    }
  },
  SET_DIALOG(state, data){
    state.dialog = {
      ...state.dialog,
      ...data
    }
  }
}

export const actions = {
  setRegister({ commit }, data){
    commit('SET_REGISTER', data)
  },
  setDialog({ commit }, data){
    commit('SET_DIALOG', data)
  }
}