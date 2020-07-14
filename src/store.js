import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// {{$store.state.currentTitle}}
export default new Vuex.Store({
  state: {
    currentTitle: "",
    isTurnOff: false,
    modalInnerComponent: null,
    reloadIssueBoard: false,
    snackbarText: "",
    isSnackbarUp: false,
    snackbarText: "",
  },
  mutations: {
    toggleReloadIssueBoard(state) {
      state.reloadIssueBoard = !state.reloadIssueBoard;
    },
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
    openModal(state, component) {
      state.modalInnerComponent = component;
      state.isTurnOff = true;
    },
    closeModal(state) {
      state.isTurnOff = false;
      state.modalInnerComponent = null;
    },
    showSnackbar(state) {
      state.isSnackbarUp = true;
    },
    setSnackbarText(state, text) {
      state.snackbarText = text;
    },
    hideSnackbar(state) {
      state.isSnackbarUp = false;
    },
  },
  actions: {
    snackbar(context, text) {
      context.commit("setSnackbarText", text);
      context.commit("showSnackbar");
      setTimeout(() => {
        context.commit("hideSnackbar");
      }, 3000);
      setTimeout(() => {
        context.commit("setSnackbarText", "");
      }, 4000);
    },
  },
});
