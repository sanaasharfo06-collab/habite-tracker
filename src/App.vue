```vue
<template>
  <Navbar />

  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
  },
});
</script>


<style>
#app {
  background-color: #f8f7fc;
  color: #2d2a3e;
  font-family: Arial, sans-serif;

  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;
}

/* Mobile */
@media (max-width: 479px) {
  #app {
    padding: 12px;
  }
}

/* Large mobile */
@media (min-width: 480px) and (max-width: 767px) {
  #app {
    padding: 16px;
  }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  #app {
    padding: 20px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  #app {
    padding: 28px;
  }
}
</style>

```
