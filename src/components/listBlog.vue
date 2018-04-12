<template lang="html">
    <div class="container" v-theme="'wide'">
      <h1>List Blog</h1>
      <input class="form-control" type="text" v-model="search" name="" value="" placeholder="Search">
      <div class="" v-for="blog in filteredBlog" id="blog">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
        
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
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      this.blogs = data.body.slice(0,10);
    })
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
