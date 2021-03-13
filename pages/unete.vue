<template>
  <main class="wrapper">
    <img src="~/assets/images/illustration2.png" class="illustration">
    <CircleSvg class="circle" />
    <div class="left">
      <h1>
        Descubre, compara y reserva tu próxima visita al <span class="green">mekaniko.</span>
      </h1>
    </div>
    <div class="right">
      <div class="right">
        <Form
          form-name="user"
          description="Apúntate en nuestra lista de invitados especiales y obtén <span class='green'>10% de descuento</span> en tu primer servicio mecánico!"
          button-label="Si, quiero mi descuento!"
          :fields="fields"
          :footer="footer"
        />
      </div>
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
          label: 'Nombre'
        },
        {
          name: 'city',
          type: 'text',
          label: 'Ciudad'
        },
        {
          name: 'email',
          type: 'text',
          label: 'Correo Electrónico'
        }
      ],
      footer: {
        text: 'Eres dueño de un taller?',
        url: '/aliados',
        linkText: 'Regístralo en nuestra lista de aliados'
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
      margin-top: 25vh;

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
      margin-bottom: 24px;
    }
  }
}
</style>
