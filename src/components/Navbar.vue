<template>
  <div class="navbar-container">
    <p class="navbar"><span>Habite</span> Tracker</p>
    <nav>
      <router-link to="/">Home</router-link> 
      <router-link to="/habites">Habite</router-link> 
      <router-link to="/states">State</router-link>
     
    </nav>
  </div>
</template>

<script>
export default {};
</script>


<style>
.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 14px 20px;
  background: #ffffff;
  border-radius: 18px;
  box-shadow: 0 8px 25px rgba(45, 42, 62, 0.06);
  margin: 20px auto 40px;
  width: 100%;
  max-width: 1100px;
  box-sizing: border-box;
}

.navbar {
  margin: 0;
  white-space: nowrap;
  font-size: 22px;
  font-weight: 800;
  color: #06012ebc;
}

.navbar span {
  color: #8a7cf6;
  margin-left: 0;
  font-size: 22px;
    font-weight: 800;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  border-radius: 18px;
  padding: 10px;
}

nav a {
  color: #6b6878;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: color 0.2s ease;
}

nav a:hover,
nav a.router-link-active {
  color: #8b7cf6;
}

/* Mobile */
@media (max-width: 479px) {
  .navbar-container {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    padding: 14px 10px;
    margin: 12px auto 25px;
  }

  .navbar {
    text-align: center;
    font-size: 21px;
  }

  nav {
    gap: 12px;
    padding: 8px 0;
  }

  nav a {
    font-size: 14px;
  }
}

/* Large mobile */
@media (min-width: 480px) and (max-width: 767px) {
  .navbar-container {
    gap: 12px;
    padding: 14px;
  }

  .navbar {
    font-size: 19px;
  }

  nav {
    gap: 14px;
    padding: 8px;
  }

  nav a {
    font-size: 14px;
  }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  .navbar-container {
    max-width: 100%;
    padding: 16px 20px;
  }
}
</style>
