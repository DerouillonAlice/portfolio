<template>
    <nav class="navbar">
      <router-link to="/" exact-active-class="active">Accueil</router-link>
      <router-link to="/portfolio" exact-active-class="active">Portfolio</router-link>
      <router-link to="/cv" exact-active-class="active">CV</router-link>
      <router-link to="/contact" exact-active-class="active">Contact</router-link>
    </nav>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    background-color: blue;
    color: white;
  }
  
  .navbar a {
    color: white;
    text-decoration: none;
  }
  
  .active {
    font-weight: bold;
    border-bottom: 2px solid white;
  }
  </style>
  