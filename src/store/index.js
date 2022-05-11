import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cupos: [
      {
        nombre: "",
        utilizado: null,
        disponible: null,
      },
    ],
    usuario: {
      nombre: "",
      apellido: "",
      mensaje: "",
    },
    banks: [
      {
        id: "",
        nombre: "",
      },
    ],
  },
  getters: {},
  mutations: {
    SET_CUPOS(state, payload) {
      state.cupos = payload;
    },
    SET_USUARIO(state, payload) {
      state.usuario = payload;
    },
    SET_BANKS(state, payload) {
      state.banks = payload;
    },
  },
  actions: {
    async getDashboard({ commit }) {
      const URL = "dashboard.json";
      try {
        const request = await axios.get(URL);
        const cupos = request.data.cupos;
        const usuario = request.data.usuario;
        commit("SET_CUPOS", cupos);
        commit("SET_USUARIO", usuario);
      } catch (error) {
        console.log(error);
      }
    },
    async getBanks({ commit }) {
      const URL = "bancos.json";
      try {
        const request = await axios.get(URL);
        commit("SET_BANKS", request.data.bancos);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
