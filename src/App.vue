<template>
  <div id="app">
    <template v-for="item in $router.options.routes">
      <router-link
        :class="['link']"
        v-if="item.path !== '/'"
        :to="item.path"
        :key="item.path"
        >{{ item.meta.name }}</router-link
      >
    </template>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    console.log(this.$route);
  },
};
</script>

<style>
.link {
  background-color: #f5f5f5;
  display: inline-block;
  margin: 7px;
  color: black;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 40%;
  padding: 5px;
  box-shadow: 0 0 2px 2px skyblue;
}
.router-link-active {
  box-shadow: 0 0 4px 4px inset skyblue;
}
</style>
