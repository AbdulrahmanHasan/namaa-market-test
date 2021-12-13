<template>
    <div class="p-4 mb-4 category">
        <div class="ps-block_left">
            <h3 >Our Categories</h3>
        </div>
          <div class="row category_slider">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-2">

                <hooper :itemsToShow="7" :infiniteScroll="true">
                    <slide class="icon">
                        <a href="#">
                        <img src="../assets/images/icon_1.png" alt="" >
                        </a>
                      <span>Halva,Tahini <br> Falafel</span>
                    </slide>
                    <slide class="icon">
                        <a href="#">
                        <img src="../assets/images/icon_2.png" alt="" >
                        </a>
                        <span>Arabic<br> Cooking</span>
                    </slide>
                    <slide class="icon">
                        <a href="#">
                        <img src="../assets/images/icon_2.png" alt="" >
                        </a>
                        <span>Arabic<br> Breakfast</span>
                    </slide>
                    <slide class="icon">
                          <a href="#">
                            <img src="../assets/images/icon_4.png">
                        </a>
                         <span>Noodles</span>
                    </slide>
                    <slide class="icon">
                        <a href="#">
                            <img src="../assets/images/icon_5.png">
                        </a>
                         <span>Spices</span>
                    </slide>
                    <slide class="icon">
                        <a href="#">
                            <img src="../assets/images/icon_6.png">
                        </a>
                        <span>Oriental Appetizers</span>
                    </slide>
                    <slide class="icon">
                         <a href="#">
                        <img src="../assets/images/icon_1.png">
                        </a>
                        <span>Halva,Tahini <br> Falafel</span>
                    </slide>
                    <slide class="icon">
                         <a href="#">
                        <img src="../assets/images/icon_1.png">
                        </a>
                        <span>Halva,Tahini <br> Falafel</span>
                    </slide>
                    <slide class="icon">
                         <a href="#">
                        <img src="../assets/images/icon_1.png">
                        </a>
                        <span>Halva,Tahini <br> Falafel</span>
                    </slide>
                    <slide class="icon">
                         <a href="#">
                        <img src="../assets/images/icon_1.png">
                        </a>
                        <span>Halva,Tahini <br> Falafel</span>
                    </slide>
                    <slide class="icon">
                         <a href="#">
                        <img src="../assets/images/icon_1.png">
                        </a>
                        <span>Halva,Tahini <br> Falafel</span>
                    </slide>

                </hooper>

          </div>
     </div >  
    </div>
</template>

<script>
import 'hooper/dist/hooper.css';
import {
  Hooper,
  Slide,
  } from 'hooper';
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
      'offers'
    ])
  },
  components: {
     Hooper,
    Slide,
       
  },
  created(){
    // console.log();
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
    padding-top: 30px;
    background-color: #F8F8F8;
}
.category .category_slider img{
    width: 112px !important;
    height: 112px !important;
    display: inherit;
}
.category .is-current {
    border-bottom: 2px #f05e27 solid;
}

.category .icon span{
    display: flow-root;
}
</style>