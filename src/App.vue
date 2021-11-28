<template>
  <div class="wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">Github finder</div>
            <!-- <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <router-link :to="link.url" class="navbar-link" exact>{{
                  link.title
                }}</router-link>
              </li>
            </ul> -->
        
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>

    <footer></footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: "Home",
          url: "/",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.navbar-link { //если у данного класса имеется класс router-link-exact-active , который проставляется самим Vue, то цвет ссылки будет синий
  &.router-link-exact-active {
    color: rgb(91, 91, 243);
  }
}
</style>
