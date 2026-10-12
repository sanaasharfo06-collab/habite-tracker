<template>
  <h1>My Habit</h1>
  <habite-forme @habit-added="addHabit" />
  <ol>
    <li v-for="habit in habits" :key="habit.habitName">
      <p>{{ habit.habitName }}</p>
      <p>{{ habit.habitDescription }}</p>

      <button @click="complet(habit)" :class="{ complet: habit.completed }">
        {{ habit.completed ? "✓" : " " }}
      </button>
      <button @click="deleteHabit(habit)" class="delete">🗑</button>
    </li>
  </ol>
</template>

<script>
import habiteForme from "@/components/habiteForme.vue";
export default {
  data() {
    return {
      habits: JSON.parse(localStorage.getItem("habits")) || [],
    };
  },
  components: { habiteForme },
  methods: {
    addHabit(habit) {
      this.habits.push(habit);
      localStorage.setItem("habits", JSON.stringify(this.habits));
      
    },
    complet(habit) {
      habit.completed = !habit.completed;
      localStorage.setItem("habits", JSON.stringify(this.habits));
    },
    deleteHabit(habit) {
      this.habits = this.habits.filter((h) => h !== habit);
      localStorage.setItem("habits", JSON.stringify(this.habits));
    },
  },
};
</script>
<style>

h1 {
  text-align: center;
  font-size: 36px;
  color: #2d2a3e;
  margin: 35px 0 25px;
  font-weight: 800;
}

ol {
  width: 100%;
  max-width: 750px;
  margin: 30px auto;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}

li {
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 18px;
  padding: 22px 24px;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #e8e3fa;
  box-shadow: 0 6px 20px rgba(45, 42, 62, 0.06);

  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  column-gap: 12px;
  align-items: center;
}

li p {
  
  overflow-wrap: anywhere;
  margin: 10px ;
}

li p:first-child {
  font-size: 17px;
  font-weight: 700;
  color: #2d2a3e;
  margin-bottom: 8px;
}

li p:nth-child(2) {
  font-size: 14px;
  line-height: 1.6;
  color: #777386;
}

li button {
  grid-row: 1 / span 2;
  width: 40px;
  height: 40px;
  min-width: 40px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 2px solid #8a7cf6bc;
  border-radius: 10px;
  background: #ffffff;
  color: #8a7cf6;
  font-size: 19px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, color 0.2s ease;
}

/* زر الإكمال */
li button.complet {
  background: #8a7cf6;
  border-color: #8a7cf6;
  color: #ffffff;
}

/* زر الحذف */
li button.delete {
  
  grid-row: 3;
  margin-top: 10px;
  border-color: #eadfe5;
  color: #bd6578;
}

li button.delete:hover {
  background: #bd6578;
  border-color: #bd6578;
  color: #ffffff;
}

li button:not(.delete):hover {
  background: #8a7cf6;
  color: #ffffff;
}

/* الموبايل */
@media (max-width: 479px) {
  h1 {
    font-size: 28px;
    margin: 25px 0 20px;
  }

  ol {
    margin: 20px auto;
  }

  li {
    padding: 16px;
    column-gap: 8px;
    margin-bottom: 14px;
  }

  li p:first-child {
    font-size: 16px;
  }

  li p:nth-child(2) {
    font-size: 13px;
  }

  li button {
    width: 36px;
    height: 36px;
    min-width: 36px;
  }
}

/* التابلت */
@media (min-width: 480px) and (max-width: 767px) {
  ol {
    max-width: 650px;
  }

  li {
    padding: 20px;
  }
}

/* الشاشات الكبيرة */
@media (min-width: 768px) {
  ol {
    max-width: 750px;
  }
}

</style>