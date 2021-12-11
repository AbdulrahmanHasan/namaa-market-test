<template>
    <div class="p-4 mb-4 category">
        <div class="ps-block_left">
            <h3 >Our Categories</h3>
        </div>
          <div class="row category_slider">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-2">
              <carousel :autoplay="false" :nav="false" :bullets="false">
                  
                  <div class="icon">
                    <a href="#">
                     <img src="../assets/images/icon_1.png">
                     </a>
                      <span>Halva,Tahini <br> Falafel</span>
                  </div>
                  <div class="icon">
                      <a href="#">
                        <img src="../assets/images/icon_2.png">
                    </a>
                     <span>Arabic<br> Cooking</span>
                  </div>
                  <div class="icon">
                        <a href="#">
                            <img src="../assets/images/icon_3.png">
                        </a>
                         <span>Arabic<br> Breakfast</span>
                  </div>
                  <div class="icon">
                        <a href="#">
                            <img src="../assets/images/icon_4.png">
                        </a>
                         <span>Noodles</span>
                  </div>
                  <div class="icon">
                        <a href="#">
                            <img src="../assets/images/icon_5.png">
                        </a>
                         <span>Spices</span>

                  </div>
                  <div class="icon">
                        <a href="#">
                            <img src="../assets/images/icon_6.png">
                        </a>
                        <span>Oriental Appetizers</span>
                  </div>
                   <div class="icon">
                    <a href="#">
                     <img src="../assets/images/icon_1.png">
                     </a>
                      <span>Halva,Tahini <br> Falafel</span>
                  </div>
                  <div class="icon">
                      <a href="#">
                        <img src="../assets/images/icon_2.png">
                    </a>
                     <span>Arabic<br> Cooking</span>
                  </div>
                  <div class="icon">
                        <a href="#">
                            <img src="../assets/images/icon_3.png">
                        </a>
                         <span>Arabic<br> Breakfast</span>
                  </div>
                  <div class="icon">
                        <a href="#">
                            <img src="../assets/images/icon_4.png">
                        </a>
                         <span>Noodles</span>
                  </div>
                  <div class="icon">
                        <a href="#">
                            <img src="../assets/images/icon_5.png">
                        </a>
                         <span>Spices</span>

                  </div>
                  <div class="icon">
                        <a href="#">
                            <img src="../assets/images/icon_6.png">
                        </a>
                        <span>Oriental Appetizers</span>
                  </div>
              </carousel>
          </div>
     </div> 
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import { mapState } from 'vuex'
export default {
  name: 'Categories',
  data() {
    return {
      //
    }
  },
  computed: {
    ...mapState([
      ''
    ])
  },
  components: {
    carousel
  },
  created(){
    console.log();
  }
}
</script>

<style >
.category{
    position: relative;
}
.category .ps-block_left{
    position: absolute;
    top: -27px;
}
.category h3{
    color: #393E46;
    font-weight: 500;
    letter-spacing: -0.27px;
    font-family: inherit;  
    font-weight: 550;
}
.category .category_slider{
    padding: 40px 0;
    background-color: #F8F8F8;
}
.category .category_slider img{
    width: 112px !important;
    height: 112px !important;
    display: inherit;
}
.category .owl-carousel.owl-drag .owl-item{
    width: 200px !important;
    height: 180px !important;
}
.category .owl-carousel.owl-drag .owl-item.active .icon:after {
    content: '';
    position: absolute;
    width: 132px;
    bottom: 0px;
    left: 35px;
    border-bottom: 2px #f05e27 solid;
}
.category .owl-carousel.owl-drag .owl-item:not(:last-of-type){
    border-right: 1px solid #33333340;
}
.category .icon span{
    display: flow-root;
}
</style>