<template>
  <div>
    <nav>
      <nuxt-link to="/">
        <div class="logo">
          <svg width="31" height="35" viewBox="0 0 31 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.1555 0L30.3109 8.75V26.25L15.1555 35L0 26.25V8.75L15.1555 0Z" fill="#2D2D2D" />
            <path d="M19.4049 20.0002C20.7176 18.6874 21.4551 16.9069 21.4551 15.0504C21.4551 13.1939 20.7176 11.4134 19.4049 10.1007C18.0921 8.78791 16.3116 8.05042 14.4551 8.05042C12.5986 8.05041 10.8181 8.78791 9.50537 10.1007L14.4551 15.0504L19.4049 20.0002Z" fill="white" />
            <path d="M11.2553 15.0005C10.6053 15.6505 10.0897 16.4222 9.73792 17.2715C9.38614 18.1207 9.20508 19.031 9.20508 19.9502C9.20508 20.8695 9.38614 21.7798 9.73792 22.629C10.0897 23.4783 10.6053 24.25 11.2553 24.9C11.9053 25.55 12.677 26.0656 13.5263 26.4174C14.3756 26.7692 15.2858 26.9502 16.2051 26.9502C17.1244 26.9502 18.0346 26.7692 18.8839 26.4174C19.7332 26.0656 20.5048 25.55 21.1549 24.9L16.2051 19.9502L11.2553 15.0005Z" fill="white" />
          </svg>
          <p>mekaniko</p>
        </div>
      </nuxt-link>
      <nuxt-link v-if="$route.path ==='/'" to="/unete" class="iniciar">
        <button>
          <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 0C4.25994 0 2.4375 1.7944 2.4375 4V6.4H1.625C1.19402 6.4 0.780698 6.56857 0.475951 6.86863C0.171205 7.16869 0 7.57565 0 8V14.4C0 14.8243 0.171205 15.2313 0.475951 15.5314C0.780698 15.8314 1.19402 16 1.625 16H11.375C11.806 16 12.2193 15.8314 12.524 15.5314C12.8288 15.2313 13 14.8243 13 14.4V8C13 7.57565 12.8288 7.16869 12.524 6.86863C12.2193 6.56857 11.806 6.4 11.375 6.4H10.5625V4C10.5625 1.7944 8.74006 0 6.5 0ZM4.0625 4C4.0625 2.6768 5.15612 1.6 6.5 1.6C7.84388 1.6 8.9375 2.6768 8.9375 4V6.4H4.0625V4ZM7.3125 12.5784V14.4H5.6875V12.5784C5.40344 12.4182 5.17535 12.1771 5.0333 11.8867C4.89125 11.5963 4.84192 11.2704 4.89181 10.9518C4.94169 10.6333 5.08846 10.3371 5.31275 10.1023C5.53704 9.86759 5.82832 9.70527 6.14819 9.6368C6.38578 9.58508 6.63213 9.58652 6.86907 9.64103C7.10602 9.69554 7.32752 9.80172 7.51724 9.95174C7.70695 10.1018 7.86005 10.2918 7.96524 10.5078C8.07043 10.7239 8.12502 10.9604 8.125 11.2C8.12453 11.4798 8.04918 11.7545 7.90654 11.9965C7.7639 12.2385 7.55901 12.4392 7.3125 12.5784V12.5784Z" fill="currentColor" />
          </svg>
          <p>Iniciar sesión</p>
        </button>
      </nuxt-link>
    </nav>
    <Nuxt />
  </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

nav {
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding: 0 40px;
  align-items: center;
  position: absolute;
  width: 100%;
  z-index: 20;

  .iniciar {
    height: fit-content;

    button {
      border-radius: 6px;
      display: flex;
      background: black;
      width: 140px;
      height: 36px;
      margin: auto;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      border: 1px solid rgb(109, 109, 109);
      transition: all 300ms ease-in-out;

      svg {
        color: currentColor;
        margin-right: 8px;
      }

      p {
        color: white;
        font-size: 1.4rem;
      }

      &:hover {
        color: black;
        background: none;

        svg {
          fill: currentColor;
        }

        p {
          color: currentColor;
        }
      }
    }
  }

  @include screenSizes(phone) {
    padding: 0 24px;

    .logo {
      svg {
        width: 28px;
      }

      p {
        font-size: 22px;
      }
    }

    .iniciar button {
      width: fit-content;
      padding: 0 13px;

      svg {
        margin-right: 0;
      }

      p {
        display: none;
      }
    }
  }
}
</style>
