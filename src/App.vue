<template>
  <div id="app">
    <NavBar />
    <b-breadcrumb :items="items" />

    <!-- Modelo C - R - C => Container - Row - Col (- Row - Col) -->
    <b-container fluid>
      <b-row>
        <!--- Menú Lateral Aside -->
        <b-col cols="2">
          <b-list-group>
            <b-list-group-item>Cuenta Corriente</b-list-group-item>
            <b-list-group-item>Tarjeta de Crédito</b-list-group-item>
            <b-list-group-item>Línea de Crédito</b-list-group-item>
            <b-list-group-item
              ><router-link to="/new-transfer"
                >Transferencias</router-link
              ></b-list-group-item
            >
            <b-list-group-item>Pago de Servicios</b-list-group-item>
          </b-list-group>
        </b-col>
        <!--- Dashboard -->
        <b-col cols="10">
          <div v-if="urlName !== 'HomeView'">
            <b-nav tabs justified>
              <b-nav-item active>
                <router-link to="/new-transfer"
                  >Nueva Transferencia</router-link
                >
              </b-nav-item>
              <b-nav-item>
                <router-link to="/data-transfer"
                  >Cartola Transferencia</router-link
                >
              </b-nav-item>
            </b-nav>
          </div>
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  data() {
    return {
      mostrarNav: true,
      items: [
        {
          text: "Home",
          active: true,
          href: "/",
        },
      ],
    };
  },
  computed: {
    urlName() {
      return this.$route.name;
    },
  },
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
/* Estilos reset */
body,
p,
span,
h1,
h2,
div,
input,
button,
a,
section,
article {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
