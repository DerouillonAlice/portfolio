<template>
    <aside class="sidebar">
      <img src="/src/assets/phto_cv.jpg" alt="Alice Derouillon" class="profile" />
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
    margin: 20px 0px 20px 20px;
    border-radius: 20px;
    height: 100vh;
    color: #fff;
    padding: 20px;
    text-align: center;
    grid-column: span 3;
  }

  @media screen and (max-width: 1024px) {
    .sidebar {
    height: 25vh; 
    margin: 20px 20px 20px 20px;
    grid-column: span 12;
  }
    
  }
  
  .profile {
    width: 150px;
    margin-bottom: 10px;
  }
  </style>
