// This file is for extending types in Vue to ensure proper typescript support
import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $v:{
      form:{
        fields:{
          name:{
            $model:string
          }
        }
      }
    }
  }
}
