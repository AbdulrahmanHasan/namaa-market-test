<template>
<div>
    <Breadcrumb />
  <div class="product_details">
            <button class="hart" @click="wishlist"> 
                 <img class="" src="@/assets/images/hart.png" alt="">
            </button>
            <button class="arrow-left" @click="outPage">
                <img class="" src="@/assets/images/arrow-left.png" alt="">
            </button>
            
    <div >
       <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6 dis-img ">
                    <hooper group="group1" class="hooper_1 h-100" :infiniteScroll="true">
                        <slide v-for="(it,i) in images" :key="i" >
                            <img :src="it.thumb" alt="" class="w-100 h-100">
                        </slide>
                    </hooper>

                    <hooper group="group1" :itemsToShow="3" :centerMode="true" class="hooper_2 w-100 h-25" :infiniteScroll="true">
                        <slide  v-for="(it,i) in images" :key="i" class="h-75 m-1 ">
                            <img :src="it.thumb" alt="" class="w-100 h-100">
                        </slide>
                        <hooper-navigation slot="hooper-addons"></hooper-navigation>
                        <!-- <hooper-pagination slot="hooper-addons"></hooper-pagination> -->
                    </hooper>

            </div>

            <div class="col-lg-6 col-md-8 col-sm-6 col-xs-6" >
                    <div class="content_product" >
                        <div class="stars">
                            <div class="star_empty" >
                            <i class="far fa-star color_star_empty" v-for="n in 5" :key="n"></i>
                            </div>
                            <div class="star" >
                                <i class="fas fa-star color_star"  v-for="n in data.rate" :key="n"></i>
                            </div>
                        </div>
                        <div class="reviews">
                            <a href="#">
                                <div class="count">132</div>
                                reviews
                            </a>
                        </div>
                        <div class="card-body">
                            <p class="card-title" >{{ data.translations[0].name }}</p>
                            <p class="card-text" dir="rtl">  {{ ar }}</p>
                            <div class="info_seler">
                                <div class="seler_name">
                                    <span class="name"> Seller: {{ data.seller.name }}</span> | <span class="rotes"> Shop Rate: 5,7</span>
                                </div>
                                <a :href="data.seller" class="mr-1">
                                    <img  src="~@/assets/images/63.png" class="img_mark" alt="...">
                                </a>
                                <a :href="data.seller" class="m-1">
                                    <img  src="~@/assets/images/25.png" class="img_mark " alt="...">
                                </a>
                            </div>
                        </div>
                        <div class="detils_price_discoun">
                            <div class="discount">
                                <span>30%</span>
                                {{ data.currency }}
                            </div>
                            <div class="old_price">
                            ${{ data.original_price }}
                            </div>
                            <div class="new_price">
                            ${{ data.price}}
                                <div class="vat_included">
                                    <a href="#"> VAT</a> included
                                </div>
                            </div>
                        </div>
                        
                        <div class="quantity">
                                        <span>Quantity</span>
                            <div class="options">
                            
                                        <InputNumber  :min="1" v-model="count" controls-outside></InputNumber>
                                
                                    <button class="btn product-card-add-to-cart" @click="addToCart">
                                        Add to cart  
                                        <!-- <img src="~@/assets/images/Icon.svg" alt="" class="fa-shopping-cart "> -->
                                        <i class="fas fa-shopping-cart "></i> 
                                        </button>  
                                
                                        <button class="btn buy_now">Buy Now </button>
                            
                            </div>
                        </div>
                        <div class="paragragh">
                                Content on this site is for reference purposes and is not a substitute for advice from a licensed health-care professional. You
                                should not rely solely on this content and BALADNA assumes no liability for inaccuracies. Always read labels and directions
                                before using a product. Statements regarding dietary supplements have not been evaluated by the FDA, and these products
                                are not intended to diagnose, treat, cure, or prevent any disease or condition.
                        </div>
                    </div>
                </div>
            </div>
        <div class="tabs">
            <Tabs value="name1">
                <TabPane label="Product Details" name="name1">
                    <h2>Product Description</h2>
                    <p>Hummus is one of the popular appetizers dishes in the world, especially in the Arab and Eastern cuisine, and it is distinguished by its unique and
                        wonderful taste and its richness with high nutritional values and is ready to eat. It comes in several flavors, with extra tahini, thyme or spicy. It is
                        distinguished by its soft creamy texture. . pack that is easy open and ready to eat, and does not need any preparation, and can remain in the
                        refrigerator after opening for several days. . This product is Vegan, vegeterian, lactose free and gluten free . Ready to eat and does not need any
                        preparation, and ready to give a distinctive rich flavor and unique meal with its three distinct types from Baladna. . Usually Hummus is served on a plate
                        after adding some olive oil (as desired), and alongside it is presented sometimes with fresh tomatoes and mint, as sour pickles can be served with it. It
                        can also be presented in the form of rich sandwiches for children, and Hummus can also be one of the ingredients of the famous oriental Oriental
                        dishes, such as Fattah. . It can be served in the form of high-energy sandwiches for children</p>
                </TabPane>
                <TabPane label="Nutrition Values" name="name2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae doloremque debitis neque tempora laborum ab laboriosam adipisci porro voluptas!</p>
                    </TabPane>
                <TabPane label="Recipe" name="name3">
                    <p> lactose free and gluten free . Ready to eat and does not need any
                        preparation, and ready to give a distinctive rich flavor and unique meal with its three distinct types from Baladna. . Usually Hummus is served on a plate
                        after adding some olive oil (as desired), and alongside it is presented sometimes with fresh tomatoes and mint,</p>
                        </TabPane>
                <TabPane label="Media" name="name4">
                     <p> lactose free and gluten free . Ready to eat and does not need any
                        preparation, and ready to give a distinctive rich flavor and unique meal with its three distinct types from Baladna. . Usually Hummus is served on a plate
                        after adding some olive oil (as desired), and alongside it is presented sometimes with fresh tomatoes and mint,</p>
                        </TabPane>
                <TabPane label="Important informations" name="name5">
                    <p> lactose free and gluten free . Ready to eat and does not need any
                        preparation, and ready to give a distinctive rich flavor and unique meal with its three distinct types from Baladna. . Usually Hummus is served on a plate
                        after adding some olive oil (as desired), and alongside it is presented sometimes with fresh tomatoes and mint,</p>
                </TabPane>
            </Tabs>
        </div>
        <div class="row tabels justify-content-center mt-5">
            <div class="tabel_1 col-md-6">
                <div class="tab w-50">
                    <h3>Product Details</h3>
                    <Table :columns="columns" :data="dataTabel"></Table>
                </div>
            </div>
            <div class="tabel_2 col-md-6">
                <div class="tab w-50">
                    <h3>Nutrition Values</h3>
                    <Table :columns="columns" :data="dataTabel"></Table>
                </div>
            </div>
        </div>
     </div>
  </div>
