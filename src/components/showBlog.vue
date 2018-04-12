<template lang="html">
    <div class="container" v-theme="'wide'">
      <h1>ADD Blog</h1>
      <input class="form-control" type="text" v-model="search" name="" value="" placeholder="Search">
      <div class="" v-for="blog in filteredBlog" id="blog">
      <router-link v-bind:to="'/blog/'+ blog.id"> <h2 v-rainbow>{{blog.title | to-uppercase}}</h2></router-link>
        <article class="">
          {{blog.content | short-text}}
        </article>
      </div>
    </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
  data(){
    return{
      blogs:[],
      search:''
    }
  },
  method:{

  },
  created(){
    this.$http.get('https://vue-blog-awesome.firebaseio.com/posts.json').then(function(data){
      return data.json();
    }).then(function(data){
      var blogsArray = [];
      for(let key in data){
        data[key].id = key;
        blogsArray.push(data[key]);
      }
      this.blogs =blogsArray ;
    });
  },
  computed:{

  },
  mixins:[searchMixin]
}
</script>

<style lang="css">
#blog{
  padding:10px;
  margin: 10px;

  background:#eeee;
}
</style>
