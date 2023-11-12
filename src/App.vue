<template>
  <div class="container-fluid p-5 col-6 text-center">
    <nav>
    <router-link class="nav-link" to="/">Home </router-link> 
    <router-link class="nav-link" to="/about">About </router-link> 
    <router-link class="nav-link" to="/login">Login </router-link>
    <router-link class="nav-link" to="/register">Register </router-link>
    <router-link class="nav-link" to="/help">Help </router-link>
    <router-link class="nav-link" to="/imprint">Imprint </router-link>
  <hr>
  </nav>
  </div>
  <router-view />
</template>

<script></script>

<style>
.nav-link {
  display: inline;
  /*color: white;*/
  list-style: none;
  /*background-color: brown;*/
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 1.5rem;
}
</style>