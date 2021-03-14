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
      @submit.prevent="submitForm"
    >
      <!-- This field is needed in order for the form to work. The name attribute has to be "form-name" -->
      <input type="hidden" name="form-name" :value="formName">
      <!-- This field works as our honeypot -->
      <p class="hidden-field">
        <label>Don’t fill this out: <input name="bot-field"></label>
      </p>
      <div v-for="(field, fieldIndex) in fields" :key="fieldIndex" class="field-group" :class="{ 'form-error': $v.forms[formName].fields[field.name].$error }">
        <!-- For email type we render different errors -->
        <template v-if="field.name === 'email'">
          <div class="label-wrapper">
            <label :key="field.label" class="form-label" :for="field.name">
              {{ field.label }}
            </label>
            <span v-show="!$v.forms[formName].fields[field.name].required" class="error">Campo requerido</span>
            <span v-show="!$v.forms[formName].fields[field.name].email" class="error">Formato de correo invalido</span>
          </div>
          <input
            :id="field.name"
            :key="field.name"
            v-model.trim.lazy="forms[formName].fields[field.name]"
            :type="field.type"
            class="form-field"
            :name="field.name"
            @blur="$v.forms[formName].fields[field.name].$touch()"
          >
        </template>
        <!-- For phone type we render different errors -->
        <!-- We are using model to dynamic created keys on the data.form.fields -->
        <template v-else-if="field.name === 'phone'">
          <div class="label-wrapper">
            <label :key="field.label" class="form-label" :for="field.name">
              {{ field.label }}
            </label>
            <span v-show="!$v.forms[formName].fields[field.name].required" class="error">Campo requerido</span>
            <span v-show="!$v.forms[formName].fields[field.name].validatePhone" class="error">Formato de telefono invalido</span>
          </div>
          <input
            :id="field.name"
            :key="field.name"
            v-model.trim.lazy="forms[formName].fields[field.name]"
            :type="field.type"
            class="form-field"
            :name="field.name"
            @blur="$v.forms[formName].fields[field.name].$touch()"
          >
        </template>
        <template v-else>
          <div class="label-wrapper">
            <label :key="field.label" class="form-label" :for="field.name">
              {{ field.label }}
            </label>
            <span v-show="!$v.forms[formName].fields[field.name].required" class="error">Campo requerido</span>
            <span v-show="!$v.forms[formName].fields[field.name].minLength" class="error">Minimo {{ $v.forms[formName].fields[field.name].$params.minLength ? $v.forms[formName].fields[field.name].$params.minLength.min : '' }} caracteres</span>
          </div>
          <!-- .lazy is used to trigger a model update on blur -->
          <input
            :id="field.name"
            :key="field.name"
            v-model.trim.lazy="forms[formName].fields[field.name]"
            :type="field.type"
            class="form-field"
            :name="field.name"
            @blur="$v.forms[formName].fields[field.name].$touch()"
          >
        </template>
      </div>
      <button
        class="form-button"
        :class="{green}"
        type="submit"
        :form="formName"
        value="Submit"
      >
        {{ buttonLabel }}
      </button>
      <span v-if="submitted && disabledForm" class="error">Todos los campos deben estar llenos!</span>
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
import { required, minLength, email } from 'vuelidate/lib/validators'

// custom validation function
import validatePhone from '~/utils/validatePhone'
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
  },
  data () {
    return {
      forms: {
        aliados: {
          fields: {}
        },
        user: {
          fields: {}
        }
      },
      submitted: false
    }
  },
  computed: {
    disabledForm ():boolean {
      return this.$v.forms[this.formName].$invalid
    }
  },
  methods: {
    encode (data:any):string {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    submitForm () {
      if (this.disabledForm) {
        this.submitted = true
      } else {
        const axiosConfig = {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
        const payload = this.forms[this.formName].fields
        this.$axios.post(
<<<<<<< HEAD
          'https://mekaniko.cl/',
=======
          '/',
>>>>>>> parent of a70c01d (Using fetch API)
          this.encode({
            'form-name': this.formName,
            ...payload
          }),
          axiosConfig
        )
      }
    }
  },
  // I need to specify the names of the expected forms. They should be separated.
  validations: {
    forms: {
      aliados: {
        fields: {
          name: {
            required,
            minLength: minLength(3)
          },
          business: {
            required,
            minLength: minLength(0)
          },
          phone: {
            required,
            validatePhone,
            minLength: minLength(0)
          },
          email: {
            required,
            email,
            minLength: minLength(0)
          }
        }
      },
      user: {
        fields: {
          name: {
            required,
            minLength: minLength(3)
          },
          city: {
            required,
            minLength: minLength(0)
          },
          email: {
            required,
            email,
            minLength: minLength(0)
          }
        }
      }

    }
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
    position: relative;

    .hidden-field {
      display: none;
    }

    .field-group {
      display: flex;
      flex-direction: column;

      .label-wrapper {
        display: flex;
        justify-content: space-between;

        label {
          font-size: 12px;
        }

        span {
          color: red;
          display: none;
        }
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

      &.form-error {
        .label-wrapper {
          label {
            color: red;
          }

          span {
            display: initial;
          }
        }

        input {
          border: 1px solid red;
        }
      }
    }

    span.error {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 15px);
      color: red;
      text-align: center;
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
      height: auto;

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
        margin: 16px auto;
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
