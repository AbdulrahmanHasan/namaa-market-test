import axios from 'axios'

const Products = {
  namespaced: true,
  state:{
    Product: [],
    countShoping: 0,
    wishlist: 0,
    data:{
        title: 'Special Offer of The Week',
        info_cart:[
                    {
                        id: 1,
                        Discount: 30,
                        img_Product: require('../../assets/images/carts/image.png'),
                        images: [
                            {
                                thumb: require('../../assets/images/carts/image.png')
                            },
                            {
                                thumb: require('../../assets/images/carts/image.png'),
                            },
                            {
                                thumb: require('../../assets/images/carts/image.png'),
                            },
                            {
                                thumb: require('../../assets/images/carts/image.png'),
                            }
                        ],
                        starts: 5,
                        link: `/Product-Detils/${1}`,
                        title_en: 'Baladna Freekeh (Roastedgreen wheat) - Oriental 800 g',
                        title_ar: 'فريكة بلدنا حلال 800 غ',
                        link_seler: '#',
                        img_seler: require('../../assets/images/seller_1.png'),
                        name_seler: 'Suntant Shop',
                        old_price: '200.00',
                        new_price: '179.00',
                    },
                    {
                        id: 2,
                        Discount: 30,
                        img_Product: require('../../assets/images/carts/image.png'),
                        images: [
                            {
                               
                                thumb: require('../../assets/images/carts/image.png')
                            },
                            {
                               
                                thumb: require('../../assets/images/carts/image.png'),
                            },
                            {
                              
                                thumb: require('../../assets/images/carts/image.png'),
                            },
                            {
                              
                                thumb: require('../../assets/images/carts/image.png'),
                            }
                        ],
                        starts: 3,
                        link: `/Product-Detils/${2}`,
                        title_en: 'Baladna Freekeh (Roastedgreen wheat) - Oriental 800 g',
                        title_ar: 'فريكة بلدنا حلال 800 غ',
                        link_seler: '#',
                        img_seler: require('../../assets/images/seller_2.png'),
                        name_seler: 'Suntant Shop',
                        old_price: '200.00',
                        new_price: '179.00',
                    },
                    {
                        id: 3,
                        Discount: 30,
                        img_Product: require('../../assets/images/carts/image.png'),
                        images: [
                            {
                                
                                thumb: require('../../assets/images/carts/image.png')
                            },
                            {
                               
                                thumb: require('../../assets/images/carts/image.png'),
                            },
                            {
                               
                                thumb: require('../../assets/images/carts/image.png'),
                            },
                            {
                              
                                thumb: require('../../assets/images/carts/image.png'),
                            }
                        ],
                        starts: 4,
                        link: `/Product-Detils/${3}`,
                        title_en: 'Baladna Freekeh (Roastedgreen wheat) - Oriental 800 g',
                        title_ar: 'فريكة بلدنا حلال 800 غ',
                        link_seler: '#',
                        img_seler: require('../../assets/images/seller_3.png'),
                        name_seler: 'Suntant Shop',
                        old_price: '200.00',
                        new_price: '179.00',
                    },
                    {
                        id: 4,
                        Discount: 30,
                        img_Product: require('../../assets/images/carts/image.png'),
                        images: [
                            {
                                
                                thumb: require('../../assets/images/carts/image.png')
                            },
                            {
                                
                                thumb: require('../../assets/images/carts/image.png'),
                            },
                            {
                                
                                thumb: require('../../assets/images/carts/image.png'),
                            },
                            {
                             
                                thumb: require('../../assets/images/carts/image.png'),
                            }
                        ],
                        starts: 4,
                        link: `/Product-Detils/${4}`,
                        title_en: 'Baladna Freekeh (Roastedgreen wheat) - Oriental 800 g',
                        title_ar: 'فريكة بلدنا حلال 800 غ',
                        link_seler: '#',
                        img_seler: require('../../assets/images/seller_4.png'),
                        name_seler: 'Suntant Shop',
                        old_price: '200.00',
                        new_price: '179.00',
                    },
                    {
                        id: 5,
                        Discount: 30,
                        img_Product: require('../../assets/images/carts/image.png'),
                        images: [
                            {
                                
                                thumb: require('../../assets/images/carts/image.png')
                            },
                            {
                                
                                thumb: require('../../assets/images/carts/image.png'),
                            },
                            {
                               
                                thumb: require('../../assets/images/carts/image.png'),
                            },
                            {
                               
                                thumb: require('../../assets/images/carts/image.png'),
                            }
                        ],
                        starts: 3,
                        link: `/Product-Detils/${5}`,
                        title_en: 'Baladna Freekeh (Roastedgreen wheat) - Oriental 800 g',
                        title_ar: 'فريكة بلدنا حلال 800 غ',
                        link_seler: '#',
                        img_seler: require('../../assets/images/seller_4.png'),
                        name_seler: 'Suntant Shop',
                        old_price: '200.00',
                        new_price: '179.00',
                    },
                    {
                        id: 6,
                        Discount: 30,
                        img_Product: require('../../assets/images/carts/image.png'),
                        images: [
                            {
                               
                                thumb: require('../../assets/images/carts/image.png')
                            },
                            {
                              
                                thumb: require('../../assets/images/carts/image.png'),
                            },
                            {
                              
                                thumb: require('../../assets/images/carts/image.png'),
                            },
                            {
                                
                                thumb: require('../../assets/images/carts/image.png'),
                            }
                        ],
                        starts: 4,
                        link: `/Product-Detils/${6}`,
                        title_en: 'Baladna Freekeh (Roastedgreen wheat) - Oriental 800 g',
                        title_ar: 'فريكة بلدنا حلال 800 غ',
                        link_seler: '#',
                        img_seler: require('../../assets/images/seller_5.png'),
                        name_seler: 'Suntant Shop',
                        old_price: '200.00',
                        new_price: '179.00',
                    },
                    {
                        id: 7,
                        Discount: 30,
                        img_Product: require('../../assets/images/carts/image.png'),
                        images: [
                            {
                               
                                thumb: require('../../assets/images/carts/image.png')
                            },
                            {
                                
                                thumb: require('../../assets/images/carts/image.png'),
                            },
                            {
                                
                                thumb: require('../../assets/images/carts/image.png'),
                            },
                            {
                                
                                thumb: require('../../assets/images/carts/image.png'),
                            }
                        ],
                        starts: 3,
                        link: `/Product-Detils/${7}`,
                        title_en: 'Baladna Freekeh (Roastedgreen wheat) - Oriental 800 g',
                        title_ar: 'فريكة بلدنا حلال 800 غ',
                        link_seler: '#',
                        img_seler: require('../../assets/images/seller_4.png'),
                        name_seler: 'Suntant Shop',
                        old_price: '200.00',
                        new_price: '179.00',
                    },
                    {
                        id: 8,
                        Discount: 30,
                        img_Product: require('../../assets/images/carts/image.png'),
                        images: [
                            {
                                
                                
                                thumb: require('../../assets/images/carts/image.png')
                            },
                            {
                                
                                
                                thumb: require('../../assets/images/carts/image.png'),
                            },
                            {
                                
                                
                                thumb: require('../../assets/images/carts/image.png'),
                            },
                            {
                               
                                
                                thumb: require('../../assets/images/carts/image.png'),
                            }
                        ],
                        starts: 3,
                        link: `/Product-Detils/${8}`,
                        title_en: 'Baladna Freekeh (Roastedgreen wheat) - Oriental 800 g',
                        title_ar: 'فريكة بلدنا حلال 800 غ',
                        link_seler: '#',
                        img_seler: require('../../assets/images/seller_5.png'),
                        name_seler: 'Suntant Shop',
                        old_price: '200.00',
                        new_price: '179.00',
                    },
                ]
     }
  },
  mutations:{
    all_Data(state, data) {

          state.Product =  data
      
        //   console.log(state);
      } 
    },
  actions:{
    async getData({commit}){
         try{
        await axios.get("https://mapis.namaatests.com/api/product/18")
            
            .then((response) => {
      
                  let data =  response.data.data.product
      
                     commit("all_Data", data);
      
               
               }).catch((error) => { 
                 console.log(error);    
               });
      
         }catch($r){
            console.log($r);
         }
   },
  }
}


export default Products