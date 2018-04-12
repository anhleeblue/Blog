<template>
<div class="container" id="add-blog">
  <h2>Addd a new blog post</h2>
  <form class=""  method="post" v-if="!submit">
    <div class="form-group">
   <label for="email">Blog title:</label>
   <input type="email" class="form-control" id="email" v-model.lazy="blog.title">
 </div>
 <div class="form-group">
   <label for="pwd">Blog Commnent:</label>
     <textarea name="name" class="form-control" rows="5" cols="80" v-model.lazy="blog.content"></textarea>
 </div>
 <div class="" id="checkboxs">
     <div class="form-check form-check-inline" >
       <label class="form-check-label">
         <input type="checkbox" class="form-check-input" value="op1" v-model="blog.category">Option 1
       </label>
     </div>
     <div class="form-check form-check-inline">
       <label class="form-check-label">
         <input type="checkbox" class="form-check-input" value="op2" v-model="blog.category">Option 2
       </label>
     </div>
     <div class="form-check form-check-inline disabled">
       <label class="form-check-label">
         <input type="checkbox" class="form-check-input" value="op3" v-model="blog.category">Option 3
       </label>
     </div>
 </div>
 <div class="">
   <label>Author:</label>
   <select class="" name="" v-model="blog.option">
     <option v-for="author in authors">{{author}}</option>
   </select>
</div>
<button type="button" v-on:click.prevent="post">Add Blog</button>
  </form>
  <div class="border" id="preview" v-if="submit">
    <h3>Preview Blog</h3>
    <p>Blog title:{{blog.title}}</p>
    <p>Blog Comment:</p>
    <p>{{blog.content}}</p>
    <div class="">
      <ul>
        <li v-for="cate in blog.category">{{cate}}</li>
      </ul>
    </div>
    <p>{{blog.option}}</p>
  </div>

</div>
</template>

<script>
export default {
data(){
  return{
    blog:{
      title:"",
      content:"",
      category:[],
      option:""
    },
    authors:["Tac gia 1","Tac gia 2","Tac gia 3"],
    submit:false
  }
},
methods:{
  post:function(){
    this.$http.post('https://vue-blog-awesome.firebaseio.com/posts.json',this.blog).then(function(data){
      console.log(data);
      this.submit =true;''
    });
  }

}
}
</script>

<style>
form{

  margin:10px auto;
  border: 1px solid #cccccc;
  padding:20px;
}
body{

}
#preview{
  padding:20px;
}
</style>
