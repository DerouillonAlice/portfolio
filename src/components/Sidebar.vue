<template>
    <aside class="sidebar">
      <img src="" alt="Alice Derouillon" class="profile" />
      <h2>Alice Derouillon</h2>
      <ul class="contact-info">
        <li>Email: alice@example.com</li>
        <li>Téléphone: 06 00 00 00 00</li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .sidebar {
    /* width: 300px; */
    margin: 20px;
    border-radius: 20px;
    height: 100vh;
    /* background-color: #222; */
    color: #fff;
    padding: 20px;
    text-align: center;
    grid-column: span 3;
    /* flex-shrink: 0; */
  }
  
  .profile {
    width: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  </style>
