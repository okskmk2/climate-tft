import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// {{$store.state.currentTitle}}
export default new Vuex.Store({
  state: {
    currentTitle: "",
    isTurnOff: false,
    modalInnerComponent: null,
  },
  mutations: {
    setTitle(state, title) {
      state.currentTitle = title;
      document.title = title + " | 기후위기TFT";
    },
    turnOff(state) {
      state.isTurnOff = true;
    },
    turnOn(state) {
      state.isTurnOff = false;
    },
    setModalInnerComponent(state, component) {
      state.modalInnerComponent = component;
    },
    closeModal(state){
      state.isTurnOff = false;
      state.modalInnerComponent = null;
    }
  },
});
