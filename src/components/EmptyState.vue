  <template>
    <div>
    <h2>No Habits Found</h2>
    <p>Add a new habit to get started.</p>
    <br/>
    <button @click="addHabit">Add Habit</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      addHabit() {
        this.$router.push('/habites');
       }
    }
  }
  </script>
  
  <style>
div {
  max-width: 500px;
  margin: 40px auto;
  padding: 40px 30px;
  text-align: center;
  background: #ffffff;
  border-radius: 22px;
  border: 1px solid #eeeaf7;
  box-shadow: 0 10px 30px rgba(45, 42, 62, 0.07);
}

h2 {
  color: #2d2a3e;
  font-size: 27px;
  margin-bottom: 10px;
}

p {
  color: #858190;
  margin-bottom: 25px;
}

button {
  background: #8b7cf6;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 11px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;
}

button:hover {
  background: #7565e8;
  transform: translateY(-2px);
}
</style>