<template>
  <main class="wrapper">
    <img src="~/assets/images/illustration2.png" class="illustration">
    <svg
      class="circle"
      width="379"
      height="418"
      viewBox="0 0 379 418"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path opacity="0.39" d="M259.555 417.111C402.904 417.111 519.111 300.904 519.111 157.555C519.111 14.2069 402.904 -102 259.555 -102C116.207 -102 0 14.2069 0 157.555C0 300.904 116.207 417.111 259.555 417.111Z" fill="#17DEC2" />
    </svg>
    <div class="left">
      <h1>
        Descubre, compara y reserva tu proxima visita al <span class="green">mekaniko.</span>
      </h1>
    </div>
    <div class="right">
      <div class="form-wrapper">
        <div class="logo small">
          <svg width="31" height="35" viewBox="0 0 31 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.1555 0L30.3109 8.75V26.25L15.1555 35L0 26.25V8.75L15.1555 0Z" fill="#2D2D2D" />
            <path d="M19.4049 20.0002C20.7176 18.6874 21.4551 16.9069 21.4551 15.0504C21.4551 13.1939 20.7176 11.4134 19.4049 10.1007C18.0921 8.78791 16.3116 8.05042 14.4551 8.05042C12.5986 8.05041 10.8181 8.78791 9.50537 10.1007L14.4551 15.0504L19.4049 20.0002Z" fill="white" />
            <path d="M11.2553 15.0005C10.6053 15.6505 10.0897 16.4222 9.73792 17.2715C9.38614 18.1207 9.20508 19.031 9.20508 19.9502C9.20508 20.8695 9.38614 21.7798 9.73792 22.629C10.0897 23.4783 10.6053 24.25 11.2553 24.9C11.9053 25.55 12.677 26.0656 13.5263 26.4174C14.3756 26.7692 15.2858 26.9502 16.2051 26.9502C17.1244 26.9502 18.0346 26.7692 18.8839 26.4174C19.7332 26.0656 20.5048 25.55 21.1549 24.9L16.2051 19.9502L11.2553 15.0005Z" fill="white" />
          </svg>
          <p>mekaniko</p>
        </div>
        <h2>Estamos a punto de lanzar nuestro producto 🚀</h2>
        <p class="description">
          Apuntate nuestra lista de invitados especiales y obten <span class="green">10% de descuento</span> en tu primer servicio mecanico!
        </p>

        <form id="form" name="contact" action="" method="post">
          <label class="form-label" for="name">
            Nombre
          </label>
          <input id="name" class="form-field" name="name">
          <label class="form-label" for="city">
            Ciudad
          </label>
          <input id="name" class="form-field" name="city">
          <label class="form-label" for="email">
            Correo electronico
          </label>
          <input id="email" class="form-field" name="email">
          <button class="form-button" type="submit" form="form" value="Submit">
            Si, quiero mi descuento
          </button>
        </form>
        <p class="footer">
          Eres dueño de un taller?  <nuxt-link to="/aliados">
            <span class="green">Registrate en nuestra lista de aliados</span>
          </nuxt-link>
        </p>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
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

    .form-wrapper {
      padding: 24px;
      width: 500px;
      height: 600px;
      border-radius: 24px;
      background: #fff;
      box-shadow:
        20px 20px 60px #d9d9d9,
        -20px -20px 60px #fff;

      .logo {
        width: fit-content;
      }

      form {
        display: flex;
        flex-direction: column;
        height: 290px;
        width: 80%;
        margin: auto;
        margin-top: 40px;
        margin-bottom: 16px;

        label {
          font-size: 12px;
        }

        input {
          height: 36px;
          border-radius: 10px;
          background: $field;
          padding: 0 16px;
          font-size: 14px;
          margin-bottom: 8px;
          margin-top: 4px;
        }
      }

      button {
        background: $orange;
        width: 300px;
        margin: auto;
        height: 40px;
        border-radius: 40px;
        color: white;
        font-size: 16px;
      }

      h2 {
        width: 340px;
        text-align: center;
        margin: 24px auto;
      }

      .description {
        width: 340px;
        text-align: center;
        margin: auto;
        color: $blackTer;
        line-height: 110%;
      }

      .footer {
        color: $blackTer;
        font-size: 12px;
        margin: auto;
        width: fit-content;

        a {
          color: $green;
          text-decoration: underline;
        }
      }
    }
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
  }
}
</style>
