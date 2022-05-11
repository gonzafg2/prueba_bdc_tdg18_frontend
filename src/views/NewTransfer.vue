<template>
  <div>
    <b-row>
      <b-col cols="12">
        <h2>Nueva Transferencia</h2>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <h3>Cuenta de Origen</h3>
      </b-col>
      <b-col cols="12">
        <div
          class="form-check form-check-inline"
          v-for="(producto, i) in dataProductos"
          :key="i"
        >
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            :id="producto.id"
            :value="producto.value"
            v-model="dataRadio"
          />
          <label class="form-check-label" :for="producto.id">{{
            producto.label
          }}</label>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <h3>Cuenta de Destino</h3>
      </b-col>
      <b-col cols="12">
        <div class="d-flex align-items-center">
          <label class="me-3">Banco:</label>
          <b-form-select
            v-model="bankSelected"
            :options="banks"
            value-field="nombre"
            text-field="nombre"
          ></b-form-select>
        </div>
      </b-col>
      <b-col cols="12">
        <div class="d-flex align-items-center">
          <label class="me-3">N° de Cuenta:</label>
          <b-form-input v-model="name"></b-form-input>
        </div>
      </b-col>
      <b-col cols="12">
        <div class="d-flex align-items-center">
          <label class="me-3">RUT:</label>
          <b-form-input v-model="name"></b-form-input>
        </div>
      </b-col>
      <b-col cols="12">
        <div class="d-flex align-items-center">
          <label class="me-3">Nombre:</label>
          <b-form-input v-model="name"></b-form-input>
        </div>
      </b-col>
      <b-col cols="12">
        <div class="d-flex align-items-center">
          <label class="me-3">Monto:</label>
          <b-form-input v-model="name"></b-form-input>
        </div>
      </b-col>
      <b-col cols="12">
        <div class="d-flex align-items-center">
          <label class="me-3">Email:</label>
          <b-form-input v-model="name"></b-form-input>
        </div>
      </b-col>
      <b-col cols="12">
        <div class="d-flex align-items-center">
          <label class="me-3">Mensaje:</label>
          <b-form-input v-model="name"></b-form-input>
        </div>
      </b-col>
      <b-col cols="12">
        <b-button variant="primary">Transferir</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "NewTransfer",
  data() {
    return {
      dataRadio: "",
      dataProductos: [
        {
          id: "inlineRadio1",
          label: "Cuenta Corriente",
          value: "option1",
        },
        {
          id: "inlineRadio2",
          label: "Línea de Crédito",
          value: "option2",
        },
        {
          id: "inlineRadio3",
          label: "Tarjeta de Crédito",
          value: "option3",
        },
      ],
      name: "",
      bankSelected: "",
    };
  },
  created() {
    this.getBanks();
  },
  computed: {
    ...mapState(["banks"]),
  },
  methods: {
    ...mapActions(["getBanks"]),
  },
};
</script>
