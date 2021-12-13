<template>
  <div class="special_offer" >
            <div class="ps-block__left">
                <h3>{{ data.title }}</h3>
            </div>

       <div class="row h-75" >
          <div class="col-lg-12 col-md-12 col-sm-6 col-xs-6 mb-2">
                 <hooper :itemsToShow="4" class="h-100 w-100" :infiniteScroll="true">
                    <slide  v-for="(item,i) in PRODUCTS" :key="i" class="h-100">
                      <div  class="card h-100">
                            <div class="discount" >
                              <span>30%</span>
                              {{ item.currency  }}
                            </div>
                            <button class="p-2 h-100" @click.prevent="goDetils(item.id)">
                              <img  :src="item.image" class="card-img-top img_product " alt="...">
                            </button>
                            <div class="stars">
                              <div class="star" >
                                  <i class="fas fa-star color_star"  v-for="n in item.rate" :key="n"></i>
                              </div>
                              <div class="star_empty" >
                                <i class="far fa-star color_star_empty" v-for="n in 5" :key="n"></i>
                              </div>
                            </div>
                          <div class="card-body">
                            <p class="card-title" >{{ item.translations[0].name }}</p>
                            <p class="card-text" dir="rtl">{{Products.data.info_cart[0].title_ar}}</p>
                              <div class="info_seler">
                                  <a href="#" class="p-2">
                                    <img :src="images"  class="img_seler" alt="...">
                                  </a>
                                <div class="title_seler" >
                                  {{ item.title }}
                                   </div>
                                <div class="old_price">
                                  ${{ item.original_price }}
                                </div>
                                <div class="new_price">
                                  ${{ item.price}}
                                </div>
                              </div>
                              <button class="btn product-card-add-to-cart" @click="addToCart">Add to cart  <i class="fas fa-shopping-cart "></i></button>
                          </div>
                        </div>
                </slide>
                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
             </hooper>
          </div>
     </div> 
  </div>
</template>

<script>
import 'hooper/dist/hooper.css';
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import { mapState } from 'vuex'
export default {
  name: 'SpecialOffer',
  data() {
    return {
      data:[],
      PRODUCTS:[],
      meta_1: '',
      meta_2: '',
      meta_3: '',
      meta_4: '',
      images:'',
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
    this.PRODUCT();
    this.data  = this.Products.data;
    this.images = this.Products.data.info_cart[0].img_seler
    // console.log(this.Products.__PRODUCTS);
    // this.PRODUCTS = this.Products.__PRODUCTS
  },
  methods:{
     async PRODUCT() {
          const res = await this.api('get', 'https://mapis.namaatests.com/api/home')
          if(res.status === 200) {
            this.PRODUCTS = res.data.data.SUPER_PRICE_PRODUCTS
              this.s(res.data.msg)
              console.log(this.PRODUCTS);
            //   window.location = '/'
            // this.$router.push('/')
            this.PRODUCTS.forEach((element) => {
              this.meta_1 = element.translations[0].name
              this.meta_2 = element.shipping_days 
              this.meta_3 = element.currency 
              this.meta_4 = element.image
            });
          }else{
                  this.swr() 
          }
      },
        addToCart(){
          this.Products.countShoping++
            this.s(`Successfully Add  To Cart`)
      },
    goDetils(id){
        this.$router.push(`/Product-Detils/${id}`)
    },
     
  },
   metaInfo() {
        return {
            title: 'Talabity - Home',
            meta:[
                {
                  content: this.meta_1,
                },
                {

                  content: this.meta_2,
                },
                {
                  content: this.meta_3,
                },
                {
                  content: this.meta_4,
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
