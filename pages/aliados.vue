
<template>
  <main class="wrapper">
    <img src="~/assets/images/illustration.png" class="illustration">
    <CircleSvg class="circle" />
    <div class="left">
      <h1>
        Llega a más clientes y aumenta los ingresos de tu <span class="green">negocio.</span>
      </h1>
    </div>
    <div class="right">
      <Form
        form-name="aliados"
        description="Estas interesado en registrar tu taller en <span class='green'>Mekaniko</span>? Envíanos tus datos y serás contactado por nuestro equipo."
        button-label="Registrar mi taller!"
        :fields="fields"
        :footer="footer"
        green
      />
    </div>
    <p class="copyright">
      Copyright © 2021 mekaniko
    </p>
  </main>
</template>
<script lang="ts">
import Vue from 'vue'

import CircleSvg from '~/assets/svgs/circle.svg?inline'

export default Vue.extend({
  components: {
    CircleSvg
  },
  data () {
    return {
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Tu Nombre'
        },
        {
          name: 'business',
          type: 'text',
          label: 'Nombre del taller'
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Nº Telefono'
        },
        {
          name: 'email',
          type: 'text',
          label: 'Correo Electrónico'
        }
      ],
      footer: {
        text: 'Necesitas reparar tu auto?',
        url: '/unete',
        linkText: 'Obtén 10% de descuento'
      }
    }
  }
})
</script>

<style scoped lang="scss">
main {
  display: flex;
  height: 100vh;
  overflow: hidden;

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 60px;
    width: 630px;

    h1 {
      margin-top: 18vh;

      .green {
        color: $green;
      }
    }
  }

  .right {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .illustration {
    position: absolute;
    width: 680px;
    bottom: 0;
    z-index: -1;
  }

  .circle {
    position: absolute;
    right: 0;
    z-index: -1;
    filter: blur(10px)
  }

  .copyright {
    font-size: 10px;
    color: $blackTer;
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  @include screenSizes(phone) {
    flex-direction: column;
    height: auto;
    position: relative;
    min-height: 100vh;

    .illustration {
      width: 50%;
    }

    .circle {
      width: 46%;
      height: 28%;
      filter: blur(10px)
    }

    .left {
      margin-left: 24px;
      width: 280px;
      margin-bottom: 50px;

      h1 {
        margin-top: 12vh;
      }
    }

    .right {
      margin-bottom: 48px;
    }
  }
}
</style>
