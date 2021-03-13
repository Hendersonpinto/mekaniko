<template>
  <main class="wrapper">
    <div class="left">
      <div class="text">
        <h1>
          Descubre los <span class="green">mejores</span> talleres mecánicos
        </h1>
        <Scribble />
        <h3>Compara precios. Escoge un taller. Decide la hora. Paga online</h3>
      </div>
      <div class="buttons">
        <nuxt-link to="/unete">
          <button>
            Únete a nuestra plataforma
          </button>
        </nuxt-link>
        <p>o</p>
        <nuxt-link to="/aliados">
          <button class="white">
            Registra tu taller
          </button>
        </nuxt-link>
      </div>
    </div>
    <img v-if="$mq === 'desktop'" src="~/assets/images/mechanic.png" class="mechanic">
    <img v-if="$mq === 'desktop'" src="~/assets/images/mechanic2.png" class="mechanic2">
    <img v-if="$mq === 'desktop'" src="~/assets/images/girl-on-car.png" class="girl">
    <img src="~/assets/images/grid.png" class="gridd">
    <BlobOne class="blob1" />
    <BlobTwo class="blob2" />
    <ArrowSmall class="arrow-small" />
    <ArrowBig class="arrow-big" />
    <TriangleSvg class="triangle1" />
    <TriangleSvg class="triangle2" />
    <TriangleSvg class="triangle3" />
    <TriangleSvg class="triangle4" />
    <DiamondSvg class="diamond1" />
    <DiamondSvg class="diamond2" />
    <CrossSvg class="cross1" />
    <CrossSvg class="cross2" />
    <p class="copyright">
      Copyright © 2021 mekaniko
    </p>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

import Scribble from '~/assets/svgs/scribble.svg?inline'
import BlobOne from '~/assets/svgs/blob1.svg?inline'
import BlobTwo from '~/assets/svgs/blob2.svg?inline'
import ArrowSmall from '~/assets/svgs/arrow-small.svg?inline'
import ArrowBig from '~/assets/svgs/arrow-big.svg?inline'
import TriangleSvg from '~/assets/svgs/triangle.svg?inline'
import DiamondSvg from '~/assets/svgs/diamond.svg?inline'
import CrossSvg from '~/assets/svgs/cross.svg?inline'

export default Vue.extend({
  components: {
    Scribble,
    ArrowSmall,
    ArrowBig,
    TriangleSvg,
    DiamondSvg,
    CrossSvg,
    BlobOne,
    BlobTwo
  },
  head () {
    return {
      bodyAttrs: {
        class: 'over-hidden'
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
    justify-content: center;
    margin-left: 60px;
    z-index: 10;

    .text {
      width: 520px;
      position: relative;
      margin-bottom: 140px;

      h1 {
        margin-bottom: 8px;
        line-height: 130%;

        .green {
          color: $green;
        }
      }

      svg {
        position: absolute;
        top: 49px;
        right: 113px;
      }

      h3 {
        letter-spacing: 0.3px;
        white-space: nowrap;
      }
    }

    .buttons {
      width: 300px;

      button {
        width: 100%;
        height: 45px;
        background: #17dec2;
        border-radius: 50px;
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 0.7px;
        color: white;
        border: none;

        &.white {
          color: #2d2d2d;
          border: 2px solid #2d2d2d;
          background: white;
        }
      }

      p {
        margin: auto;
        width: fit-content;

        /* margin: 16px 0; */
        margin-top: 12px;
        margin-bottom: 12px;
      }
    }
  }

  img {
    position: absolute;

    &.mechanic {
      width: 190px;
      top: 12%;
      right: 35%;
      z-index: 10;
    }

    &.mechanic2 {
      width: 450px;
      top: 23%;
      right: 0%;
    }

    &.girl {
      width: 300px;
      top: 35%;
      right: 20%;
    }

    &.gridd {
      width: 55px;
      top: 9%;
      right: 47%;
      z-index: -1;
    }
  }

  svg {
    position: absolute;

    &.blob1 {
      top: 9%;
      right: 6%;
      z-index: -2;
      filter: blur(4px);
    }

    &.blob2 {
      right: -10%;
      top: 15%;
      z-index: -2;
      filter: blur(10px);
    }

    &.arrow-small {
      top: 17%;
      right: 46%;
    }

    &.arrow-big {
      top: 63%;
      right: 6%;
      z-index: -2;
    }

    &.triangle1 {
      bottom: 17%;
      left: 31%;
    }

    &.triangle2 {
      top: 10%;
      left: 37%;
    }

    &.triangle3 {
      top: 50%;
      left: 10%;
    }

    &.triangle4 {
      bottom: 10%;
      right: 11%;
    }

    &.diamond1 {
      top: 64%;
      left: 50%;
    }

    &.diamond2 {
      top: 10%;
      right: 10%;
    }

    &.cross1 {
      bottom: 25%;
      left: 6%;
    }

    &.cross2 {
      top: 17%;
      left: 10%;
    }
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
    .left {
      width: 100vw;
      margin: 0;
      align-items: initial;

      .text {
        width: 260px;
        margin-left: 24px;
        margin-bottom: 80px;

        h1 {
          margin-bottom: 24px;
        }

        h3 {
          white-space: normal;
          line-height: 100%;
        }

        svg {
          position: absolute;
          top: 75px;
          right: 0;
          left: -8px;
          width: 50%;
        }
      }
    }

    .buttons {
      margin: 0 auto;
    }

    img {
      &.mechanic {
        display: none;
      }

      &.mechanic2 {
        display: none;
      }

      &.girl {
        display: none;
      }

      &.gridd {
        width: 55px;
        top: 77%;
        right: 4%;
      }
    }

    svg {
      &.blob1 {
        display: none;
      }

      &.blob2 {
        display: none;
      }

      &.arrow-small {
        display: none;
      }

      &.arrow-big {
        top: 63%;
        right: 6%;
        z-index: -2;
      }

      &.triangle1 {
        bottom: 8%;
      }

      &.diamond1 {
        top: 52%;
        left: 50%;
      }

      &.cross2 {
        top: 12%;
      }
    }
  }
}
</style>
