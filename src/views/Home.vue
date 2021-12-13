<template>
<div class="Home">
  <div class="landing_page">
    <div class="row">
        <div class="col-md-9">
            <vueper-slides class="w-100" :arrows="true" :bullets="false" >
              <vueper-slide  v-for="(slide, i) in slides" :key="i" :content="slide.content" :image="slide.image" />
            </vueper-slides>
        </div>
        <div class="col-md-3">
            <div class=" ps-section__right w-100">
              <div class="">
                  <a class="ps-collection " href=""><img class="mb-xl-4" src="../assets/images/background/background.png" alt=""></a>
              </div>
              <div class="">
                  <a class="ps-collection  " href=""><img class="mb-xl-4" src="../assets/images/background (1)/background.png" alt=""></a>
              </div>
              <div class="">
                  <a class="ps-collection " href=""><img class="mb-xl-4" src="../assets/images/background (2)/background.png" alt=""></a>
              </div>
            </div>
        </div>
    </div>
  </div>
  <!-- Computers -->
    <Special-Offer />
    <Banner />
    <categories />
    <Blog />
  </div>
</template>

<script>
import SpecialOffer from '../components/SpecialOffers.vue';
import Banner from '../components/Banner.vue';
import categories from '../components/Categories.vue';
import Blog from '../components/Blog.vue';
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  name: 'Home',
  components: {
    VueperSlides,
    VueperSlide,
    SpecialOffer,
    Banner,
    categories,
    Blog,
  },
  data(){
    return {
        slides: [
          {
            content: `<div class="slider-description">
                            <h4>Baladna Offer</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                             <span>99.<sup>99</sup></span>
                            <a class="slider-link" href="#">Buy Now <span> &#8594; </span></a>
                        </div>`,
            image: require('../assets/images/SavingOffers/SavingOffers@2x.png')
            
          },
          {
            content: `<div class="slider-description">
                            <h4>Baladna Offer</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p> 
                            <span>99.<sup>99</sup></span>
                           <a class="slider-link" href="#">Buy Now  <span> &#8594; </span></a>
                        </div>`,
            image:  require('../assets/images/SavingOffers/SavingOffers@2x.png')
          },
          {
            content: `<div class="slider-description">
                            <h4>Baladna Offer</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p> 
                             <span>99.<sup>99</sup></span>
                           <a class="slider-link" href="#">Buy Now <span> &#8594; </span></a>
                        </div>`,
            image:  require('../assets/images/SavingOffers/SavingOffers@2x.png')
          },
        ]
    }
  },
    created(){

    // console.log(this.offers.data.info_cart.cart_1.title_en);
  },
   methods:{
     metaInfo() {
        return {
            title: 'Home',
            meta:[
                {
                  name: 'Home',
                  content: 'this is Home',
                },
                {
                  name: 'product',
                  content: 'this is product-details/',
                },
                {
                  name: 'SpecialOffer',
                  content: 'this is SpecialOffer',
                },
            ]
        }
    },
   },
}
</script>


<style >
@media (min-width: 768px){

  .col-md-9 {
      flex: 0 0 auto;
      width: 69% !important;
  }
}
.slider-description {
    position: absolute;
    padding: 15px 17px 36px !important;
    top: 50%!important;
    transform: translateY(-50%);
    left: 5%!important;
    width: 45%!important;
    color: #000!important;
    text-align: left;
    background: #ffffff9c 0% 0% no-repeat padding-box;
    border-radius: 20px;
    font-family: inherit;
}
 .slider-description h4 {
    color: #393E46 !important;
    font-size: 40px;
    font-weight: 600;
}
.slider-description p {
    color: #393e46d7 !important;
}
 .slider-description .slider-link {
    position: absolute;
    bottom: -21px;
    color: #fff;
    background: #F05E27;
    padding: 10px;
    text-decoration: none;
    width: 146px;
    border-radius: 5px;
    font-size: 15px;
}
 .slider-description .slider-link span{
    position: absolute;
    color: #fff;
    top: 1px;
    font-size: 25px;
    right: 1px;
}
 .slider-description span {
    color: #f05e27;
    font-size: 30px;
    font-weight: 700;
    position: absolute;
    right: 11px;
    bottom: 10px;
    padding-right: 11px;
}
.owl-theme .owl-nav.disabled + .owl-dots{
  display: none !important;
}
.owl-carousel.owl-drag .owl-item{
    width: 300px !important;
}
.landing_page{
  margin: 30px 40px !important;
}
.vueperslides{
  float: left;
  height: 100% !important;
}
.vueperslides__parallax-wrapper{
  height: 100% !important;
  border-radius: 10px !important;
}
.vueperslides__inner{
  height: 97% !important;
}
.ps-section__right{
  float: right;
}
.vueperslides:not(.no-shadow):not(.vueperslides--3d) .vueperslides__parallax-wrapper:after,
 .vueperslides:not(.no-shadow):not(.vueperslides--3d) .vueperslides__parallax-wrapper:before{
   content: none;
}
button:not(:disabled), [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled){
  cursor: pointer;
  background-color: #ffffff;
  font-size: 9px;
  border-radius: 6px;
}
.vueperslides__arrows{
  color: #f05e27;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  right: 58px;
  bottom: 34px;
 
}
.vueperslides__arrow{
  opacity: 1 !important;
}
.vueperslides__arrow--prev{
  left: -3.5em;
}
.vueperslides__arrow--next{
  left: .5em;
   margin-left: 8px;
}
</style>