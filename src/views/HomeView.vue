<template>
  <div class="home">
    <!--- Jumbotron -->
    <b-row class="mb-5">
      <b-col cols="12">
        <section class="header-dashboard">
          <b-img
            class="header-dashboard__image"
            src="https://picsum.photos/1024/400/?image=40"
            fluid
            alt="Bank Dashboard Image"
          ></b-img>
          <h1 class="header-dashboard__title">
            Bienvenido {{ usuario.nombre }}!
          </h1>
          <h2 class="header-dashboard__subtitle">
            {{ usuario.mensaje }}
          </h2>
        </section>
      </b-col>
    </b-row>
    <!--- Cards Indicadores -->
    <b-row>
      <b-col cols="6" v-for="(card, i) in cupos" :key="i">
        <section class="card-dashboard">
          <b-row>
            <b-col cols="4">
              <p>97%</p>
              <p>Ver Detalles</p>
            </b-col>
            <b-col cols="8">
              <h3>Cupo {{ card.nombre }}</h3>
              <div class="d-flex justify-content-around">
                <div>
                  <p>{{ card.utilizado }}</p>
                  <p>Utilizado</p>
                </div>
                <div>
                  <p>{{ card.disponible }}</p>
                  <p>Total</p>
                </div>
              </div>
            </b-col>
          </b-row>
        </section>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "HomeView",
  created() {
    this.getDashboard();
  },
  computed: {
    ...mapState(["cupos", "usuario"]),
  },
  methods: {
    ...mapActions(["getDashboard"]),
  },
};
</script>

<style lang="scss">
.header-dashboard {
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 10px;
  &__image {
  }
  &__title {
  }
  &__subtitle {
  }
}
.card-dashboard {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
}
</style>