</div>
</template>

<script>
import Breadcrumb from '../Breadcrumb.vue'
import 'hooper/dist/hooper.css';
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
  } from 'hooper';
import { mapState } from 'vuex'
export default {
  name: 'Products',
  data() {
    return {
      images: [],
      data: [],
      count: 1,
      ar: '',
      TITLE: '',
        columns: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                 ],
            dataTabel: [
                    {
                        name: 'Packaging type',
                        address: 'Can'
                    },
                    {
                        name: 'Barcode',
                        address: '8681506267610',
                    },
                    {
                        name: 'SKU',
                        address: '3007'
                    },
                    {
                        name: 'Net weight',
                        address: '200 g',
                    },
                    {
                        name: 'Width',
                        address: '0 cm',
                    },
                    {
                        name: 'Height',
                        address: '0 cm',
                    },
                    {
                        name: 'Factory',
                        address: 'Turkey',
                    },
                    {
                        name: 'Origin',
                        address: 'Turkey',
                    },
                ],
                  slides: [
                            {
                            title: 'Slide #1',
                            content: 'Slide content.'
                            },
                            {
                            title: 'Slide #1',
                            content: 'Slide content.'
                            },
                            {
                            title: 'Slide #1',
                            content: 'Slide content.'
                            },
                            {
                            title: 'Slide #1',
                            content: 'Slide content.'
                            },
                        ]
    }
  },
  computed: {
    ...mapState(['Products']),
  },
  components: {
     Hooper,
    Slide,
  HooperNavigation,
    Breadcrumb
  },
  mounted(){
    //   this.$store.dispatch('Products/SUPER_PRODUCTS')
    //   this.$store.dispatch('Products/getData')
  },
  created(){
      this.images = this.Products.data.info_cart[1].images
      this.ar = this.Products.data.info_cart[0].title_ar
      this.PRODUCT();
    //   this.data.push(this.Products.data.info_cart[this.$route.params.id]);
    //   this.data.push(this.Products.__PRODUCTS[this.$route.params.id]);

      this.s('Welcome Here')
  },
  methods:{
       async PRODUCT() {
          const res = await this.api('get', `https://mapis.namaatests.com/api/product/${this.$route.params.id}`)
          if(res.status === 200) {
            this.data = res.data.data.product
            this.data.translations.forEach(element => {
              this.TITLE =  element.name
              console.log(this.data.seller.name);
            });
              this.s(res.data.msg)
            // this.$router.push('/')
          }else{
                  this.swr() 
          }
      },
      addToCart(){
          this.Products.countShoping++
            this.s(`Successfully Add ( ${this.count} ) To Cart`)
      },
      wishlist(){
          this.Products.wishlist++
            this.s('Successful Add To Wishes')
      },
      outPage(){
            this.e('No Link...')
      },
    
  },
  metaInfo() {
    return {
        title: `Talabity - ${this.TITLE }`,
        meta:[
            {
            // name: this.data.seller.name,
            content: this.data.shipping_days,
            },
            {
            // name: this.data.seller.name,
            content: this.data.shipping_method,
            },
            {
            // name: this.data.seller.name,
            content: this.data.web_url,
            },
        ],
    }
},
}
</script>


