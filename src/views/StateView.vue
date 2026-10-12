<template>
  <div class="state-container">
  <h1>Habit Statistics </h1>
    <p class="subtitle">Track your habits and celebrate your growth.</p>
    <div class="stat-card">
      <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers preview-icon"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg></span>
      <p> Total habits </p>
  <h2>{{ habits.length }}</h2>
    </div>
  <div class="stat-card">
    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check preview-icon"><circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/></svg></span>
    <p>Completed Habits </p>
    <h2>{{ completedHabits }}</h2>
      </div>

      <div class="stat-card">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dashed preview-icon"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"/><path d="M13.9 21.818a10 10 0 0 1-3.8 0"/><path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"/><path d="M2.182 13.9a10 10 0 0 1 0-3.8"/><path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"/><path d="M21.818 10.1a10 10 0 0 1 0 3.8"/><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"/><path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"/></svg></span>
        <p>Incomplete Habits</p>
        <h2>{{ incompleteHabits }}</h2>
      </div>

      <div class="stat-card">
        <p>Completion Rate</p>
        <h2>{{ completionRate.toFixed(0) }}%</h2>
      
  <div class="progress-bar">
    <div
      class="progress-fill"
      :style="{ width: completionRate + '%' }"
    ></div>
  </div>

</div>
</div>
  
  
</template>

<script>
export default {
data() {
    return {
      habits: JSON.parse(localStorage.getItem("habits")) || [],
    };},
computed :{
   completedHabits()
   {
    return this.habits.filter(h => h.completed).length;
   },
   incompleteHabits()
   {
    return this.habits.filter(h => !h.completed).length;
   },
   completionRate(){
    if(this.habits.length ===0){
      return 0;
    }
    return (this.completedHabits/this.habits.length)*100;
   }

}

}
</script>

<style>



.state-container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;
}

.state-container h1 {
  text-align: center;
  font-size: 36px;
  color: #2d2a3e;
  margin: 35px 0 12px;
}

.subtitle {
  text-align: center;
  color: #858190;
  font-size: 16px;
  margin: 0 0 35px;
}

.state-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.state-container h1,
.state-container .subtitle {
  grid-column: 1 / -1;
}

.stat-card {
  min-width: 0;
  box-sizing: border-box;
  background: #ffffff;
  margin: 0;
  padding: 28px;
  border: 1px solid #eeeaf7;
  border-radius: 18px;
  text-align: center;
  box-shadow: 0 6px 20px rgba(45, 42, 62, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(45, 42, 62, 0.09);
}

.stat-card p {
  display: inline-block;
  margin: 10px 10px 12px 10px;
  vertical-align: middle;
}

.stat-card span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #8b7cf6;
  margin: 0 0 9px 0;
  vertical-align: middle;
}

.stat-card h2 {
  color: #8b7cf6;
  font-size: 32px;
  margin: 0;
}

.progress-bar {
  width: 100%;
  height: 12px;
  margin: 20px auto 0;
  padding: 0;
  background: #eae6fc;
  border-radius: 20px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  margin: 0;
  padding: 0;
  background: #8b7cf6;
  border-radius: 20px;
  transition: width 0.4s ease;
}

/* الموبايل */
@media (max-width: 600px) {
  .state-container {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .state-container h1 {
    font-size: 28px;
    margin-top: 20px;
  }

  .subtitle {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .stat-card {
    padding: 22px 18px;
  }
}

/* التابلت */
@media (min-width: 601px) and (max-width: 900px) {
  .state-container {
    gap: 16px;
  }

  .stat-card {
    padding: 22px;
  }
}

</style>