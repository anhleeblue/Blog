<template lang="html">
  <div class="container" id="single-blog">
    <h1 v-rainbow>{{blog.title}}</h1>
    <article class="">
        {{blog.content}}
    </article>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id:this.$route.params.id,
      blog:{}
    }
  },
  created(){
    this.$http.get('https://vue-blog-awesome.firebaseio.com/posts/' + this.id +'.json').then(function(data){
      return data.json();
    }).then(function(data){
      this.blog = data;
    });
  }
}
</script>

<style lang="css">
</style>
