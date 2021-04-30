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
    <!-- <div id="intro-video" ref="iframe-wrapper" class="iframe-wrapper">
      <iframe
        src="https://player.vimeo.com/video/542290658?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        title="final_6084609644b14600294d777f_936667100"
      />
    </div> -->
    <!-- <ClientOnly>
      <vimeo-player ref="player" :video-id="videoId" :controls="false" />
    </ClientOnly> -->
    <!-- <video src="~/assets/videos/mekaniko.mp4" /> -->
    <div class="right">
      <div
        v-video-player:myVideoPlayer="playerOptions"
        class="video-player-box"
        :playsinline="playsinline"
      />
    </div>
    <img src="~/assets/images/grid.png" class="gridd">
    <BlobOne class="blob1" />
    <BlobTwo class="blob2" />
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
import ArrowBig from '~/assets/svgs/arrow-big.svg?inline'
import TriangleSvg from '~/assets/svgs/triangle.svg?inline'
import DiamondSvg from '~/assets/svgs/diamond.svg?inline'
import CrossSvg from '~/assets/svgs/cross.svg?inline'

export default Vue.extend({
  components: {
    Scribble,
    ArrowBig,
    TriangleSvg,
    DiamondSvg,
    CrossSvg,
    BlobOne,
    BlobTwo
  },
  data () {
    return {
      videoId: '542290658',
      // component options
      playsinline: true,
      // videojs options
      playerOptions: {
        poster: require('../assets/images/image129.png'),
        fluid: true,
        muted: false,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: require('../assets/videos/mekaniko.mp4')
        }]
      }
    }
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

  .right {
    margin: auto;
    width: 40vw;

    .video-player-box {
      display: flex;
      align-items: center;
      flex: 1;
      z-index: 99;
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
      width: 270px;
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
    height: auto;
    flex-direction: column;
    padding-top: 110px;
    position: relative;

    .left {
      width: 100vw;
      margin: 0;
      align-items: initial;

      .text {
        width: 320px;
        margin: auto;
        margin-bottom: 80px;
        text-align: center;

        h1 {
          margin-bottom: 24px;
        }

        h3 {
          white-space: normal;
          line-height: 100%;
        }

        svg {
          position: absolute;
          top: 36px;
          right: 0;
          left: 166px;
          width: 50%;
        }
      }
    }

    .right {
      width: 100%;
      padding: 80px 30px;
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

  @include screenSizes(desktopExtraLarge) {
    width: 90vw;
    margin: auto;

    .left {
      /* sd */
      margin-right: 120px;

      .text {
        svg {
          top: 177px;
          width: 280px;
          height: auto;
          right: 255px;
        }
      }

      .buttons {
        width: 400px;

        button {
          height: 70px;
          font-size: 2.4rem;
        }
      }
    }

    img {
      &.mechanic {
        width: 270px;
      }

      &.mechanic2 {
        width: 600px;
      }

      &.girl {
        width: 400px;
      }
    }
  }
}
</style>
