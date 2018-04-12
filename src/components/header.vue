<template lang="html">
  <div id="nav" class="container bg-dark">
    <ul>
      <li><router-link to="/">Blog</router-link></li>
      <li><router-link to="/add">AddBlog</router-link></li>
    </ul>
  </div>

</template>

<script>
export default {
  data(){
    return {

    }
  }
}
</script>

<style lang="css">
ul{
  list-style: none;
  text-align: center;
  margin: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}
a{
  color:#fff;
  text-decoration: none;

}
a:hover{
  text-decoration: none;
}
#nav{
  padding:15px;
}
.router-link-exact-active{
  background: #ccc;
  color:#444;
  padding:10px;
  border-radius: 5px;
}

</style>
