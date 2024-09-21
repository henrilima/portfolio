<template>
  <div id="app">
      <transition name="fade" mode="out-in">
          <router-view :key="$route.fullPath" />
      </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>