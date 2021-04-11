<template>
  <div id="app">


<Click />
<Hover /> 




    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Aman Kumar"/> -->
    <component v-bind:is="cmp"></component>
    <button
      class="glow-on-hover"
      type="button"
      v-on:click="updateCmp('sidemenu')"
    >
      Side Menu
    </button>
    <button
      class="glow-on-hover"
      type="button"
      v-on:click="updateCmp('header')"
    >
      Header
    </button>

    <nav id="links">
      <ul>
        <li class="li1">
          <router-link to="/">Home</router-link>
        </li>
        
        <li class="li1">
          <router-link to="/about">About</router-link>
        </li>
        <li class="li1">
          <router-link to="/contact">Contact</router-link>
        </li>
        <li class="li1">
          <router-link to="/watcher">Watcher</router-link>
        </li>
        <li class="li1">
          <router-link to="/computed">Computed</router-link>
        </li>
        <li class="li1">
          <router-link to="/dynamic">Dynamic</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>


<script>
import SideMenu from "@/components/SideMenu";
import Header from "@/components/Header";
import Click from '@/components/Click'
import Hover from '@/components/Hover'

export default {
  name: "App",
  components: {
    // ClickCounter,
    // HoverCounter,
    Click,
    Hover,
    sidemenu: SideMenu,
    header: Header,
  },
  data() {
    return {
      cmp: "sidemenu",
    };
  },
  methods: {
    updateCmp(item) {
      this.cmp = item;
    },
  },
};
</script>

<style>
.li1{
float: left;
padding: 8px;
list-style: none;
}

#links {
  margin: 2px ;
  padding: 5px;
  position: absolute;
  bottom: 95%;
  left: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.glow-on-hover {
  width: 220px;
  height: 50px;
  left: 35%;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}

.glow-on-hover:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:active {
  color: #000;
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
