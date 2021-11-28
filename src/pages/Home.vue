<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <!-- error -->
        <div class="error" v-if="error">
          <p> {{ this.error }} </p>
        </div>

        <!-- @search  это emit, который пришел из дочернего компонента -->
        <search :value="search" placeholder="Type username..."  @search="search = $event" />
        <!-- button -->
        <button class="btn btnPrimary" @click="getRepository">Search!</button>

        <!-- ели значение repos не == null, то показываем  repos_wrapper-->
        <div class="repos_wrapper" v-if="repos">
          <div class="repo-item" v-for="repo in repos" :key="repo.id">
            <div class="repo-info">
              <a :href="repo.html_url" target="_blank" class="link">{{ repo.name }}</a>
              <span>{{repo.stargazers_count}} ⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import search from "@/components/Search.vue";
import axios from "axios";
export default {
  components: {
    search,
  },
  data() {
    return {
      search: "",
      error: null,
      repos: null,
    };
  },
  methods: {
    getRepository() {
      // Отправляем запрос на поиск конкретного репозитория, ${this.search} - это то что в поле search ввели
      axios
        .get(`https://api.github.com/users/${this.search}/repos`)
        .then((response) => {
          this.error = null;
          this.repos = response.data;
        })
        .catch(err => {
          this.repos = null;
          this.error = `Can't find this user`;
        })
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

button {
  margin-top: 40px;
}

 .repos_wrapper{
   width: 400px;
   margin: 30px 0;
 }

 .repo-info{
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 10px;
   padding: 10px 0;
   border-bottom: 1px solid #dbdbdb;
 }

 .error{
   margin: 20px 0;
   color: red;
 }

</style>