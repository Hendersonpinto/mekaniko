<template>
  <div class="form-wrapper">
    <div class="logo small">
      <Logo />
      <p>mekaniko</p>
    </div>
    <h2>{{ title }}</h2>
    <p class="description" v-html="description" />
    <!-- Apuntate nuestra lista de invitados especiales y obten <span class="green">10% de descuento</span> en tu primer servicio mecanico! -->

    <form
      :id="formName"
      :name="formName"
      action=""
      data-netlify="true"
      netlify-honeypot="bot-field"
      method="post"
    >
      <!-- This field is needed in order for the form to work -->
      <input type="hidden" name="form-name" :value="formName">
      <!-- This field works as our honeypot -->
      <p class="hidden-field">
        <label>Don’t fill this out: <input name="bot-field"></label>
      </p>
      <template v-for="field in fields">
        <label :key="field.label" class="form-label" :for="field.name">
          {{ field.label }}
        </label>
        <input :id="field.name" :key="field.name" :type="field.type" class="form-field" :name="field.name">
      </template>
      <button class="form-button" :class="{green}" type="submit" :form="formName" value="Submit">
        {{ buttonLabel }}
      </button>
    </form>
    <p class="footer">
      {{ footer.text }} <nuxt-link :to="footer.url">
        <span class="green">{{ footer.linkText }}</span>
      </nuxt-link>
    </p>
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'

import { Field } from '~/types/Field'
import { Footer } from '~/types/Footer'
import Logo from '~/assets/svgs/logo.svg?inline'

export default Vue.extend({
  components: {
    Logo
  },
  props: {
    green: {
      type: Boolean,
      default: false
    },
    formName: {
      type: String,
      default: 'contact'
    },
    title: {
      type: String,
      default: 'Estamos a punto de lanzar nuestro producto 🚀'
    },
    description: {
      type: String,
      default: ''
    },
    buttonLabel: {
      type: String,
      default: 'Submit'
    },
    fields: {
      type: Array,
      default () {
        return []
      }
    } as PropOptions<Field[]>,
    footer: {
      type: Object,
      default () {
        return {}
      }
    } as PropOptions<Footer>
  }
})
</script>

<style scoped lang="scss">
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

    .hidden-field {
      display: none;
    }

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
      border: 1px solid transparent;
      transition: all 300ms ease-in-out;

      &:hover {
        border: 1px solid rgb(109, 109, 109);
        background: white;
      }
    }
  }

  button {
    width: 300px;
    margin: auto;
    height: 40px;
    border-radius: 40px;
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

  @include screenSizes(phone) {
    width: 300px;
    padding: 12px;
    height: auto;

    h2 {
      margin: 12px 0;
      width: 100%;
    }

    .description {
      width: 210px;
      font-size: 1.2rem;
    }

    form {
      margin-top: 24px;
      width: 90%;
      margin-bottom: 4px;
      height: 230px;

      label {
        font-size: 1rem;
      }

      input {
        height: 30px;
      }

      button {
        width: 200px;
        height: 36px;
        font-size: 1.4rem;
      }
    }

    .footer {
      font-size: 1.2rem;
      text-align: center;
      width: 215px;
    }
  }
}
</style>
