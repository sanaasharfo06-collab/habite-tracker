<template>
  <p>Add Habits</p>
  <form @submit.prevent="addHabit">
    <label>Habit Name:</label>
    <p v-if="errorMessage" class="errorMessage">{{ errorMessage }}</p>
    <input type="text" v-model="habitName" @input="clearError()" />
    <label>Description:</label>
    <textarea rows="5" cols="5" v-model="habitDescription"></textarea>
    <label>Start Date:</label>
    <input type="date" v-model="startDate" lang="en-US">
    <button>Add Habit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      habitName: "",
      habitDescription: "",
      completed: false,
      delete: false,
      errorMessage: "",
      startDate: "",
    };
  },
  methods: {
    addHabit() {
      if (!this.habitName.trim()) {
        this.errorMessage = "Please enter a habit name.";
        return;
      }
      this.$emit("habit-added", {
        habitName: this.habitName,
        habitDescription: this.habitDescription,
        completed: this.completed,
        startDate: this.startDate
      });
      this.habitName = "";
        this.habitDescription = "";
        this.startDate = "";
    },
    clearError() {
      this.errorMessage = "";
    },
  },
};
</script>


<style>
/* Form title */
form + p {
  text-align: center;
}

/* Form container */
form {
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  padding: 36px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #8b7cf6;
  box-shadow: 0 10px 30px rgba(45, 42, 62, 0.08);
}

/* Labels */
form label {
  display: block;
  margin-bottom: 8px;
  color: #4b485a;
  font-weight: 600;
  font-size: 16px;
}

/* Inputs */
form input,
form textarea {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 14px 16px;
  margin-bottom: 22px;
  border: 1px solid #ddd9eb;
  border-radius: 10px;
  background: #faf9ff;
  color: #2d2a3e;
  font-family: inherit;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

form input:focus,
form textarea:focus {
  border-color: #8b7cf6;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(139, 124, 246, 0.12);
}

form textarea {
  min-height: 140px;
  resize: vertical;
}

/* Error message */
.errorMessage {
  color: #c94747;
  font-size: 13px;
  margin: 0 0 10px;
  font-weight: 500;
  font-style: italic;
}

/* Add Habit button */
form button {
  display: block;
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 10px;
  background: #8b7cf6;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}


  form input,
  form textarea {
    font-size: 16px;
    padding: 12px;
  }

  form textarea {
    min-height: 120px;
  }

form input[type="date"] {
  background-color: #f5f2ff;
  border: 1px solid #8b7cf6;
  border-radius: 12px;
  padding: 14px 16px;
  color: #2d2a3e;
  font-family: inherit;
  font-size: 22px;
  font-size: 600;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  font-variant-numeric: lining-nums;
  direction: ltr;
  text-align: left;
}
form input[type="date"]:focus {
  border-color: #7767e8;
  box-shadow: 0 0 0 3px rgba(139, 124, 246, 0.15);
  outline: none;
}
/* Large mobile */
@media (min-width: 480px) and (max-width: 767px) {
  form {
    padding: 24px;
  }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  form {
    max-width: 700px;
    padding: 30px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  form {
    max-width: 750px;
    padding: 36px;
  }
}
</style>
