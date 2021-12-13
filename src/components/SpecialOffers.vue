<template>
  <div class="special_offer">
            <div class="ps-block__left">
                <h3>{{ data.title }}</h3>
            </div>

    <div class="row h-75">
          <div class="col-lg-12 col-md-12 col-sm-6 col-xs-6 mb-2">
                 <hooper :itemsToShow="4" class="h-100 w-100">
              <!-- <carousel :autoplay="false" :nav="false" :loop="true"> -->
                    <slide v-for="(cart,i) in data.info_cart" :key="i">
                      <div  class="card">
                            <div class="discount">
                              <span>{{ cart.Discount }}%</span>
                              Offers
                            </div>
                            <button class="p-2" @click.prevent="goDetils(cart.link)">
                              <img  :src="cart.img_Product" class="card-img-top img_product" alt="...">
                            </button>
                            <div class="stars">
                              <div class="star" >
                                  <i class="fas fa-star color_star"  v-for="n in cart.starts" :key="n"></i>
                              </div>
                              <div class="star_empty" >
                                <i class="far fa-star color_star_empty" v-for="n in 5" :key="n"></i>
                              </div>
                            </div>
                          <div class="card-body">
                            <p class="card-title" >{{ cart.title_en }}</p>
                            <p class="card-text" dir="rtl">{{ cart.title_ar }}</p>
                            <div class="info_seler">
                                <a :href="cart.link_seler" class="p-2">
                                  <img  :src="cart.img_seler" class="img_seler" alt="...">
                                </a>
                              <div class="title_seler">
                                {{ cart.name_seler}}
                              </div>
                              <div class="old_price">
                                ${{ cart.old_price }}
                              </div>
                              <div class="new_price">
                                ${{ cart.new_price}}
                              </div>
                            </div>
                              <button class="btn product-card-add-to-cart" >Add to cart  <i class="fas fa-shopping-cart "></i></button>
                          </div>
                        </div>
              <!-- </carousel> -->
                </slide>
                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
             </hooper>
          </div>
     </div> 
  
  </div>
</template>

<script>
// import carousel from 'vue-owl-carousel'
//  import { Hooper, Slide } from 'hooper';
  import 'hooper/dist/hooper.css';
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
  } from 'hooper';
import { mapState } from 'vuex'
export default {
  name: 'SpecialOffer',
  data() {
    return {
      data:[]
    }
  },
  computed: {
     ...mapState(['Products']),
  },
  components: {
     Hooper,
    Slide,
  HooperNavigation
  },
  created(){
   this.$store.dispatch('Products/getData')

    this.data  = this.Products.data;
   console.log(this.Products.data.info_cart);
    // console.log(this.offers.data.info_cart.cart_1.title_en);
  },
  methods:{
    goDetils(link){
        this.$router.push(link)
    },
     
  },
   metaInfo() {
        return {
            title: 'Talabity - Home',
            meta:[
                {
                  name: 'product_one',
                  content: 'this is test one',
                },
                {
                  name: 'product_tow',
                  content: 'this is test tow',
                },
                {
                  name: 'product_three',
                  content: 'this is test three',
                },
            ]
        }
    },
}
</script>

<style scoped>
button:not(:disabled), [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled){
  border: transparent !important;
}
.special_offer{
  margin: 70px 0px;
  position: relative;
  width: 100% !important;
  padding: 0 40px;
}
.special_offer .ps-block__left{
  position: absolute;
  top: -48px;
  left: 25px ;
}
.special_offer h3{
    color: #393E46;
    font-weight: 500;
    letter-spacing: -0.27px;
    font-family: inherit;  
    font-weight: 550;
}
.row{
    border: 1px solid #F05E27;
    border-radius: 5px;  
}
.discount{
    position: absolute;
    width: 50px;
    background-color: #F05E27;
    height: 56px;
    border-radius: 5px;
    left: 26px;
    text-align: center;
    color: #FFF;
    padding: 7px;
    top: -3px;
}
.discount span{
    font-weight: 550;
    margin-top: 10px;
}
.stars{
  position: relative;
  margin-bottom: .5em;
}
.star,
.star_empty{
  position: absolute;
    top: 0;
    font-size: 16px;
    padding-left: 1rem;
}
.color_star{
  color: #FFCA50;
}
.color_star_empty{
  color: #FFCA50;
  opacity: .5;
}
.special_offer .card{
  border: unset !important;
  border-radius: unset !important;
  border-right: 1px solid rgba(0, 0, 0, 0.125) !important;
}

.card-img, .card-img-top, .card-img-bottom{
  padding: 60px;
}
.card-body .card-title{
  text-align: left !important;
    font: normal normal 550 18px/24px Poppins !important;
    color: #393E46 !important;
    letter-spacing: -0.24px;
}
.card-body .card-text{
  text-align: right;
  font: normal normal normal 18px/22px Almarai;
  letter-spacing: -0.24px;
  color: #393E46;
  opacity: 1;
  border-bottom: 1px solid #3333333b;
  padding-bottom: 12px;
}
.img_product{
  border-bottom: 1px solid #3333333b;
}
.info_seler{
  border-bottom: 1px solid #3333333b;
  padding-bottom: 30px;
}
.info_seler .img_seler{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  float: left;
  padding: 0;
  border: .5px solid #3333333b;
}
.info_seler .title_seler{
  font-size: 14px;
  float: left;
  padding-top: 8px;
  padding-left: 8px;
}
.old_price{
    color: #F05E27;
    text-decoration: line-through;
    font-size: 13px;
    position: absolute;
    right: 17px;
    bottom: 128px;
}
.new_price{
  display: inline-block;
  font-size: 16px;
  margin-top: 14px;
  position: absolute;
  right: 9px;
  font-weight: 600;
}
.product-card-add-to-cart[data-v-68c8dbb0]{
    border: 1px solid #F05E27 !important;
    width: 100%;
    margin-top: 10px;
    font-size: 15px;
    padding: 7px;
    color: #F05E27;
    background-color: inherit;
}
.product-card-add-to-cart:hover{
    background-color: #F05E27;
    color: #FFF;
}
.product-card-add-to-cart .fa-shopping-cart{
    font-size: 12px !important;
}
</style>