<style>
/* slider */
.product_details .hooper-slide {
    border: 1px solid #5c5b5a71 !important;
    border-radius: 8px;
}
.product_details .hooper_1{
   height: 75% !important;
   display: flex;
   justify-content: center;
}
.product_details .hooper_2{
   margin: 20px 0px !important;
}
.product_details .hooper_2 .is-current{
    border: #F05E27 1px solid !important;
}
/* slider */

/* tabs */
.tabs{
    margin-top: 88px;
}
.ivu-tabs-ink-bar{
    display: none !important;
}
.ivu-tabs-nav-scroll{
    display: flex !important;
    justify-content: space-between !important;
    padding: 20px !important;
    outline: none !important;
}
.ivu-tabs-nav-container{
    display: inline-block !important;
}
.ivu-tabs-nav .ivu-tabs-tab-active,
.ivu-tabs-nav .ivu-tabs-tab-focused {
    color: #ffffff !important;
    background-color: #F05E27;
    border-radius: 5px;
    border: 1px solid #F05E27 !important;
}
:focus-visible {
 outline: unset !important;
}
.ivu-tabs-nav-container:focus .ivu-tabs-tab-focused{
    border-color: #F05E27 !important;
}
.ivu-tabs-nav .ivu-tabs-tab{
    padding: 15px 70px !important;
    border: 1px solid #DBDBDB;
    border-radius: 8px;
    font: normal normal 500 14px/35px Poppins;
    transition: .2s all linear !important;
}
.ivu-tabs-tab:hover{
    color: #ffffff !important;
    background-color: #F05E27;
}
.ivu-tabs-bar{
    border-bottom: unset !important;
    margin-bottom: 70px !important;
}
.ivu-tabs .ivu-tabs-content-animated{
    text-align: start !important;
}
.ivu-tabs .ivu-tabs-content-animated h2{
    font: normal normal 600 26px/40px Poppins;
    letter-spacing: 0px;
    color: #000000;
}
.ivu-tabs .ivu-tabs-content-animated p{
   font: normal normal normal 14px/25px Poppins;
    letter-spacing: 0px;
    color: #A0A0A0;
}
/* tabs */
/* Tabels */
.tabels h3{
    text-align: start;
    font: normal normal 600 20px/45px Poppins;
    letter-spacing: 0px;
    color: #000000;
}
.tabels .tabel_1{
   
    float: left;
}
.tabels .tabel_2{
     
    float: right;
}
.ivu-table{
   font: normal normal normal 14px/30px Poppins !important;
    letter-spacing: -0.32px !important;
    color: #545454 !important;
}
.ivu-table .ivu-table-body tr:nth-child(even) td{
    background-color: #F7F7F7 !important;
}
.ivu-table-header{
    display: none !important;
}
.ivu-table-cell{
   font: normal normal normal 15px/35px Poppins
}
/* Tabels */
.product_details{
  margin: 70px 40px;
  position: relative;
   font-family: 'Poppins', sans-serif;
}
.product_details .hart,
.product_details .arrow-left{
    position: absolute;
    top: -26px;
    width: 60px;
    background-color: transparent !important;
    border: unset !important;
}
.product_details .hart{
    right: 20px;
}
.product_details .arrow-left{
    right: 80px; 
}
.product_details .content_product{
    text-align: start;
}
.reviews{
    display: inline-flex;
    position: relative;
    margin-left: 135px;
    top: 16px;
}
.reviews a{
    color: #969696;
    text-decoration: none;
    display: inherit;
    text-align: left;
    font: normal normal normal 14px/29px Poppins !important;
    letter-spacing: -0.16px;
    color: #969696;
    opacity: 1;
}
.reviews  .count {
    padding: 0 3px 0 10px;
}
.reviews  a:hover {
    color: inherit;
}
.product_details .stars{
  position: relative;
  top: 20px;
}
.product_details .star,
.product_details .star_empty{
    position: absolute;
}
.product_details .color_star{
  color: #FECA50;
   margin-left: 10px;
   font-size: 16px;
}
.product_details .color_star_empty{
   color: #E4E4E4;
   margin-left: 11px;
   font-size: 15px;
}
.product_details .product_img{
  float: left;
    width: 100% !important;
    height: 75% !important;
    margin: 0 !important;
    border-radius: 5px;
    border: 1px solid #33333340;
    padding: 60px;
}
 .card-body .card-title{
    color: #1C1C1C;
    text-align: left;
    letter-spacing: -0.71px;
    font: normal normal  600 25px/46px Poppins;
}
.card-body .card-text{
  font-size: 23px;
  color: #1C1C1C;
  text-align: left;
  font-family: 'Almarai', sans-serif;
  letter-spacing: -0.71px;
  font: normal normal normal 25px/46px Almarai;
}
.info_seler{
  display: flex;
  align-items: center;
  justify-content: start;
}
.img_mark{
    width: 160px;
    height: 55px;
    margin-right: 15px;
}
.seler_name{
    min-width: -webkit-max-content;
    min-width: -moz-max-content;
    min-width: max-content;
    border: 1px solid #f05c27cb;
    border-radius: 5px;
    padding: 12px 10px;
    margin-right: 15px;
}
.seler_name a{
    margin-right: 11px !important;
}
.seler_name .name{
    color: #F05E27;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    letter-spacing: -0.24px;
    font-size: 13px;
    margin: 4px;
}
.vat_included{
    float: right;
    margin: 0px 17px;
    font: normal normal 600 17px/63px Poppins;
    letter-spacing: -0.48px;
    color: #B4B4B4;
}
.vat_included a {
    color: #F05E27;
}
.vat_included a:hover {
    color: #F05E27;
}
.seler_name .rotes{
    color: #214252;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    letter-spacing: -0.24px;
    font-size: 10px;
    margin: 4px;
}
.product_details .card-body{
    border-bottom: 1px solid #33333340;
    padding: 7px 0 16px 0;
}
.product_details .discount{
    width: -webkit-min-content;
    width: -moz-min-content;
    width: min-content;
    background-color: #fd5858;
    border-radius: 10px 0;
    text-align: center;
    color: #FFF;
    padding: 0 6px;
    margin-left: 26%;
    font-size: 12px;
    margin-top: -25px;
}
.detils_price_discoun .discount span{
    font-weight: 550;
    font-family: 'Poppins', sans-serif;
}
.detils_price_discoun{
    position: relative;
    padding: 36px ;
    border-bottom: 1px solid #33333340;
}

