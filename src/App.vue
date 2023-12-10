<template>
  <div class="container-fluid p-5 text-center">
    <nav class="row-col-6 ">
    <router-link class="nav-link " to="/">Home </router-link> 
    <router-link class="nav-link " to="/profile">Profile </router-link> 
    <router-link class="nav-link " to="/login">Login </router-link>
    <router-link class="nav-link " to="/register">Register </router-link>
    <router-link class="nav-link " to="/help">Help </router-link>
    <router-link class="nav-link " to="/imprint">Imprint </router-link>
  <hr>
  </nav>
  </div>
  <router-view />
</template>

<script></script>

<style>
.nav-link {
  display: inline;
  list-style: none;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 2rem;
}

.nav-link:hover {
  color:rgb(209, 6, 6);
}
</style>