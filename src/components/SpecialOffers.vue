<template>
  <div class="special_offer">
            <div class="ps-block__left">
                <h3>{{ offers.data.title }}</h3>
            </div>

    <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-6 col-xs-6 mb-2">
              <carousel :autoplay="false" :nav="false" :loop="true">
                      <div class="card" v-for="(cart,i) in offers.data.info_cart" :key="i">
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
              </carousel>
          </div>
     </div> 
  
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import { mapState } from 'vuex'
export default {
  name: 'SpecialOffer',
  data() {
    return {
      //
    }
  },
  computed: {
    ...mapState([
      'offers'
    ]),
  },
  components: {
    carousel
  },
  created(){
    // console.log(this.offers.data.info_cart.cart_1.title_en);
  },
  methods:{
    goDetils(link){
        this.$router.push(link)
    },
         metaInfo() {
        return {
            title: 'SpecialOffer',
            meta:[
                {
                name: 'SpecialOffer',
                content: 'this is SpecialOffer',
                },
                {
                name: 'SpecialOffer',
                content: 'this is SpecialOffer',
                },
                {
                name: 'SpecialOffer',
                content: 'this is SpecialOffer',
                },
            ]
        }
    },
  }
}
</script>

<style scoped>
button:not(:disabled), [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled){
  border: transparent !important;
}
.special_offer{
  margin: 70px 40px 0px;
  position: relative;
}
.ps-block__left{
  position: absolute;
  top: -48px;
}
h3{
  color: #393E46;
  font-weight: 500;
  letter-spacing: -0.27px;
  font-family: inherit;
}
.row{
    border: 1px solid #fd5858;
    border-radius: 5px;  
}
.discount{
    position: absolute;
    width: 50px;
    background-color: #fd5858;
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
.card{
  border-radius: unset !important;
}
.card-img, .card-img-top, .card-img-bottom{
  padding: 60px;
}
.card-body .card-title{
  font-size: 14px;
  text-align: left;
}
.card-body .card-text{
  font-size: 14px;
  text-align: right;
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
  display: inline-block;
    color: #fd5858;
    text-decoration: line-through;
    font-size: 11px;
    float: right;
}
.new_price{
  display: inline-block;
  font-size: 16px;
  margin-top: 14px;
  position: absolute;
  right: 9px;
  font-weight: 600;
}
.product-card-add-to-cart{
    border: 1px solid #fd5858;
    width: 100%;
    margin-top: 10px;
    font-size: 15px;
    padding: 7px;
    color: #fd5858;
    background-color: inherit;
}
.product-card-add-to-cart:hover{
    background-color: #fd5858;
    color: #FFF;
}
.product-card-add-to-cart .fa-shopping-cart{
    font-size: 12px !important;
}
</style>
