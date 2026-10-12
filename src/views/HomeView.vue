<template>
  <h1>Habit Tracker</h1>
  <p>Small steps every day lead to big changes.</p>
  <h3>Your Journey Starts Here</h3>
  <p v-if="habits.length != 0">Keep building your routine</p>
  <EmptyState v-if="habits.length === 0" />
  <div class="home-container"  v-if="habits.length != 0">
    <h3>Total Habits</h3>
    <h1>{{ habits.length }} </h1>
    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-party-popper preview-icon"><path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/></svg></span>
  </div>
  
</template>

<script>
import EmptyState from "@/components/EmptyState.vue";
export default {
  data() {
    return {
      habits: JSON.parse(localStorage.getItem("habits")) || [],
    };
  },
  components: {
    EmptyState,
  },
};
</script>
<style>
h1 {
  text-align: center;
  margin-top: 60px;
  font-size: 42px;
  color: #000000bc;
  font-weight: 800;
}

h3{
  text-align: center;
  margin-top: 20px;
  font-size: 28px;
  color:  #8a7cf6bc;
  font-weight: 600;
}
.home-container {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  padding: 10px 10px 30px 10px;

}
.home-container h1 {
  font-size: 40px;
  color: #312d43;
  font-weight: 800;
  margin: 10px 0px;
}
 p {
  display: inline-block;
  margin: 10px 10px 12px 10px;
  vertical-align: middle;
}

 span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #8a7cf6bc;
  margin: 0 0 9px 0;
  vertical-align: middle;
  font-size: 30px;
}

</style>
