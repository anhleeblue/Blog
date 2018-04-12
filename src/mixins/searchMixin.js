export default{
  computed : {
    filteredBlog:function(value){
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search);
      }); 
    }
  }
}