.detils_price_discoun .old_price{
    color: #969696;
    font-size: 15px;
    position: absolute;
    top: 9px;
    left: 9px;
    letter-spacing: -0.22px;
    font-family: 'Poppins', sans-serif;
}
.detils_price_discoun .new_price{
    color: #1C1C1C;
    letter-spacing: -0.82px;
    position: absolute;
    top: 25px;
    left: 6px;
    font: normal normal 600 31px/59px Poppins;
}
.quantity{
     font-family: 'Poppins', sans-serif;
    position: relative;
    padding: 10px 0;
    border-bottom: 1px solid #33333340;
    font: normal normal normal 24px/35px Poppins;
}
.quantity span{
    color: #545454;
    font-size: 18px;
    text-align: start;
}
.quantity .options{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 10px;
}
.quantity .ivu-icon-ios-add:before,
.ivu-icon-ios-remove:before{
    content: "\f102";
    opacity: 1 !important;
    color: #969696 !important;
    font-size: 20px !important;
    font-weight: 600 !important;
}
.quantity .ivu-input-number-controls-outside{
    width: 130px;
    padding: 0px 45px;
    display: flex;
    margin-right: 10px;
}
.quantity .product-card-add-to-cart{
    border: 1px solid #F05E27;
    width: 154px;
    font-size: 14px;
    color: #F05E27;
    background-color: inherit;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    margin-right: 10px;
}
.quantity .product-card-add-to-cart:hover{
    background-color: #F05E27;
    color: #FFF;
}
.quantity .buy_now{
    width: 120px;
    background: #F05E27 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
    color: #FFF;
    font: normal normal 500 13px/22px Poppins;
}
.quantity .buy_now:hover{
    color: #FFF;
}
.ivu-input-number-controls-outside-up{
    right: 0;
    border-left: 1px solid #dcdee2;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
}
.ivu-input-number-controls-outside-down{
    left: 0;
    border-right: 1px solid #dcdee2;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
}
.ivu-input-number-input-wrap{
    overflow: hidden;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    align-content: center !important;
    padding-left: 26% !important;
}
.paragragh{
    color: #A0A0A0;
    font-size: 13px;
    font-family: 'Poppins';
    padding-top: 10px;
}
</style>
