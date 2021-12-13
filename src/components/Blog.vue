<template>
    <div class="p-4 mb-4 blog">
        <div class="ps-block_left">
            <h3 >Our Blogs</h3>
        </div>
          <div class="row blog_slider">
            <div class="col-md-4" v-for="(blog,i) in Blog.data.blogs" :key="i">
                <div class="card">
                        <a :href="blog.link" class="link_cart">
                            <img :src="blog.img_blog" class="card-img-top" :alt="blog.title">
                            <div class="card-body">
                                <h5 class="card-title">{{ blog.title }}</h5>
                                <p class="card-text">{{ blog.text }}</p>
                                <span>{{ blog.sub }}</span>
                            </div>
                        </a>
                </div>
            </div>
         </div> 
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Blog',
  data() {
    return {
      //
    }
  },
  computed: {
    ...mapState([
      'Blog'
    ])
  },
  components: {
  },
  created(){
    // console.log(this.Blog.data.blogs);
  }
}
</script>

<style >
.blog{
    position: relative;
}
.blog .ps-block_left{
    position: absolute;
    top: -27px;
}
.blog h3{
    color: #393E46;
    font-weight: 500;
    letter-spacing: -0.27px;
    font-family: inherit;  
    font-weight: 550;
}
.blog .card{
    background-color: #FFF;
    text-align: start;
}
.blog .link_cart{
    padding: 0;
}
.blog .card-title{
    color: #393E46 ;
}
</style>