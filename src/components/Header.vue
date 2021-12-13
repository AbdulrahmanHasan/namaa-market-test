<template>
  <div class="">
   <header class="header header--1" data-sticky="true" style="opacity:1;">
    <div class="header__top">
            <div class="ps-container">
                <div class="row ">
                    <div class="header__left col-xl-2">
                        <div class="menu--product-categories">
                            <div class="">
                                <a class="" href="http://127.0.0.1:4545">
                                    <img src="../assets/images/logoTalabity.png" alt="">
                                </a>
                            </div>
                        </div>
                        <a class="ps-logo" href="http://127.0.0.1:4545">
                            <!-- <img src="../assets/images/logoTalabity.png" alt=""> -->
                            <img src="../assets/images/logotalabity.svg" alt="">
                        </a>
                    </div>
                     <div class="header__center col-xl-5">
                            <div class="ml-35 mt-1 row  justify-content-end">
                                <ul class="col-xl-12 navigation__extra mb-xl-1 text-center">
                                    <li class="my-0 "><a href="#">Today’s Deals</a></li> 
                                    <li class="my-0"><a href="#">Gift</a></li>
                                    <li class="my-0"><a href="#">Cards</a></li>
                                    <li class="my-0"><a href="#">Registry</a></li>
                                    <li class="my-0"><a href="#">Sell</a></li>
                                    <li class="my-0"><a href="#">Help</a></li>
                                </ul>     

                                <form class="border border-secondary col-xl-10 p-0 pl-1 ps-form--quick-search" method="GET" action="http://127.0.0.1:4545/filter" id="search-form">
                                    <a href="javascript:;" class="d-md-block d-xs-none d-sm-none m-0 p-4 search-sidebar-button"><svg class="svg-inline--fa fa-bars fa-w-14" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg><!-- <i class="fa fa-bars" aria-hidden="true"></i> Font Awesome fontawesome.com --></a>
                                    <input class="form-control" type="text" autocomplete="off" placeholder="You can search here" name="q" value="" id="main-search">
                                    <button><img src="../assets/images/search.svg" alt=""></button>
                                </form>
                            </div>
                        </div>
                        <div class="header__right col-xl-5">
                            <div class="header__actions h-100">
                                <div class="ps-block--user-header">
                                    <div class="ps-block__left">
                                           <img src="../assets/images/action-checkout.svg" alt="">
                                        </div>
                                    <div class="ps-block__right">
                                        <span href="my-account.html">Hello,Sign in</span>
                                        <div class="ps-dropdown unauth ">
                                                <a href="#">Account & Lists </a>
                                                
                                            <ul class="ps-dropdown-menu shadow mt-4 account-list">
                                                <li class="mb-15"><a href="http://127.0.0.1:4545/login">Login</a></li>
                                                <li><a href="http://127.0.0.1:4545/register">Register</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="ps-block--user-header">
                                        <div class="ps-block__left "><img src="https://frontend.arapro.namaatests.com/image/flag/en.svg" alt=""></div>
                                        <div class="ps-block__right">
                                            <span href="my-account.html">Language</span>
                                                <div class="ps-dropdown">
                                                                <a href="#">English  <Icon type="ios-arrow-down arrow" /></a>
                                                               
                                                <ul class="ps-dropdown-menu shadow mt-4" style="min-width: 75px !important;">
                                                <li class="lang-list text-uppercase">
                                                    <a href="http://127.0.0.1:4545/" onclick="changelang('en');" class="arabic btn-block font-green language-select text-center " style="text-align: center" aria-label="ENGLISH" type="button" name="ar-ar">ENGLISH </a>
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                <div class="ps-block--user-header mr-0">
                                    <a href="http://127.0.0.1:4545/my_cart" class="cart-button btn header-auth-links font-white  pl-3 pr-0">
                                        <img src="../assets/images/action-addtocart.svg" class="cart_fill mr-1" alt="cart_icon">
                                          <span class="text_order">Cart</span>
                                        <span class="cart-count ml-2">( {{ this.Products.countShoping }} )</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                       </div>
             </div>
    </div>
    <nav class="navigation bg-transparent">
        <div class="ps-container">
            <div class="navigation__right">
                    <ul class="menu w-100 bg-white">
                        <li class="menu-item-has-children has-mega-menu ">
                            <a href="http://127.0.0.1:4545/Furniture/c-1">Halva, Tahini <br> Falafel</a><span class="sub-toggle"></span>
                            <div class="mega-menu border-0 mega-menu w-100 shadow-lg">
                                <div class="w-100">
                                        <div class="mega-menu__column">
                                            <h4><a href="http://127.0.0.1:4545/Baby-Clothing/c-11">Baby Clothing</a><span class="sub-toggle"></span></h4>
                                            <ul class="mega-menu__list">
                                                    <li><a href="http://127.0.0.1:4545/Upper-Lower-Set/c-17">upper &amp; lower set</a>
                                                    </li>
                                            </ul>
                                        </div>
                                </div>
                                <div class="w-100">
                                    <div class="mega-menu__column">
                                        <h4><a href="http://127.0.0.1:4545/Second-Level/c-523">Second level</a><span class="sub-toggle"></span></h4>
                                        <ul class="mega-menu__list">
                                        </ul>
                                    </div>
                                </div>
                                <div class="w-100">
                                    <div class="mega-menu__column">
                                        <h4><a href="http://127.0.0.1:4545/Bedroom/c-524">Bedroom</a><span class="sub-toggle"></span></h4>
                                        <ul class="mega-menu__list">
                                        </ul>
                                    </div>
                                </div>
                                <div class="mega-menu__column">
                                    <div class="row">
                                            <div class="col-lg-6 mb-5">
                                                <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/fz6WFX5yelyx8n8vK25lnQwyj7oMGaSBcmbCnEgN.jpg" alt="">
                                            </div>

                                            <div class="col-lg-6 mb-5">
                                                <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/W684Ufw3DpqtMssnc0JNqL3MUeV2LvZyeTzCoUCU.jpg" alt="">
                                            </div>

                                            <div class="col-lg-6 mb-5">
                                                <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/2qKwSBWKLxMNy6QWnwobnwr8r6182d9PRrnx7TOY.jpg" alt="">
                                            </div>
                                            <div class="col-lg-6 mb-5">
                                                <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/ubdjiArXIX6RumnAsz99NjGOqSmO0MrC87KuMwhE.jpg" alt="">
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="menu-item-has-children has-mega-menu ">
                        <a href="http://127.0.0.1:4545/Fashion/c-432">Oriental <br> Appetizers</a>
                            <span class="sub-toggle"></span>
                                <div class="mega-menu border-0 mega-menu w-100 shadow-lg">
                                <div class="w-100">
                                    <div class="mega-menu__column">
                                            <h4><a href="http://127.0.0.1:4545/Men-S-Clothing/c-441">Men's Clothing</a><span class="sub-toggle"></span></h4>
                                            <ul class="mega-menu__list">
                                                    <li>
                                                        <a href="http://127.0.0.1:4545/Underwear-Nightwear/c-443">Underwear &amp; Nightwear</a>
                                                    </li>
                                                    <li>
                                                        <a href="http://127.0.0.1:4545/T-Shirt-Athlete/c-444">T-shirt &amp; Athlete</a>
                                                    </li>
                                                    <li>
                                                        <a href="http://127.0.0.1:4545/Shirt/c-476">Shirt</a>
                                                    </li>
                                                    <li>
                                                        <a href="http://127.0.0.1:4545/Sweatshirt/c-477">Sweatshirt</a>
                                                    </li>
                                            </ul>
                                    </div>
                                </div>
                                <div class="w-100">
                                    <div class="mega-menu__column">
                                            <h4><a href="http://127.0.0.1:4545/Men-S-Accessories/c-478">Men's Accessories</a><span class="sub-toggle"></span></h4>
                                            <ul class="mega-menu__list">
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Accessory-Sets/c-479">Accessory Sets</a>
                                                </li>
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Scarf/c-480">Scarf</a>
                                                </li>
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Socks/c-481">Socks</a>
                                                </li>
                                            </ul>
                                    </div>
                                </div>
                                <div class="w-100">
                                <div class="mega-menu__column">
                                        <h4><a href="http://127.0.0.1:4545/Women-S-Accessories/c-482">Women's Accessories</a><span class="sub-toggle"></span></h4>
                                        <ul class="mega-menu__list">
                                            <li>
                                                <a href="http://127.0.0.1:4545/Scarf/c-483">Scarf</a>
                                            </li>
                                        

                                            <li>
                                                <a href="http://127.0.0.1:4545/Glove/c-484">Glove</a>
                                            </li>
                                        

                                            <li>
                                                <a href="http://127.0.0.1:4545/Scarf-Shawl/c-485">Scarf &amp; Shawl</a>
                                            </li>
                                        </ul>
                                </div>
                                </div>
                                <div class="w-100">
                                    <div class="mega-menu__column">
                                        <h4><a href="http://127.0.0.1:4545/Women-S-Clothing/c-442">Women's Clothing</a><span class="sub-toggle"></span></h4>
                                        <ul class="mega-menu__list">
                                            <li>
                                                <a href="http://127.0.0.1:4545/Documentaries/c-445">Documentaries</a>
                                            </li>
                                            <li>
                                                <a href="http://127.0.0.1:4545/Cartoon-Animation/c-446">Cartoon &amp; Animation</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="mega-menu__column">
                                        <div class="row">
                                                <div class="col-lg-6 mb-5">
                                                    <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/AMAYqm9USY8PTlo9CyUhnOPkDZrCDxJh9upWZRvA.jpg" alt="">
                                                </div>
                                                <div class="col-lg-6 mb-5">
                                                    <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/tXG1VwjrhVmhFigh31lFunGUcVeDc8WhOz1VAruj.png" alt="">
                                                </div>
                                                <div class="col-lg-6 mb-5">
                                                    <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/5lFCInuqcloKrYTY7BjYAwQmSO1decf1YACfwLSW.jpg" alt="">
                                                </div>
                                                <div class="col-lg-6 mb-5">
                                                    <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/GboUSM8UcWFk4zyMuupawXNMOPxshKlJQPgFijaD.jpg" alt="">
                                                </div>
                                        </div>
                                    </div>
                                    </div>
                        </li>
                        <li class="menu-item-has-children has-mega-menu ">
                            <a href="http://127.0.0.1:4545/Sports-Outdoor/c-436">Arabic <br> Cooking</a><span class="sub-toggle"></span>
                                <div class="mega-menu border-0 mega-menu w-100 shadow-lg">
                                    <div class="w-100">
                                        <div class="mega-menu__column">
                                            <h4><a href="http://127.0.0.1:4545/Fitness/c-490">Fitness</a><span class="sub-toggle"></span></h4>
                                            <ul class="mega-menu__list">
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Fitness-Cardio/c-491">Fitness &amp; Cardio</a>
                                                </li>
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Nutrient-Strengthening/c-492">Nutrient Strengthening</a>
                                                </li>
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Massage-Products/c-493">Massage Products</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="w-100">
                                        <div class="mega-menu__column">
                                            <h4><a href="http://127.0.0.1:4545/Individual-Team-Sports/c-494">Individual &amp; Team Sports</a><span class="sub-toggle"></span></h4>
                                            <ul class="mega-menu__list">
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Individual-Sports/c-495">Individual Sports</a>
                                                </li>
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Fighting-Sports/c-496">Fighting Sports</a>
                                                </li>
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Team-Sports/c-497">Team Sports</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="w-100">
                                        <div class="mega-menu__column">
                                            <h4><a href="http://127.0.0.1:4545/Winter-Sports/c-498">Winter sports</a><span class="sub-toggle"></span></h4>
                                            <ul class="mega-menu__list">
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="w-100">
                                        <div class="mega-menu__column">
                                            <h4><a href="http://127.0.0.1:4545/Bicycle-Scooter/c-499">Bicycle &amp; Scooter</a><span class="sub-toggle"></span></h4>
                                            <ul class="mega-menu__list">
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="mega-menu__column">
                                        <div class="row">
                                            <div class="col-lg-6 mb-5">
                                                <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/default.png" alt="">
                                            </div>

                                            <div class="col-lg-6 mb-5">
                                                <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/default.png" alt="">
                                            </div>

                                            <div class="col-lg-6 mb-5">
                                                <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/default.png" alt="">
                                            </div>
                                            <div class="col-lg-6 mb-5">
                                                <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/default.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </li>
                        <li class="menu-item-has-children has-mega-menu ">
                            <a href="http://127.0.0.1:4545/Technology/c-447">Noodles</a><span class="sub-toggle"></span>
                                <div class="mega-menu border-0 mega-menu w-100 shadow-lg">
                                    <div class="w-100">
                                        <div class="mega-menu__column">
                                            <h4><a href="http://127.0.0.1:4545/Photo-Camera/c-475">Photo &amp; Camera</a><span class="sub-toggle"></span></h4>
                                            <ul class="mega-menu__list">
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Camera/c-486">Camera</a>
                                                </li>
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Camera-Accessories/c-487">Camera Accessories</a>
                                                </li>
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Tripod-Monopod/c-488">Tripod &amp; Monopod</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="w-100">
                                        <div class="mega-menu__column">
                                            <h4><a href="http://127.0.0.1:4545/Mobiles/c-448">Mobiles</a><span class="sub-toggle"></span></h4>
                                            <ul class="mega-menu__list">
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Accessories/c-452">Accessories</a>
                                                </li>
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Tablets/c-453">Tablets</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="w-100">
                                        <div class="mega-menu__column">
                                            <h4><a href="http://127.0.0.1:4545/Laptops-Computers/c-450">Laptops &amp; Computers</a><span class="sub-toggle"></span></h4>
                                            <ul class="mega-menu__list">
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Computers/c-454">Computers</a>
                                                </li>
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Video-Games/c-455">Video Games</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="w-100">
                                        <div class="mega-menu__column">
                                            <h4><a href="http://127.0.0.1:4545/Sound-Visual-Systems/c-489">Sound Visual Systems</a><span class="sub-toggle"></span></h4>
                                            <ul class="mega-menu__list">
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="mega-menu__column">
                                            <div class="row">
                                                <div class="col-lg-6 mb-5">
                                                    <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/zCvpoBxRax3eGOYeR8VyvJl4kZDoAOX6XtCouVvI.jpg" alt="">
                                                </div>

                                                <div class="col-lg-6 mb-5">
                                                    <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/kvfTFSBG4ksF6FyfdHvmLLxvRQ2HbCUZmrA5Ths5.jpg" alt="">
                                                </div>

                                                <div class="col-lg-6 mb-5">
                                                    <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/kgUJqjsKKWpU3kBzq9Qs3zlCQ84xBhbgCXlodwV4.jpg" alt="">
                                                </div>
                                                <div class="col-lg-6 mb-5">
                                                    <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/pg6i5qdp6LoTTCIoL8in9QUNjqdTxg3sPebfN8NI.png" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </li>
                        <li class="menu-item-has-children has-mega-menu ">
                            <a href="http://127.0.0.1:4545/Home-Office/c-456">Arabic <br> Breakfast</a><span class="sub-toggle"></span>
                                <div class="mega-menu border-0 mega-menu w-100 shadow-lg">
                                <div class="w-50">
                                    <div class="mega-menu__column">
                                        <h4><a href="http://127.0.0.1:4545/Kitchenware/c-458">Kitchenware</a><span class="sub-toggle"></span></h4>
                                        <ul class="mega-menu__list">
                                            <li>
                                                <a href="http://127.0.0.1:4545/Cook/c-461">Cook</a>
                                            </li>
                                            <li>
                                                <a href="http://127.0.0.1:4545/Table/c-462">Table</a>
                                            </li>
                                            <li>
                                                <a href="http://127.0.0.1:4545/Small-Kitchen-Supplies/c-513">Small Kitchen Supplies</a>
                                            </li>
                                            <li>
                                                <a href="http://127.0.0.1:4545/Storage-Containers-/c-514">Storage Containers &amp;</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="mega-menu__column">
                                        <h4><a href="http://127.0.0.1:4545/Heating-Cooling-Systems/c-457">Heating Cooling Systems</a><span class="sub-toggle"></span></h4>
                                        <ul class="mega-menu__list">
                                            <li>
                                                <a href="http://127.0.0.1:4545/Air-Curtain/c-459">Air curtain</a>
                                            </li>
                                            <li>
                                                <a href="http://127.0.0.1:4545/Heater/c-460">Heater</a>
                                            </li>
                                            <li>
                                                <a href="http://127.0.0.1:4545/Air-Conditioning/c-512">Air Conditioning</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="w-50">
                                    <div class="mega-menu__column">
                                        <h4><a href="http://127.0.0.1:4545/Furniture/c-518">Furniture</a><span class="sub-toggle"></span></h4>
                                        <ul class="mega-menu__list">
                                            <li>
                                                <a href="http://127.0.0.1:4545/Bathroom-Furniture/c-519">Bathroom Furniture</a>
                                            </li>
                                            <li>
                                                <a href="http://127.0.0.1:4545/Child-Young-Room/c-520">Child &amp; Young room</a>
                                            </li>
                                            <li>
                                                <a href="http://127.0.0.1:4545/Bed-Bed-Baza/c-522">Bed &amp; Bed &amp; Baza</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="mega-menu__column">
                                        <h4><a href="http://127.0.0.1:4545/Office-Stationery/c-515">Office &amp; Stationery</a><span class="sub-toggle"></span></h4>
                                        <ul class="mega-menu__list">
                                        </ul>
                                    </div>
                                </div>
                                <div class="w-50">
                                <div class="mega-menu__column">
                                    <h4><a href="http://127.0.0.1:4545/Home-Textiles/c-516">Home textiles</a><span class="sub-toggle"></span></h4>
                                    <ul class="mega-menu__list">
                                    </ul>
                                </div>
                                <div class="mega-menu__column">
                                    <h4><a href="http://127.0.0.1:4545/Decoration-Lighting/c-517">Decoration &amp; Lighting</a><span class="sub-toggle"></span></h4>
                                    <ul class="mega-menu__list">
                                    </ul>
                                </div>
                            </div>
                            <div class="w-50">
                                <div class="mega-menu__column">
                                    <h4><a href="http://127.0.0.1:4545/Wardrobe/c-521">Wardrobe</a><span class="sub-toggle"></span></h4>
                                    <ul class="mega-menu__list">
                                    </ul>
                                </div>
                            </div>
                            <div class="mega-menu__column">
                                <div class="row">
                                    <div class="col-lg-6 mb-5">
                                        <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/JnLq1flt9pigmVhgB1c9gqsXEWCNl4C0Tf1QQ4nI.jpg" alt="">
                                    </div>

                                    <div class="col-lg-6 mb-5">
                                        <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/rklVJIq580IGwEKDUkC0OTPxf97odVzIRlhWYD8V.jpg" alt="">
                                    </div>

                                    <div class="col-lg-6 mb-5">
                                        <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/k0DcS55wFJvIGtdcdYuKg2bNk370roh4mBfKmEvi.jpg" alt="">
                                    </div>
                                    <div class="col-lg-6 mb-5">
                                        <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/XoW2RBufXCLETyVSUlHLxyVRKjF5pTSFyT4bndAM.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        </li>
                        <li class="menu-item-has-children has-mega-menu ">
                            <a href="http://127.0.0.1:4545/Cosmetics/c-463">Pulses <br> &amp;  Bulgur</a><span class="sub-toggle"></span>
                        <div class="mega-menu border-0 mega-menu w-100 shadow-lg">
                            <div class="w-50">
                                <div class="mega-menu__column">
                                    <h4><a href="http://127.0.0.1:4545/Mouth-Dental-Care/c-466">Mouth &amp; Dental Care</a><span class="sub-toggle"></span></h4>
                                    <ul class="mega-menu__list">
                                        <li>
                                            <a href="http://127.0.0.1:4545/Mouth-Cleaning-Gargle/c-467">Mouth Cleaning &amp; Gargle</a>
                                        </li>
                                        <li>
                                            <a href="http://127.0.0.1:4545/Toothbrush-Oral-Care-Devices/c-468">Toothbrush &amp; Oral Care Devices</a>
                                        </li>
                                        <li>
                                            <a href="http://127.0.0.1:4545/Toothpaste-Dental-Prosthetic-Products/c-500">Toothpaste-Dental Prosthetic Products</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mega-menu__column">
                                    <h4><a href="http://127.0.0.1:4545/Perfume-Deodorant/c-502">Perfume &amp; Deodorant</a><span class="sub-toggle"></span></h4>
                                    <ul class="mega-menu__list">
                                        <li>
                                            <a href="http://127.0.0.1:4545/Deodorant-Roll-On/c-503">Deodorant &amp; Roll-on</a>
                                        </li>
                                        <li>
                                            <a href="http://127.0.0.1:4545/Men-Perfume/c-504">Men Perfume</a>
                                        </li>
                                        <li>
                                            <a href="http://127.0.0.1:4545/Women-S-Perfume/c-505">Women's Perfume</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="w-50">
                                <div class="mega-menu__column">
                                    <h4><a href="http://127.0.0.1:4545/Make-Up/c-465">Make-up</a><span class="sub-toggle"></span></h4>
                                    <ul class="mega-menu__list">
                                        <li>
                                            <a href="http://127.0.0.1:4545/Face/c-469">Face</a>
                                        </li>
                                        <li>
                                            <a href="http://127.0.0.1:4545/Eyes/c-470">Eyes</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mega-menu__column">
                                    <h4><a href="http://127.0.0.1:4545/Skin-Facial-Care/c-507">Skin &amp; Facial Care</a><span class="sub-toggle"></span></h4>
                                    <ul class="mega-menu__list">
                                    </ul>
                                </div>
                            </div>
                            <div class="w-50">
                                <div class="mega-menu__column">
                                    <h4><a href="http://127.0.0.1:4545/Health-Products/c-508">Health products</a><span class="sub-toggle"></span></h4>
                                    <ul class="mega-menu__list">
                                    </ul>
                                </div>
                                <div class="mega-menu__column">
                                    <h4><a href="http://127.0.0.1:4545/Hair-Care-Styling/c-509">Hair Care &amp; Styling</a><span class="sub-toggle"></span></h4>
                                    <ul class="mega-menu__list">
                                    </ul>
                                </div>
                            </div>
                            <div class="w-50">
                                <div class="mega-menu__column">
                                    <h4><a href="http://127.0.0.1:4545/Sun-Tan-Products/c-510">Sun &amp; Tan Products</a><span class="sub-toggle"></span></h4>
                                    <ul class="mega-menu__list">
                                    </ul>
                                </div>
                            </div>
                            <div class="mega-menu__column">
                                <div class="row">
                                    <div class="col-lg-6 mb-5">
                                        <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/5o6KBjqNcy4DPFpZNPj9QvB4hQdTCqg3yER35am2.jpg" alt="">
                                    </div>

                                    <div class="col-lg-6 mb-5">
                                        <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/VGqElBQhELmuB0m5OpykCy6yj4hs0P88c8pmCJ5r.jpg" alt="">
                                    </div>

                                    <div class="col-lg-6 mb-5">
                                        <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/Jn0UPvh2Anz86Z0a6WcepTNXbd4rxyEdilKeXANp.jpg" alt="">
                                    </div>
                                    <div class="col-lg-6 mb-5">
                                        <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/wcZP30QtDKSci0sDJtl77cHq1wLEfYwUIbAhUOD6.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        </li>
                        <li class="menu-item-has-children has-mega-menu ">
                            <a href="http://127.0.0.1:4545/Test-Category/c-525">Spices</a><span class="sub-toggle"></span>
                            <div class="mega-menu border-0 mega-menu w-100 shadow-lg">
                                <div class="mega-menu__column">
                                    <div class="row">
                                        <div class="col-lg-6 mb-5">
                                            <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/default.png" alt="">
                                        </div>

                                        <div class="col-lg-6 mb-5">
                                            <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/default.png" alt="">
                                        </div>

                                        <div class="col-lg-6 mb-5">
                                            <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/default.png" alt="">
                                        </div>
                                        <div class="col-lg-6 mb-5">
                                            <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/default.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                         <li class="menu-item-has-children has-mega-menu ">
                            <a href="http://127.0.0.1:4545/Sports-Outdoor/c-436">Oils</a><span class="sub-toggle"></span>
                                <div class="mega-menu border-0 mega-menu w-100 shadow-lg">
                                    <div class="w-100">
                                        <div class="mega-menu__column">
                                            <h4><a href="http://127.0.0.1:4545/Fitness/c-490">Fitness</a><span class="sub-toggle"></span></h4>
                                            <ul class="mega-menu__list">
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Fitness-Cardio/c-491">Fitness &amp; Cardio</a>
                                                </li>
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Nutrient-Strengthening/c-492">Nutrient Strengthening</a>
                                                </li>
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Massage-Products/c-493">Massage Products</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="w-100">
                                        <div class="mega-menu__column">
                                            <h4><a href="http://127.0.0.1:4545/Individual-Team-Sports/c-494">Individual &amp; Team Sports</a><span class="sub-toggle"></span></h4>
                                            <ul class="mega-menu__list">
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Individual-Sports/c-495">Individual Sports</a>
                                                </li>
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Fighting-Sports/c-496">Fighting Sports</a>
                                                </li>
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Team-Sports/c-497">Team Sports</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="w-100">
                                        <div class="mega-menu__column">
                                            <h4><a href="http://127.0.0.1:4545/Winter-Sports/c-498">Winter sports</a><span class="sub-toggle"></span></h4>
                                            <ul class="mega-menu__list">
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="w-100">
                                        <div class="mega-menu__column">
                                            <h4><a href="http://127.0.0.1:4545/Bicycle-Scooter/c-499">Bicycle &amp; Scooter</a><span class="sub-toggle"></span></h4>
                                            <ul class="mega-menu__list">
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="mega-menu__column">
                                        <div class="row">
                                            <div class="col-lg-6 mb-5">
                                                <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/default.png" alt="">
                                            </div>

                                            <div class="col-lg-6 mb-5">
                                                <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/default.png" alt="">
                                            </div>

                                            <div class="col-lg-6 mb-5">
                                                <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/default.png" alt="">
                                            </div>
                                            <div class="col-lg-6 mb-5">
                                                <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/default.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </li>
                        <li class="menu-item-has-children has-mega-menu ">
                            <a href="http://127.0.0.1:4545/Technology/c-447">Drinks <br> &amp; Snacks</a><span class="sub-toggle"></span>
                                <div class="mega-menu border-0 mega-menu w-100 shadow-lg">
                                    <div class="w-100">
                                        <div class="mega-menu__column">
                                            <h4><a href="http://127.0.0.1:4545/Photo-Camera/c-475">Photo &amp; Camera</a><span class="sub-toggle"></span></h4>
                                            <ul class="mega-menu__list">
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Camera/c-486">Camera</a>
                                                </li>
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Camera-Accessories/c-487">Camera Accessories</a>
                                                </li>
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Tripod-Monopod/c-488">Tripod &amp; Monopod</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="w-100">
                                        <div class="mega-menu__column">
                                            <h4><a href="http://127.0.0.1:4545/Mobiles/c-448">Mobiles</a><span class="sub-toggle"></span></h4>
                                            <ul class="mega-menu__list">
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Accessories/c-452">Accessories</a>
                                                </li>
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Tablets/c-453">Tablets</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="w-100">
                                        <div class="mega-menu__column">
                                            <h4><a href="http://127.0.0.1:4545/Laptops-Computers/c-450">Laptops &amp; Computers</a><span class="sub-toggle"></span></h4>
                                            <ul class="mega-menu__list">
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Computers/c-454">Computers</a>
                                                </li>
                                                <li>
                                                    <a href="http://127.0.0.1:4545/Video-Games/c-455">Video Games</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="w-100">
                                        <div class="mega-menu__column">
                                            <h4><a href="http://127.0.0.1:4545/Sound-Visual-Systems/c-489">Sound Visual Systems</a><span class="sub-toggle"></span></h4>
                                            <ul class="mega-menu__list">
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="mega-menu__column">
                                            <div class="row">
                                                <div class="col-lg-6 mb-5">
                                                    <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/zCvpoBxRax3eGOYeR8VyvJl4kZDoAOX6XtCouVvI.jpg" alt="">
                                                </div>

                                                <div class="col-lg-6 mb-5">
                                                    <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/kvfTFSBG4ksF6FyfdHvmLLxvRQ2HbCUZmrA5Ths5.jpg" alt="">
                                                </div>

                                                <div class="col-lg-6 mb-5">
                                                    <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/kgUJqjsKKWpU3kBzq9Qs3zlCQ84xBhbgCXlodwV4.jpg" alt="">
                                                </div>
                                                <div class="col-lg-6 mb-5">
                                                    <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/pg6i5qdp6LoTTCIoL8in9QUNjqdTxg3sPebfN8NI.png" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </li>
                        <li class="menu-item-has-children has-mega-menu ">
                            <a href="http://127.0.0.1:4545/Home-Office/c-456">Sweets <br> &amp; More</a><span class="sub-toggle"></span>
                                <div class="mega-menu border-0 mega-menu w-100 shadow-lg">
                                <div class="w-50">
                                    <div class="mega-menu__column">
                                        <h4><a href="http://127.0.0.1:4545/Kitchenware/c-458">Kitchenware</a><span class="sub-toggle"></span></h4>
                                        <ul class="mega-menu__list">
                                            <li>
                                                <a href="http://127.0.0.1:4545/Cook/c-461">Cook</a>
                                            </li>
                                            <li>
                                                <a href="http://127.0.0.1:4545/Table/c-462">Table</a>
                                            </li>
                                            <li>
                                                <a href="http://127.0.0.1:4545/Small-Kitchen-Supplies/c-513">Small Kitchen Supplies</a>
                                            </li>
                                            <li>
                                                <a href="http://127.0.0.1:4545/Storage-Containers-/c-514">Storage Containers &amp;</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="mega-menu__column">
                                        <h4><a href="http://127.0.0.1:4545/Heating-Cooling-Systems/c-457">Heating Cooling Systems</a><span class="sub-toggle"></span></h4>
                                        <ul class="mega-menu__list">
                                            <li>
                                                <a href="http://127.0.0.1:4545/Air-Curtain/c-459">Air curtain</a>
                                            </li>
                                            <li>
                                                <a href="http://127.0.0.1:4545/Heater/c-460">Heater</a>
                                            </li>
                                            <li>
                                                <a href="http://127.0.0.1:4545/Air-Conditioning/c-512">Air Conditioning</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="w-50">
                                    <div class="mega-menu__column">
                                        <h4><a href="http://127.0.0.1:4545/Furniture/c-518">Furniture</a><span class="sub-toggle"></span></h4>
                                        <ul class="mega-menu__list">
                                            <li>
                                                <a href="http://127.0.0.1:4545/Bathroom-Furniture/c-519">Bathroom Furniture</a>
                                            </li>
                                            <li>
                                                <a href="http://127.0.0.1:4545/Child-Young-Room/c-520">Child &amp; Young room</a>
                                            </li>
                                            <li>
                                                <a href="http://127.0.0.1:4545/Bed-Bed-Baza/c-522">Bed &amp; Bed &amp; Baza</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="mega-menu__column">
                                        <h4><a href="http://127.0.0.1:4545/Office-Stationery/c-515">Office &amp; Stationery</a><span class="sub-toggle"></span></h4>
                                        <ul class="mega-menu__list">
                                        </ul>
                                    </div>
                                </div>
                                <div class="w-50">
                                <div class="mega-menu__column">
                                    <h4><a href="http://127.0.0.1:4545/Home-Textiles/c-516">Home textiles</a><span class="sub-toggle"></span></h4>
                                    <ul class="mega-menu__list">
                                    </ul>
                                </div>
                                <div class="mega-menu__column">
                                    <h4><a href="http://127.0.0.1:4545/Decoration-Lighting/c-517">Decoration &amp; Lighting</a><span class="sub-toggle"></span></h4>
                                    <ul class="mega-menu__list">
                                    </ul>
                                </div>
                            </div>
                            <div class="w-50">
                                <div class="mega-menu__column">
                                    <h4><a href="http://127.0.0.1:4545/Wardrobe/c-521">Wardrobe</a><span class="sub-toggle"></span></h4>
                                    <ul class="mega-menu__list">
                                    </ul>
                                </div>
                            </div>
                            <div class="mega-menu__column">
                                <div class="row">
                                    <div class="col-lg-6 mb-5">
                                        <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/JnLq1flt9pigmVhgB1c9gqsXEWCNl4C0Tf1QQ4nI.jpg" alt="">
                                    </div>

                                    <div class="col-lg-6 mb-5">
                                        <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/rklVJIq580IGwEKDUkC0OTPxf97odVzIRlhWYD8V.jpg" alt="">
                                    </div>

                                    <div class="col-lg-6 mb-5">
                                        <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/k0DcS55wFJvIGtdcdYuKg2bNk370roh4mBfKmEvi.jpg" alt="">
                                    </div>
                                    <div class="col-lg-6 mb-5">
                                        <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/XoW2RBufXCLETyVSUlHLxyVRKjF5pTSFyT4bndAM.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        </li>
                        <li class="menu-item-has-children has-mega-menu ">
                            <a href="http://127.0.0.1:4545/Cosmetics/c-463">Pickles</a><span class="sub-toggle"></span>
                        <div class="mega-menu border-0 mega-menu w-100 shadow-lg">
                            <div class="w-50">
                                <div class="mega-menu__column">
                                    <h4><a href="http://127.0.0.1:4545/Mouth-Dental-Care/c-466">Mouth &amp; Dental Care</a><span class="sub-toggle"></span></h4>
                                    <ul class="mega-menu__list">
                                        <li>
                                            <a href="http://127.0.0.1:4545/Mouth-Cleaning-Gargle/c-467">Mouth Cleaning &amp; Gargle</a>
                                        </li>
                                        <li>
                                            <a href="http://127.0.0.1:4545/Toothbrush-Oral-Care-Devices/c-468">Toothbrush &amp; Oral Care Devices</a>
                                        </li>
                                        <li>
                                            <a href="http://127.0.0.1:4545/Toothpaste-Dental-Prosthetic-Products/c-500">Toothpaste-Dental Prosthetic Products</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mega-menu__column">
                                    <h4><a href="http://127.0.0.1:4545/Perfume-Deodorant/c-502">Perfume &amp; Deodorant</a><span class="sub-toggle"></span></h4>
                                    <ul class="mega-menu__list">
                                        <li>
                                            <a href="http://127.0.0.1:4545/Deodorant-Roll-On/c-503">Deodorant &amp; Roll-on</a>
                                        </li>
                                        <li>
                                            <a href="http://127.0.0.1:4545/Men-Perfume/c-504">Men Perfume</a>
                                        </li>
                                        <li>
                                            <a href="http://127.0.0.1:4545/Women-S-Perfume/c-505">Women's Perfume</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="w-50">
                                <div class="mega-menu__column">
                                    <h4><a href="http://127.0.0.1:4545/Make-Up/c-465">Make-up</a><span class="sub-toggle"></span></h4>
                                    <ul class="mega-menu__list">
                                        <li>
                                            <a href="http://127.0.0.1:4545/Face/c-469">Face</a>
                                        </li>
                                        <li>
                                            <a href="http://127.0.0.1:4545/Eyes/c-470">Eyes</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mega-menu__column">
                                    <h4><a href="http://127.0.0.1:4545/Skin-Facial-Care/c-507">Skin &amp; Facial Care</a><span class="sub-toggle"></span></h4>
                                    <ul class="mega-menu__list">
                                    </ul>
                                </div>
                            </div>
                            <div class="w-50">
                                <div class="mega-menu__column">
                                    <h4><a href="http://127.0.0.1:4545/Health-Products/c-508">Health products</a><span class="sub-toggle"></span></h4>
                                    <ul class="mega-menu__list">
                                    </ul>
                                </div>
                                <div class="mega-menu__column">
                                    <h4><a href="http://127.0.0.1:4545/Hair-Care-Styling/c-509">Hair Care &amp; Styling</a><span class="sub-toggle"></span></h4>
                                    <ul class="mega-menu__list">
                                    </ul>
                                </div>
                            </div>
                            <div class="w-50">
                                <div class="mega-menu__column">
                                    <h4><a href="http://127.0.0.1:4545/Sun-Tan-Products/c-510">Sun &amp; Tan Products</a><span class="sub-toggle"></span></h4>
                                    <ul class="mega-menu__list">
                                    </ul>
                                </div>
                            </div>
                            <div class="mega-menu__column">
                                <div class="row">
                                    <div class="col-lg-6 mb-5">
                                        <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/5o6KBjqNcy4DPFpZNPj9QvB4hQdTCqg3yER35am2.jpg" alt="">
                                    </div>

                                    <div class="col-lg-6 mb-5">
                                        <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/VGqElBQhELmuB0m5OpykCy6yj4hs0P88c8pmCJ5r.jpg" alt="">
                                    </div>

                                    <div class="col-lg-6 mb-5">
                                        <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/Jn0UPvh2Anz86Z0a6WcepTNXbd4rxyEdilKeXANp.jpg" alt="">
                                    </div>
                                    <div class="col-lg-6 mb-5">
                                        <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/wcZP30QtDKSci0sDJtl77cHq1wLEfYwUIbAhUOD6.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        </li>
                        <li class="menu-item-has-children has-mega-menu ">
                            <a href="http://127.0.0.1:4545/Test-Category/c-525">Tomato Paste</a><span class="sub-toggle"></span>
                            <div class="mega-menu border-0 mega-menu w-100 shadow-lg">
                                <div class="mega-menu__column">
                                    <div class="row">
                                        <div class="col-lg-6 mb-5">
                                            <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/default.png" alt="">
                                        </div>

                                        <div class="col-lg-6 mb-5">
                                            <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/default.png" alt="">
                                        </div>

                                        <div class="col-lg-6 mb-5">
                                            <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/default.png" alt="">
                                        </div>
                                        <div class="col-lg-6 mb-5">
                                            <img src="https://admin.arapro.namaatests.com/graph/uploads/250x250/category_images/default.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                   </ul>
               </div>
          </div>
      </nav>
    </header>
 </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    data() {
      return {
         //
      }  
    },
     computed: {
    ...mapState(['Products']),
  },
}
</script>

<style scoped>
.header a{
    color: #bbbfc3 !important;
    font-size: 16px !important;
    font-weight: normal !important;
    text-decoration: none !important;
    text-shadow: 0 0px 0 #fff !important;
}
.header {
    padding: 0 !important;
}
.ps-block--user-header .ps-block__left i[data-v-61dd7a3d]{
    font-size: 20px !important;
    color:  #f05e27;
    font-weight: 700;
    cursor: pointer;
}
:not(i) {
    font-family: Poppins, sans-serif !important
}
html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
}
body {
    margin: 0
}
audio:not([controls]) {
    display: none;
    height: 0
}

.ivu-icon.arrow{
    position: absolute !important;
    right: 4px !important;
    color: #f05e27 !important;
    top: 3px;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
    display: block
}

audio,
canvas,
progress,
video {
    display: inline-block
}

progress {
    vertical-align: baseline
}


template {
    display: none
}

a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects
}

a:active,
a:hover {
    outline-width: 0
}

abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted
}

b,
strong {
    font-weight: inherit;
    font-weight: bolder
}

dfn {
    font-style: italic
}

h1 {
    font-size: 2em;
    margin: .67em 0
}

mark {
    background-color: #ff0;
    color: #000
}

small {
    font-size: 80%
}

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline
}

sub {
    bottom: -.25em
}

sup {
    top: -.5em
}

img {
    border-style: none
}

svg:not(:root) {
    overflow: hidden
}

code,
kbd,
pre,
samp {
    font-family: monospace, monospace;
    font-size: 1em
}

figure {
    margin: 1em 40px
}

hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible
}

button,
input,
select,
textarea {
    font: inherit;
    margin: 0
}

optgroup {
    font-weight: 700
}

button,
input {
    overflow: visible
}

button,
select {
    text-transform: none
}

[type=reset],
[type=submit],
button,
html [type=button] {
    -webkit-appearance: button
}

[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner,
button::-moz-focus-inner {
    border-style: none;
    padding: 0
}

[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring,
button:-moz-focusring {
    outline: 1px dotted ButtonText
}

fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: .35em .625em .75em
}

.cart_fill {
    overflow: hidden;
    transform: rotate(352deg);
    font-size: 18px;
    font-weight: 100;
    margin-right: 8px;
    color: #FFF !important;
}
legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal
}

textarea {
    overflow: auto
}

[type=checkbox],
[type=radio] {
    box-sizing: border-box;
    padding: 0
}

[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
    height: auto
}

[type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px
}

[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}

::-webkit-input-placeholder {
    color: inherit;
    opacity: .54
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit
}

* {
    font-family: Poppins, sans-serif;
    font-weight: 400
}

html {
    font-size: 62.5%
}

body {
    font-size: 14px
}

h1,
h2,
h3,
h4,
h5,
h6 {
    position: relative;
    color: #000;
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: 700
}

h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {
    color: inherit
}

h1 {
    font-size: 48px
}

h2 {
    font-size: 36px
}

h3 {
    font-size: 24px
}

h4 {
    font-size: 18px
}

h5 {
    font-size: 14px
}

h6 {
    font-size: 12px
}

p {
    font-size: 1.4rem;
    line-height: 1.6em;
    color: #666
}

p span {
    font-family: inherit;
    font-size: inherit
}

a,
p span {
    color: inherit
}

a {
    position: relative;
    text-decoration: none;
    transition: all .4s ease
}

a:hover {
    color: #af2d2d
}

a,
button,
input,
select,
textarea {
    outline: none
}

a:hover,
h1:focus,
h2:focus,
h3:focus,
h4:focus,
h5:focus,
h6:focus {
    text-decoration: none
}

a:focus,
button:focus,
input:focus,
select:focus,
textarea:focus {
    outline: none;
    text-decoration: none
}

iframe,
img {
    max-width: 100%
}

iframe {
    border: 0;
    width: 100%
}

figure {
    margin: 0
}

.ps-document ol,
.ps-document ul {
    margin-bottom: 10px
}

.ps-document ol ol,
.ps-document ol ul,
.ps-document ul ol,
.ps-document ul ul {
    margin-bottom: 0
}

.ps-document ol li,
.ps-document ul li {
    color: #666;
    font-size: 14px;
    line-height: 1.6em
}

.ps-document h5 {
    font-size: 16px;
    font-weight: 600
}

.ps-document p {
    margin-bottom: 4rem;
    line-height: 1.8em;
    color: #666
}

.ps-document p i {
    font-family: Poppins, serif
}

.ps-document p strong {
    font-weight: 600;
    color: #666
}

.ps-document p strong i {
    font-weight: 400;
    color: #000
}

.ps-document blockquote {
    position: relative;
    margin-bottom: 3rem;
    padding: 3rem 2rem 3rem 6rem;
    background-color: #f1f1f1
}

.ps-document blockquote:before {
    content: "“";
    position: absolute;
    top: 10px;
    left: 30px;
    font-family: Poppins, serif;
    font-size: 5rem;
    color: #666
}

.ps-document blockquote p {
    margin-bottom: 0;
    font-family: Poppins, serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.8em;
    color: #666;
    font-style: italic
}

.ps-document .ps-document__heading {
    position: relative;
    display: block;
    margin-bottom: 30px;
    text-align: center
}

.ps-document .ps-document__heading h4 {
    display: inline-block;
    padding: 0 3rem;
    margin-bottom: 0;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    color: #000;
    text-transform: uppercase;
    letter-spacing: .05em;
    background-color: #fff
}

.ps-document .ps-document__heading:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ebebeb;
    z-index: -1
}

.ps-success {
    color: #529115;
    font-weight: 500
}

.ps-heading {
    margin-bottom: 1.5rem;
    font-size: 3.6rem;
    color: #000;
    font-weight: 600;
    line-height: 1.4em
}

.ps-heading--2 {
    font-size: 2.4rem
}

@media (max-width:767px) {
    .ps-heading {
        font-size: 2.4rem
    }
}

.ps-blockquote {
    border-left: 4px solid #fff;
    padding-left: 60px
}

.ps-blockquote p {
    font-family: Poppins, serif;
    font-size: 26px;
    font-weight: 400;
    color: #000
}

.ps-blockquote span {
    font-weight: 600;
    color: #000
}

.ps-tag {
    font-weight: 600
}

.ps-tag--in-stock {
    color: #690
}

.ps-tag--out-stock {
    color: #000
}

body,
html {
    min-height: 100%;
    position: relative
}

.ps-row {
    margin: 0 -15px
}

.ps-row:after {
    clear: both;
    content: "";
    display: table
}

.ps-row .ps-column {
    float: left;
    width: 20%;
    padding: 0 15px
}

@media (max-width:1600px) {
    .ps-row .ps-column {
        width: 25%
    }
}

@media (max-width:991px) {
    .ps-row .ps-column {
        width: 33.33333%
    }
}

@media (max-width:767px) {
    .ps-row .ps-column {
        width: 50%
    }
}

@media (max-width:479px) {
    .ps-row .ps-column {
        width: 100%
    }
}

@media (max-width:767px) {
    .ps-col-tiny .col-xs-12 {
        width: 50%
    }
}

@media (max-width:479px) {
    .ps-col-tiny .col-xs-12 {
        width: 100%
    }
}

body {
    overflow-x: hidden
}

.ps-container {
    max-width: 1650px;
    margin: 0 auto;
    /* padding: 0 25px; */
    justify-content: space-evenly
}

@media (max-width:1680px) {
    .ps-container {
        /* padding: 0 30px; */
        max-width: 100%
    }
}

@media (max-width:479px) {
    .ps-container {
        /* padding: 0 15px */
    }
}

@media (min-width:1200px) {
    .container {
        min-width: 1230px
    }
}

.ps-list--social {
    margin: 0;
    padding: 0
}

.ps-list--social li {
    position: relative;
    display: inline-block;
    margin-right: 20px;
    vertical-align: top
}

.ps-list--social li a {
    display: inline-block;
    font-size: 18px;
    color: #666
}

.ps-list--social li a:hover {
    color: #fff
}

.ps-list--social li a.facebook i {
    color: #3b5998
}

.ps-list--social li a.twitter i {
    color: #0084b4
}

.ps-list--social li a.google-plus i {
    color: red
}

.ps-list--social li a.instagram i {
    color: #c32aa3
}

.ps-list--pricing li {
    position: relative;
    padding: 1.5rem 2rem;
    background-color: #fff;
    vertical-align: top;
    color: #000
}

.ps-list--pricing li:after {
    clear: both;
    content: "";
    display: table
}

.ps-list--pricing li span {
    float: right;
    vertical-align: top
}

.ps-list--pricing li:nth-child(2n) {
    background-color: #f7f4ee
}

.ps-list--checked li {
    margin-bottom: 20px
}

.ps-list--checked li a {
    position: relative;
    display: block;
    padding-left: 30px;
    font-size: 14px;
    color: #313131
}

.ps-list--checked li a:before {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 20px;
    height: 20px;
    border: 1px solid #8d8d8d;
    transition: all .4s ease
}

.ps-list--checked li a:after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 4px;
    left: 8px;
    color: #fff;
    width: 6px;
    height: 10px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(45deg);
    visibility: hidden;
    opacity: 0
}

.ps-list--checked li a:hover:before {
    background-color: #fff;
    border-color: #fff
}

.ps-list--checked li a:hover:after {
    visibility: visible;
    opacity: 1
}

.ps-list--checked li.current a:before {
    background-color: #fff;
    border-color: #fff
}

.ps-list--checked li.current a:after {
    visibility: visible;
    opacity: 1
}

.ps-list--checked.ps-list--checked-circle li a:before {
    border-radius: 50%
}

.ps-list--checked.ps-list--checked-circle li a:hover:before {
    background-color: #a7a7a7;
    border-color: #a7a7a7
}

.ps-list--arrow a {
    position: relative;
    display: block;
    padding-left: 15px;
    font-family: Poppins, sans-serif;
    font-size: 14px;
    letter-spacing: .5px;
    color: #626262
}

.ps-list--arrow a:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    font-family: FontAwesome
}

.ps-list--arrow a:hover {
    color: #fff
}

.ps-list--arrow a:hover .circle {
    background-color: #f05e27;
    border-color: #f05e27
}

.ps-list--arrow a:hover .circle:before {
    color: #fff;
    visibility: visible;
    opacity: 1
}

.ps-list--arrow li {
    margin-bottom: 20px
}

.ps-list--arrow li.current a {
    color: #f05e27
}

.ps-list--arrow li.current .circle {
    background-color: #f05e27
}

.ps-list--arrow li.current .circle:before {
    visibility: visible;
    opacity: 1;
    color: #fff
}

.ps-list--dot {
    padding: 0;
    margin: 0 0 2rem;
    list-style-type: none
}

.ps-list--dot li {
    margin-bottom: 1rem;
    position: relative;
    padding-left: 20px;
    font-size: 1.4rem;
    color: #000;
    line-height: 20px
}

.ps-list--dot li:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 0;
    width: 6px;
    height: 6px;
    background-color: #000;
    border-radius: 50%
}

.ps-list--plus li {
    margin: 10px 0
}

.ps-list--plus li a {
    display: block;
    position: relative;
    padding-left: 15px;
    line-height: 20px
}

.ps-list--plus li a:before {
    content: "+";
    position: absolute;
    top: 0;
    left: 0;
    line-height: 20px
}

.ps-list--link li {
    display: block;
    padding: 4px 0
}

.ps-list--link li a {
    display: inline-block;
    color: #666;
    line-height: 20px;
    position: relative
}

.ps-list--link li a:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #000;
    transform: scaleX(0);
    transition: transform .4s cubic-bezier(.7, 0, .3, 1);
    transform-origin: 100% 50%
}

.ps-list--link li a:hover:before {
    transform: scaleX(1);
    transform-origin: 0 50%
}

.ps-list--categories li {
    position: relative;
    padding: 6px 20px 6px 0
}

.ps-list--categories li a {
    display: block;
    line-height: 22px
}

.ps-list--categories li .sub-toggle {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    width: 32px;
    height: 32px
}

.ps-list--categories li .sub-toggle i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}

.ps-list--categories li .sub-toggle i:before {
    content: "";
    font-family: Linearicons !important
}

.ps-list--categories li .sub-toggle:after,
.ps-list--categories li .sub-toggle:before {
    display: none
}

.ps-list--categories li .sub-menu {
    position: relative;
    padding-left: 20px;
    visibility: visible;
    opacity: 1;
    transition: all 0s ease;
    background-color: transparent;
    border: none;
    display: none
}

.ps-list--categories li .sub-menu li a {
    background-color: transparent;
    padding: 0;
    border: none
}

.ps-list--categories li .sub-menu li.menu-item-has-children .sub-toggle {
    display: inline-block
}

.ps-list--categories li .sub-menu li.menu-item-has-children .sub-menu {
    position: relative;
    top: 0;
    left: 0;
    visibility: visible;
    opacity: 1;
    transform: translateY(0)
}

.ps-list--blog-links {
    display: block;
    text-align: center
}

.ps-list--blog-links li {
    display: inline-block;
    margin-right: 20px
}

.ps-list--blog-links li a {
    font-size: 18px;
    font-weight: 600;
    color: #999;
    line-height: 1.2em
}

.ps-list--blog-links li a:hover {
    color: #000
}

.ps-list--blog-links li:last-child {
    margin-right: 0
}

.ps-list--blog-links li.active a {
    color: #000
}

.ps-list--social-color {
    margin: 0;
    padding: 0;
    list-style: none
}

.ps-list--social-color li {
    display: inline-block;
    vertical-align: top;
    margin-right: 10px
}

.ps-list--social-color li a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    width: 38px;
    height: 38px;
    color: #fff
}

.ps-list--social-color li a.facebook {
    background-color: #1b4e9b
}

.ps-list--social-color li a.facebook:hover {
    background-color: #296fda
}

.ps-list--social-color li a.twitter {
    background-color: #00aeef
}

.ps-list--social-color li a.twitter:hover {
    background-color: #3dcaff
}

.ps-list--social-color li a.google-plus {
    background-color: #c00
}

.ps-list--social-color li a.google-plus:hover {
    background-color: #ff1a1a
}

.ps-list--social-color li a.linkedin {
    background-color: #2d567f
}

.ps-list--social-color li a.linkedin:hover {
    background-color: #417cb7
}

.ps-list--social-color li a.feed {
    background-color: #f86a02
}

.ps-list--social-color li a.feed:hover {
    background-color: #fe9549
}

button {
    cursor: pointer;
    transition: all .4s ease
}

.menu-toggle,
.ps-btn--hamburger {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50%
}

.menu-toggle:after,
.menu-toggle:before,
.menu-toggle span,
.ps-btn--hamburger:after,
.ps-btn--hamburger:before,
.ps-btn--hamburger span {
    position: absolute;
    right: 10px;
    height: 2px;
    width: 20px;
    background-color: #303030;
    z-index: 100;
    transition: all .4s ease
}

.menu-toggle span,
.ps-btn--hamburger span {
    top: 50%;
    transform: translateY(-50%)
}

.menu-toggle:after,
.menu-toggle:before,
.ps-btn--hamburger:after,
.ps-btn--hamburger:before {
    content: ""
}

.menu-toggle:before,
.ps-btn--hamburger:before {
    top: 12px
}

.menu-toggle:after,
.ps-btn--hamburger:after {
    bottom: 12px
}

.menu-toggle:hover,
.ps-btn--hamburger:hover {
    cursor: pointer
}

.menu-toggle.active span,
.ps-btn--hamburger.active span {
    transform: translateX(100%);
    visibility: hidden;
    opacity: 0
}

.menu-toggle.active:after,
.menu-toggle.active:before,
.ps-btn--hamburger.active:after,
.ps-btn--hamburger.active:before {
    top: 50%;
    bottom: auto;
    width: 20px;
    transform-origin: 50% 50%;
    background-color: #fc354c
}

.menu-toggle.active:before,
.ps-btn--hamburger.active:before {
    transform: rotate(45deg)
}

.menu-toggle.active:after,
.ps-btn--hamburger.active:after {
    transform: rotate(-45deg)
}

@media (max-width:1199px) {

    .menu-toggle,
    .ps-btn--hamburger {
        display: inline-block
    }
}

.ps-btn,
button.ps-btn {
    display: inline-block;
    padding: 15px 45px;
    font-size: 16px;
    line-height: 20px;
    color: #000;
    border: none;
    font-weight: 600;
    border-radius: 4px;
    background-color: #fff;
    transition: all .4s ease;
    cursor: pointer
}

.ps-btn--rounded,
button.ps-btn--rounded {
    border-radius: 50px
}

.ps-btn--curve,
button.ps-btn--curve {
    border-radius: 5px
}

.ps-btn--outline,
button.ps-btn--outline {
    border: 2px solid #fff;
    color: #fff;
    background-color: transparent;
    -ms-box-shadow: none;
    box-shadow: none;
    font-weight: 500
}

.ps-btn--outline:hover,
button.ps-btn--outline:hover {
    color: #fff;
    background-color: #fff
}

.ps-btn--fullwidth,
button.ps-btn--fullwidth {
    width: 100%;
    text-align: center
}

.ps-btn--sm,
button.ps-btn--sm {
    padding: .5rem 2rem;
    font-size: 1.2rem
}

.ps-btn--sm.ps-btn--curve,
button.ps-btn--sm.ps-btn--curve {
    border-radius: 3px
}

.ps-btn--lg,
button.ps-btn--lg {
    padding: 1.5rem 4rem
}

.ps-btn--xl,
button.ps-btn--xl {
    padding: 2rem 6rem;
    font-size: 1.6rem
}

.ps-btn.ps-btn--reverse,
button.ps-btn.ps-btn--reverse {
    background-color: #576391
}

.ps-btn.ps-btn--reverse:hover,
button.ps-btn.ps-btn--reverse:hover {
    background-color: #f05e27
}

.ps-btn.ps-btn--gray,
button.ps-btn.ps-btn--gray {
    background-color: #e5e5e5;
    color: #000;
    font-size: 1.6rem
}

.ps-btn.ps-btn--black,
button.ps-btn.ps-btn--black {
    background-color: #000
}

.ps-btn.ps-btn--black.ps-btn--outline,
button.ps-btn.ps-btn--black.ps-btn--outline {
    background-color: transparent;
    border: 2px solid #000;
    color: #000
}

.ps-btn.ps-btn--black.ps-btn--outline:hover,
button.ps-btn.ps-btn--black.ps-btn--outline:hover {
    background-color: #000;
    color: #fff
}

.ps-btn:active,
.ps-btn:hover,
button.ps-btn:active,
button.ps-btn:hover {
    background-color: #f05e27;
    color: #fff
}

.ps-btn:active.ps-btn--black,
.ps-btn:hover.ps-btn--black,
button.ps-btn:active.ps-btn--black,
button.ps-btn:hover.ps-btn--black {
    background-color: #f05e27
}

.ps-btn--favorite {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 40px;
    border: none;
    font-size: 18px;
    border-radius: 50%;
    vertical-align: top
}

.ps-btn--favorite i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #000;
    transition: all .4s ease
}

.ps-btn--favorite:hover i {
    color: #f05e27
}

.ps-btn--close {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 30px;
    transition: all .4s ease;
    border-radius: 50%
}

.ps-btn--close:after,
.ps-btn--close:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 50%;
    background-color: #9f9a98;
    transform-origin: center center;
    transition: all .4s ease
}

.ps-btn--close:before {
    transform: translate(-50%, -50%) rotate(45deg)
}

.ps-btn--close:after {
    transform: translate(-50%, -50%) rotate(-45deg)
}

.ps-btn--close:hover {
    transform: rotate(180deg)
}

.ps-btn--close:hover:after,
.ps-btn--close:hover:before {
    background-color: #f44336;
    transition-delay: .3s
}

#back2top {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    z-index: 10000;
    border: 1px solid #ddd;
    transition: all .4s ease;
    box-shado: 0 0 3px 0 rgba(0, 0, 0, .2);
    background-color: transparent;
    border-radius: 4px;
    visibility: hidden;
    opacity: 0
}

#back2top i {
    z-index: 10001;
    font-size: 14px;
    margin-bottom: -2px;
    color: #000
}

#back2top:hover {
    cursor: pointer;
    background-color: #fff;
    border-color: #fff
}

#back2top.active {
    bottom: 30px;
    visibility: visible;
    opacity: 1
}

.form-control {
    outline: none;
    font-size: 14px;
    padding: 0 20px;
    height: 50px;
    background-color: transparent;
    border: 1px solid #ddd;
    border-radius: 0;
    box-shadow: 0 0 transparent;
    transition: all .4s ease;
    box-shadow: 0 0 0 #000
}

.form-control::-webkit-input-placeholder {
    opacity: 1
}

.form-control:-moz-placeholder,
.form-control::-moz-placeholder {
    opacity: 1
}

.form-control:-ms-input-placeholder {
    opacity: 1
}

.form-control:focus {
    border-color: #fff
}

textarea.form-control {
    height: auto;
    padding: 2rem;
    resize: none
}

.ps-input--has-icon {
    position: relative
}

.ps-input--has-icon>i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px
}

.ps-select {
    display: inline-block;
    min-width: 120px;
    cursor: pointer
}

.ps-select .selectize-input {
    vertical-align: top
}

.ps-number {
    position: relative
}

.ps-number span {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 50%;
    border-left: 1px solid #979797;
    transition: all .4s ease
}

.ps-number span:before {
    font-family: FontAwesome;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #000
}

.ps-number span.up {
    border-bottom: 1px solid #979797
}

.ps-number span.up:before {
    content: ""
}

.ps-number span.down {
    top: auto;
    bottom: 0
}

.ps-number span.down:before {
    content: ""
}

.ps-number span:hover {
    cursor: pointer;
    background-color: #fff
}

.ps-number span:hover:before {
    color: #fff
}

.ps-checkbox {
    position: relative;
    display: block
}

.ps-checkbox>input {
    position: absolute;
    visibility: hidden;
    box-sizing: border-box
}

.ps-checkbox label {
    margin-bottom: 0;
    position: relative;
    padding-left: 30px;
    font-family: Poppins, sans-serif;
    color: rgba(0, 0, 0, .5);
    font-weight: 400;
    cursor: pointer
}

.ps-checkbox label:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 20px;
    width: 20px;
    z-index: 10;
    border: 1px solid #000;
    transition: all .4s ease
}

.ps-checkbox label:after {
    content: "";
    display: block;
    position: absolute;
    top: 4px;
    left: 7px;
    width: 6px;
    height: 10px;
    border: 2px solid #fff;
    border-top: none;
    border-left: none;
    z-index: 10;
    opacity: 0;
    transform: rotate(0deg);
    transition: all .4s ease
}

.ps-checkbox input[type=checkbox]:checked~label:before {
    background-color: #f05e27;
    border-color: #f05e27
}

.ps-checkbox input[type=checkbox]:checked~label:after {
    transform: rotate(45deg);
    opacity: 1
}

.ps-checkbox--inline {
    display: inline-block;
    margin-bottom: 1rem
}

.ps-checkbox--color {
    margin-right: 1rem
}

.ps-checkbox--color>label {
    margin-bottom: 0;
    width: 20px;
    height: 20px;
    padding-left: 0;
    background-color: transparent;
    border-radius: 50%;
    transition: all .4s ease
}

.ps-checkbox--color>label:before {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    border-radius: 50%
}

.ps-checkbox--color>label:after {
    display: none !important
}

.ps-checkbox--color input[type=radio]:checked~label {
    background-color: transparent
}

.ps-checkbox--color input[type=radio]:checked~label:before {
    background-color: transparent;
    border: 1px solid #ccc
}

.ps-checkbox--color.color-1 label:before {
    background-color: #000
}

.ps-checkbox--color.color-1 input[type=checkbox]:checked~label:before {
    background-color: #000;
    border: 2px solid rgba(0, 0, 0, .2)
}

.ps-checkbox--color.color-2 label:before {
    background-color: #709abf
}

.ps-checkbox--color.color-2 input[type=checkbox]:checked~label:before {
    background-color: #709abf;
    border: 2px solid rgba(0, 0, 0, .2)
}

.ps-checkbox--color.color-3 label:before {
    background-color: #ad8111
}

.ps-checkbox--color.color-3 input[type=checkbox]:checked~label:before {
    background-color: #ad8111;
    border: 2px solid rgba(0, 0, 0, .2)
}

.ps-checkbox--color.color-4 label:before {
    background-color: #57d6db
}

.ps-checkbox--color.color-4 input[type=checkbox]:checked~label:before {
    background-color: #57d6db;
    border: 2px solid rgba(0, 0, 0, .2)
}

.ps-checkbox--color.color-5 label:before {
    background-color: #e5ac10
}

.ps-checkbox--color.color-5 input[type=checkbox]:checked~label:before {
    background-color: #e5ac10;
    border: 2px solid rgba(0, 0, 0, .2)
}

.ps-checkbox--color.color-6 label:before {
    background-color: #8ce84a
}

.ps-checkbox--color.color-6 input[type=checkbox]:checked~label:before {
    background-color: #8ce84a;
    border: 2px solid rgba(0, 0, 0, .2)
}

.ps-checkbox--color.color-7 label:before {
    background-color: #c9c9c9
}

.ps-checkbox--color.color-7 input[type=checkbox]:checked~label:before {
    background-color: #c9c9c9;
    border: 2px solid rgba(0, 0, 0, .2)
}

.ps-checkbox--color.color-8 label:before {
    background-color: #e664ef
}

.ps-checkbox--color.color-8 input[type=checkbox]:checked~label:before {
    background-color: #e664ef
}

.ps-checkbox--color.color-8 label:before {
    background-color: #9d58e2
}

.ps-checkbox--color.color-8 input[type=checkbox]:checked~label:before {
    background-color: #9d58e2
}

.ps-checkbox--color.color-8 label:before {
    background-color: #fff
}

.ps-checkbox--color.color-8 input[type=checkbox]:checked~label:before {
    background-color: #fff;
    border: 2px solid rgba(0, 0, 0, .2)
}

.ps-checkbox.color-sidebar>label:before {
    width: 26px;
    height: 26px;
    border: 1px solid #ddd
}

.ps-checkbox--size {
    margin-right: 1rem
}

.ps-checkbox--size>label {
    margin-bottom: 0;
    padding: 8px 20px;
    border: none;
    color: #222;
    background-color: #f6f6f6;
    border-radius: 0;
    transition: all .4s ease
}

.ps-checkbox--size>label:after,
.ps-checkbox--size>label:before {
    display: none
}

.ps-checkbox--size input[type=checkbox]:checked~label {
    color: #fff;
    background-color: #a7a7a7
}

.ps-radio {
    position: relative
}

.ps-radio>input {
    position: absolute;
    visibility: hidden;
    box-sizing: border-box
}

.ps-radio label {
    position: relative;
    margin-bottom: 0;
    padding-left: 30px;
    font-family: Poppins, sans-serif;
    color: #737373;
    font-weight: 400;
    cursor: pointer
}

.ps-radio label:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 20px;
    width: 20px;
    z-index: 10;
    border: 1px solid rgba(19, 8, 1, .2);
    background-color: #fff;
    transition: all .4s ease;
    border-radius: 50%
}

.ps-radio label:after {
    content: "";
    display: block;
    position: absolute;
    top: 5px;
    left: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    z-index: 15;
    opacity: 0;
    transform: scale(1.5);
    transition: all .6s ease
}

.ps-radio input[type=radio]:checked~label:before {
    background-color: #f05e27;
    border-color: #f05e27
}

.ps-radio input[type=radio]:checked~label:after {
    transform: scale(1);
    opacity: 1
}

.ps-radio--inline {
    display: inline-block;
    margin-right: 20px
}

.ps-radio--color {
    margin-right: 1rem
}

.ps-radio--color>label {
    margin-bottom: 0;
    width: 20px;
    height: 20px;
    padding-left: 0;
    background-color: transparent;
    border-radius: 50%;
    transition: all .4s ease
}

.ps-radio--color>label:before {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none
}

.ps-radio--color>label:after {
    display: none !important
}

.ps-radio--color input[type=radio]:checked~label {
    background-color: rgba(61, 196, 126, .5)
}

.ps-radio--color.color-1 label:before {
    background-color: #35dccb
}

.ps-radio--color.color-1 input[type=radio]:checked~label {
    background-color: rgba(53, 220, 203, .5)
}

.ps-radio--color.color-1 input[type=radio]:checked~label:before {
    background-color: #21bdad
}

.ps-radio--color.color-2 label:before {
    background-color: #fec6df
}

.ps-radio--color.color-2 input[type=radio]:checked~label {
    background-color: rgba(254, 198, 223, .5)
}

.ps-radio--color.color-2 input[type=radio]:checked~label:before {
    background-color: #fd94c3
}

.ps-radio--color.color-3 label:before {
    background-color: #ffd980
}

.ps-radio--color.color-3 input[type=radio]:checked~label {
    background-color: rgba(255, 217, 128, .5)
}

.ps-radio--color.color-3 input[type=radio]:checked~label:before {
    background-color: #ffca4d
}

.ps-color {
    position: relative;
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 5px
}

.ps-color--1 {
    background-color: #000
}

.ps-color--2 {
    background-color: #ad4d4b
}

.ps-color--3 {
    background-color: #fdb201
}

.ps-color:last-child {
    margin-right: 0
}

.tooltip .tooltip-inner {
    font-size: 14px
}

.form-group {
    margin-bottom: 2.5rem
}

.form-group>label {
    margin-bottom: 1.5rem;
    font-weight: 400;
    color: #000;
    line-height: 1em
}

.form-group--inline {
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center
}

.form-group--inline>label {
    margin-bottom: 0;
    font-weight: 700;
    min-width: 160px;
    max-width: 160px
}

.form-group--inline .form-group__content {
    width: 100%
}

@media (max-width:1199px) {
    .form-group--inline {
        padding-left: 0
    }

    .form-group--inline label {
        position: static;
        transform: translateY(0)
    }

    .form-group--inline.textarea label {
        transform: translateY(0)
    }
}

@media (max-width:767px) {
    .form-group--inline {
        display: block
    }
}

.form-group--number {
    display: inline-block;
    position: relative
}

.form-group--number span {
    background: none;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    max-width: 20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    color: #969696;
    font-size: 20px;
    line-height: 1em;
    padding: 22px
}

.form-group--number span:hover {
    color: #f05e27
}

.form-group--number span.up {
    right: 0;
    border-left: 1px solid #d5d5d5
}

.form-group--number span.down {
    left: 0;
    border-right: 1px solid #d5d5d5
}

.form-group--number .form-control {
    border: 1px solid #ccc;
    height: 45px;
    padding: 0 25px;
    text-align: center;
    font-size: 14px;
    color: #000;
    border-radius: 50px;
    background-color: transparent
}

.form-group--number .form-control::-webkit-input-placeholder {
    color: #000
}

.form-group--number .form-control:-moz-placeholder,
.form-group--number .form-control::-moz-placeholder {
    color: #000
}

.form-group--number .form-control:-ms-input-placeholder {
    color: #000
}

.form-group--select {
    position: relative
}

.form-group--select i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px
}

.form-group--select select {
    height: 40px;
    padding: 0 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 50px
}

.form-group--nest {
    display: flex;
    flex-flow: row nowrap
}

.form-group--nest .ps-btn {
    border-radius: 0 4px 4px 0;
    padding-left: 25px;
    padding-right: 25px
}

.form-group--nest input {
    border-radius: 4px 0 0 4px;
    border-color: #ccc;
    border-right: none
}

.form-group--icon {
    position: relative
}

.form-group--icon i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    font-size: 16px
}

.form-group--icon .form-control {
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none
}

.ps-dropdown {
    position: relative;
    display: inline-block
}

.ps-dropdown>a {
    position: relative;
    display: block;
    padding-right: 20px
}

/* .ps-dropdown>a:after {
    content: ">";
    font: normal normal normal 12px/1 linearicons;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0
} */

.ps-dropdown ul {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 100;
    min-width: 120px;
    max-width: 200px;
    width: 100%;
    padding: 4px 0;
    background-color: #fff;
    -ms-box-shadow: 0 1px 1px 2px hsla(0, 0%, 80%, .2);
    box-shadow: 0 1px 1px 2px hsla(0, 0%, 80%, .2);
    visibility: hidden;
    opacity: 0;
    /* text-align: left */
}

.ps-dropdown ul li {
    list-style-type: none;
    margin: 0;
    padding: 0
}

.ps-dropdown ul li a {
    display: block;
    font-size: 1.3rem;
    color: #000;
    padding: 6px 10px
}

.ps-dropdown:hover ul {
    visibility: visible;
    opacity: 1
}

.ps-dropdown.open ul {
    visibility: visible;
    opacity: 1
}

.ps-variant {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    z-index: 10;
    cursor: pointer;
    border: 1px solid #999
}

.ps-variant__tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    padding: 5px 10px;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .9);
    border-radius: 2px;
    color: #fff;
    font-size: 12px;
    transition: all .4s ease;
    visibility: hidden;
    opacity: 0
}

.ps-variant__tooltip:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    height: 0;
    width: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #000
}

.ps-variant:last-child {
    margin-right: 0
}

.ps-variant.ps-variant--size {
    position: relative;
    vertical-align: top;
    border-radius: 0;
    border-color: #d9d9d9
}

.ps-variant.ps-variant--size .ps-variant__size {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #999;
    font-weight: 600
}

.ps-variant.ps-variant--size.active .ps-variant__size {
    color: #000
}

.ps-variant.ps-variant--color {
    width: 30px;
    height: 30px
}

.ps-variant.ps-variant--color:before {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}

.ps-variant.ps-variant--color.color--1:before {
    background-color: #000
}

.ps-variant.ps-variant--color.color--2:before {
    background-color: #9e9e9e
}

.ps-variant.ps-variant--color.color--3:before {
    background-color: #f06292
}

.ps-variant.ps-variant--image {
    width: auto;
    height: auto;
    max-width: 50px;
    border-radius: 0;
    border-color: #d9d9d9
}

.ps-variant.ps-variant--image img {
    position: relative
}

.ps-variant:hover .ps-variant__tooltip {
    visibility: visible;
    opacity: 1
}

.ps-variant.active:before {
    border-color: #000
}

.ps-variant.active .ps-variant__tooltip {
    visibility: visible;
    opacity: 1
}

.select2 {
    display: block
}

.select2 .select2-selection--single {
    height: auto;
    outline: none;
    border-radius: 0
}

.select2 .select2-selection--single .select2-selection__rendered {
    line-height: 20px;
    padding: 10px 20px
}

.select2 .select2-selection--single .select2-selection__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    width: 20px;
    height: 20px
}

.select2 .select2-selection--single .select2-selection__arrow:before {
    content: "";
    font-family: FontAwesome;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}

.select2 .select2-selection--single .select2-selection__arrow b {
    display: none
}

.select2 .select2-selection--multiple {
    min-height: 0;
    border: none !important
}

.select2 .select2-selection--multiple .select2-selection__rendered {
    margin-bottom: 0;
    padding: 0 0 0 10px;
    vertical-align: top
}

.select2 .select2-selection--multiple .select2-selection__rendered input {
    margin-top: 0;
    height: 40px;
    padding: 0 10px
}

.select2 .select2-selection--multiple .select2-selection__rendered .select2-selection__choice {
    line-height: 20px;
    margin-right: 10px;
    margin-top: 10px
}

.select2-container .select2-dropdown {
    border-color: #ccc
}

.select2-container .select2-results li {
    color: #93969a
}

.slimScrollBar,
.slimScrollRail {
    border-radius: 0 !important
}

.slimScrollBar {
    opacity: 1 !important;
    background-color: #222 !important
}

.ps-progress {
    position: relative
}

.ps-progress span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 100%
}

.ps-breadcrumb {
    padding: 20px 0
}

.ps-breadcrumb .breadcrumb {
    display: inline-block;
    margin: 0;
    padding: 0;
    background-color: transparent
}

.ps-breadcrumb .breadcrumb li {
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
    color: #929292
}

.ps-breadcrumb .breadcrumb li span {
    color: #929292 !important
}

.ps-breadcrumb .breadcrumb li:first-child {
    padding-left: 0
}

.ps-breadcrumb .breadcrumb li:first-child:before {
    display: none
}

.ps-breadcrumb .breadcrumb a {
    line-height: 20px;
    color: #929292
}

.ps-breadcrumb .breadcrumb a:hover {
    color: #f05e27
}

.ps-breadcrumb .breadcrumb a i {
    margin-right: 5px
}

@media (max-width:991px) {
    .ps-breadcrumb {
        position: relative;
        padding: 10px 0
    }

    .ps-breadcrumb .breadcrumb a,
    .ps-breadcrumb .breadcrumb li {
        font-size: 12px
    }
}

.ps-block--download-app {
    background-color: #f8f8f8;
    padding: 80px 0 0
}

.ps-block--download-app h3 {
    margin-bottom: 12px;
    font-size: 30px;
    font-weight: 300;
    margin-top: 0
}

.ps-block--download-app p {
    font-size: 16px
}

.ps-block--download-app form,
.ps-block--download-app p {
    margin-bottom: 30px;
    max-width: 480px
}

.ps-block--download-app form input {
    background-color: #fff
}

.ps-block--download-app .download-link a {
    margin-right: 18px
}

.ps-block--download-app .download-link a:last-child {
    margin-right: 0
}

@media (max-width:991px) {
    .ps-block--download-app .ps-block__thumbnail {
        margin-bottom: 30px
    }
}

@media (max-width:479px) {
    .ps-block--download-app h3 {
        font-size: 20px
    }

    .ps-block--download-app p {
        font-size: 14px
    }

    .ps-block--download-app .download-link {
        display: flex;
        flex-flow: row nowrap
    }

    .ps-block--download-app .download-link a {
        width: 100%
    }
}

.ps-block--category {
    margin-bottom: 30px;
    padding: 20px;
    border: 1px solid #bfbfbf;
    text-align: center;
    transition: all .4s ease
}

.ps-block--category a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10
}

.ps-block--category p {
    font-size: 16px;
    margin-bottom: 0;
    font-weight: 500
}

.ps-block--category:hover {
    border-color: #fff
}

.ps-block--category:hover p {
    color: #09c
}

@media (max-width:479px) {
    .ps-block--category {
        padding: 20px 10px
    }
}

.ps-block--category-vertical h4 {
    font-weight: 400;
    font-size: 18px
}

.ps-block--category-vertical .ps-block__content {
    padding: 18px 10px 15px
}

.ps-block--category-vertical .ps-block__content ul li a {
    display: inline-block;
    color: #666;
    line-height: 25px;
    position: relative
}

.ps-block--category-vertical .ps-block__content ul li a:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #000;
    transform: scaleX(0);
    transition: transform .4s cubic-bezier(.7, 0, .3, 1);
    transform-origin: 100% 50%
}

.ps-block--category-vertical .ps-block__content ul li a:hover:before {
    transform: scaleX(1);
    transform-origin: 0 50%
}

.ps-block--category-2 {
    display: flex;
    margin-bottom: 30px;
    border: 1px solid #bfbfbf;
    transition: all .4s ease
}

.ps-block--category-2 h4 {
    font-weight: 400;
    font-size: 18px
}

.ps-block--category-2 .more i {
    padding-left: 6px
}

.ps-block--category-2 .ps-block__thumbnail {
    max-width: 175px
}

.ps-block--category-2 .ps-block__content {
    padding: 18px 10px 15px
}

.ps-block--category-2 .ps-block__content ul li a {
    display: inline-block;
    color: #666;
    line-height: 25px;
    position: relative
}

.ps-block--category-2 .ps-block__content ul li a:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #000;
    transform: scaleX(0);
    transition: transform .4s cubic-bezier(.7, 0, .3, 1);
    transform-origin: 100% 50%
}

.ps-block--category-2 .ps-block__content ul li a:hover:before {
    transform: scaleX(1);
    transform-origin: 0 50%
}

.ps-block--category-2.ps-block--category-auto-part h4 {
    font-weight: 600;
    font-size: 16px
}

.ps-block--category-2.ps-block--category-auto-part .ps-block__content ul li a {
    line-height: 20px
}

.ps-block--category-2.ps-block--category-auto-part .ps-block__content ul li.more a {
    color: #1069c9
}

.ps-block--category-2.ps-block--category-auto-part .ps-block__content ul li.more a i {
    font-size: 10px
}

.ps-block--category-2:hover {
    border-color: #fff
}

.ps-block--category-2:hover p {
    color: #09c
}

@media (max-width:1680px) {
    .ps-block--category-2 .ps-block__thumbnail {
        max-width: 100px;
        padding-top: 20px
    }
}

.cart-button {
    width: 170px ;
    height: 40px ;
    background-color: #f05e27 !important;
    text-align: left !important;
    font-size: 13px !important;
    border-radius: 5px !important;
    overflow: hidden !important;
    color: #FFF !important;
    line-height: 20px;
}
.text_order{
    /*  */
    background-color: #f05e27 !important;
    text-align: left !important;
    color: #FFF !important;
    left: -100px
}
.cart-button span {
    float: right;
    background: transparent;
    display: inline-block;
    margin: 3px -15px !important;
    position: relative;
    padding: 5px 8px;
    border-radius: 0 5px 5px 0;
    margin-right: 26px;
    color: #FFF !important;
}

@media (max-width:1289px) {
    .cart-button {
        width: 100%
    }
}

.ps-block--user-header {
    display: flex;
    flex-flow: row nowrap;
    text-align: left
}

.ps-block--user-header .ps-block__left {
    display: flex;
    flex-flow: row nowrap;
    align-items: center
}

.ps-block--user-header .ps-block__left img {
    width: 20px;
    position: absolute;
    left:-18px
}

.ps-block--user-header .ps-block__left i {
    font-size: 30px;
    line-height: 1em
}

.ps-block--user-header .ps-block__right {
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center
}

.ps-block--user-header .ps-block__right span {
    font-size: 13px;
    color: #393E46;
    font-weight: 400;
    line-height: 18px;
    display: block
}

.ps-block--user-header .ps-block__right a {
    display: block;
    font-weight: 700;
    line-height: 18px;
    color: #f05e27 !important;
    font-size: 14px !important;
}

.ps-block--user-header .ps-block__right a:hover {
    color: #f05e27
}

.ps-block--site-features {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 20px 40px;
    width: 100%;
    border: 1px solid #d9d9d9
}

.ps-block--site-features .ps-block__left i {
    font-size: 40px;
    color: #fff
}

.ps-block--site-features .ps-block__right {
    padding-left: 25px
}

.ps-block--site-features .ps-block__right h4 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 0;
    margin-top: 0;
    color: #000
}

.ps-block--site-features .ps-block__right p {
    margin-bottom: 0;
    color: #666
}

.ps-block--site-features .ps-block__item {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 10px 40px;
    border-right: 1px solid #dadada;
    max-width: 20%;
    width: 100%
}

.ps-block--site-features .ps-block__item:first-child {
    padding-left: 0
}

.ps-block--site-features .ps-block__item:last-child {
    border-right: none;
    padding-right: 0
}

.ps-block--site-features.ps-block--site-features-2 {
    border: none;
    padding: 0
}

.ps-block--site-features.ps-block--site-features-2 .ps-block__item {
    max-width: 25%;
    padding: 10px 30px
}

@media (max-width:1440px) {
    .ps-block--site-features.ps-block--site-features-2 .ps-block__item {
        flex-flow: row nowrap;
        border-right: 1px solid #dadada
    }

    .ps-block--site-features.ps-block--site-features-2 .ps-block__item:last-child {
        border-right: none
    }

    .ps-block--site-features.ps-block--site-features-2 .ps-block__left {
        margin-bottom: 15px
    }

    .ps-block--site-features.ps-block--site-features-2 .ps-block__right {
        width: 100%;
        padding-left: 15px
    }
}

@media (max-width:991px) {
    .ps-block--site-features.ps-block--site-features-2 .ps-block__item {
        border-right: none
    }
}

@media (max-width:1680px) {
    .ps-block--site-features {
        padding: 30px
    }

    .ps-block--site-features .ps-block__item {
        padding: 0 15px
    }
}

@media (max-width:1440px) {
    .ps-block--site-features .ps-block__item {
        flex-flow: row wrap;
        border-right: none
    }

    .ps-block--site-features .ps-block__left {
        margin-bottom: 15px
    }

    .ps-block--site-features .ps-block__right {
        width: 100%;
        padding-left: 0
    }
}

@media (max-width:1024px) {
    .ps-block--site-features {
        flex-flow: row wrap
    }

    .ps-block--site-features .ps-block__item {
        margin-bottom: 30px;
        max-width: 25%;
        padding: 0
    }
}

@media (max-width:991px) {
    .ps-block--site-features {
        justify-content: flex-start
    }

    .ps-block--site-features .ps-block__item {
        max-width: 50%;
        max-width: 33.33333%
    }

    .ps-block--site-features.ps-block--site-features-2 .ps-block__item {
        max-width: 50%
    }
}

@media (max-width:420px) {
    .ps-block--site-features .ps-block__item {
        max-width: 100%;
        flex-flow: row nowrap
    }

    .ps-block--site-features .ps-block__item .ps-block__right {
        padding-left: 20px
    }

    .ps-block--site-features.ps-block--site-features-2 .ps-block__item {
        max-width: 100%
    }
}

.ps-block--countdown-deal {
    display: flex;
    flex-flow: row nowrap
}

.ps-block--countdown-deal .ps-block__left h3 {
    margin-bottom: 15px;
    font-size: 21px;
    font-weight: 400;
    margin-left: 0;
    background: #f05e27;
    color: #fff;
    padding: 5px 25px;
    border-radius: 0 30px 30px 0
}

.ps-block--countdown-deal figure {
    display: flex;
    align-items: center;
    background-color: #f14705;
    padding: 7px 20px;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    border-radius: 3px;
    line-height: 1
}

.ps-block--countdown-deal figure figcaption {
    color: #fff;
    font-weight: 600;
    margin-right: 20px
}

.ps-block--countdown-deal .ps-countdown li {
    display: inline-block
}

.ps-block--countdown-deal .ps-countdown li span {
    font-weight: 600
}

.ps-block--countdown-deal .ps-countdown li:after {
    content: ":"
}

.ps-block--countdown-deal .ps-countdown li:last-child:after {
    display: none
}

@media (max-width:479px) {
    .ps-block--countdown-deal {
        flex-flow: row wrap
    }

    .ps-block--countdown-deal .ps-block__left {
        margin-bottom: 10px
    }

    .ps-block--countdown-deal .ps-block__left h3 {
        margin-right: 0
    }
}

.ps-block--shop-features {
    margin-bottom: 40px
}

.ps-block--shop-features .ps-block__header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 5px;
    border-bottom: 1px solid #f0f0f0
}

.ps-block--shop-features .ps-block__header h3 {
    font-weight: 400;
    font-size: 24px;
    color: #000
}

.ps-block--shop-features .ps-block__navigation a {
    display: inline-block;
    margin-right: 10px;
    color: #999
}

.ps-block--shop-features .ps-block__navigation a:last-child {
    margin-right: 0
}

.ps-block--shop-features .ps-block__navigation a:hover {
    color: #000
}

.review-card {
    border-bottom: 1px solid #d7d7d7;
    padding: 15px;
    border-radius: 5px
}

.ps-block--average-rating .ps-block__header {
    margin-bottom: 20px
}

.ps-block--average-rating .ps-block__header h3 {
    font-size: 58px;
    font-weight: 500;
    color: #f05e27;
    line-height: 1
}

.ps-block--average-rating .ps-block__header .br-wrapper {
    margin-bottom: 0
}

.ps-block--average-rating .ps-block__header .br-wrapper a {
    font-size: 20px
}

.ps-block--average-rating .ps-block__header span {
    display: block;
    color: #666
}

.ps-block--average-rating .ps-product__rating {
    font-size: 18px
}

.ps-block--average-rating .ps-product__rating i {
    color: #ffca50
}

.ps-block--average-rating .ps-product__rating i.disabled {
    color: #969696
}

.ps-block--average-rating .ps-product__rating span {
    font-size: 13px
}

.ps-block--average-rating .ps-block__star {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
    width: 100%;
    max-width: 360px
}

.ps-block--average-rating .ps-block__star>span {
    min-width: 40px;
    color: #666
}

.ps-block--average-rating .ps-block__star .ps-progress {
    position: relative;
    height: 10px;
    width: 100%;
    max-width: 230px;
    background-color: #f1f1f1
}

.ps-block--average-rating .ps-block__star .ps-progress span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 100%;
    background-color: #f05e27
}

.ps-block--questions-answers h3 {
    margin-bottom: 30px;
    font-weight: 700;
    color: #000;
    font-size: 30px
}

.ps-block--questions-answers .form-control {
    font-size: 18px
}

.ps-block--testimonial {
    margin-top: 50px;
    position: relative;
    z-index: 1;
    background-color: #fff;
    padding: 0 40px
}

.ps-block--testimonial .ps-block__header {
    position: relative;
    top: -45px;
    margin-bottom: -45px;
    z-index: 10
}

.ps-block--testimonial .ps-block__header img {
    position: relative;
    max-height: 90px;
    border-radius: 50%;
    z-index: 10
}

.ps-block--testimonial .ps-block__content {
    position: relative;
    padding: 60px 0 40px
}

.ps-block--testimonial .ps-block__content>i {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 40px;
    color: #fff
}

.ps-block--testimonial .ps-block__content h4 {
    font-size: 18px;
    font-weight: 600
}

.ps-block--testimonial .ps-block__content h4 span {
    margin-left: 10px;
    font-size: 14px;
    color: #999
}

@media (max-width:991px) {
    .ps-block--testimonial .ps-block__content {
        padding-top: 30px
    }
}

@media (max-width:767px) {
    .ps-block--testimonial .ps-block__content>i {
        display: none
    }
}

@media (max-width:479px) {
    .ps-block--testimonial {
        padding: 30px 20px
    }
}

.ps-block--deal-hot {
    padding: 13px 30px 30px;
    border: 2px solid #fff
}

.ps-block--deal-hot .ps-block__header {
    padding: 10px 0;
    margin-bottom: 30px;
    border-bottom: 1px solid #e4e4e4;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between
}

.ps-block--deal-hot .ps-block__header h3 {
    display: inline-block;
    line-height: 1;
    font-size: 20px;
    font-weight: 600
}

.ps-block--deal-hot .ps-block__navigation a {
    position: relative;
    display: inline-block;
    margin-right: 15px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #ccc;
    vertical-align: top
}

.ps-block--deal-hot .ps-block__navigation a i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 8px
}

.ps-block--deal-hot .ps-block__navigation a:last-child {
    margin-right: 0
}

.ps-block--deal-hot .ps-block__navigation a:hover {
    border-color: #f8f8f8
}

.ps-block--deal-hot .ps-block__navigation a:hover i {
    color: #f8f8f8
}

.ps-block--deal-hot .ps-product--hot-deal {
    margin-bottom: 0
}

.ps-block--deal-hot .ps-product--detail .ps-product__thumbnail .ps-product__badge {
    width: 80px
}

.ps-block--deal-hot .ps-product--detail .ps-product__thumbnail .ps-product__badge span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}

@media (max-width:479px) {
    .ps-block--deal-hot {
        padding: 20px
    }
}

@media screen and (min-width:992px) {
    .ps-block--deal-hot {
        max-height: 500px
    }
}

.ps-block--products-of-category {
    margin-bottom: 70px;
    display: flex;
    flex-flow: row nowrap
}

.ps-block--products-of-category>* {
    width: 100%
}

.ps-block--products-of-category .ps-block__categories {
    position: relative;
    padding: 30px 20px 40px 30px;
    background-color: #fff;
    max-width: 20%
}

.ps-block--products-of-category .ps-block__categories h3 {
    margin-bottom: 35px;
    font-weight: 400;
    font-size: 24px
}

.ps-block--products-of-category .ps-block__categories ul li a {
    display: block;
    padding: 3px 0;
    line-height: 20px;
    color: #000
}

.ps-block--products-of-category .ps-block__categories ul li a:hover {
    color: #fff
}

.ps-block--products-of-category .ps-block__categories .ps-block__more-link {
    position: absolute;
    bottom: 45px;
    left: 30px;
    font-style: italic;
    color: #666
}

.ps-block--products-of-category .ps-block__slider {
    max-width: 24%
}

.ps-block--products-of-category .ps-block__slider a {
    display: block
}

.ps-block--products-of-category .ps-block__slider a img {
    width: 100%
}

.ps-block--products-of-category .ps-block__product-box {
    display: flex;
    flex-flow: row wrap
}

.ps-block--products-of-category .ps-block__product-box>* {
    max-width: 33.333333%
}

.ps-block--products-of-category .ps-product--simple {
    background-color: #fff;
    border-right: 1px solid #e1e1e1;
    border-top: 1px solid #e1e1e1
}

.ps-block--products-of-category .ps-product--simple:hover {
    border-color: #e1e1e1 #e1e1e1 #e1e1e1 transparent
}

@media (max-width:1199px) {
    .ps-block--products-of-category .ps-block__slider {
        display: none
    }
}

@media (max-width:991px) {
    .ps-block--products-of-category {
        flex-flow: row wrap
    }

    .ps-block--products-of-category .ps-block__categories {
        max-width: 100%
    }

    .ps-block--products-of-category .ps-block__categories h3 {
        margin-bottom: 20px
    }

    .ps-block--products-of-category .ps-block__categories ul li {
        display: inline-block;
        margin-right: 10px;
        margin-bottom: 10px
    }

    .ps-block--products-of-category .ps-block__categories ul li:last-child {
        margin-right: 0
    }

    .ps-block--products-of-category .ps-block__categories .ps-block__more-link {
        position: relative;
        bottom: 0;
        left: 0
    }

    .ps-block--products-of-category .ps-block__product-box {
        width: 100%
    }
}

@media (max-width:767px) {
    .ps-block--products-of-category {
        margin-bottom: 50px
    }

    .ps-block--products-of-category .ps-block__product-box {
        border-bottom: 1px solid #e1e1e1;
        border-right: 1px solid #e1e1e1
    }

    .ps-block--products-of-category .ps-block__product-box>* {
        max-width: 50%;
        flex-basis: 50%
    }

    .ps-block--products-of-category .ps-product--simple {
        padding: 20px;
        border: 1px solid #e1e1e1;
        border-right: none;
        border-bottom: none
    }
}

@media (max-width:479px) {
    .ps-block--products-of-category {
        margin-bottom: 35px
    }

    .ps-block--products-of-category .ps-product--simple {
        padding: 10px
    }
}

.ps-block--recent-viewed .ps-block__header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding-bottom: 25px
}

.ps-block--recent-viewed .ps-block__header h3 {
    font-size: 24px;
    font-weight: 400
}

.ps-block--recent-viewed .ps-block__header a {
    text-decoration: underline
}

.ps-block--recent-viewed .ps-block__header a:hover {
    color: #fff
}

.ps-block--recent-viewed .ps-block__content {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    background-color: #fff;
    padding: 20px
}

.ps-block--recent-viewed .ps-block__content a {
    margin-right: 20px;
    max-width: 7%;
    border: 2px solid transparent
}

.ps-block--recent-viewed .ps-block__content a:hover {
    border-color: #fff
}

.ps-block--categories-tabs {
    background-color: #fff
}

.ps-block--categories-tabs .ps-block__header {
    padding: 0 80px
}

.ps-block--categories-tabs .ps-tab-list a {
    display: block;
    padding: 20px 0;
    text-align: center;
    border-bottom: 2px solid transparent
}

.ps-block--categories-tabs .ps-tab-list a i {
    font-size: 36px
}

.ps-block--categories-tabs .ps-tab-list a span {
    display: block
}

.ps-block--categories-tabs .ps-tab-list a:hover {
    border-color: #fff
}

.ps-block--categories-tabs .ps-tab-list a:hover i {
    color: #fff
}

.ps-block--categories-tabs .ps-tab-list a.active {
    border-color: #fff
}

.ps-block--categories-tabs .ps-tab-list a.active i {
    color: #fff
}

.ps-block--categories-tabs .ps-block__item {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    text-align: center
}

.ps-block--categories-tabs .ps-block__item a {
    display: block;
    width: 150px;
    max-width: 12.5%;
    margin-bottom: 40px;
    overflow: hidden
}

.ps-block--categories-tabs .ps-block__item a img {
    max-height: 120px;
    transition: all .4s ease-out
}

.ps-block--categories-tabs .ps-block__item a span {
    display: block;
    color: #666
}

.ps-block--categories-tabs .ps-block__item a:hover img {
    transform: scale(1.1)
}

.ps-block--categories-tabs .ps-tabs {
    border-top: 1px solid #e1e1e1
}

.ps-block--categories-tabs .ps-tab {
    padding: 20px 60px 60px
}

@media (max-width:1680px) {
    .ps-block--categories-tabs .owl-slider .owl-nav .owl-prev {
        margin-left: -30px
    }

    .ps-block--categories-tabs .owl-slider .owl-nav .owl-next {
        margin-right: -30px
    }
}

@media (max-width:1199px) {
    .ps-block--categories-tabs .ps-block__header {
        padding: 0 30px
    }

    .ps-block--categories-tabs .ps-block__header .ps-tab-list a {
        border: none
    }

    .ps-block--categories-tabs .ps-block__header .ps-tab-list a i {
        margin-bottom: 10px;
        font-size: 30px
    }

    .ps-block--categories-tabs .ps-block__header .ps-tab-list a span {
        font-size: 12px
    }

    .ps-block--categories-tabs .ps-tab {
        padding: 20px 30px
    }
}

@media (max-width:991px) {
    .ps-block--categories-tabs .ps-block__item {
        margin-bottom: 30px
    }

    .ps-block--categories-tabs .ps-block__item a {
        max-width: 20%
    }
}

@media (max-width:767px) {
    .ps-block--categories-tabs .ps-tab {
        padding: 20px 15px
    }

    .ps-block--categories-tabs .ps-block__item {
        margin-bottom: 30px;
        padding: 0 10px
    }

    .ps-block--categories-tabs .ps-block__item a {
        max-width: 25%
    }
}

@media (max-width:479px) {
    .ps-block--categories-tabs .ps-block__header {
        padding: 0 15px
    }

    .ps-block--categories-tabs .ps-block__item a {
        max-width: 33.3333%
    }

    .ps-block--categories-tabs .ps-tab {
        padding: 20px 10px
    }
}

.ps-block--product-box {
    background-color: #fff
}

.ps-block--product-box .owl-slider .owl-item img {
    width: 100%
}

.ps-block--product-box .ps-block__header {
    border-bottom: 1px solid #e1e1e1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 14px 20px
}

.ps-block--product-box .ps-block__header h3 {
    margin-bottom: 0;
    display: inline-block;
    font-weight: 400;
    color: #000;
    font-size: 20px
}

.ps-block--product-box .ps-block__header h3 i {
    margin-right: 10px
}

.ps-block--product-box .ps-block__header ul li {
    display: inline-block;
    margin-right: 15px
}

.ps-block--product-box .ps-block__header ul li:last-child {
    margin-right: 0
}

.ps-block--product-box .ps-block__content {
    display: flex;
    flex-flow: row nowrap
}

.ps-block--product-box .ps-block__content .ps-block__left {
    padding: 20px;
    max-width: calc(100% - 320px);
    border-right: 1px solid #e1e1e1
}

.ps-block--product-box .ps-block__content .ps-block__right {
    max-width: 320px;
    padding: 20px
}

.ps-block--product-box .ps-block__left .owl-slider {
    margin-bottom: 20px
}

.ps-block--product-box .ps-block__right figure figcaption {
    margin-bottom: 20px;
    padding-bottom: 10px;
    font-size: 16px;
    font-weight: 400;
    color: #000;
    border-bottom: 1px solid #e1e1e1
}

.ps-block--product-box .ps-block__right .ps-product--horizontal {
    margin-bottom: 30px
}

.ps-block--product-box .ps-block__right .ps-product--horizontal .ps-product__thumbnail {
    max-width: 60px
}

.ps-block--product-box .ps-block__right .ps-product--horizontal .ps-product__rating {
    display: none
}

.ps-block--product-box .ps-block__products .ps-tab-list {
    display: block;
    padding-bottom: 15px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e1e1e1
}

.ps-block--product-box .ps-block__products .ps-tab-list li {
    display: inline-block;
    margin-right: 20px
}

.ps-block--product-box .ps-block__products .ps-tab-list li a {
    line-height: 20px;
    font-size: 16px;
    color: #666
}

.ps-block--product-box .ps-block__products .ps-tab-list li.active a {
    color: #000
}

.ps-block--product-box .ps-block__products .ps-tab-list li:last-child {
    margin-right: 0
}

.ps-block--product-box .ps-block__products .row {
    margin: 0
}

.ps-block--product-box .ps-block__products .row>* {
    padding: 0
}

@media (max-width:1199px) {
    .ps-block--product-box .ps-block__header {
        flex-flow: row wrap
    }

    .ps-block--product-box .ps-block__header h3 {
        margin-bottom: 10px;
        display: block
    }
}

@media (max-width:991px) {
    .ps-block--product-box .ps-block__content {
        flex-flow: column wrap
    }

    .ps-block--product-box .ps-block__content .ps-block__left,
    .ps-block--product-box .ps-block__content .ps-block__right {
        max-width: 100%
    }
}

.ps-block--categories-box {
    margin-bottom: 30px;
    padding: 20px;
    background-color: #fff
}

.ps-block--categories-box .ps-block__header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e1e1e1;
    align-items: center
}

.ps-block--categories-box .ps-block__header h3 {
    margin-bottom: 0;
    font-size: 24px;
    font-weight: 400;
    color: #000;
    line-height: 1em
}

.ps-block--categories-box .ps-block__header ul li {
    display: inline-block;
    margin-right: 20px
}

.ps-block--categories-box .ps-block__header ul li a {
    color: #000
}

.ps-block--categories-box .ps-block__header ul li a:hover {
    color: #fff
}

.ps-block--categories-box .ps-block__header ul li:last-child {
    margin-right: 0
}

.ps-block--categories-box .ps-block__banner {
    width: 100%;
    max-width: 60%
}

.ps-block--categories-box .ps-block__item {
    position: relative;
    margin-bottom: 30px;
    padding: 20px;
    border: 1px solid transparent;
    transition: all .4s ease
}

.ps-block--categories-box .ps-block__item a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10
}

.ps-block--categories-box .ps-block__item img {
    margin-bottom: 10px;
    max-height: 190px
}

.ps-block--categories-box .ps-block__item p {
    margin-bottom: 0;
    color: #000;
    font-size: 16px;
    transition: all .4s ease
}

.ps-block--categories-box .ps-block__item span {
    color: #666
}

.ps-block--categories-box .ps-block__item:hover {
    border-color: silver
}

.ps-block--categories-box .ps-block__item:hover p {
    color: #fff
}

.ps-block--categories-box .ps-block__content {
    display: flex;
    flex-flow: row wrap
}

.ps-block--categories-box .ps-block__content .ps-block__item {
    width: 100%;
    max-width: 20%
}

@media (max-width:1199px) {
    .ps-block--categories-box .ps-block__banner {
        max-width: 100%;
        margin-bottom: 30px
    }

    .ps-block--categories-box .ps-block__banner img {
        width: 100%
    }

    .ps-block--categories-box .ps-block__item {
        margin-bottom: 0
    }

    .ps-block--categories-box .ps-block__content .ps-block__item {
        max-width: 25%
    }
}

@media (max-width:991px) {
    .ps-block--categories-box .ps-block__content .ps-block__item {
        max-width: 33.333%
    }
}

@media (max-width:767px) {
    .ps-block--categories-box .ps-block__item {
        padding: 10px;
        text-align: center
    }

    .ps-block--categories-box .ps-block__item p {
        margin-bottom: 0;
        font-size: 14px
    }

    .ps-block--categories-box .ps-block__header h3 {
        font-size: 20px
    }
}

@media (max-width:580px) {
    .ps-block--categories-box .ps-block__content .ps-block__item {
        max-width: 50%;
        flex-basis: 50%
    }
}

@media (max-width:479px) {
    .ps-block--categories-box .ps-block__item {
        padding: 0;
        margin-bottom: 15px
    }

    .ps-block--categories-box .ps-block__item p {
        font-size: 13px
    }

    .ps-block--categories-box .ps-block__item span {
        font-size: 12px
    }

    .ps-block--categories-box .ps-block__header {
        flex-flow: row wrap
    }

    .ps-block--categories-box .ps-block__header h3 {
        display: block;
        margin-bottom: 10px;
        font-size: 18px
    }
}

.ps-block--category-room {
    margin-bottom: 20px;
    text-align: center
}

.ps-block--category-room .ps-block__thumbnail {
    overflow: hidden
}

.ps-block--category-room .ps-block__thumbnail img {
    width: 100%;
    transition: all .4s ease
}

.ps-block--category-room .ps-block__thumbnail:hover img {
    transform: scale3d(1.05, 1.05, 1.05)
}

.ps-block--category-room .ps-block__content {
    padding: 10px
}

.ps-block--category-room a {
    font-size: 16px;
    color: #000
}

.ps-block--category-room a:hover {
    color: #06c
}

.ps-block--container-hightlight .ps-section__header {
    padding: 16px 0;
    text-align: center;
    background-color: #fff
}

.ps-block--container-hightlight .ps-section__header h3 {
    font-size: 22px;
    margin-bottom: 0;
    font-weight: 600;
    color: #000;
    line-height: 30px
}

@media (max-width:767px) {
    .ps-block--container-hightlight .ps-section__header h3 {
        font-size: 16px
    }
}

.ps-block--container-hightlight .ps-section__content {
    padding: 30px 20px;
    border: 2px solid #fff;
    border-top: none
}

@media (min-width:1680px) {
    .ps-block--container-hightlight .ps-section__content .row {
        margin: 0
    }

    .ps-block--container-hightlight .ps-section__content .col-xl-3 {
        max-width: 20%;
        padding: 0
    }
}

@media (max-width:767px) {
    .ps-block--container-hightlight .row {
        margin: 0 -2px
    }

    .ps-block--container-hightlight .row>* {
        padding: 0 2px
    }

    .ps-block--container-hightlight .ps-product {
        margin-bottom: 4px
    }
}

.ps-block--categories-grid {
    display: flex;
    flex-flow: row wrap;
    background-color: #fff
}

.ps-block--categories-grid .ps-block--category-2 {
    margin-bottom: 0;
    width: 100%;
    max-width: 33.33333%;
    border: 1px solid hsla(0, 0%, 55.3%, .15);
    border-top: none;
    border-left: none
}

.ps-block--categories-grid .ps-block--category-2 .ps-block__thumbnail {
    max-width: 100px;
    padding: 10px
}

.ps-block--categories-grid .ps-block--category-2 .ps-block__content>a {
    color: #06c
}

.ps-block--categories-grid .ps-block--category-2:nth-child(4),
.ps-block--categories-grid .ps-block--category-2:nth-child(5),
.ps-block--categories-grid .ps-block--category-2:nth-child(6) {
    border-bottom: none
}

.ps-block--categories-grid .ps-block--category-2:nth-child(3),
.ps-block--categories-grid .ps-block--category-2:nth-child(6) {
    border-right: none
}

@media (max-width:991px) {
    .ps-block--categories-grid {
        border-top: 1px solid hsla(0, 0%, 55.3%, .15);
        border-left: 1px solid hsla(0, 0%, 55.3%, .15)
    }

    .ps-block--categories-grid .ps-block--category-2 {
        max-width: 50%
    }

    .ps-block--categories-grid .ps-block--category-2:nth-child(4),
    .ps-block--categories-grid .ps-block--category-2:nth-child(5),
    .ps-block--categories-grid .ps-block--category-2:nth-child(6) {
        border-bottom: 1px solid hsla(0, 0%, 55.3%, .15)
    }

    .ps-block--categories-grid .ps-block--category-2:nth-child(3),
    .ps-block--categories-grid .ps-block--category-2:nth-child(6) {
        border-right: 1px solid hsla(0, 0%, 55.3%, .15)
    }
}

@media (max-width:375px) {
    .ps-block--categories-grid .ps-block--category-2 {
        max-width: 100%
    }
}

.ps-block--menu-categories {
    position: relative;
    background-color: #fff;
    padding: 25px 20px
}

.ps-block--menu-categories .ps-block__header {
    padding-bottom: 20px
}

.ps-block--menu-categories .ps-block__header h3 {
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 400;
    color: #000;
    text-transform: uppercase
}

.ps-block--menu-categories .ps-list--menu-cateogories>li>a {
    display: block;
    padding: 10px 0;
    font-size: 16px;
    line-height: 26px;
    border-bottom: 1px solid #f0f0f0
}

.ps-block--menu-categories .ps-list--menu-cateogories>li:last-child>a {
    border-bottom: none
}

.ps-block--menu-categories .ps-list--menu-cateogories>li.menu-item-has-children .sub-menu {
    border: 1px solid transparent;
    transform: translateX(30px)
}

.ps-block--menu-categories .ps-list--menu-cateogories>li.menu-item-has-children:hover>.sub-menu {
    visibility: visible;
    opacity: 1;
    border: 1px solid #fff;
    transform: translateX(0)
}

.ps-block--menu-categories .ps-list--menu-cateogories .sub-menu {
    top: 0;
    left: 100%;
    height: 100%;
    padding: 20px;
    z-index: 20;
    background-color: #fff
}

.ps-block--menu-categories .ps-list--menu-cateogories .sub-menu>li>a {
    padding: 5px 0;
    font-size: 14px;
    color: #666;
    border-bottom: none
}

.ps-block--menu-categories .ps-list--menu-cateogories .sub-menu>li>a:hover {
    background-color: #fff
}

@media (max-width:1199px) {
    .ps-block--menu-categories {
        display: none
    }
}

.ps-block--author {
    display: flex;
    flex-flow: row nowrap;
    padding: 60px;
    background-color: #f0f0f0
}

.ps-block--author>* {
    width: 100%
}

.ps-block--author .ps-block__thumbnail {
    max-width: 130px
}

.ps-block--author .ps-block__content {
    padding-left: 30px
}

.ps-block--author .ps-block__content h4 {
    margin-bottom: 20px;
    color: #000;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.2em
}

.ps-block--post--navigation {
    display: flex;
    justify-content: space-between;
    padding-bottom: 90px;
    border-bottom: 1px solid #e1e1e1
}

.ps-block--post--navigation .ps-block__link {
    width: 50%
}

.ps-block--post--navigation .ps-block__link:last-child {
    text-align: right
}

.ps-block--post--navigation .ps-block__link:last-child i {
    margin-left: 10px;
    vertical-align: middle
}

.ps-block--post--navigation .ps-block__arrow {
    display: block;
    margin-bottom: 10px;
    font-size: 24px
}

.ps-block--post--navigation .ps-block__title {
    font-size: 18px;
    font-weight: 600;
    color: #000
}

.ps-block--comment {
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 0
}

.ps-block--comment>* {
    width: 100%
}

.ps-block--comment>.ps-block__thumbnail {
    max-width: 100px
}

.ps-block--comment>.ps-block__thumbnail img {
    max-width: 70px
}

.ps-block--comment>.ps-block__content {
    padding: 15px 0 30px 20px;
    border-top: 1px solid #e1e1e1
}

.ps-block--comment>.ps-block__content h5 {
    margin-bottom: 16px;
    font-weight: 600;
    color: #333;
    font-size: 14px
}

.ps-block--comment>.ps-block__content h5 small {
    display: inline-block;
    font-size: 12px;
    color: #666
}

.ps-block--comment>.ps-block__content h5 small:before {
    content: "-";
    margin: 0 10px
}

.ps-block--comment>.ps-block__content p {
    margin-bottom: 20px
}

.ps-block--comment>.ps-block__content>.ps-block__reply {
    font-style: italic;
    color: #09c
}

.ps-block--comment>.ps-block__content>.ps-block__reply:hover {
    color: #fff
}

.ps-block--comment>.ps-block__content>.ps-block--comment {
    margin-top: 30px
}

.ps-block--comment>.ps-block__content>.ps-block--comment>.ps-block__content {
    padding: 15px 0 30px;
    border-top: 1px solid #e1e1e1
}

@media (max-width:767px) {
    .ps-block--comment>.ps-block__thumbnail {
        max-width: 90px
    }

    .ps-block--comment>.ps-block__content {
        padding: 10px 0 30px
    }
}

@media (max-width:479px) {
    .ps-block--comment {
        flex-flow: column wrap
    }

    .ps-block--comment>.ps-block__content>.ps-block--comment {
        margin-left: 30px
    }
}

.ps-block--icon-box {
    text-align: center
}

.ps-block--icon-box i {
    display: inline-block;
    margin-bottom: 30px;
    font-size: 88px;
    color: #fff
}

.ps-block--icon-box h4 {
    font-size: 48px;
    color: #000;
    font-weight: 500;
    letter-spacing: .05em
}

.ps-block--icon-box p {
    font-size: 16px
}

@media (max-width:767px) {
    .ps-block--icon-box {
        margin-bottom: 20px;
        text-align: center
    }

    .ps-block--icon-box i {
        font-size: 60px;
        margin-bottom: 20px
    }

    .ps-block--icon-box h4 {
        font-size: 24px
    }

    .ps-block--icon-box p {
        font-size: 14px
    }
}

.ps-block--icon-box-2 {
    text-align: center
}

.ps-block--icon-box-2 .ps-block__thumbnail {
    margin-bottom: 30px;
    min-height: 130px
}

.ps-block--icon-box-2 .ps-block__desc {
    margin-bottom: 20px
}

.ps-block--icon-box-2 img {
    max-height: 130px
}

.ps-block--icon-box-2 h4 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
    line-height: 1.4em
}

.ps-block--icon-box-2 p {
    font-size: 16px
}

.ps-block--icon-box-2 a {
    text-decoration: underline;
    font-size: 16px
}

.ps-block--milestone {
    position: relative;
    margin-bottom: 300px
}

.ps-block--milestone .ps-block__dot {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ccc
}

.ps-block--milestone .ps-block__dot:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    visibility: hidden;
    opacity: 0
}

.ps-block--milestone .ps-block__year-number {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 600;
    color: #000
}

.ps-block--milestone .ps-block__year {
    text-align: center
}

.ps-block--milestone .ps-block__journey {
    position: absolute;
    top: 100%;
    left: 0;
    margin-bottom: 50px;
    min-width: 500px;
    max-width: 500px;
    display: none;
    background-color: #fff;
    padding: 20px;
    margin-top: 50px
}

.ps-block--milestone .ps-block__journey:after {
    clear: both;
    content: "";
    display: table
}

.ps-block--milestone .ps-block__journey:before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 0;
    height: 0;
    width: 0;
    border-bottom: 50px solid grey;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent
}

.ps-block--milestone .ps-block__journey .ps-block__thumbnail {
    float: left;
    max-width: 100px
}

.ps-block--milestone .ps-block__journey .ps-block__thumbnail img {
    border-radius: 50%
}

.ps-block--milestone .ps-block__journey .ps-block__content {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    float: right;
    min-height: 100px;
    width: calc(100% - 100px)
}

.ps-block--milestone .ps-block__journey .ps-block__content h4 {
    font-weight: 500;
    color: #000;
    font-size: 20px
}

.ps-block--milestone.active .ps-block__dot:before {
    visibility: visible;
    opacity: 1
}

.ps-block--milestone.active .ps-block__journey {
    display: block
}

.ps-block--milestones {
    display: flex;
    justify-content: space-between
}

.ps-block--milestones>* {
    width: 100%
}

.ps-block--contact-info {
    max-width: 270px;
    margin: 0 auto 50px;
    text-align: center
}

.ps-block--contact-info h4 {
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 20px;
    color: #000
}

.ps-block--contact-info p a {
    display: block
}

.ps-block--vendor-milestone {
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    padding-bottom: 90px
}

.ps-block--vendor-milestone:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 2px;
    background-color: #fff
}

.ps-block--vendor-milestone .ps-block__left,
.ps-block--vendor-milestone .ps-block__right {
    width: 100%
}

.ps-block--vendor-milestone .ps-block__left {
    padding-right: 140px
}

.ps-block--vendor-milestone .ps-block__left h4 {
    margin-bottom: 30px;
    font-size: 22px;
    font-weight: 600;
    color: #000;
    line-height: 1.2em
}

.ps-block--vendor-milestone .ps-block__left ul {
    padding-left: 20px
}

.ps-block--vendor-milestone .ps-block__left ul li {
    margin-bottom: 20px;
    font-size: 16px;
    color: #666
}

.ps-block--vendor-milestone .ps-block__right {
    text-align: right
}

.ps-block--vendor-milestone .ps-block__number {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    background-color: #fff;
    border: 2px solid #fff;
    border-radius: 50%
}

.ps-block--vendor-milestone .ps-block__number span {
    font-size: 48px;
    color: #000
}

.ps-block--vendor-milestone.reverse {
    flex-flow: row-reverse nowrap
}

.ps-block--vendor-milestone.reverse .ps-block__left {
    padding-left: 140px;
    padding-right: 0
}

.ps-block--vendor-milestone.reverse .ps-block__right {
    text-align: left
}

.ps-block--vendor-milestone:last-child:before {
    display: none
}

@media (max-width:991px) {
    .ps-block--vendor-milestone .ps-block__left {
        padding-right: 80px
    }

    .ps-block--vendor-milestone .ps-block__left h4 {
        font-size: 18px
    }

    .ps-block--vendor-milestone .ps-block__left ul li {
        font-size: 14px
    }

    .ps-block--vendor-milestone .ps-block__right {
        padding-left: 80px
    }

    .ps-block--vendor-milestone .ps-block__number {
        width: 80px;
        height: 80px
    }

    .ps-block--vendor-milestone .ps-block__number span {
        font-size: 24px
    }

    .ps-block--vendor-milestone.reverse .ps-block__left {
        padding-left: 80px
    }

    .ps-block--vendor-milestone.reverse .ps-block__right {
        padding-left: 0;
        padding-right: 80px
    }
}

@media (max-width:767px) {
    .ps-block--vendor-milestone {
        flex-flow: column-reverse wrap;
        padding-left: 100px
    }

    .ps-block--vendor-milestone:before {
        left: 40px
    }

    .ps-block--vendor-milestone .ps-block__number {
        left: 0;
        transform: translateX(0)
    }

    .ps-block--vendor-milestone .ps-block__left {
        padding: 0
    }

    .ps-block--vendor-milestone .ps-block__left h4 {
        font-size: 18px
    }

    .ps-block--vendor-milestone .ps-block__right {
        text-align: center;
        margin-bottom: 40px;
        padding: 40px 0 0
    }

    .ps-block--vendor-milestone .ps-block__right img {
        max-height: 150px
    }

    .ps-block--vendor-milestone.reverse {
        flex-flow: column-reverse wrap
    }

    .ps-block--vendor-milestone.reverse .ps-block__left {
        padding: 0
    }

    .ps-block--vendor-milestone.reverse .ps-block__right {
        padding: 0;
        text-align: center
    }
}

@media (max-width:479px) {
    .ps-block--vendor-milestone {
        padding-left: 60px
    }

    .ps-block--vendor-milestone:before {
        left: 25px
    }

    .ps-block--vendor-milestone .ps-block__number {
        width: 50px;
        height: 50px
    }

    .ps-block--vendor-milestone .ps-block__number span {
        font-size: 20px
    }
}

.ps-block--shopping-total {
    margin-bottom: 30px;
    padding: 30px 35px;
    background-color: #f1f1f1;
    border: 1px solid #bfbfbf
}

.ps-block--shopping-total .ps-block__product li {
    border-bottom: 1px solid #d6d6d6;
    padding-bottom: 20px;
    margin-bottom: 20px
}

.ps-block--shopping-total .ps-block__product span {
    display: block;
    font-size: 16px;
    line-height: 24px
}

.ps-block--shopping-total .ps-block__product .ps-block__shop {
    color: #000
}

.ps-block--shopping-total .ps-block__product .ps-block__shipping {
    color: #666
}

.ps-block--shopping-total .ps-block__product .ps-block__estimate strong {
    font-weight: 600
}

.ps-block--shopping-total .ps-block__product .ps-block__estimate a {
    display: block;
    margin-left: 40px;
    font-size: 14px
}

.ps-block--shopping-total h3 {
    margin-bottom: 0;
    font-size: 24px;
    font-weight: 600
}

.ps-block--shopping-total h3 span {
    color: #f30;
    font-weight: 600;
    float: right
}

.ps-block--shopping-total .ps-block__header {
    display: block;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc
}

.ps-block--shopping-total .ps-block__header p {
    font-size: 16px
}

.ps-block--shopping-total .ps-block__header p span {
    float: right
}

.ps-block--bought-toggether {
    margin-bottom: 30px;
    padding: 20px;
    border: 1px solid #e1e1e1
}

.ps-block--bought-toggether h4 {
    margin-bottom: 40px
}

.ps-block--bought-toggether .ps-block__items {
    display: flex;
    flex-flow: row wrap
}

.ps-block--bought-toggether .ps-block__items .ps-block__item {
    max-width: 20%
}

.ps-block--bought-toggether .ps-block__item {
    position: relative;
    padding-right: 50px
}

.ps-block--bought-toggether .ps-block__item:first-child:after {
    content: "+";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    font-weight: 400;
    font-size: 26px;
    color: #666
}

.ps-block--bought-toggether .ps-block__item.ps-block__total:after {
    display: none
}

.ps-block--bought-toggether .ps-block__total p strong {
    color: red;
    font-size: 20px;
    font-weight: 500
}

.ps-block--bought-toggether .ps-block__total .ps-btn {
    padding: 10px 20px;
    margin-bottom: 10px;
    font-size: 14px;
    min-width: 180px;
    text-align: center;
    font-weight: 500
}

.ps-block--bought-toggether .ps-block__total .ps-btn--outline {
    color: #000;
    border: 1px solid #ccc
}

.ps-block--bought-toggether .ps-block__total .ps-btn--outline:hover {
    background-color: #fff;
    border-color: #fff
}

.ps-block--bought-toggether .ps-btn--outline {
    background-color: #fff
}

.ps-block--bought-toggether .ps-product--simple .ps-product__price {
    font-size: 16px;
    font-weight: 400
}

.ps-block--bought-toggether .ps-block__footer .ps-checkbox {
    margin-bottom: 10px
}

.ps-block--bought-toggether .ps-block__footer .ps-checkbox label strong {
    color: #000;
    font-weight: 600
}

.ps-block--bought-toggether .ps-block__footer .ps-checkbox label span {
    color: red;
    font-weight: 500
}

@media (max-width:1199px) {
    .ps-block--bought-toggether .ps-block__items .ps-block__item {
        max-width: 33.333%
    }
}

@media (max-width:767px) {
    .ps-block--bought-toggether .ps-block__items {
        margin-bottom: 20px
    }

    .ps-block--bought-toggether .ps-block__items .ps-block__item {
        max-width: 50%
    }
}

@media (max-width:479px) {
    .ps-block--bought-toggether .ps-block__item {
        padding-right: 0
    }

    .ps-block--bought-toggether .ps-block__item:first-child:after {
        display: none
    }
}

.ps-block--instagram {
    position: relative;
    z-index: 10;
    display: block
}

.ps-block--instagram:after,
.ps-block--instagram:before {
    visibility: hidden;
    opacity: 0;
    transition: all .4s ease
}

.ps-block--instagram:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, .5)
}

.ps-block--instagram:before {
    content: "";
    font-family: FontAwesome;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    color: #fff;
    font-size: 30px
}

.ps-block--instagram:hover:after,
.ps-block--instagram:hover:before {
    visibility: visible;
    opacity: 1
}

.ps-block--instagram:hover:after {
    transition-delay: .25s
}

.ps-block--header-hotline {
    display: flex;
    flex-flow: row nowrap;
    align-items: center
}

.ps-block--header-hotline .ps-block__left i {
    font-size: 26px;
    color: #000
}

.ps-block--header-hotline .ps-block__right {
    padding-left: 20px
}

.ps-block--header-hotline .ps-block__right p {
    margin-bottom: 0;
    line-height: 1.4em
}

.ps-block--header-hotline .ps-block__right p strong {
    display: block;
    font-size: 16px;
    color: #000
}

.ps-block--header-hotline.inline p {
    margin-bottom: 0;
    font-size: 16px;
    color: #000
}

.ps-block--header-hotline.inline p i {
    margin-right: 10px
}

.ps-block--header-hotline.inline p strong {
    font-weight: 600;
    color: #000
}

.ps-block--promotion-header {
    padding: 10px 0
}

.ps-block--promotion-header p {
    margin-bottom: 0
}

.ps-block--promotion-header .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center
}

.ps-block--promotion-header .container>* {
    margin-right: 50px
}

.ps-block--promotion-header .ps-btn {
    background-color: #f14705;
    color: #fff;
    font-size: 14px;
    padding: 8px 20px
}

.ps-block--promotion-header .ps-btn:hover {
    background-color: #fff
}

.ps-block--promotion-header .ps-block__left {
    display: flex;
    flex-flow: row nowrap;
    align-items: center
}

.ps-block--promotion-header .ps-block__left h3 {
    line-height: 1;
    font-size: 48px;
    color: #f14705;
    font-weight: 300
}

.ps-block--promotion-header .ps-block__left h4 {
    font-weight: 400;
    font-size: 24px;
    margin: 0
}

.ps-block--promotion-header .ps-block__left figure {
    padding-left: 20px
}

.ps-block--promotion-header .ps-block__center span {
    display: block;
    font-weight: 400;
    font-size: 18px;
    color: #f14705
}

@media (max-width:1199px) {
    .ps-block--promotion-header {
        display: none
    }
}

.ps-block--ourteam {
    position: relative;
    z-index: 10;
    overflow: hidden
}

.ps-block--ourteam img {
    width: 100%
}

.ps-block--ourteam:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 100%, .95);
    z-index: 10;
    transition: all .4s ease;
    visibility: hidden;
    opacity: 0
}

.ps-block--ourteam .ps-block__content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 30px 20px;
    z-index: 30;
    transition: all .4s ease;
    transform: translateY(50px);
    visibility: hidden;
    opacity: 0
}

.ps-block--ourteam .ps-block__content h4 {
    font-weight: 600
}

.ps-block--ourteam .ps-block__content p {
    color: #000
}

.ps-block--ourteam .ps-block__content ul li {
    display: inline-block;
    margin-right: 10px
}

.ps-block--ourteam .ps-block__content ul li a {
    font-size: 16px
}

.ps-block--ourteam .ps-block__content ul li a:hover {
    color: #fff
}

.ps-block--ourteam .ps-block__content ul li:last-child {
    margin-right: 0
}

.ps-block--ourteam.blank {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 100%
}

.ps-block--ourteam.blank:before {
    display: none
}

.ps-block--ourteam.blank a {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 18px
}

.ps-block--ourteam.blank a:hover {
    color: #fff
}

.ps-block--ourteam:hover:before {
    visibility: visible;
    opacity: 1
}

.ps-block--ourteam:hover .ps-block__content {
    transform: translateY(0);
    visibility: visible;
    opacity: 1
}

.ps-collection {
    display: block
}

.ps-collection img {
    width: 100%
}

@media (max-width:767px) {
    .ps-collection {
        margin-bottom: 30px
    }
}

.ps-block--vendor .ps-block__divider {
    display: block;
    padding-top: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid #d5d5d5
}

.ps-block--vendor .ps-block__thumbnail img {
    width: 100%
}

.ps-block--vendor .ps-block__container {
    padding: 25px;
    background-color: #f1f1f1
}

.ps-block--vendor .ps-block__container .ps-block__header h4 {
    font-size: 20px;
    color: #000;
    font-weight: 500;
    text-transform: uppercase
}

.ps-block--vendor .ps-block__container .ps-block__header p strong {
    color: #690;
    font-weight: 600
}

.ps-block--vendor .ps-block__container p {
    color: #666
}

.ps-block--vendor .ps-block__container p strong {
    font-weight: 500;
    color: #000
}

.ps-block--vendor .ps-block__container figure {
    margin-bottom: 20px
}

.ps-block--vendor .ps-block__container figure figcaption {
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
    color: #000
}

.ps-block--vendor .ps-block__container .ps-block__footer p {
    margin-bottom: 16px
}

.ps-block--vendor .ps-block__container .ps-block__footer p strong {
    font-size: 20px;
    font-weight: 600;
    display: block;
    color: #000
}

.ps-block--vendor-filter {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 10px;
    background-color: #f5f5f5
}

.ps-block--vendor-filter .ps-block__left {
    display: flex;
    align-items: center
}

.ps-block--vendor-filter>* {
    width: 100%;
    max-width: 50%
}

.ps-block--vendor-filter .ps-block__left {
    padding: 0 5px
}

.ps-block--vendor-filter ul li {
    display: inline-block;
    vertical-align: top;
    margin-right: 10px
}

.ps-block--vendor-filter ul li a {
    font-size: 16px;
    color: #666
}

.ps-block--vendor-filter ul li a:hover {
    color: #000
}

.ps-block--vendor-filter ul li.active a {
    font-weight: 500;
    color: #000
}

.ps-block--vendor-filter ul li:last-child {
    margin-right: 16px
}

.ps-block--vendor-filter form {
    width: 100%;
    position: relative
}

.ps-block--vendor-filter form input {
    height: 30px;
    background-color: #fff
}

.ps-block--vendor-filter form button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    border: none;
    background-color: transparent
}

@media (max-width:479px) {
    .ps-block--vendor-filter {
        flex-flow: row wrap
    }

    .ps-block--vendor-filter>* {
        max-width: 100%
    }

    .ps-block--vendor-filter .ps-block__left {
        padding-bottom: 10px
    }
}

.ps-block--vendor-dashboard {
    margin-bottom: 40px
}

.ps-block--vendor-dashboard .ps-block__header {
    margin-bottom: 30px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e1e1e1
}

.ps-block--vendor-dashboard .ps-block__header h3 {
    margin-bottom: 0;
    font-size: 24px;
    font-weight: 600;
    color: #000
}

.ps-block--vendor-status {
    margin-bottom: 60px
}

.ps-block--vendor-status figcaption {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
    color: #000
}

.ps-block--vendor-status .ps-block__footer {
    padding-top: 20px
}

.ps-block--vendor-status .ps-block__footer a {
    color: #000
}

.ps-block--vendor-status .ps-block__footer a:hover {
    color: #fff
}

@media (max-width:479px) {
    .ps-block--vendor-status {
        margin-bottom: 30px
    }
}

.ps-block--icon i {
    margin-bottom: 30px;
    display: inline-block;
    color: #fff;
    font-size: 40px
}

.ps-block--icon h5 {
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    color: #000
}

.ps-block--icon p {
    margin-bottom: 0;
    font-size: 14px;
    line-height: 1.2em
}

@media (min-width:768px) {
    .ps-block--icon p {
        font-size: 16px
    }

    .ps-block--icon h5 {
        font-size: 18px
    }
}

.ps-block--top-photographer {
    max-height: 480px;
    padding: 45px 20px;
    overflow: auto
}

.ps-block--top-photographer .ps-block__header {
    padding-bottom: 60px
}

.ps-block--top-photographer .ps-block__header p {
    font-size: 14px;
    color: #666
}

.ps-block--top-photographer .ps-block__header h3 {
    margin-bottom: 0;
    font-weight: 600;
    font-size: 24px;
    color: #000;
    line-height: 1em
}

.ps-block--top-photographer .ps-block__author {
    display: flex;
    justify-content: space-between;
    padding-bottom: 18px
}

.ps-block--top-photographer .ps-block__author .ps-block__author-thumbnail {
    width: 56px;
    height: 56px
}

.ps-block--top-photographer .ps-block__author .ps-block__author-thumbnail img {
    border-radius: 50%
}

.ps-block--top-photographer .ps-block__author figure {
    width: 100%;
    padding-left: 20px
}

.ps-block--top-photographer .ps-block__author figure a {
    font-weight: 600;
    color: #000
}

.ps-block--top-photographer .ps-block__author figure a:hover {
    color: #c81919
}

.ps-block--top-photographer .ps-block__footer a {
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: underline
}

.ps-block--top-photographer .ps-block__footer a i {
    font-size: 14px;
    margin-left: 6px
}

.ps-block--top-photographer .ps-block__footer a:hover {
    color: #c81919
}

@media (min-width:1680px) {
    .ps-block--top-photographer {
        padding: 45px
    }

    .ps-block--top-photographer .ps-block__header {
        font-size: 32px
    }

    .ps-block--top-photographer .ps-block__header p {
        font-size: 16px
    }
}

.ps-block--testimonial-bg {
    display: flex;
    padding: 60px 40px
}

.ps-block--testimonial-bg h3 {
    margin-bottom: 35px;
    font-weight: 600
}

.ps-block--testimonial-bg figure figcaption {
    font-weight: 600;
    font-size: 18px;
    color: #000
}

.ps-block--testimonial-bg figure p {
    margin-bottom: 0;
    color: #999
}

.ps-block--testimonial-bg .ps-block__content {
    max-width: 70%
}

.ps-block--testimonial-bg.dark figure figcaption,
.ps-block--testimonial-bg.dark h3 {
    color: #fff
}

.ps-block--testimonial-bg.dark figure p {
    color: #8c8c8c
}

@media (min-width:992px) {
    .ps-block--testimonial-bg {
        padding: 80px 30px
    }

    .ps-block--testimonial-bg h3 {
        font-size: 30px;
        line-height: 1.2em;
        font-weight: 600
    }

    .ps-block--testimonial-bg .ps-block__content {
        max-width: 70%
    }
}

@media (min-width:1200px) {
    .ps-block--testimonial-bg h3 {
        font-size: 36px
    }
}

@media (min-width:1440px) {
    .ps-block--testimonial-bg {
        padding: 80px 70px
    }
}

.ps-block--store {
    margin-bottom: 20px;
    box-shadow: 0 0 4px 0 #ccc
}

.ps-block--store h4 {
    margin-bottom: 30px;
    font-size: 21px;
    color: #525252;
    font-weight: 600
}

.ps-block--store .ps-block__thumbnail {
    min-height: 210px
}

.ps-block--store .br-wrapper {
    display: inline-block
}

.ps-block--store .br-wrapper a {
    font-size: 13px;
    color: #fcb800
}

.ps-block--store .ps-block__author {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    transition: all .4s ease;
    transform: translateY(-50px)
}

.ps-block--store .ps-block__author .ps-block__user {
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%
}

.ps-block--store .ps-block__author .ps-block__user img {
    border-radius: 50%
}

.ps-block--store .ps-block__author .ps-btn {
    padding: 0 30px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    color: #17a2b8;
    background-color: #fff;
    border-bottom: 1px solid #17a2b8
}

.ps-block--store .ps-block__contact li {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-bottom: 10px
}

.ps-block--store .ps-block__contact li i {
    margin-right: 10px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #525252;
    color: #fff
}

.ps-block--store .ps-block__inquiry {
    display: inline-block;
    background-color: #fff
}

.ps-block--store .ps-block__inquiry a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    height: 35px;
    color: #fff;
    background-color: #525252
}

.ps-block--store .ps-block__inquiry a i {
    margin-right: 10px
}

.ps-block--store .ps-block__content {
    padding: 0 20px 20px;
    border-top: 3px solid #17a2b8
}

.ps-block--store-2 {
    box-shadow: 0 0 25px 0 #ddd
}

.ps-block--store-2 .br-wrapper {
    display: inline-block
}

.ps-block--store-2 .br-wrapper a {
    font-size: 13px;
    color: #fcb800
}

.ps-block--store-2 h4 {
    margin-bottom: 0;
    color: #526b6f
}

.ps-block--store-2 .ps-block__rating {
    margin-bottom: 10px
}

.ps-block--store-2 .ps-block__content {
    padding: 30px 20px 50px;
    border-bottom: 1px solid #eee
}

.ps-block--store-2 .ps-block__author {
    position: relative;
    display: flex;
    flex-flow: row-reverse nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    transition: all .4s ease
}

.ps-block--store-2 .ps-block__author .ps-block__user {
    display: block;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    border: 3px solid #fff;
    position: relative;
    transform: translateY(-50%);
    box-shadow: 0 0 30px -6px #afafaf
}

.ps-block--store-2 .ps-block__author .ps-block__user img {
    border-radius: 50%
}

.ps-block--store-2 .ps-block__author .ps-btn {
    padding: 0 16px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: #fff;
    background-color: #f05025;
    font-size: 14px
}

.ps-block--store-banner .ps-block__content {
    position: relative;
    min-height: 350px;
    display: flex;
    justify-content: center;
    align-items: center
}

.ps-block--store-banner .ps-block__content h3 {
    font-size: 48px;
    position: relative;
    padding-left: 90px;
    font-weight: 500;
    text-transform: uppercase
}

.ps-block--store-banner .ps-block__content h3:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 80px;
    height: 1px;
    background-color: #fff
}

.ps-block--store-banner .ps-block__inquiry {
    position: absolute;
    bottom: 20px;
    right: 20px;
    padding: 5px 10px;
    border-radius: 4px;
    background-color: hsla(0, 0%, 100%, .9);
    color: #17a2b8
}

.ps-block--store-banner .ps-block__inquiry:hover {
    background-color: #17a2b8;
    color: #fff
}

.ps-block--store-banner .ps-block__user {
    background-color: #2f2f2f;
    padding: 30px 5%
}

.ps-block--store-banner .ps-block__user .ps-block__user-avatar {
    display: block;
    text-align: center;
    margin-bottom: 30px
}

.ps-block--store-banner .ps-block__user .ps-block__user-avatar img {
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
    border-radius: 50%
}

.ps-block--store-banner .ps-block__user .ps-block__user-avatar .br-wrapper {
    display: block
}

.ps-block--store-banner .ps-block__user .ps-block__user-avatar .br-wrapper a {
    font-size: 13px;
    color: #fcb800
}

.ps-block--store-banner .ps-block__user p {
    font-size: 16px;
    color: #fff
}

.ps-block--store-banner .ps-block__user p i {
    margin-right: 1rem;
    color: #999
}

.ps-block--store-banner .ps-block__user .ps-block__user-content {
    padding-bottom: 0
}

@media (min-width:768px) {
    .ps-block--store-banner .ps-block__user {
        display: flex;
        flex-flow: row nowrap
    }

    .ps-block--store-banner .ps-block__user .ps-block__user-avatar {
        position: relative;
        top: -85px;
        margin-bottom: -85px
    }

    .ps-block--store-banner .ps-block__user .ps-block__user-content {
        padding-left: 30px;
        padding-bottom: 75px
    }
}

@media (min-width:992px) {
    .ps-block--store-banner .ps-block__content h3 {
        font-size: 70px;
        color: #fff
    }
}

.ps-block--user-account {
    position: relative
}

.ps-block--user-account i {
    font-size: 30px;
    line-height: 1em
}

.ps-block--user-account .ps-list--arrow li a {
    padding-left: 0;
    color: #000
}

.ps-block--user-account .ps-list--arrow li a:before {
    display: none
}

.ps-block--user-account .ps-list--arrow li a:hover {
    color: #fff
}

.ps-block--user-account .ps-block__heading {
    font-weight: 600;
    color: #000;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 10px
}

.ps-block--user-account .ps-block__footer {
    padding-top: 10px;
    margin-bottom: 0;
    border-top: 1px solid #eaeaea
}

.ps-block--user-account .ps-block__content {
    position: absolute;
    min-width: 240px;
    right: 0;
    z-index: 30;
    padding-top: 10px;
    transform: translateY(20px) scaleZ(0);
    transition: all .4s ease;
    visibility: hidden;
    opacity: 0
}

.ps-block--user-account:hover .ps-block__content {
    visibility: visible;
    opacity: 1;
    transform: translateY(20px) scaleX(1);
    background-color: #fff;
    padding: 10px 15px
}

.ps-block--checkout-order figure {
    margin-bottom: 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid #eaeaea
}

.ps-block--checkout-order figure figcaption {
    display: flex;
    justify-content: space-between;
    font-weight: 400
}

.ps-block--checkout-order figure figcaption strong {
    font-size: 14px;
    color: #000;
    font-weight: 600;
    text-transform: uppercase
}

.ps-block--checkout-order figure figcaption small {
    font-size: 16px
}

.ps-block--checkout-order .ps-block__items>a {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    width: 100%
}

.ps-block--checkout-order .ps-block__items>a strong {
    font-weight: 600
}

.ps-block--checkout-order .ps-block__items>a strong span {
    color: #666;
    margin-left: 10px
}

.ps-block--checkout-order .ps-block__items>a small {
    font-size: 14px;
    color: #000
}

.ps-block--checkout-order .ps-block__shipping {
    padding-bottom: 10px;
    margin-bottom: 10px
}

.ps-block--checkout-order .ps-block__total h3 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
    font-size: 16px;
    color: #666
}

.ps-block--checkout-order .ps-block__total h3 strong {
    color: #000
}

.ps-block--checkout-order .ps-block__content {
    padding: 30px 20px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 2px solid #eaeaea
}

.ps-block--checkout-order .ps-block__payment-methods .ps-radio {
    margin-bottom: 10px
}

.ps-block--checkout-order .ps-block__payment-methods .ps-radio>label {
    color: #000
}

.ps-block--checkout-order .ps-block__payment-methods p {
    margin-top: 20px;
    font-size: 16px
}

.ps-block--checkout-order .ps-block__payment-methods p a {
    color: #000
}

.ps-block--checkout-order .ps-block__payment-methods p a:hover {
    color: #fff
}

.ps-block--checkout-order .ps-block__footer button {
    height: 60px
}

.ps-block--shipping figure {
    margin-bottom: 0
}

.ps-block--shipping figure a,
.ps-block--shipping figure strong {
    text-align: right
}

.ps-block--shipping .ps-block__panel {
    margin-bottom: 30px;
    padding: 10px 20px;
    border: 1px solid #d1d1d1;
    border-radius: 4px
}

@media screen and (min-width:480px) {
    .ps-block--shipping .ps-block__footer {
        display: flex;
        justify-content: space-between;
        align-items: center
    }
}

@media screen and (min-width:768px) {
    .ps-block--shipping figure {
        display: flex;
        justify-content: space-between;
        align-items: center
    }

    .ps-block--shipping figure>* {
        flex-basis: 100%
    }

    .ps-block--shipping figure small {
        font-size: 14px;
        max-width: 10em
    }

    .ps-block--shipping figure p {
        margin-bottom: 0
    }

    .ps-block--shipping figure a {
        align-self: flex-end;
        color: #06c;
        max-width: 10em;
        text-align: right
    }
}

.ps-block--payment-method {
    margin-bottom: 50px;
    padding: 20px;
    background-color: #eaeaea
}

.ps-block--payment-method .ps-tab-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 30px
}

.ps-block--payment-method .ps-tab-list li {
    margin-right: 10px
}

.ps-block--payment-method .ps-tab-list li .ps-btn {
    background-color: #bfbfbf
}

.ps-block--payment-method .ps-tab-list li .ps-btn:hover {
    background-color: #fff
}

.ps-block--payment-method .ps-tab-list li:last-child {
    margin-right: 0
}

.ps-block--payment-method .ps-tab-list li.active .ps-btn {
    background-color: #fff;
    color: #fff
}

.ps-block--payment-method .ps-block__header {
    padding-top: 10px;
    padding-bottom: 30px
}

.ps-block--payment-method .form-control {
    background-color: #fff
}

.ps-block--payment-method .ps-btn:hover {
    color: #fff
}

.ps-block--payment-success {
    background-color: #fff
}

.ps-block--payment-success h3 {
    font-size: 48px;
    color: #690
}

.ps-block--payment-success p {
    font-size: 18px
}

.ps-block--payment-success p a {
    color: #06c
}

@media screen and (min-width:992px) {
    .ps-block--payment-success h3 {
        font-size: 64px
    }

    .ps-block--payment-success p {
        font-size: 20px
    }
}

.ps-block--medicine-brand {
    text-align: center
}

.ps-block--medicine-brand img {
    border-radius: 50%;
    margin-bottom: 20px;
    max-height: 80px
}

.ps-block--medicine-brand a {
    font-weight: 600;
    font-size: 16px;
    color: #000
}

.ps-block--medicine-brand a:hover {
    color: #28afb1
}

@media screen and (min-width:1200px) {
    .ps-block--medicine-brand img {
        max-height: 100%
    }
}

.ps-block--testimonial-medicine .ps-block__content {
    padding-bottom: 20px
}

.ps-block--testimonial-medicine .ps-block__content p {
    font-size: 20px;
    font-weight: 600;
    color: #000;
    line-height: 1.2em
}

.ps-block--testimonial-medicine .ps-block__author {
    display: flex;
    flex-flow: row nowrap
}

.ps-block--testimonial-medicine .ps-block__author .ps-block__author__thumbnail img {
    max-width: 50px
}

.ps-block--testimonial-medicine .ps-block__author figure {
    padding-left: 20px
}

.ps-block--testimonial-medicine .ps-block__author figure figcaption {
    font-size: 18px;
    font-weight: 600;
    color: #000;
    line-height: 1.4em
}

.ps-block--testimonial-medicine .ps-block__author figure span {
    color: #666
}

@media screen and (min-width:1200px) {
    .ps-block--testimonial-medicine .ps-block__content p {
        font-size: 30px
    }
}

.widget {
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 20px
}

.widget .widget-title {
    margin-bottom: 2.5rem;
    font-weight: 700
}

.widget_sidebar {
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #e5e5e5
}

.widget_sidebar .widget-title {
    font-family: Poppins, sans-serif;
    display: block;
    margin-bottom: 2.5rem;
    font-size: 1.6rem;
    font-weight: 600;
    color: #f05e27;
    text-transform: uppercase
}

.widget_sidebar ul li a {
    display: block;
    position: relative;
    padding: 5px 0;
    font-size: 1.4rem;
    line-height: 1.8em;
    color: #666
}

.widget_sidebar ul li a:before {
    content: "";
    font-family: FontAwesome;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 10px;
    left: 0;
    line-height: 1em;
    transition: all .4s ease
}

.widget_sidebar ul li a:hover {
    padding-left: 10px;
    color: #000
}

.widget_sidebar ul li a:hover:before {
    visibility: visible;
    opacity: 1;
    transition-delay: .2s
}

.widget_shop {
    padding: 25px 20px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 5px
}

.widget_shop .widget-title {
    margin-bottom: 25px;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    color: #f05e27
}

.widget_shop .ps-list--categories li {
    padding: 0 !important;
    border-bottom: 1px solid #e4e4e4
}

.widget_shop .ps-list--categories li .sub-toggle {
    right: 15px;
    top: 50%;
    transform: translateY(-50%)
}

.widget_shop .ps-list--categories li:last-of-type {
    border-bottom: unset
}

.widget_shop .ps-list--categories li:last-of-type .sub-toggle {
    top: 17px;
    transform: unset
}

.widget_shop .ps-list--categories li a {
    padding: 20px !important;
    color: #657786
}

.widget_shop .ps-list--categories li a:hover {
    color: #f05e27
}

.widget_shop .ps-checkbox {
    margin-bottom: 10px
}

.widget_shop .ps-checkbox>label {
    color: #aab8c2;
    line-height: 16px;
    padding-left: 25px
}

.widget_shop .ps-checkbox>label:before {
    width: 16px;
    height: 16px;
    border-radius: 2px
}

.widget_shop .ps-checkbox>label:after {
    top: 3px;
    left: 7px;
    width: 4px;
    height: 8px;
    border-width: 1px;
    border-color: #fff
}

.widget_shop .ps-checkbox .fa-star {
    margin-right: 5px;
    color: #ccc
}

.widget_shop .ps-checkbox .fa-star.rate {
    color: #f2b309
}

.widget_shop .ps-checkbox small {
    color: #999;
    font-size: 14px
}

.widget_shop .ps-checkbox input[type=checkbox]:checked~label {
    font-weight: 500;
    color: #f05e27
}

.widget_shop .ps-checkbox input[type=checkbox]:checked~label:before {
    border-color: #f05e27;
    background-color: #f05e27
}

.widget_shop .ps-checkbox.ps-checkbox--color>label {
    margin: 0;
    padding: 0;
    width: 30px;
    height: 30px;
    line-height: 30px;
    vertical-align: top
}

.widget_shop .ps-checkbox.ps-checkbox--color>label:before {
    width: 30px;
    height: 30px;
    border-radius: 50%
}

.widget_shop .ps-slider {
    display: block;
    margin-bottom: 10px;
    margin-left: 10px;
    height: 4px;
    background-color: #cecece;
    position: relative;
    border-radius: 0;
    border: none
}

.widget_shop .ui-slider-range {
    top: 0;
    left: 0;
    height: 100%;
    background-color: #000;
    border-radius: 0;
    border: none
}

.widget_shop .ui-slider-handle {
    display: inline-block;
    top: 50%;
    height: 16px;
    width: 16px;
    outline: none;
    cursor: pointer;
    border: none;
    background-color: #000;
    transform: translateY(-50%);
    border-radius: 50%
}

.widget_shop .ps-slider__meta {
    margin-bottom: 0;
    font-size: 16px;
    line-height: 1.8em;
    color: #999
}

.widget_shop .ps-slider__meta span {
    margin-left: 5px;
    margin-right: 5px
}

.widget_shop .ps-filter__btn {
    background-color: #888;
    color: #fff
}

.widget_shop .ps-filter__btn:hover {
    background-color: #f05e27
}

.widget_shop figure {
    margin-top: 15px;
    padding-bottom: 15px;
    padding-top: 15px;
    border-bottom: 1px solid #ccc
}

.widget_shop figure:last-child {
    border-bottom: none
}

.widget_shop .sizes a {
    display: inline-block;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 2px 20px;
    border: 1px solid #ccc;
    background-color: #fff
}

.widget_shop .sizes a.active,
.widget_shop .sizes a:hover {
    border-color: #f05e27;
    color: #f05e27
}

.widget_search {
    margin-bottom: 25px;
    border-bottom: none
}

.widget_size a {
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 1rem 2rem;
    font-size: 1.4rem;
    line-height: 20px;
    color: #555;
    background-color: #f6f6f6
}

.widget_size a:hover {
    background-color: #a7a7a7;
    color: #fff
}

.widget_size .ps-checkbox--size label {
    margin-bottom: 10px;
    padding: 0;
    background-color: transparent
}

.widget_filter .ps-slider {
    display: block;
    margin-bottom: 10px;
    margin-left: 10px;
    height: 5px;
    background-color: #cecece;
    position: relative;
    border-radius: 0;
    border: none
}

.widget_filter .ui-slider-range {
    top: 0;
    left: 0;
    height: 100%;
    background-color: #fff;
    border-radius: 0;
    border: none
}

.widget_filter .ui-slider-handle {
    display: inline-block;
    top: 50%;
    height: 14px;
    width: 14px;
    outline: none;
    cursor: pointer;
    background-color: #fff;
    border: none;
    transform: translateY(-50%);
    border-radius: 50%
}

.widget_filter .ps-slider__meta {
    margin-bottom: 10px;
    font-size: 13px;
    line-height: 1.8em;
    color: #666;
    text-align: center
}

.widget_filter .ps-slider__meta span {
    margin-left: 5px;
    margin-right: 5px
}

.widget_filter .ps-filter__btn {
    background-color: #888;
    color: #fff
}

.widget_filter .ps-filter__btn:hover {
    background-color: #f05e27
}

.widget_tags a {
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 5px 15px;
    font-size: 14px;
    line-height: 15px;
    color: #303030;
    background-color: transparent;
    border: 1px solid #000;
    border-radius: 50px
}

.widget_tags a:hover {
    background-color: #f05e27;
    color: #fff
}

.widget_footer .widget-title {
    font-size: 16px;
    margin-bottom: 30px;
    color: #000;
    font-weight: 600
}

.widget_contact-us .widget_content h3 {
    color: #fff
}

.widget_contact-us .widget_content .ps-list--social {
    padding-top: 25px
}

.widget_features {
    margin-bottom: 30px;
    background-color: #f1f1f1;
    padding: 20px
}

.widget_features p {
    position: relative;
    margin-bottom: 20px;
    padding-left: 50px;
    color: #000;
    line-height: 1.4em
}

.widget_features p i {
    position: absolute;
    top: 0;
    left: 0;
    margin-right: 10px;
    font-size: 26px;
    color: #000
}

.widget_sell-on-site p {
    margin-bottom: 0;
    color: #000;
    vertical-align: middle
}

.widget_sell-on-site p i {
    font-size: 18px
}

.widget_sell-on-site p a {
    color: #06c
}

.widget_same-brand {
    border: 1px solid #e1e1e1
}

.widget_same-brand h3 {
    padding: 14px 20px;
    background-color: #f4f4f4;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 40px;
    margin-top: 0;
    color: #000
}

.widget_same-brand .widget__content {
    padding: 20px
}

.widget_same-brand .ps-product {
    margin-bottom: 30px;
    border: 1px solid #eaeaea;
    transition: all .4s ease
}

.widget_same-brand .ps-product .ps-product__content {
    display: block
}

.widget_same-brand .ps-product:hover {
    border-bottom: 1px solid silver
}

.widget_same-brand .ps-product:hover .ps-product__content {
    display: block;
    visibility: visible;
    opacity: 1;
    height: auto
}

.widget_same-brand .ps-product:hover .ps-product__content.hover {
    display: none
}

.widget_best-sale {
    padding: 15px 10px;
    border: 1px solid #d9d9d9;
    border-bottom: 5px solid red;
    max-height: 500px
}

.widget_best-sale .widget-title {
    font-weight: 600;
    color: #000;
    font-size: 20px;
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 15px
}

.widget_best-sale .ps-product--horizontal {
    margin-bottom: 15px
}

.widget_best-sale .ps-product--horizontal .ps-product__thumbnail {
    max-width: 60px
}

.widget_best-sale .ps-product--horizontal .ps-product__rating {
    display: none
}

.widget_best-sale .ps-product--horizontal .ps-product__price {
    font-size: 14px
}

.widget_best-sale .ps-product--horizontal .ps-product__price del {
    font-size: 12px
}

.widget--blog .widget__title {
    margin-bottom: 35px;
    margin-top: 0;
    font-size: 20px;
    font-weight: 600;
    color: #000
}

.widget--blog.widget--search .ps-form--widget-search input {
    height: 40px
}

.widget--blog.widget--categories ul li a {
    display: block;
    padding: 6px 0;
    line-height: 20px;
    color: #000
}

.widget--blog.widget--categories ul li a:hover {
    color: #fff
}

.widget--blog.widget--recent-post .widget__content a {
    display: block;
    margin-bottom: 10px;
    color: #000;
    font-weight: 600;
    font-size: 16px
}

.widget--blog.widget--recent-post .widget__content a:hover {
    color: #fff
}

.widget--blog.widget--recent-comments p a {
    color: #000
}

.widget--blog.widget--recent-comments p a:hover {
    color: #fff
}

.widget--blog.widget--tags a {
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 5px;
    vertical-align: top;
    color: #999
}

.widget--blog.widget--tags a:after {
    content: ","
}

.widget--blog.widget--tags a:hover {
    color: #fff
}

.widget--vendor {
    padding-bottom: 40px;
    margin-bottom: 40px;
    border-bottom: 1px solid #d8d8d8
}

.widget--vendor .widget-title {
    margin-bottom: 35px;
    font-size: 20px;
    color: #000;
    font-weight: 600
}

.widget--vendor .form-control {
    background-color: #fff;
    border: none
}

.widget--vendor .select2 {
    min-width: 100%
}

.widget--vendor .select2 .select2-selection {
    border: none
}

.widget--vendor .select2 .select2-selection__rendered {
    font-size: 16px;
    color: #666;
    padding-top: 15px;
    padding-bottom: 15px
}

.widget--vendor .ps-list--arrow a {
    color: #000
}

.widget--vendor .ps-list--arrow a:before {
    content: "";
    font-size: 20px
}

.widget--open-time ul li {
    margin-bottom: 25px
}

.widget--open-time ul li strong {
    display: block;
    font-weight: 600;
    color: #000
}

.widget--open-time ul li span {
    color: #666
}

.widget--open-time ul li:last-child {
    margin-bottom: 0
}

.ps-widget--account-dashboard .ps-widget__header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 20px
}

.ps-widget--account-dashboard .ps-widget__header img {
    flex-basis: 60px;
    max-width: 60px;
    border-radius: 50%
}

.ps-widget--account-dashboard .ps-widget__header figure {
    flex-basis: 100%;
    padding-left: 10px
}

.ps-widget--account-dashboard .ps-widget__header figure figcaption {
    font-size: 16px;
    color: #666
}

.ps-widget--account-dashboard .ps-widget__header figure p {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 600;
    color: #000
}

.ps-widget--account-dashboard .ps-widget__content ul {
    border: 1px solid #d1d1d1
}

.ps-widget--account-dashboard .ps-widget__content ul li {
    border-bottom: 1px solid #d1d1d1
}

.ps-widget--account-dashboard .ps-widget__content ul li a {
    display: block;
    padding: 15px 20px;
    line-height: 20px;
    font-size: 16px;
    font-weight: 500;
    color: #000;
    text-transform: capitalize
}

.ps-widget--account-dashboard .ps-widget__content ul li a i {
    margin-right: 10px
}

.ps-widget--account-dashboard .ps-widget__content ul li a:hover {
    background-color: #fff;
    color: #fff
}

.ps-widget--account-dashboard .ps-widget__content ul li:last-child {
    border-bottom: none
}

.ps-widget--account-dashboard .ps-widget__content ul li.active {
    background-color: #fff
}

.ps-widget--account-dashboard .ps-widget__content ul li.active a {
    color: #fff
}

#nonlinear {
    width: 90%;
    margin: 10px auto
}

.noUi-connect {
    background-color: #fff
}

.noUi-horizontal {
    height: 8px
}

.noUi-handle:after,
.noUi-handle:before {
    display: none
}

.noUi-horizontal .noUi-handle {
    width: 16px;
    height: 16px;
    left: -17px;
    top: -5px
}

html:not([dir=rtl]) .noUi-horizontal .noUi-handle {
    right: -7px
}

.noUi-handle {
    border: 3px solid #fff;
    border-radius: 50%;
    box-shadow: none
}

.masonry-wrapper {
    margin: 0
}

.masonry-wrapper .grid-item,
.masonry-wrapper .grid-sizer {
    width: 100%
}

.masonry-wrapper .grid-item .grid-item__inner .grid-item__content-wrapper {
    background-color: #9ec3c3
}

.masonry-wrapper.ac_masonry-grid .grid-item__content-wrapper {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
}

.setting {
    margin: -5px
}

.setting .grid-item .grid-item__inner .grid-item__content-wrapper {
    background-color: #ccc
}

.setting.ac_masonry-grid .grid-item__content-wrapper {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
}

.setting.ac_masonry-grid .grid-item__inner {
    padding-top: 60%
}

.setting.ac_masonry-grid .grid-item.extra-large .grid-item__inner,
.setting.ac_masonry-grid .grid-item.wide .grid-item__inner {
    padding-top: 30%
}

.setting.ac_masonry-grid .grid-item.high .grid-item__inner {
    padding-top: 120%
}

.setting .grid-item .grid-item__content-wrapper {
    margin: 5px;
    top: 5px;
    right: 5px;
    bottom: 5px;
    left: 5px
}

.setting .grid-item,
.setting .grid-sizer {
    width: 100%
}

@media (min-width:768px) {

    .setting .grid-item,
    .setting .grid-sizer {
        width: 50%
    }

    .setting .grid-item.extra-large,
    .setting .grid-item.large,
    .setting .grid-item.wide {
        width: 100%
    }
}

@media (min-width:992px) {

    .setting .grid-item,
    .setting .grid-sizer {
        width: 33.3333333333%
    }

    .setting .grid-item.large,
    .setting .grid-item.wide {
        width: 66.6666666667%
    }

    .setting .grid-item.extra-large {
        width: 100%
    }
}

@media (min-width:1200px) {

    .setting .grid-item,
    .setting .grid-sizer {
        width: 33.3333333333%
    }

    .setting .grid-item.large,
    .setting .grid-item.wide {
        width: 66.6666666667%
    }

    .setting .grid-item.extra-large {
        width: 100%
    }
}

.ps-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
    z-index: 9999;
    visibility: hidden;
    opacity: 0;
    transition: all .4s ease
}

.ps-modal__container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem 4rem;
    z-index: 10;
    background-color: #fff;
    border-radius: 3px;
    max-width: 945px;
    width: 100%
}

.ps-modal__close {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #5e6b9d
}

.ps-modal__close i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    color: #fff
}

.ps-modal.active {
    visibility: visible;
    opacity: 1
}

@media (max-width:991px) {
    .ps-modal__container {
        max-width: 90%
    }

    .ps-modal__close {
        transform: translate(0);
        background-color: transparent;
        width: 30px;
        height: 30px
    }

    .ps-modal__close i {
        color: #5e6b9d
    }
}

@media (max-width:767px) {
    .ps-modal {
        overflow: auto
    }

    .ps-modal__container {
        position: relative;
        top: 0;
        left: 0;
        transform: translate(0);
        margin: 3rem auto;
        overflow: auto
    }
}

@media (max-width:479px) {
    .ps-modal__container {
        max-width: 300px
    }
}

#login .ps-modal__container {
    max-width: 600px
}

#login .ps-modal__container .ps-btn--close {
    position: absolute;
    top: 10px;
    right: 10px
}

.ps-popup {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 99999;
    visibility: hidden;
    opacity: 0;
    transition: all .4s ease;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center
}

.ps-popup__content {
    position: relative;
    max-width: 830px;
    width: 100%;
    transition: tranform .4s ease
}

.ps-popup__close {
    display: inline-block;
    position: absolute;
    width: 40px;
    height: 40px;
    top: 10px;
    right: 10px;
    background-color: #000;
    border: none;
    border-radius: 0
}

.ps-popup__close i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: #fff
}

.ps-popup__close:hover {
    background-color: #f05e27
}

.ps-popup.active {
    visibility: visible;
    opacity: 1;
    transition-delay: .5s
}

@media (max-width:991px) {
    .ps-popup {
        padding: 100px 30px 20px
    }

    .ps-popup .ps-popup__content {
        position: relative;
        top: 0;
        left: 0;
        max-width: 800px;
        margin: 0 auto
    }

    .ps-popup.active .ps-popup__content {
        transform: translate(0)
    }
}

@media (max-width:479px) {
    .ps-popup {
        padding-top: 50px;
        padding-left: 20px;
        padding-right: 20px
    }
}

.ps-tab {
    display: none
}

.ps-tab.active {
    display: block
}

.ps-form--newsletter h3 {
    font-weight: 600;
    margin-bottom: 5px;
    font-size: 24px
}

.ps-form--newsletter p {
    margin-bottom: 0
}

.ps-form--newsletter .form-group--nest button {
    padding-left: 45px;
    padding-right: 45px
}

@media (max-width:1199px) {
    .ps-form--newsletter p {
        margin-bottom: 10px
    }
}

.select2-container--default .select2-selection--single {
    background-color: #fff;
    border: 1px solid #d5d5d5 !important;
    border-radius: 4px !important
}

.container-fuild .form-group {
    position: relative
}

.container-fuild .input-text {
    border: 1px solid #e4e4e4;
    border-radius: 5px;
    padding: 20px 5px 5px 15px;
    color: #f05e27;
    font-size: 15px
}

.container-fuild .input-text~label {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: text;
    font-size: 15px;
    color: #657786;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
    transition: all .6s ease
}

.container-fuild .input-text.has-value,
.container-fuild .input-text:focus {
    outline: 0;
    border: 1px solid #f05e27
}

.container-fuild .input-text.has-value~label,
.container-fuild .input-text:focus~label {
    font-size: 12px;
    color: #f05e27;
    position: absolute;
    top: 15px;
    transform: translateY(-50%);
    left: 15px
}

.ps-form--quick-search {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    border-color: #d9d9d9 !important;
    border-radius: 5px
}

.ps-form--quick-search .form-control {
    background-color: #fff;
    color: #000;
    height: 50px;
    border: none;
    border-radius: 0;
    font-size: 16px;
    font-weight: 400
}

.ps-form--quick-search ::-moz-placeholder {
    color: #d9d9d9 !important
}

.ps-form--quick-search :-ms-input-placeholder {
    color: #d9d9d9 !important
}

.ps-form--quick-search ::placeholder {
    color: #d9d9d9 !important
}

.ps-form--quick-search .form-group--icon {
    background-color: #fff;
    border-radius: 4px 0 0 4px
}

.ps-form--quick-search .form-group--icon i {
    z-index: 1
}

.ps-form--quick-search select.form-control {
    border-right: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    padding: 0 10px;
    text-indent: 10px;
    position: relative;
    z-index: 2;
    background-color: transparent
}

.ps-form--quick-search select.form-control::-webkit-input-placeholder {
    color: #666
}

.ps-form--quick-search select.form-control:-moz-placeholder,
.ps-form--quick-search select.form-control::-moz-placeholder {
    color: #666
}

.ps-form--quick-search select.form-control:-ms-input-placeholder {
    color: #666
}

.ps-form--quick-search a,
.ps-form--quick-search button {
    /* background-color: #F05E27; */
    border-radius: 5px;
    color: #fff;
    border: none;
    font-weight: 700;
    height: 35px;
    padding: 0 6.6px;
    margin-top: 7px;
    margin-right: 7px
}

/* .ps-form--quick-search a:hover,
.ps-form--quick-search button:hover {
    background-color: #F05E27
} */

.ps-form--quick-search a.search-sidebar-button,
.ps-form--quick-search button.search-sidebar-button {
    height: 50px;
    margin-left: -.36rem !important;
    border-radius: 5px 0 0 5px
}

@media (min-width:1300px) {

    .ps-form--quick-search a.search-sidebar-button,
    .ps-form--quick-search button.search-sidebar-button {
        display: none !important
    }
}

.ps-checkbox label {
    color: #214252
}

.ps-checkbox label:before {
    border-radius: 4px !important
}

.ps-form--widget-search {
    position: relative;
    margin-bottom: 20px
}

.ps-form--widget-search input {
    height: 34px;
    background-color: #fff;
    border-radius: 0
}

.ps-form--widget-search button {
    border: none;
    background-color: transparent;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px
}

.ps-form--review h4 {
    margin-bottom: 20px;
    display: block;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2em;
    text-transform: uppercase
}

.ps-form--review p sup {
    margin-left: 5px;
    color: #ec0101
}

.ps-form--review .form-group__rating {
    display: flex;
    align-items: center
}

.ps-form--review .form-group__rating label {
    margin-bottom: 0;
    line-height: 20px;
    margin-right: 15px
}

.ps-form--review .form-group__rating .br-wrapper {
    line-height: 20px
}

.ps-form--review .form-group__rating .br-wrapper a {
    font-size: 14px
}

.ps-form--review .form-group__rating .br-wrapper.br-theme-fontawesome-stars .br-widget {
    height: auto;
    line-height: 20px
}

.ps-form--review .form-control {
    border-radius: 0
}

.ps-form--review button {
    border-radius: 0;
    font-weight: 600
}

.ps-form--post-comment h3 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 24px;
    color: #000
}

.ps-form--post-comment .submit {
    text-align: center
}

.ps-form--post-comment .submit .ps-btn {
    padding: 0 30px;
    height: 50px
}

.ps-form--contact-us .form-control {
    background-color: #fff
}

.ps-form--contact-us .submit {
    text-align: center
}

.ps-form--contact-us .submit button {
    height: 50px;
    padding: 0 30px
}

.ps-form--account {
    max-width: 430px;
    margin: 0 auto;
    padding-top: 130px
}

.ps-form--account .ps-tab-list {
    text-align: center;
    margin-bottom: 30px
}

.ps-form--account .ps-tab-list li {
    display: inline-block;
    padding: 0 15px
}

.ps-form--account .ps-tab-list li a {
    font-size: 30px;
    color: #666;
    font-weight: 600
}

.ps-form--account .ps-tab-list li.active a {
    color: #000
}

.ps-form--account .form-forgot {
    position: relative
}

.ps-form--account .form-forgot input {
    padding-right: 100px
}

.ps-form--account .form-forgot>a {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    color: #06c
}

.ps-form--account .form-forgot>a:hover {
    color: #fff
}

.ps-form--account .ps-checkbox>label {
    color: #000
}

.ps-form--account .ps-checkbox>label:before {
    border-radius: 4px !important
}

.ps-form--account .ps-list--social {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin: 0 -5px
}

.ps-form--account .ps-list--social li {
    padding: 0 5px;
    width: 100%;
    text-align: center;
    margin-right: 0
}

.ps-form--account .ps-list--social li a {
    display: block;
    line-height: 20px;
    padding: 15px 0
}

.ps-form--account .ps-list--social li a i {
    color: #fff;
    text-align: center
}

.ps-form--account .ps-list--social li a.facebook {
    background-color: #3b5999
}

.ps-form--account .ps-list--social li a.google {
    background-color: #dd4b39
}

.ps-form--account .ps-list--social li a.twitter {
    background-color: #55acee
}

.ps-form--account .ps-list--social li a.instagram {
    background-color: #e4405f
}

.ps-form--account .ps-form__content {
    padding: 30px 30px 0
}

.ps-form--account .ps-form__content h5 {
    margin: 0 0 25px;
    font-size: 16px;
    font-weight: 400
}

.ps-form--account .ps-form__footer {
    padding: 30px
}

.ps-form--account .ps-tab {
    background-color: #fff
}

.ps-form--order-tracking {
    max-width: 630px;
    margin: 0 auto 50px
}

.ps-form--order-tracking .form-group {
    margin-bottom: 30px
}

.ps-form--order-tracking .form-group>label {
    font-size: 18px;
    font-weight: 600;
    color: #000
}

.ps-form--order-tracking .form-group input {
    border-color: #bfbfbf
}

.ps-form--order-tracking .form-group input::-webkit-input-placeholder {
    color: #a9a9a9
}

.ps-form--order-tracking .form-group input:-moz-placeholder,
.ps-form--order-tracking .form-group input::-moz-placeholder {
    color: #a9a9a9
}

.ps-form--order-tracking .form-group input:-ms-input-placeholder {
    color: #a9a9a9
}

@media (max-width:991px) {
    .ps-form--order-tracking .form-group>label {
        font-size: 16px;
        font-weight: 500
    }
}

.ps-form--search-mobile input {
    height: 40px;
    background-color: #fff;
    border: none;
    border-radius: 0
}

.ps-form--search-mobile button {
    width: 40px;
    height: 40px;
    background-color: #000;
    border: none
}

.ps-form--search-mobile button i {
    color: #fff
}

.ps-form--subscribe-popup {
    padding: 60px 50px
}

.ps-form--subscribe-popup h4 {
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 400
}

.ps-form--subscribe-popup h4 strong {
    color: #fff
}

.ps-form--subscribe-popup p {
    margin-bottom: 20px
}

.ps-form--subscribe-popup input {
    margin-bottom: 20px;
    height: 40px;
    border: 2px solid #c9c9c9
}

.ps-form--subscribe-popup button {
    height: 40px;
    width: auto;
    padding: 0 30px
}

.ps-form--subscribe-popup .ps-checkbox>label {
    color: #000
}

.ps-form--subscribe-popup .ps-checkbox>label:before {
    border-radius: 4px
}

.ps-form--subscribe-popup .ps-form__content {
    max-width: 360px;
    text-align: center
}

.ps-form--vendor-datetimepicker {
    margin-bottom: 24px
}

.ps-form--vendor-datetimepicker .input-group {
    border: none;
    margin-bottom: 10px
}

.ps-form--vendor-datetimepicker .input-group:after {
    content: "";
    font-family: Linearicons;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    font-size: 16px
}

.ps-form--vendor-datetimepicker .input-group input {
    height: 40px
}

.ps-form--vendor-datetimepicker .input-group .input-group-text {
    padding: 0 20px;
    font-size: 14px;
    min-width: 60px;
    text-align: center;
    font-weight: 500;
    color: #000;
    border-radius: 0
}

.ps-form--vendor-datetimepicker button {
    background-color: #8a0;
    border-radius: 0;
    height: 40px;
    padding: 0 30px;
    color: #fff
}

.ps-form--vendor-datetimepicker button i {
    vertical-align: middle;
    margin-right: 4px
}

.ps-form--vendor-datetimepicker button:hover {
    background-color: #9cc400
}

.ps-form--photo-search .select2 {
    position: relative
}

.ps-form--photo-search .select2:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 1px;
    height: 50px;
    background-color: #dfdfdf;
    z-index: 20
}

.ps-form--photo-search .select2 .select2-selection {
    position: relative;
    height: 60px;
    display: flex;
    align-items: center;
    border: none;
    min-width: 190px;
    border-radius: 0 6px 6px 0
}

.ps-form--photo-search .select2 .select2-selection .select2-selection__rendered {
    width: 100%;
    font-weight: 600;
    color: #000
}

.ps-form--photo-search .form-group--icon {
    margin-bottom: 0;
    width: 100%
}

.ps-form--photo-search .form-group--icon i {
    right: auto;
    left: 20px;
    font-size: 18px;
    color: #000
}

.ps-form--photo-search .form-group--icon i:before {
    font-size: inherit
}

.ps-form--photo-search .form-group--icon input {
    background-color: #fff;
    border: none;
    height: 60px;
    text-indent: 30px;
    padding-left: 20px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 6px 0 0 6px
}

.ps-form--photo-search .form-group--icon input::-webkit-input-placeholder {
    font-weight: 400;
    font-size: 14px
}

.ps-form--photo-search .form-group--icon input:-moz-placeholder,
.ps-form--photo-search .form-group--icon input::-moz-placeholder {
    font-weight: 400;
    font-size: 14px
}

.ps-form--photo-search .form-group--icon input:-ms-input-placeholder {
    font-weight: 400;
    font-size: 14px
}

.ps-form--photo-search .ps-form__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px
}

.ps-form--photo-search .ps-form__footer a {
    display: inline-block;
    margin-right: 10px
}

.ps-form--photo-search .ps-form__footer a:hover {
    color: #c81919
}

.ps-form--photo-search .ps-form__footer a:last-child {
    margin-right: 0
}

@media (max-width:480px) {
    .ps-form--photo-search .ps-form__content {
        align-items: flex-start;
        flex-flow: column-reverse wrap
    }

    .ps-form--photo-search .ps-form__content .select2 {
        margin-bottom: 20px;
        min-width: 100%
    }

    .ps-form--photo-search .ps-form__content .select2 .select2-selection {
        margin: 0 auto
    }
}

.ps-form--checkout h4 {
    margin-bottom: 20px;
    font-weight: 600
}

@media (min-width:768px) {
    .ps-form--checkout .ps-form__submit {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center
    }
}

.ps-form--account-setting .ps-form__header h3 {
    font-weight: 600
}

.ps-search {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 99999;
    transform-style: preserve-3d;
    visibility: hidden;
    opacity: 0;
    transition: all .75s cubic-bezier(.7, 0, .3, 1);
    transition-delay: 0
}

.ps-search:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .95);
    transition: transform .6s cubic-bezier(.7, 0, .3, 1);
    transform: scaleY(0);
    transform-origin: 50% 100%
}

.ps-search__content {
    max-width: 1200px;
    width: 100%;
    padding: 0 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}

.ps-search .ps-form--primary-search {
    transform: translateY(100%);
    transition: all .6s cubic-bezier(.7, 0, .3, 1);
    visibility: hidden;
    opacity: 0
}

.ps-search>.ps-btn--close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 50px;
    height: 50px;
    background-color: #000;
    z-index: 1000;
    transform: scale(0) rotate(0);
    border-radius: 50%;
    transition: all .6s cubic-bezier(.7, 0, .3, 1);
    border: none
}

.ps-search>.ps-btn--close:after,
.ps-search>.ps-btn--close:before {
    background-color: #fff;
    height: 50%
}

.ps-search>.ps-btn--close:hover {
    background-color: #f44336
}

.ps-search.active {
    visibility: visible;
    opacity: 1;
    transition-delay: 0s
}

.ps-search.active:before {
    transform: scaleX(1);
    transform-origin: 50% 0
}

.ps-search.active>.ps-btn--close {
    visibility: visible;
    opacity: 1;
    transform: scale(1) rotate(180deg);
    transition-delay: .75s
}

.ps-search.active .ps-form--primary-search {
    transform: translateY(0);
    transition-delay: .35s;
    visibility: visible;
    opacity: 1
}

@media (max-width:479px) {
    .ps-search__content {
        padding: 0 1.5rem
    }
}

.ps-section--default {
    margin-bottom: 80px
}

.ps-section--default .ps-section__header {
    margin-bottom: 50px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e3e3e3
}

.ps-section--default .ps-section__header h3 {
    margin-bottom: 0;
    font-weight: 600;
    font-size: 20px
}

.ps-section--default .ps-section__links {
    display: inline-block
}

.ps-section--default .ps-section__links li {
    display: inline-block;
    vertical-align: top;
    margin-right: 30px
}

.ps-section--default .ps-section__links li a {
    color: #666
}

.ps-section--default .ps-section__links li a:hover {
    color: #fff
}

.ps-section--default .ps-section__links li:last-child {
    margin-right: 0
}

.ps-section--gray {
    padding: 70px 0;
    background-color: #f4f5f5
}

@media (max-width:767px) {
    .ps-section--gray {
        padding: 50px 0
    }
}

@media (max-width:479px) {
    .ps-section--gray {
        padding: 35px 0
    }
}

.ps-section--vendor {
    padding: 100px 0
}

.ps-section--vendor .ps-section__header {
    text-align: center;
    padding-bottom: 90px
}

.ps-section--vendor .ps-section__header p {
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: 600;
    color: #666;
    text-transform: uppercase
}

.ps-section--vendor .ps-section__header h4 {
    font-weight: 400;
    color: #000;
    font-size: 30px
}

@media (max-width:991px) {
    .ps-section--vendor {
        padding: 75px 0
    }

    .ps-section--vendor .ps-section__header {
        padding-bottom: 50px
    }

    .ps-section--vendor .ps-section__header p {
        margin-bottom: 16px
    }
}

@media (max-width:767px) {
    .ps-section--vendor {
        padding: 60px 0
    }

    .ps-section--vendor .ps-section__header h4 {
        font-size: 24px
    }
}

@media (max-width:479px) {
    .ps-section--vendor {
        padding: 50px 0
    }

    .ps-section--vendor .ps-section__header p {
        font-size: 14px;
        margin-bottom: 10px
    }

    .ps-section--vendor .ps-section__header h4 {
        font-size: 24px
    }
}

.ps-section--shopping {
    padding: 100px 0
}

.ps-section--shopping .ps-section__header {
    text-align: center;
    padding-bottom: 100px
}

.ps-section--shopping .ps-section__header h1 {
    font-size: 48px;
    font-weight: 600
}

@media (max-width:991px) {
    .ps-section--shopping {
        padding: 75px 0
    }

    .ps-section--shopping .ps-section__header h1 {
        font-size: 36px
    }
}

@media (max-width:767px) {
    .ps-section--shopping {
        padding: 60px 0
    }

    .ps-section--shopping .ps-section__header {
        padding-bottom: 40px
    }

    .ps-section--shopping .ps-section__header h1 {
        font-size: 30px
    }
}

@media (max-width:479px) {
    .ps-section--shopping {
        padding: 50px 0
    }
}

.ps-newsletter {
    padding: 65px 0;
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1
}

@media (max-width:767px) {
    .ps-newsletter {
        padding: 50px 0
    }
}

.ps-product-list .ps-section__links {
    display: inline-block
}

.ps-product-list .ps-section__links li {
    display: inline-block;
    vertical-align: top;
    margin-right: 30px
}

.ps-product-list .ps-section__links li a {
    color: #666
}

.ps-product-list .ps-section__links li a:hover {
    color: #fff
}

.ps-product-list .ps-section__links li:last-child {
    margin-right: 0
}

.ps-product-list .ps-section__header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    background-color: #f4f4f4;
    border-bottom: 1px solid #e3e3e3
}

.ps-product-list .ps-section__header h3 {
    margin-bottom: 0;
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
    line-height: 1
}

.ps-product-list .ps-section__content {
    padding-top: 55px
}

.ps-product-list--2 .ps-section__header {
    background-color: transparent;
    border-bottom: 1px solid #e1e1e1
}

.ps-product-list--2 .ps-section__header h3 {
    font-size: 24px;
    font-weight: 600
}

@media (max-width:1199px) {
    .ps-product-list .ps-section__header {
        flex-flow: row wrap
    }
}

@media (max-width:991px) {
    .ps-product-list .ps-section__header h3 {
        padding-bottom: 10px
    }
}

.ps-shopping-product {
    min-height: 80vh
}

@media (max-width:1199px) {
    .ps-shopping-product .ps-product {
        margin-bottom: 30px
    }
}

@media (max-width:767px) {
    .ps-shopping-product .row {
        margin: 0 -2px
    }

    .ps-shopping-product .row>* {
        padding: 0 2px
    }

    .ps-shopping-product .ps-product {
        margin-bottom: 4px
    }

    .ps-shopping-product .ps-product .ps-product__badge {
        top: 5px;
        right: 5px
    }
}

@media (max-width:1440px) and (min-width:1200px) {
    .ps-new-arrivals .ps-section__content .row {
        margin: 0
    }

    .ps-new-arrivals .ps-section__content .col-12 {
        padding: 0
    }
}

@media (max-width:991px) {
    .ps-new-arrivals .ps-section__content .col-12 {
        max-width: 50%;
        flex-basis: 50%
    }
}

@media (max-width:600px) {
    .ps-new-arrivals .ps-section__content .col-12 {
        max-width: 100%;
        flex-basis: 100%
    }
}

.ps-top-categories h3 {
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 1em;
    color: #000;
    font-weight: 600
}

@media (min-width:1680px) {
    .ps-top-categories .row .col-xl-2 {
        max-width: 12.5%
    }
}

.ps-deal-of-day .ps-section__header {
    margin-bottom: 65px;
    padding-bottom: 10px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc
}

.ps-deal-of-day .ps-section__header>a {
    display: inline-block;
    padding-bottom: 2px;
    color: #000;
    border-bottom: 1px solid #000;
    min-width: 60px
}

.ps-deal-of-day .ps-section__header>a:hover {
    color: #fff;
    border-color: #fff
}

.ps-shop-brand {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center
}

@media (max-width:767px) {
    .ps-shop-brand {
        flex-flow: row wrap
    }

    .ps-shop-brand>* {
        max-width: 20%;
        padding: 5px 10px
    }
}

@media (max-width:479px) {
    .ps-shop-brand>* {
        max-width: 25%
    }
}

.ps-layout--shop {
    padding-bottom: 90px;
    display: flex;
    flex-flow: row nowrap
}

@media (max-width:1199px) {
    .ps-layout--shop .ps-shopping__header {
        padding-left: 15px !important
    }

    .ps-layout--shop .row {
        margin-left: 0
    }
}

.ps-layout--shop>* {
    width: 100%
}

.ps-layout--shop .ps-layout__left {
    width: 100%;
    min-width: 310px;
    max-width: 310px;
    padding-right: 15px;
    padding-left: 30px
}

.ps-layout--shop .ps-layout__right {
    max-width: calc(100% - 320px)
}

.ps-layout--shop .ps-layout__right .owl-slider {
    max-width: 100%
}

@media (max-width:1199px) {
    .ps-layout--shop {
        flex-flow: column-reverse wrap
    }

    .ps-layout--shop .ps-layout__left {
        max-width: 100%;
        padding-right: 0;
        display: none
    }

    .ps-layout--shop .ps-layout__right {
        max-width: 100%;
        margin-bottom: 50px
    }
}

@media (max-width:767px) {
    .ps-layout--shop {
        padding-bottom: 45px
    }
}

.ps-shopping .select2 {
    display: inline-block
}

.ps-shopping .select2 .select2-selection__rendered {
    padding: 6px 20px
}

.ps-shopping .ps-shopping__view {
    display: flex;
    flex-flow: row nowrap;
    align-items: center
}

.ps-shopping .ps-shopping__view p {
    margin-bottom: 0;
    margin-right: 20px;
    color: #000
}

.ps-shopping .ps-shopping__view ul li {
    display: inline-block;
    vertical-align: top;
    margin-right: 10px
}

.ps-shopping .ps-shopping__view ul li a {
    font-size: 24px;
    color: #999
}

.ps-shopping .ps-shopping__view ul li:last-child {
    margin-right: 0
}

.ps-shopping .ps-shopping__view ul li.active a {
    color: #000
}

.ps-shopping .ps-shopping__actions {
    display: flex;
    flex-flow: row nowrap;
    align-items: center
}

.ps-shopping .ps-shopping__actions .ps-shopping__view {
    padding-left: 40px
}

.ps-shopping .ps-shopping__header {
    margin-bottom: 40px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    background-color: #f5f5f5;
    align-items: center;
    padding: 8px 15px 20px
}

.ps-shopping .ps-shopping__header p {
    margin-bottom: 0;
    display: inline-block
}

.ps-shopping .ps-shopping__header p strong {
    color: #000
}

.ps-shopping .ps-shop__filter-mb {
    font-size: 16px;
    vertical-align: top;
    display: flex;
    color: #000;
    align-items: center;
    font-weight: 500;
    text-transform: uppercase;
    border: 0;
    background: transparent
}

.ps-shopping .ps-shop__filter-mb i {
    font-weight: 700;
    font-size: 18px;
    margin-right: 10px
}

@media (min-width:1200px) {
    .ps-shopping .ps-shop__filter-mb {
        display: none
    }
}

@media (max-width:1680px) and (min-width:1440px) {
    .ps-shopping .row .col-xl-2 {
        max-width: 20%;
        flex-basis: 20%
    }
}

@media (max-width:1440px) and (min-width:1200px) {
    .ps-shopping .row .col-xl-2 {
        max-width: 25%;
        flex-basis: 25%
    }
}

@media (max-width:767px) {
    .ps-shopping .ps-shopping__header {
        flex-flow: row nowrap;
        justify-content: space-between
    }

    .ps-shopping .ps-shopping__header>* {
        flex-basis: 100%
    }

    .ps-shopping .ps-shopping__header .ps-shopping__view {
        padding-left: 10px
    }

    .ps-shopping .ps-shopping__actions {
        width: 100%;
        justify-content: flex-end
    }

    .ps-shopping .ps-shopping__actions .select2 {
        display: none
    }
}

@media (min-width:1680px) {
    .ps-customer-bought .ps-section__content .row .col-xl-3 {
        padding: 0;
        flex-basis: 14.28571%;
        max-width: 14.28571%
    }
}

.ps-client-say {
    padding: 70px 0;
    background-color: #f5f5f5
}

.ps-client-say .ps-section__header {
    margin-bottom: 30px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between
}

.ps-client-say .ps-section__header h3 {
    display: inline-block;
    margin-bottom: 0;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px
}

.ps-client-say .ps-section__nav a {
    display: inline-block;
    margin-right: 20px;
    font-size: 18px;
    color: #999
}

.ps-client-say .ps-section__nav a:last-child {
    margin-right: 0
}

.ps-client-say .ps-section__nav a:hover {
    color: #000
}

.ps-best-sale-brands {
    padding: 70px 0
}

.ps-best-sale-brands .ps-section__header h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 20px;
    line-height: 1;
    color: #000
}

.ps-best-sale-brands .ps-image-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-self: center;
    border-bottom: 1px solid rgba(0, 0, 0, .15);
    border-right: 1px solid rgba(0, 0, 0, .15)
}

.ps-best-sale-brands .ps-image-list li {
    display: flex;
    min-width: 20%;
    max-width: 20%;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, .15);
    border-right: none;
    border-bottom: none
}

@media (max-width:991px) {
    .ps-best-sale-brands .ps-image-list {
        border: 1px solid rgba(0, 0, 0, .15)
    }

    .ps-best-sale-brands .ps-image-list li {
        min-width: 25%;
        max-width: 25%;
        border: none
    }
}

@media (max-width:767px) {
    .ps-best-sale-brands .ps-image-list li {
        min-width: 33.3333%;
        max-width: 33.3333%
    }
}

@media (max-width:479px) {
    .ps-best-sale-brands .ps-image-list li {
        min-width: 50%;
        max-width: 50%;
        border: 1px solid rgba(0, 0, 0, .15)
    }
}

.ps-deal-hot {
    padding: 70px 0
}

.ps-deal-hot .widget_best-sale {
    border-bottom: 1px solid #d9d9d9
}

.ps-home-categories .ps-section__header {
    margin-bottom: 40px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e1e1e1
}

.ps-home-categories .ps-section__header h3 {
    margin-bottom: 0;
    font-size: 24px;
    font-weight: 400;
    line-height: 1em
}

.ps-search-trending {
    padding: 70px 0
}

.ps-search-trending .ps-section__header {
    margin-bottom: 20px
}

.ps-search-trending .ps-section__header h3 {
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 400
}

.ps-search-trending .ps-section__header h3 span {
    font-size: 14px;
    margin-left: 10px;
    color: #666
}

@media (max-width:479px) {
    .ps-search-trending .ps-section__header h3 {
        font-size: 18px
    }

    .ps-search-trending .ps-section__header h3 span {
        font-size: 12px
    }
}

.ps-categories-box {
    background-color: #f5f5f5;
    padding: 70px 0
}

@media (max-width:767px) {
    .ps-categories-box {
        padding: 45px 0
    }
}

@media (max-width:479px) {
    .ps-categories-box {
        padding: 35px 0
    }
}

.ps-home-blog .ps-section__header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding-bottom: 10px
}

.ps-home-blog .ps-section__header h3 {
    font-size: 24px
}

@media (max-width:767px) {
    .ps-home-blog .ps-section__header {
        flex-flow: row wrap
    }

    .ps-home-blog .ps-section__header h3 {
        display: block;
        margin-bottom: 10px
    }
}

.ps-blog {
    padding-bottom: 100px
}

.ps-blog .ps-blog__header {
    margin-bottom: 50px
}

@media (max-width:767px) {
    .ps-blog {
        padding-bottom: 50px
    }
}

.ps-blog--sidebar {
    padding-bottom: 90px;
    display: flex;
    flex-flow: row nowrap
}

.ps-blog--sidebar>* {
    width: 100%
}

.ps-blog--sidebar .ps-blog__left {
    padding-right: 70px
}

.ps-blog--sidebar .ps-blog__left .ps-pagination {
    text-align: left
}

.ps-blog--sidebar .ps-blog__right {
    max-width: 300px;
    min-width: 300px;
    padding-left: 30px
}

.ps-blog--sidebar.reverse {
    flex-flow: row-reverse nowrap
}

.ps-blog--sidebar.reverse .ps-blog__left {
    padding-left: 100px;
    padding-right: 0
}

.ps-blog--sidebar.reverse .ps-blog__right {
    padding-left: 0
}

@media (max-width:1199px) {
    .ps-blog--sidebar .ps-blog__left {
        padding-right: 0
    }

    .ps-blog--sidebar.reverse .ps-blog__left {
        padding-left: 30px;
        padding-right: 0
    }
}

@media (max-width:991px) {
    .ps-blog--sidebar {
        flex-flow: column wrap
    }

    .ps-blog--sidebar .ps-blog__left {
        margin-bottom: 50px
    }

    .ps-blog--sidebar .ps-blog__right {
        padding-left: 0
    }

    .ps-blog--sidebar.reverse {
        flex-flow: column wrap
    }

    .ps-blog--sidebar.reverse .ps-blog__left {
        padding-left: 0
    }
}

@media (max-width:767px) {
    .ps-blog--sidebar {
        padding-bottom: 45px
    }
}

@media (max-width:479px) {
    .ps-blog--sidebar {
        padding-bottom: 30px
    }
}

.ps-related-posts {
    padding-top: 60px
}

.ps-related-posts h3 {
    margin-bottom: 60px;
    text-align: center;
    font-size: 24px;
    color: #000
}

.ps-post-comments {
    max-width: 770px;
    margin: 0 auto
}

.ps-post-comments h3 {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    color: #000;
    margin-bottom: 40px;
    line-height: 1.4em
}

.ps-about-intro {
    padding: 100px 0
}

.ps-about-intro .ps-section__header {
    max-width: 820px;
    margin: 0 auto 100px
}

.ps-about-intro .ps-section__header h4 {
    margin-bottom: 80px;
    font-size: 24px;
    color: #000;
    font-weight: 600
}

.ps-about-intro .ps-section__header h3 {
    margin-bottom: 40px;
    font-weight: 400;
    line-height: 1.3em;
    color: #000;
    font-size: 36px
}

.ps-about-intro .ps-section__header p {
    font-size: 18px;
    line-height: 1.6em
}

.ps-about-intro .ps-section__content {
    border-top: 1px solid #e1e1e1;
    padding-top: 90px
}

@media (max-width:1199px) {
    .ps-about-intro {
        padding: 80px 0
    }
}

@media (max-width:991px) {
    .ps-about-intro {
        padding: 70px 0
    }
}

@media (max-width:767px) {
    .ps-about-intro {
        padding: 50px 0
    }

    .ps-about-intro .ps-section__header h4 {
        margin-bottom: 50px
    }

    .ps-about-intro .ps-section__header h3 {
        font-size: 24px
    }

    .ps-about-intro .ps-section__header p {
        font-size: 14px
    }
}

.ps-our-team {
    padding: 120px 0
}

.ps-our-team .ps-section__header {
    padding-left: 180px;
    padding-bottom: 90px
}

.ps-our-team .ps-section__header h3 {
    margin-bottom: 0;
    font-size: 36px;
    font-weight: 400;
    color: #000
}

.ps-our-team .ps-section__content {
    display: flex;
    flex-flow: row wrap;
    margin: 0 -15px
}

.ps-our-team .ps-section__content figure {
    margin-bottom: 30px;
    width: 100%;
    max-width: 25%;
    padding: 0 15px
}

@media (max-width:1199px) {
    .ps-our-team .ps-section__header {
        padding-left: 0;
        padding-bottom: 50px
    }
}

@media (max-width:991px) {
    .ps-our-team {
        padding: 90px 0
    }

    .ps-our-team .ps-section__header {
        padding-bottom: 40px
    }

    .ps-our-team .ps-section__header h3 {
        font-size: 28px
    }

    .ps-our-team .ps-section__content figure {
        max-width: 33.3333%
    }
}

@media (max-width:767px) {
    .ps-our-team {
        padding: 60px 0
    }

    .ps-our-team .ps-section__header {
        padding-bottom: 30px
    }

    .ps-our-team .ps-section__header h3 {
        font-size: 24px
    }

    .ps-our-team .ps-section__content figure {
        max-width: 50%
    }
}

.ps-about-milestone {
    padding: 120px 0
}

.ps-about-awards {
    padding: 120px 0;
    background-color: #f5f5f5
}

.ps-about-awards .ps-section__header {
    max-width: 820px;
    margin: 0 auto 100px
}

.ps-about-awards .ps-section__header h4 {
    margin-bottom: 65px;
    font-size: 36px;
    color: #000;
    font-weight: 400
}

.ps-about-awards .ps-section__header p {
    font-size: 18px;
    line-height: 1.6em
}

.ps-about-awards .ps-section__content .owl-slider a {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center
}

@media (max-width:1199px) {
    .ps-about-awards {
        padding: 100px 0
    }
}

@media (max-width:991px) {
    .ps-about-awards {
        padding: 80px 0
    }
}

@media (max-width:767px) {
    .ps-about-awards {
        padding: 70px 0
    }

    .ps-about-awards .ps-section__header h4 {
        margin-bottom: 50px;
        font-size: 24px
    }

    .ps-about-awards .ps-section__header p {
        font-size: 14px
    }
}

@media (max-width:479px) {
    .ps-about-awards {
        padding: 50px 0
    }
}

.ps-contact-info {
    padding: 90px 0
}

.ps-contact-info h3 {
    margin-bottom: 60px;
    text-align: center;
    font-size: 36px;
    font-weight: 600
}

@media (max-width:991px) {
    .ps-contact-info {
        padding: 60px 0
    }

    .ps-contact-info h3 {
        font-size: 24px
    }
}

@media (max-width:479px) {
    .ps-contact-info {
        padding: 45px 0
    }

    .ps-contact-info h3 {
        font-size: 20px
    }
}

.ps-contact-form {
    padding: 100px 0;
    background-color: #f6f6f6
}

.ps-contact-form h3 {
    margin-bottom: 90px;
    text-align: center;
    font-size: 36px;
    font-weight: 600;
    color: #000;
    line-height: 1em
}

@media (max-width:991px) {
    .ps-contact-form h3 {
        font-size: 24px
    }
}

@media (max-width:479px) {
    .ps-contact-form h3 {
        font-size: 20px
    }
}

.ps-faqs {
    padding: 90px 0
}

.ps-faqs .ps-section__header {
    padding-bottom: 100px
}

.ps-faqs .ps-section__header h1 {
    text-align: center;
    font-size: 36px;
    font-weight: 600
}

@media (max-width:767px) {
    .ps-faqs .ps-section__header {
        padding-bottom: 50px
    }

    .ps-faqs .ps-section__header h1 {
        font-size: 24px
    }
}

.ps-call-to-action {
    background-color: #f1f1f1;
    padding: 130px 0;
    text-align: center
}

.ps-call-to-action h3 {
    font-size: 36px;
    color: #000;
    font-weight: 600
}

.ps-call-to-action h3 a {
    color: #fff;
    font-weight: inherit
}

.ps-call-to-action h3 a:hover {
    color: #000
}

@media (max-width:991px) {
    .ps-call-to-action {
        padding: 100px 0
    }
}

@media (max-width:767px) {
    .ps-call-to-action {
        padding: 80px 0
    }
}

@media (max-width:479px) {
    .ps-call-to-action {
        padding: 65px 0
    }
}

.ps-vendor-banner {
    position: relative;
    text-align: center;
    z-index: 10;
    padding: 160px 0
}

.ps-vendor-banner:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    z-index: -1;
    background-color: rgba(0, 0, 0, .25)
}

.ps-vendor-banner h2 {
    color: #fff;
    font-size: 48px;
    margin: 0 auto 30px;
    max-width: 960px;
    font-weight: 600
}

.ps-vendor-banner .ps-btn {
    padding: 20px 40px;
    font-size: 24px;
    border-radius: 0
}

@media (max-width:1199px) {
    .ps-vendor-banner {
        padding: 120px 0
    }

    .ps-vendor-banner h2 {
        font-size: 36px
    }
}

@media (max-width:991px) {
    .ps-vendor-banner {
        padding: 100px 0
    }

    .ps-vendor-banner h2 {
        font-size: 28px
    }

    .ps-vendor-banner .ps-btn {
        font-size: 20px;
        padding: 15px 30px
    }
}

@media (max-width:767px) {
    .ps-vendor-banner {
        padding: 80px 0
    }

    .ps-vendor-banner .ps-btn {
        font-size: 16px
    }
}

@media (max-width:479px) {
    .ps-vendor-banner {
        padding: 60px 0
    }

    .ps-vendor-banner h2 {
        font-size: 24px
    }
}

@media (max-width:991px) {
    .ps-vendor-about .ps-block--icon-box-2 {
        max-width: 450px;
        margin: 0 auto 40px
    }

    .ps-vendor-about .ps-section__header h4 br {
        display: none
    }
}

.ps-vendor-milestone {
    background-color: #f6f6f6
}

.ps-vendor-best-fees .ps-section__numbers {
    display: flex;
    justify-content: center;
    margin-bottom: 60px
}

.ps-vendor-best-fees .ps-section__numbers figure {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    width: 170px;
    height: 170px;
    border: 2px solid #fff;
    margin: 0 40px;
    border-radius: 50%
}

.ps-vendor-best-fees .ps-section__numbers figure h3 {
    display: block;
    margin-bottom: 0;
    width: 100%;
    font-size: 60px;
    font-weight: 400;
    line-height: 1em;
    color: #000
}

.ps-vendor-best-fees .ps-section__numbers figure span {
    font-size: 16px
}

.ps-vendor-best-fees .ps-section__desc {
    max-width: 550px;
    margin: 0 auto 30px
}

.ps-vendor-best-fees .ps-section__desc>figure figcaption {
    text-align: center;
    font-weight: 600;
    color: #000;
    margin-bottom: 40px;
    font-size: 16px
}

.ps-vendor-best-fees .ps-section__desc ul li {
    text-align: left;
    color: #666;
    font-size: 16px;
    margin-bottom: 16px;
    line-height: 1.6em
}

.ps-vendor-best-fees .ps-section__highlight {
    margin-bottom: 40px;
    padding: 30px 20px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    background-color: #f6f6f6
}

.ps-vendor-best-fees .ps-section__highlight figure {
    text-align: justify;
    padding-left: 60px;
    padding-right: 60px
}

.ps-vendor-best-fees .ps-section__highlight figure p {
    font-weight: 500;
    color: #000;
    font-size: 16px
}

.ps-vendor-best-fees .ps-section__content {
    max-width: 730px;
    margin: 0 auto;
    text-align: center
}

.ps-vendor-best-fees .ps-section__content>h5 {
    margin-bottom: 50px;
    font-size: 18px;
    font-weight: 400;
    color: #666;
    line-height: 1.4em
}

@media (max-width:767px) {
    .ps-vendor-best-fees .ps-section__content>h5 {
        font-size: 16px
    }

    .ps-vendor-best-fees .ps-section__desc ul li {
        font-size: 14px
    }

    .ps-vendor-best-fees .ps-section__highlight {
        padding: 30px 10px
    }

    .ps-vendor-best-fees .ps-section__highlight figure {
        text-align: left;
        padding: 0 20px
    }

    .ps-vendor-best-fees .ps-section__highlight figure p {
        font-size: 14px
    }
}

@media (max-width:479px) {
    .ps-vendor-best-fees .ps-section__numbers figure {
        width: 100px;
        height: 100px;
        margin: 0 10px
    }

    .ps-vendor-best-fees .ps-section__numbers figure h3 {
        font-size: 30px
    }

    .ps-vendor-best-fees .ps-section__highlight {
        flex-direction: column;
        text-align: left;
        align-items: flex-start
    }

    .ps-vendor-best-fees .ps-section__highlight img {
        margin-bottom: 30px;
        max-height: 100px
    }
}

.ps-vendor-testimonials {
    background-color: #f6f6f6
}

.ps-vendor-faqs figure {
    margin-bottom: 50px
}

.ps-vendor-faqs figure figcaption {
    font-size: 18px;
    color: #000;
    font-weight: 600;
    margin-bottom: 20px;
    line-height: 1.4em
}

.ps-vendor-faqs figure p {
    font-size: 16px
}

.ps-vendor-faqs .ps-section__footer {
    padding-top: 100px;
    text-align: center;
    border-top: 1px solid #e1e1e1
}

.ps-vendor-faqs .ps-section__footer p {
    margin-bottom: 40px;
    font-size: 30px;
    font-weight: 400;
    color: #000
}

.ps-vendor-faqs .ps-section__footer .ps-btn {
    padding: 20px 40px;
    font-size: 24px
}

@media (max-width:991px) {
    .ps-vendor-faqs .ps-section__footer {
        padding-top: 60px
    }

    .ps-vendor-faqs .ps-section__footer p {
        font-size: 20px
    }

    .ps-vendor-faqs .ps-section__footer .ps-btn {
        font-size: 16px;
        padding: 15px 30px
    }
}

@media (max-width:479px) {
    .ps-vendor-faqs .ps-section__footer {
        padding-top: 50px
    }

    .ps-vendor-faqs .ps-section__footer p {
        font-size: 18px
    }
}

.ps-my-account {
    min-height: 100vh;
    background-color: #f1f1f1
}

.ps-order-tracking {
    padding: 100px 0
}

.ps-order-tracking .ps-section__header {
    text-align: center;
    padding-bottom: 80px
}

.ps-order-tracking .ps-section__header h3 {
    margin-bottom: 40px;
    font-size: 48px;
    font-weight: 600;
    line-height: 1em
}

.ps-order-tracking .ps-section__header p {
    max-width: 960px;
    margin: 0 auto;
    font-size: 16px
}

@media (max-width:991px) {
    .ps-order-tracking {
        padding: 75px 0
    }

    .ps-order-tracking .ps-section__header {
        padding-bottom: 60px
    }

    .ps-order-tracking .ps-section__header h3 {
        margin-bottom: 20px;
        font-size: 36px
    }

    .ps-order-tracking .ps-section__header p {
        font-size: 14px
    }
}

@media (max-width:767px) {
    .ps-order-tracking {
        padding: 60px 0
    }
}

@media (max-width:479px) {
    .ps-order-tracking {
        padding: 50px 0
    }

    .ps-order-tracking .ps-section__header {
        padding-bottom: 40px
    }
}

.ps-shopping-cart .ps-section__cart-actions {
    padding-top: 30px;
    padding-bottom: 90px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between
}

.ps-shopping-cart .ps-section__cart-actions .ps-btn i {
    margin-right: 6px;
    vertical-align: middle
}

.ps-shopping-cart .ps-section__cart-actions .ps-btn--outline {
    border-color: #000;
    color: #000;
    padding: 12px 20px;
    vertical-align: middle
}

.ps-shopping-cart .ps-section__cart-actions .ps-btn--outline i {
    margin-right: 6px;
    vertical-align: middle
}

.ps-shopping-cart .ps-section__cart-actions .ps-btn--outline:hover {
    background-color: #fff;
    border-color: #fff
}

.ps-shopping-cart .ps-section__footer figure figcaption {
    position: relative;
    display: block;
    font-size: 20px;
    color: #000;
    margin-bottom: 35px
}

.ps-shopping-cart .ps-section__footer figure figcaption:after {
    content: "";
    font-family: Linearicons;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0
}

.ps-shopping-cart .ps-section__footer figure .form-control {
    border-color: #ccc
}

.ps-shopping-cart .ps-section__footer .ps-btn--outline {
    border-color: #ccc;
    color: #000;
    border-radius: 0
}

.ps-shopping-cart .ps-section__footer .ps-btn--outline:hover {
    background-color: #fff;
    border-color: #fff;
    color: #fff
}

.ps-shopping-cart .ps-section__footer .select2 {
    min-width: 100%
}

.ps-shopping-cart .ps-section__footer .select2 .select2-selection--single .select2-selection__rendered {
    padding: 15px 20px;
    border: #ccc
}

@media (max-width:479px) {
    .ps-shopping-cart .ps-section__cart-actions {
        flex-flow: row wrap
    }

    .ps-shopping-cart .ps-section__cart-actions .ps-btn {
        width: 100%;
        margin-bottom: 10px;
        text-align: center
    }
}

.ps-vendor-store {
    padding: 40px 0
}

.ps-vendor-store .ps-section__container {
    display: flex;
    flex-flow: row nowrap
}

.ps-vendor-store .ps-section__container>* {
    width: 100%
}

.ps-vendor-store .ps-section__container .ps-section__left {
    max-width: 25%
}

.ps-vendor-store .ps-section__container .ps-section__right {
    max-width: 75%;
    padding-left: 30px
}

.ps-vendor-store .ps-block--vendor-filter {
    margin-bottom: 45px
}

@media (max-width:1199px) {
    .ps-vendor-store .ps-section__container {
        flex-flow: column wrap
    }

    .ps-vendor-store .ps-section__container .ps-section__left {
        max-width: 450px;
        margin-bottom: 30px
    }

    .ps-vendor-store .ps-section__container .ps-section__right {
        max-width: 100%;
        padding-left: 0
    }
}

.ps-vendor-best-seller .ps-section__header {
    margin-bottom: 30px;
    padding-bottom: 16px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    border-bottom: 1px solid #e1e1e1
}

.ps-vendor-best-seller .ps-section__header h3 {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 500;
    font-size: 20px
}

.ps-vendor-dashboard .ps-section__header {
    padding: 100px 0;
    text-align: center
}

.ps-vendor-dashboard .ps-section__header h3 {
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 30px
}

.ps-vendor-dashboard .ps-section__header p {
    color: #666;
    font-size: 16px;
    max-width: 860px;
    margin: 0 auto 30px
}

.ps-vendor-dashboard .ps-section__links {
    background-color: #f5f5f5;
    text-align: center;
    padding: 20px 0;
    margin-bottom: 45px
}

.ps-vendor-dashboard .ps-section__links li {
    display: inline-block;
    margin-right: 30px
}

.ps-vendor-dashboard .ps-section__links li a {
    font-size: 18px;
    font-weight: 600;
    color: #666;
    line-height: 20px
}

.ps-vendor-dashboard .ps-section__links li a:hover {
    color: #000
}

.ps-vendor-dashboard .ps-section__links li:last-child {
    margin-right: 0
}

.ps-vendor-dashboard .ps-section__links li.active a {
    color: #000
}

@media (max-width:767px) {
    .ps-vendor-dashboard .ps-section__header {
        padding: 60px 0
    }

    .ps-vendor-dashboard .ps-section__header h3 {
        font-size: 36px
    }

    .ps-vendor-dashboard .ps-section__header p {
        font-size: 14px
    }

    .ps-vendor-dashboard .ps-section__links li {
        margin-bottom: 4px
    }

    .ps-vendor-dashboard .ps-section__links li a {
        font-size: 16px
    }
}

@media (max-width:479px) {
    .ps-vendor-dashboard .ps-section__header {
        padding: 50px 0
    }

    .ps-vendor-dashboard .ps-section__header h3 {
        margin-bottom: 20px;
        font-size: 28px
    }
}

.ps-media-masonry {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    grid-auto-rows: 100%
}

.ps-media-masonry figure {
    width: 100%
}

.ps-my-account-2 {
    padding: 60px 0
}

.ps-my-account-2 .ps-section__desc {
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 50px;
    padding-bottom: 30px
}

.ps-my-account-2 .ps-section__desc figcaption {
    font-size: 24px;
    font-weight: 600;
    color: #000;
    margin-bottom: 20px
}

.ps-my-account-2 .ps-section__desc p {
    margin-bottom: 35px
}

.ps-my-account-2 .ps-section__desc .ps-list li {
    margin-bottom: 20px;
    display: flex;
    align-items: center
}

.ps-my-account-2 .ps-section__desc .ps-list li span {
    font-size: 18px
}

.ps-my-account-2 .ps-section__desc .ps-list li i {
    margin-right: 20px;
    font-size: 36px;
    color: #fff
}

.ps-my-account-2 .ps-section__coupon {
    border: 1px dashed #b6b6b6;
    background-color: #f6f6f6;
    padding: 30px;
    display: flex;
    align-items: center
}

.ps-my-account-2 .ps-section__coupon span {
    font-size: 72px;
    color: #690;
    margin: 0 30px 0 0
}

.ps-my-account-2 .ps-section__coupon h5 {
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 600
}

.ps-my-account-2 .ps-form--account {
    padding-top: 0;
    margin-bottom: 30px;
    border: 1px solid #e8e8e8
}

.ps-my-account-2 .ps-form--account .ps-tab-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e8e8e8
}

.ps-my-account-2 .ps-form--account .ps-tab-list li {
    width: 100%;
    max-width: 50%;
    margin-right: 0;
    padding: 20px 15px
}

.ps-my-account-2 .ps-form--account .ps-tab-list li a {
    font-size: 24px;
    line-height: 1em
}

.ps-my-account-2 .ps-form--account .ps-tab-list li.active {
    border-bottom: 2px solid #fff
}

.ps-my-account-2 .ps-form--account .ps-tab-list li.active a {
    color: #fff
}

.ps-my-account-2 #register p {
    margin-bottom: 50px
}

.ps-my-account-2 #register p a {
    color: #06c
}

.ps-my-account-2 #register .ps-radio {
    margin-bottom: 10px
}

.ps-my-account-2 #register .ps-radio label:before {
    width: 18px;
    height: 18px
}

.ps-my-account-2 #register .ps-radio input[type=radio]:checked~label:before {
    background-color: transparent;
    border-color: #000
}

.ps-my-account-2 #register .ps-radio input[type=radio]:checked~label:after {
    top: 4px;
    left: 4px;
    transform: scale(1);
    opacity: 1;
    background-color: #000
}

@media (min-width:1200px) {
    .ps-my-account-2 {
        padding-top: 100px;
        padding-bottom: 90px
    }

    .ps-my-account-2 .ps-section__left {
        width: 100%;
        max-width: 430px
    }

    .ps-my-account-2 .ps-section__right {
        padding-left: 130px
    }

    .ps-my-account-2 .ps-section__wrapper {
        display: flex;
        align-items: center
    }
}

.ps-store-list {
    padding-top: 60px
}

.ps-store-list .ps-block--store-2,
.ps-store-list .ps-block--store-banner {
    margin-bottom: 30px
}

.ps-store-list>.container>.ps-section__header {
    text-align: center;
    padding-bottom: 60px
}

.ps-store-list>.container>.ps-section__header h3 {
    font-size: 36px;
    font-weight: 600
}

.ps-store-list .ps-section__search .form-group {
    position: relative
}

.ps-store-list .ps-section__search .form-group button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    background-color: transparent;
    border: none
}

.ps-store-list .ps-section__search .form-control {
    text-indent: 20px;
    height: 40px
}

.ps-store-list .ps-section__wrapper {
    display: flex;
    flex-flow: column-reverse wrap;
    padding-bottom: 60px
}

.ps-store-list .ps-section__wrapper>* {
    flex-basis: 100%
}

.ps-store-list .ps-section__left {
    padding: 25px 20px;
    background-color: #efefef
}

.ps-store-list .ps-section__right {
    margin-bottom: 50px
}

.ps-store-list .ps-store-link {
    margin-bottom: 50px;
    padding: 14px 15px;
    background-color: #f5f5f5
}

.ps-store-list .ps-store-link ul li {
    display: inline-block;
    margin-bottom: 0;
    margin-right: 20px
}

.ps-store-list .ps-store-link ul li a {
    font-weight: 600;
    font-size: 16px;
    color: #999
}

.ps-store-list .ps-store-link ul li.active a {
    color: #000
}

@media (max-width:560px) {
    .ps-store-list .ps-store-link ul {
        display: flex;
        flex-flow: row wrap
    }

    .ps-store-list .ps-store-link ul li {
        margin-right: 0;
        flex-basis: 50%;
        margin-bottom: 10px
    }
}

@media (min-width:1200px) {
    .ps-store-list>.container>.ps-section__header {
        padding: 30px 0 115px
    }

    .ps-store-list>.container>.ps-section__header h3 {
        font-size: 48px
    }

    .ps-store-list .ps-section__left {
        max-width: 300px
    }

    .ps-store-list .ps-section__right {
        margin-bottom: 0;
        padding-left: 40px
    }

    .ps-store-list .ps-section__wrapper {
        flex-flow: row nowrap;
        padding-bottom: 90px
    }
}

.ps-store-box .ps-section__header {
    display: flex;
    flex-flow: column wrap;
    padding-bottom: 32px
}

@media (min-width:768px) {
    .ps-store-box .ps-section__header {
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center
    }

    .ps-store-box .ps-section__header p {
        margin-bottom: 0
    }
}

.ps-section--account {
    padding: 60px 0
}

.ps-section--account .ps-section__header {
    padding-bottom: 30px
}

.ps-section--account .ps-section__header h3 {
    font-weight: 600
}

.ps-section--account-setting .ps-table {
    border: 1px solid #eaeaea
}

.ps-section--account-setting .ps-table thead tr th {
    text-transform: none;
    font-weight: 500;
    font-size: 16px;
    border: 1px solid #eaeaea;
    border-bottom: none;
    padding: 10px 15px
}

.ps-section--account-setting .ps-table tr td {
    padding: 10px 15px
}

.ps-shop-by-brand {
    padding: 50px 0
}

.ps-shop-by-brand .ps-section__header {
    text-align: center;
    padding-bottom: 50px
}

.ps-shop-by-brand .ps-section__header h3 {
    font-weight: 600;
    font-size: 30px;
    text-transform: uppercase
}

.ps-shop-by-brand .ps-section__links {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 50px
}

.ps-shop-by-brand .ps-section__links a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    margin-bottom: 10px;
    background-color: #ebebeb;
    width: 50px;
    height: 50px;
    font-weight: 600;
    text-transform: uppercase
}

.ps-shop-by-brand .ps-section__links a.active,
.ps-shop-by-brand .ps-section__links a:hover {
    background-color: #fff;
    color: #fff
}

.ps-shop-by-brand .ps-section__items {
    display: flex;
    flex-flow: row wrap
}

.ps-shop-by-brand .ps-section__items>* {
    flex-basis: 100%;
    max-width: 50%
}

.ps-shop-by-brand .ps-section__items a {
    display: inline-block;
    margin-bottom: 10px
}

.ps-shop-by-brand .ps-section__content figure {
    margin-bottom: 50px
}

.ps-shop-by-brand .ps-section__content figure figcaption {
    display: block;
    padding-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    border-bottom: 1px solid #eaeaea
}

@media screen and (min-width:992px) {
    .ps-shop-by-brand .ps-section__items>* {
        max-width: 33.3333%
    }
}

@media screen and (min-width:1200px) {
    .ps-shop-by-brand {
        padding: 100px 0
    }

    .ps-shop-by-brand .ps-section__items>* {
        max-width: 33.3333%
    }
}

#homepage-1 .ps-home-banner {
    position: relative;
    padding-top: 30px;
    margin-bottom: 30px
}

#homepage-1 .ps-home-banner svg.slider_arrow {
    width: 18px !important
}

#homepage-1 .ps-home-banner .slider-description {
    position: absolute;
    padding: 45px 30px !important;
    top: 50% !important;
    transform: translateY(-50%);
    border-radius: 13px !important;
    left: 5% !important;
    width: 40% !important;
    background-color: #fff !important;
    color: #000 !important;
    text-align: left
}

#homepage-1 .ps-home-banner .slider-description h4 {
    color: #657786 !important;
    font-size: 30px
}

#homepage-1 .ps-home-banner .slider-description p {
    color: #aab8c2 !important
}

#homepage-1 .ps-home-banner .slider-description .slider-link {
    position: absolute;
    bottom: -21px;
    color: #fff;
    background: #f05e27;
    padding: 10px;
    width: 30%;
    border-radius: 5px;
    font-size: 15px
}

#homepage-1 .ps-home-banner .slider-description .slider-link:hover {
    background-color: #af2d2d
}

@media (max-width:991px) {
    #homepage-1 .ps-home-banner .slider-description {
        width: 60% !important
    }

    #homepage-1 .ps-home-banner .slider-description .slider-link {
        width: 40%
    }
}

@media (max-width:650px) {
    #homepage-1 .ps-home-banner .slider-description {
        width: 60% !important
    }

    #homepage-1 .ps-home-banner .slider-description h4 {
        font-size: 23px
    }

    #homepage-1 .ps-home-banner .slider-description p {
        font-size: 11px
    }

    #homepage-1 .ps-home-banner .slider-description .slider-link {
        width: 40%;
        font-size: 12px
    }
}

@media (max-width:530px) {
    #homepage-1 .ps-home-banner .slider-description {
        width: 80% !important;
        padding: 20px !important;
        left: 0
    }

    #homepage-1 .ps-home-banner .slider-description h4 {
        font-size: 15px
    }

    #homepage-1 .ps-home-banner .slider-description p {
        font-size: 7px
    }

    #homepage-1 .ps-home-banner .slider-description .slider-link {
        width: 40%;
        font-size: 8px
    }
}

#homepage-1 .ps-home-banner .owl-slider {
    border-radius: 10px;
    max-width: 100%;
    height: 100%
}

#homepage-1 .ps-home-banner .owl-slider .owl-stage-outer,
#homepage-1 .ps-home-banner .owl-slider .owl-stage-outer .owl-stage,
#homepage-1 .ps-home-banner .owl-slider .owl-stage-outer .owl-stage .owl-item,
#homepage-1 .ps-home-banner .owl-slider .ps-banner {
    height: 100%
}

#homepage-1 .ps-home-banner .owl-slider .owl-nav {
    bottom: 35px;
    top: auto;
    z-index: 9 !important;
    justify-content: flex-end
}

#homepage-1 .ps-home-banner .owl-slider .owl-nav button {
    background: #fff;
    border-radius: 5px;
    margin-right: 15px
}

#homepage-1 .ps-home-banner .owl-slider .owl-dots {
    display: block;
    visibility: visible;
    opacity: 1
}

#homepage-1 .ps-home-banner .ps-container {
    display: flex;
    flex-flow: row nowrap
}

@media (max-width:575px) {
    #homepage-1 .ps-home-banner .ps-container {
        /* padding: 10px 5px */
    }
}

#homepage-1 .ps-home-banner .ps-container>* {
    width: 100%
}

#homepage-1 .ps-home-banner .ps-container .make-image-space-evenly {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly
}

@media (max-width:1199px) {
    #homepage-1 .ps-home-banner .ps-container .make-image-space-evenly {
        margin-left: 0 !important;
        margin-right: 0 !important
    }
}

#homepage-1 .ps-home-banner .ps-container .ps-section__right {
    display: flex;
    flex-direction: column;
    justify-content: space-between
}

#homepage-1 .ps-home-banner .ps-container .ps-section__right .ps-collection {
    display: block;
    margin-bottom: 0
}

@media (max-width:575px) {
    #homepage-1 .ps-home-banner .ps-container .ps-section__right .ps-collection {
        padding-right: 0 !important
    }
}

@media (max-width:1199px) {
    #homepage-1 .ps-home-banner .ps-container .ps-section__right .ps-collection:first-of-type {
        padding-left: 0 !important
    }

    #homepage-1 .ps-home-banner .ps-container .ps-section__right .ps-collection:last-of-type {
        padding-right: 0 !important
    }
}

#homepage-1 .ps-home-banner .ps-container .ps-section__right .ps-collection:last-child {
    margin-bottom: 0
}

@media (max-width:1199px) {
    #homepage-1 .ps-home-banner .ps-container {
        display: block
    }

    #homepage-1 .ps-home-banner .ps-container .ps-section__left {
        max-width: 100%;
        margin-bottom: 30px
    }

    #homepage-1 .ps-home-banner .ps-container .ps-section__right {
        display: flex;
        flex-flow: row nowrap;
        margin: 0 -15px;
        max-width: 100%
    }

    #homepage-1 .ps-home-banner .ps-container .ps-section__right .ps-collection {
        width: 100%;
        max-width: 50%;
        padding: 0 15px
    }

    #homepage-1 .ps-home-banner .ps-container .ps-section__right .ps-collection img {
        width: 100%
    }
}

#homepage-1 .ps-site-features {
    padding-bottom: 90px
}

#homepage-1 .ps-deal-of-day {
    padding-bottom: 80px
}

#homepage-1 .ps-deal-of-day .ps-product .ps-product__price {
    color: #690;
    font-size: 18px;
    font-weight: 600
}

#homepage-1 .ps-deal-of-day .ps-product .ps-product__price del {
    margin-left: 10px;
    font-size: 14px
}

#homepage-1 .ps-deal-of-day .ps-product .ps-product__price small {
    margin-left: 10px;
    color: red
}

#homepage-1 .ps-top-categories {
    padding: 80px 0 50px
}

#homepage-1 .ps-top-categories h3 {
    text-transform: capitalize
}

@media (min-width:1440px) {
    #homepage-1 .ps-top-categories .row .col-xl-2 {
        max-width: 12.5%
    }
}

@media (max-width:1199px) {
    #homepage-1 .ps-top-categories {
        padding: 60px 0
    }
}

@media (max-width:991px) {
    #homepage-1 .ps-top-categories {
        padding: 50px 0
    }
}

@media (max-width:767px) {
    #homepage-1 .ps-top-categories {
        padding: 40px 0
    }
}

@media (max-width:479px) {
    #homepage-1 .ps-top-categories {
        padding: 35px 0
    }
}

#homepage-1 .ps-product-list {
    padding-bottom: 80px
}

@media (max-width:991px) {
    #homepage-1 .ps-product-list {
        padding-bottom: 50px
    }
}

@media (max-width:767px) {
    #homepage-1 .ps-product-list {
        padding-bottom: 40px
    }
}

@media (max-width:479px) {
    #homepage-1 .ps-product-list {
        padding-bottom: 0
    }
}

#homepage-1 .ps-download-app {
    margin-top: 80px;
    margin-bottom: 100px
}

@media (max-width:767px) {
    #homepage-1 .ps-download-app {
        margin-bottom: 50px
    }
}

#shop-carousel .ps-carouse--nav-inside {
    margin-bottom: 60px
}

@media (max-width:767px) {
    #shop-carousel .ps-carouse--nav-inside {
        margin-bottom: 40px
    }
}

#shop-carousel .ps-block--container-hightlight {
    margin-bottom: 60px
}

#shop-carousel .ps-product-list {
    margin-bottom: 90px
}

#shop-carousel .ps-product-list .ps-section__header {
    display: block;
    text-align: center
}

@media (max-width:767px) {
    #shop-carousel .ps-product-list {
        margin-bottom: 50px
    }
}

#shop-categories {
    background-color: #f5f5f5;
    padding-bottom: 90px
}

#shop-categories .ps-catalog-top {
    padding: 70px 0
}

#shop-categories .ps-product-list {
    margin-bottom: 20px;
    padding: 20px 20px 50px;
    background-color: #fff
}

#shop-categories .ps-product-list .ps-section__header h3 {
    font-weight: 400
}

#shop-categories .ps-more-categories .ps-section__content {
    display: flex;
    flex-flow: row wrap
}

#shop-categories .ps-more-categories .ps-section__content .ps-block--category-vertical {
    margin-bottom: 30px;
    max-width: 20%;
    padding: 30px 10px
}

@media (max-width:1199px) {
    #shop-categories .ps-more-categories .ps-section__content .ps-block--category-vertical {
        max-width: 25%
    }
}

@media (max-width:991px) {
    #shop-categories .ps-more-categories .ps-section__content .ps-block--category-vertical {
        max-width: 33.33333%
    }
}

@media (max-width:767px) {
    #shop-categories .ps-more-categories .ps-section__content .ps-block--category-vertical {
        max-width: 50%
    }
}

@media (max-width:479px) {
    #shop-categories .ps-more-categories .ps-section__content .ps-block--category-vertical {
        max-width: 100%
    }
}

#shop-sidebar .ps-page__header {
    margin-bottom: 50px
}

#shop-sidebar .ps-page__header h1 {
    margin-bottom: 20px;
    font-weight: 700;
    color: #000;
    font-size: 24px
}

#shop-sidebar .ps-layout--shop {
    padding-top: 30px
}

#contact-us .ps-breadcrumb {
    margin-bottom: 0
}

#contact-map {
    height: 100vh
}

#shop-carousel .ps-carousel--nav-inside {
    padding: 30px 0 50px
}

#shop-carousel .ps-carousel--nav-inside .owl-item img {
    width: 100%
}

@media (max-width:767px) {
    #shop-carousel .ps-carousel--nav-inside {
        padding: 30px 0
    }
}

#homepage-medicine .ps-footer--medicine .widget_contact-us .widget_content h3 {
    color: #28afb1
}

#homepage-medicine .ps-footer--medicine .ps-form--newletter button {
    background-color: #28afb1;
    color: #fff
}

#homepage-medicine .ps-footer--medicine .ps-form--newletter button:hover {
    background-color: #239a9c;
    color: #fff
}

.ps-page--404 {
    position: relative;
    min-height: 100vh;
    background-color: #efeef0;
    text-align: center
}

.ps-page--404 .container {
    min-height: 100vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: center
}

.ps-page--404 img {
    margin-bottom: 100px
}

.ps-page--404 h3 {
    margin-bottom: 20px;
    font-size: 36px;
    color: #000;
    font-weight: 600
}

.ps-page--404 p {
    margin-bottom: 20px;
    font-size: 18px
}

.ps-page--404 p a {
    color: #fff
}

.ps-page--404 .ps-form--widget-search {
    max-width: 370px;
    margin: 0 auto
}

.ps-page--404 .ps-form--widget-search input {
    height: 50px;
    border-color: #fff
}

@media (max-width:767px) {
    .ps-page--404 h3 {
        font-size: 24px
    }

    .ps-page--404 p {
        font-size: 14px
    }
}

.ps-page--comming-soon {
    text-align: center;
    padding-bottom: 50px
}

.ps-page--comming-soon .ps-countdown li {
    display: inline-block;
    margin-right: 20px
}

.ps-page--comming-soon .ps-countdown li span {
    margin-bottom: 0;
    font-weight: 400;
    font-size: 48px;
    color: #000;
    line-height: 1em
}

.ps-page--comming-soon .ps-countdown li p {
    margin-bottom: 0
}

.ps-page--comming-soon .ps-countdown li:last-child {
    margin-right: 0
}

.ps-page--comming-soon .ps-page__header {
    padding: 50px 0
}

.ps-page--comming-soon .ps-page__header .ps-logo {
    display: inline-block;
    margin-bottom: 50px
}

.ps-page--comming-soon .ps-page__header h1 {
    margin-bottom: 20px;
    font-size: 36px;
    font-weight: 600
}

.ps-page--comming-soon figure figcaption {
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: 600
}

.ps-page--comming-soon figure .ps-countdown {
    margin-bottom: 80px
}

.ps-page--comming-soon .ps-list--social li {
    margin-right: 30px
}

.ps-page--comming-soon .ps-list--social li a {
    color: #ccc
}

.ps-page--comming-soon .ps-list--social li a:hover {
    color: #fff
}

.ps-page--shop .ps-shop-banner {
    padding: 30px 0 45px
}

.ps-page--shop .ps-shop-brand {
    margin-bottom: 45px
}

.ps-page--shop .ps-shop-categories {
    margin-bottom: 30px
}

.ps-page--shop .ps-carousel--nav-inside .owl-item img {
    width: 100%
}

@media (max-width:1199px) {
    .ps-page--shop .ps-product:not(.ps-product--wide) {
        border-color: #dfdfdf
    }

    .ps-page--shop .ps-product:not(.ps-product--wide) .ps-product__content:not(.hover) {
        position: relative;
        display: block;
        left: 0;
        padding: 0 10px 20px;
        border-bottom: 1px solid #dfdfdf;
        border-top: none
    }

    .ps-page--shop .ps-block--shop-features,
    .ps-page--shop .ps-shop-banner,
    .ps-page--shop .ps-shop-brand,
    .ps-page--shop .ps-shop-categories {
        display: none
    }
}

@media (max-width:767px) {
    .ps-page--shop .ps-product .ps-product__vendor {
        padding-left: 10px;
        padding-right: 10px
    }

    .ps-page--shop .ps-product .ps-product__content:not(.hover) {
        width: 100%;
        left: 0;
        padding: 0 10px 20px
    }
}

@media (min-width:576px) and (max-width:992px) {
    .ps-page--shop .container {
        max-width: 100%
    }
}

.ps-page--product {
    padding-top: 30px
}

.ps-page--product .ps-page__container {
    display: flex;
    flex-flow: row nowrap;
    width: 100%
}

.ps-page--product .ps-page__container>* {
    width: 100%
}

.ps-page--product .ps-page__container .ps-page__left {
    padding-right: 30px;
    max-width: calc(100% - 290px)
}

.ps-page--product .ps-page__container .ps-page__right {
    min-width: 290px;
    max-width: 290px
}

.ps-page--product .ps-page__right .widget_same-brand {
    border-bottom: 1px solid #eaeaea
}

.ps-page--product.reverse .ps-page__container {
    flex-flow: row-reverse nowrap
}

.ps-page--product.reverse .ps-page__right {
    padding-right: 30px
}

@media (max-width:1199px) {
    .ps-page--product .ps-page__container {
        flex-flow: column wrap
    }

    .ps-page--product .ps-page__container .ps-page__left {
        max-width: 100%;
        padding-right: 0
    }
}

.ps-page--product-box {
    background-color: #f1f1f1
}

.ps-page--blog .ps-page__header {
    padding: 90px 0;
    text-align: center
}

.ps-page--blog .ps-page__header h1 {
    margin: 0 0 20px;
    font-size: 48px;
    font-weight: 600;
    line-height: 1em
}

@media (max-width:991px) {
    .ps-page--blog .ps-page__header {
        padding: 45px 0
    }

    .ps-page--blog .ps-page__header h1 {
        font-size: 36px
    }
}

@media (max-width:767px) {
    .ps-page--blog .ps-page__header {
        padding: 30px 0
    }

    .ps-page--blog .ps-page__header h1 {
        font-size: 32px
    }
}

@media (max-width:479px) {
    .ps-page--blog .ps-page__header {
        padding: 25px 0
    }

    .ps-page--blog .ps-page__header h1 {
        font-size: 24px
    }
}

.sub-toggle {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 36px;
    cursor: pointer;
    transform-style: preserve-3d;
    display: none
}

.sub-toggle:after,
.sub-toggle:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 1px;
    background-color: #000
}

.sub-toggle:before {
    transform: translateX(-50%)
}

.sub-toggle:after {
    transform: translateX(-50%) rotate(90deg)
}

.sub-toggle.active:after {
    display: none
}

.sub-menu {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 240px;
    z-index: 1000;
    transition: all .4s ease;
    background-color: #fff;
    border: 1px solid #ccc;
    visibility: hidden;
    opacity: 0
}

.sub-menu:before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    height: 0;
    width: 0;
    border-bottom: 6px solid #fff;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    display: none
}

.sub-menu>li {
    display: block
}

.sub-menu>li>a {
    display: inline-block;
    padding: 6px 20px;
    width: 100%;
    font-size: 14px;
    color: #000;
    text-transform: capitalize;
    transition: all .8s cubic-bezier(.19, 1, .22, 1)
}

.sub-menu>li>a:hover {
    color: #fff
}

.sub-menu>li:last-child {
    border-bottom: none
}

.sub-menu>li:last-child a {
    border-bottom: 1px solid #eee
}

.sub-menu>li.menu-item-has-children {
    position: relative
}

.sub-menu>li.menu-item-has-children>.sub-toggle {
    display: none
}

.sub-menu>li.menu-item-has-children>.sub-menu {
    position: absolute;
    top: 0;
    left: 100%;
    visibility: hidden;
    opacity: 0;
    transform: translateY(30px)
}

.sub-menu>li.menu-item-has-children>.sub-menu:before {
    display: none
}

.sub-menu>li.menu-item-has-children:hover>.sub-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0)
}

.mega-menu {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 15px 30px 10px;
    background-color: #fff;
    transition: all .2s ease;
    border: 1px solid #ccc
}

.mega-menu>* {
    width: 100%;
    padding: 10px 15px
}

.mega-menu h4 {
    margin: 0 0 10px !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    color: #000 !important
}

.mega-menu .mega-menu__column {
    min-width: 180px
}

.mega-menu .mega-menu__list {
    background-color: transparent
}

.mega-menu .mega-menu__list li a {
    display: block;
    color: #000;
    line-height: 20px;
    padding: 5px 0;
    font-size: 14px;
    background-color: transparent
}

.mega-menu .mega-menu__list li a.has-badge {
    padding-right: 20px
}

.mega-menu .mega-menu__list li a.has-badge:after {
    content: "New";
    display: inline-block;
    position: absolute;
    top: 5px;
    right: 0;
    font-size: 9px;
    color: #fff;
    padding: 0 8px;
    line-height: 2em;
    border-radius: 10px;
    background-color: #fff
}

.mega-menu .mega-menu__list li a.has-badge.sale {
    color: #ec0101
}

.mega-menu .mega-menu__list li a.has-badge.sale:after {
    content: "Sale";
    background-color: #ffa800
}

.mega-menu .mega-menu__list li a:hover {
    color: #fff
}

.menu {
    text-align: left
}

.menu>li {
    display: inline-block
}

.menu>li>a {
    display: inline-block;
    padding: 15px 25px;
    font-size: 14px !important;
    font-weight: 400;
    /* line-height: 20px; */
    color: #393E46 !important;
    font-family: 'Poppins' !important;
    font-weight: 600 !important;
}

.menu>li>a:hover {
    color: #000
}

.menu>li:first-child {
    padding-left: 0
}

.menu>li:first-child>a {
    padding-left: 0
}

.menu>li:last-child {
    margin-right: 0;
    padding-right: 0
}

.menu>li .sub-toggle {
    margin-left: 5px;
    display: none
}

.menu>li .sub-menu {
    visibility: hidden;
    opacity: 0
}

.menu>li .mega-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    visibility: hidden;
    opacity: 0
}

.menu>li.menu-item-has-children {
    position: relative
}

.menu>li.menu-item-has-children>a:after {
    content: "";
    font: normal normal normal 12px/1 linearicons;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0
}

.menu>li.menu-item-has-children>a:before {
    content: "";
    width: 13px;
    height: 13px;
    background-color: #fff;
    position: absolute;
    top: 100%;
    left: 50%;
    z-index: 10000;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    transform: rotate(45deg) translate(-50%, -50%);
    transform-origin: 0 0;
    visibility: hidden;
    opacity: 0
}

.menu>li.has-mega-menu {
    position: relative
}

.menu>li.has-mega-menu .mega-menu {
    position: absolute;
    top: 100%;
    left: 0
}

.menu>li.has-mega-menu:hover .mega-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0)
}

.menu>li:hover .sub-toggle {
    color: #fff
}

.menu>li:hover>.sub-menu {
    visibility: visible;
    opacity: 1
}

.menu>li:hover.menu-item-has-children>a:before {
    visibility: visible;
    opacity: 1
}

.menu--product-categories {
    position: relative;
    height: 100%
}

.menu--product-categories .menu__toggle {
    position: relative;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    cursor: pointer
}

.menu--product-categories .menu__toggle i {
    font-size: 20px;
    margin-right: 10px
}

.menu--product-categories .menu__toggle span {
    font-size: 20px;
    color: #000;
    font-size: 16px;
    font-weight: 600
}

.menu--product-categories .menu__toggle:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #000;
    transition: transform .75s cubic-bezier(.7, 0, .3, 1);
    transform: scaleX(0);
    transform-origin: 100% 50%
}

.menu--product-categories .menu__toggle.active:before,
.menu--product-categories .menu__toggle:hover:before {
    transform-origin: 0 50%;
    transform: scaleX(1)
}

.menu--product-categories .menu__content {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 100;
    z-index: 1000;
    min-width: 100%;
    padding-top: 2px;
    visibility: hidden;
    opacity: 0;
    transition: all .3s ease;
    transform: scaleZ(0) translateY(30px)
}

.menu--product-categories .menu--dropdown {
    background-color: #fff;
    border: 1px solid #d3d3d3;
    min-width: 260px
}

.menu--product-categories:hover .menu__content {
    visibility: visible;
    opacity: 1;
    transform: scaleX(1) translateY(0)
}

.menu--dropdown>li {
    padding: 0 20px;
    transition: all .4s ease
}

.menu--dropdown>li>a {
    display: block;
    padding: 10px 0;
    color: #000
}

.menu--dropdown>li>a i {
    margin-right: 10px;
    font-size: 18px
}

.menu--dropdown>li.has-mega-menu .mega-menu {
    position: absolute;
    top: 0;
    left: 100%;
    width: auto;
    min-width: 530px;
    visibility: hidden;
    opacity: 0;
    border-left: none
}

.menu--dropdown>li:hover {
    background-color: #fff
}

.menu--dropdown>li:hover.has-mega-menu .mega-menu {
    visibility: visible;
    opacity: 1
}

.menu--mobile .sub-menu {
    position: relative;
    display: none;
    transform: translate(0);
    visibility: visible;
    opacity: 1;
    transition: all 0s ease;
    border: none
}

.menu--mobile .sub-menu>li>a {
    border: none;
    padding: 10px 20px
}

.menu--mobile .mega-menu {
    display: none;
    flex-flow: row wrap;
    max-width: 100%;
    padding-left: 15px;
    transition: all 0s ease
}

.menu--mobile .mega-menu h4 {
    position: relative;
    display: block;
    margin-bottom: 0;
    padding: 10px 0;
    width: 100%;
    line-height: 20px
}

.menu--mobile .mega-menu .mega-menu__column {
    padding: 0
}

.menu--mobile .mega-menu .mega-menu__list {
    display: none;
    padding-left: 15px
}

.menu--mobile .mega-menu .mega-menu__list li a {
    color: #666;
    border: none
}

.menu--mobile .mega-menu .mega-menu__list li a:hover {
    color: #000
}

.menu--mobile>li {
    border-bottom: 1px solid #dedede
}

.menu--mobile>li>a {
    position: relative;
    z-index: 10;
    display: block;
    padding: 15px 20px;
    line-height: 20px;
    font-size: 15px
}

.menu--mobile>li>a:hover {
    padding-left: 5px;
    color: #000
}

.menu--mobile>li.menu-item-has-children {
    position: relative
}

.menu--mobile>li.menu-item-has-children .sub-toggle {
    position: absolute;
    top: 5px;
    right: 0;
    width: 40px;
    height: 40px;
    z-index: 20;
    display: inline-block
}

.menu--mobile .mega-menu {
    border: none
}

.menu--mobile .mega-menu h4 {
    font-weight: 500
}

.menu--mobile .mega-menu__list>li {
    border-bottom: 1px solid #dedede
}

.menu--mobile .mega-menu__list>li a {
    padding: 10px 0
}

.menu--mobile .mega-menu__list>li:last-child {
    border: none
}

body {
    background: #f8f8f8
}

@media (min-width:1199px) {
    .ps-logo img {
        max-width: 100% !important
    }
}

@media (max-width:575px) {
    .d-xs-none {
        display: none !important
    }

    .d-xs-block {
        display: block !important
    }

    .ps-search--mobile {
        max-width: unset !important
    }

    .header--mobile .navigation--mobile {
        padding: 10px 5px !important
    }
}

.header.header--sticky .header__top {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175) !important
}

.unauth ul.ps-dropdown-menu {
    width: 260px !important;
    right: 50%;
    padding: 15px !important;
    transform: translateX(42%)
}

.unauth ul.ps-dropdown-menu li a {
    text-align: center;
    padding: 7px 20px;
    position: relative;
    border-radius: 10px
}

.unauth ul.ps-dropdown-menu li:first-of-type {
    margin-bottom: 15px !important
}

.unauth ul.ps-dropdown-menu li:first-of-type a {
    border: 1px solid #f05e27;
    color: #F05E27
}

.unauth ul.ps-dropdown-menu li:first-of-type a:hover {
    background-color: #f05e27;
    border: 1px solid #f05e27;
    color: #fff !important;
}

.unauth ul.ps-dropdown-menu li:last-of-type a {
    border: 1px solid #f05e27;
    background: #f05e27;
    color: #fff !important
}

.unauth ul.ps-dropdown-menu li:last-of-type a:hover {
    border: 1px solid #af2d2d;
    background: #F05E27
}

.navigation {
    background-color: #fff
}

@media (max-width:1300px) {
    .navigation {
        display: none
    }
}

.navigation>.container,
.navigation>.ps-container {
    display: flex;
    flex-flow: row nowrap
}

.navigation>.container>*,
.navigation>.ps-container>* {
    width: 100%
}

.navigation__extra>li {
    position: relative;
    display: inline-block;
    margin-right: 11px;
    margin-bottom: 7px
}

.navigation__extra>li a {
    color: #393E46 !important;
    font: normal normal normal 16px/10px Poppins;
    letter-spacing: 0px;

}

.navigation__extra>li:last-child {
    margin-right: 0;
    padding-right: 0
}

.navigation__extra>li:last-child:after {
    display: none
}

.navigation__extra .ps-dropdown img {
    margin-right: 8px
}

.navigation .navigation__left {
    max-width: 260px
}

.navigation .navigation__right {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    /* padding-left: 15px;
    padding-right: 15px */
}

.navigation .navigation__right ul.menu {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-evenly;
    position: relative;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
    border-radius: 0 0 10px 10px;
    align-content: center;
    align-items: center
}

.navigation .navigation__right ul.menu>li {
    position: unset
}

.navigation .navigation__right ul.menu>li.menu-item-has-children>a:after {
    content: ""
}

.navigation .navigation__right ul.menu>li.menu-item-has-children>a:before {
    border-left: 1px solid #fff;
    border-top: 1px solid #fff
}

.navigation .navigation__right ul.menu>li:not(:last-of-type).menu-item-has-children>a:after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -29%;
    width: 1px;
    height: 20px;
    background: #d5d5d5
}

.navigation .navigation__right ul.menu>li>a {
    padding: 10px 0;
    width: 100%;
    text-align: center
}
h1 a, h2 a, h3 a, h4 a, h5 a, h6 a{
    color: inherit !important;
}
.navigation .navigation__right ul.menu>li .mega-menu {
    border-radius: 0 0 30px 30px
}

.navigation .navigation__right ul.menu>li .mega-menu h4 {
    color: #f05e27 !important;
}
.navigation .navigation__right ul.menu>li .mega-menu h4 a{
    color: #f05e27 !important;
}

.navigation .navigation__right ul.menu>li .mega-menu ul.mega-menu__list li a {
    color: #929292;
    font-size: 13px
}

.header .header__extra {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 42px;
    transition: all .4s ease
}

.header .header__extra>i {
    font-size: 30px;
    line-height: 42px
}

.header .header__extra span {
    position: absolute;
    bottom: 0;
    right: -6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    vertical-align: top;
    width: 20px;
    height: 20px;
    color: #fff;
    background-color: #000;
    border-radius: 50%
}

.header .header__extra span i {
    font-size: 12px;
    font-style: normal;
    line-height: 1em;
    font-weight: 500
}

.header .header__extra:hover i {
    color: #fff
}

.header .header__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end
}

.header .header__actions>* {
    margin: 0 20px;
    position: relative;
}
.header .header__actions>*:not(:last-child) {
    border-right: 1px solid #33333340;
}

.header .header__left {
    max-width: 300px;
    display: flex;
    align-items: center
}

.header .header__left .menu--product-categories {
    display: none
}

.header .header__top {
    padding: 20px 0;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, .15)
}

.header .header__top .container,
.header .header__top .ps-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly
}

.header .header__top .container>*,
.header .header__top .ps-container>* {
    width: 100%
}

.header.header--sticky .menu--product-categories .menu__toggle i {
    font-size: 30px
}

.header.header--sticky .menu--product-categories .menu__toggle span {
    font-size: 16px
}

.header.header--sticky .header__top {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    border-bottom: none;
    padding: 10px 0
}

.header.header--sticky .header__left .ps-logo {
    display: none
}

.header.header--sticky .header__left .menu--product-categories {
    display: block;
    background-color: transparent
}

@media (max-width:1199px) {
    .header {
        display: none
    }

    .header.header--mobile {
        display: block
    }
}

.ps-logo img {
    max-width: 160px
}

@media (max-width:767px) {
    .ps-logo img {
        min-width: 160px
    }
}

@media (max-width:767px) {
    .header--mobile .mobile.header__actions {
        width: 100% !important;
        height: 100% !important
    }
}

.header--standard .ps-block--user-header a:hover {
    color: #fff
}

.header--standard .header__top-links {
    width: 100%
}

.header--standard .header__top-links>li {
    display: inline-block;
    margin-right: 16px;
    padding-right: 15px;
    position: relative
}

.header--standard .header__top-links>li:after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    height: 15px;
    width: 0;
    border-right: 1px solid #e1e1e1
}

.header--standard .header__top-links>li>a {
    color: #666
}

.header--standard .header__top-links>li:last-child {
    margin-right: 0;
    padding-right: 0
}

.header--standard .header__top-links>li:last-child:after {
    display: none
}

.header--standard .header__top-links .language>a img {
    margin-right: 5px
}

.header--standard .header__top-links .ps-block--user-header .ps-block__left i {
    font-size: 14px
}

.header--standard .header__top-links .ps-block--user-header .ps-block__right a {
    display: inline-block;
    font-weight: 400;
    margin-right: 10px;
    color: #FFF !important;
}

.header--standard .header__top-links .ps-block--user-header .ps-block__right a:first-child:after {
    content: "/";
    padding-left: 10px
}

.header--standard .header__top-links .ps-block--user-header .ps-block__right a:hover {
    color: #fff
}

.header--standard .header__top {
    padding: 10px 0;
    background-color: #fff;
    border-bottom: none
}

.header--standard .header__top .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center
}

.header--standard .header__top .header__left {
    max-width: 50%
}

.header--standard .header__top .header__left p {
    margin-bottom: 0;
    color: #666;
    line-height: 30px
}

.header--standard .header__top .header__left p strong {
    color: #000
}

.header--standard .header__top .header__right {
    text-align: right;
    max-width: 50%
}

.header--standard .header__content-left {
    max-width: 270px;
    padding-right: 30px;
    display: flex;
    align-items: center
}

.header--standard .header__content-left .ps-logo {
    margin-right: 30px
}

.header--standard .header__content-left .ps-logo img {
    min-width: 160px
}

.header--standard .header__content-center {
    max-width: 600px
}

.header--standard .menu--product-categories .menu__toggle i {
    font-size: 30px
}

.header--standard .ps-form--quick-search {
    width: 600px
}

.header--standard .ps-form--quick-search button {
    background-color: #fcb800;
    color: #000
}

.header--standard .ps-form--quick-search .form-group--icon {
    border: 1px solid #e1e1e1;
    min-width: 80px;
    border-radius: 4px 0 0 4px
}

.header--standard .ps-form--quick-search .form-group--icon select {
    height: 40px;
    border: none
}

.header--standard .ps-form--quick-search input {
    border: 1px solid #e1e1e1;
    border-left: none
}

.header--standard .header__content {
    padding: 20px 0
}

.header--standard .header__content .menu--product-categories .menu__toggle:hover:before {
    display: none
}

.header--standard .header__content .container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center
}

.header--standard .header__content .container>* {
    width: 100%
}

.header--standard .header__extra span {
    background-color: #fff
}

.header--standard .header__extra span i {
    color: #000;
    font-weight: 700
}

.header--standard.header--sticky .header__top {
    position: relative
}

.header--standard.header--sticky .header__content {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    background-color: #fff
}

.header--standard.header--sticky .header__content .menu--product-categories {
    display: block
}

.header--standard.header--sticky .ps-logo {
    display: none
}

@media (max-width:1199px) {
    .header--standard {
        display: none
    }
}

.header--product {
    visibility: hidden;
    opacity: 0;
    height: 0
}

.header--product .navigation {
    transition: transform .25s ease;
    transform: translateY(-50%)
}

.header--product.header--sticky {
    visibility: visible;
    opacity: 1;
    height: auto
}

.header--product.header--sticky .navigation {
    padding: 10px 0;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    border-bottom: 1px solid #eaeaea;
    transform: translateY(0)
}

.header--mobile {
    position: relative;
    top: 0;
    width: 100%;
    left: 0;
    z-index: 9999;
    text-align: center;
    border-bottom: 0;
    background-color: #fff;
    transition: all .4s cubic-bezier(.455, .03, .515, .955)
}

.header--mobile:after {
    clear: both;
    content: "";
    display: table
}

.header--mobile .navigation__extra {
    display: inline-block
}

.header--mobile .navigation__extra li {
    margin-right: 5px;
    padding-right: 5px
}

.header--mobile .navigation__extra li:after {
    display: none
}

.header--mobile .header__extra span {
    background-color: #fff
}

.header--mobile .header__actions i,
.header--mobile .ps-block--user-header i {
    font-size: 24px
}

.header--mobile .header__top {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    background-color: #f4f5f5;
    padding: 15px 30px
}

.header--mobile .header__top>* {
    width: 100%
}

.header--mobile .header__top .header__left {
    max-width: 40%
}

.header--mobile .header__top .header__left p {
    margin-bottom: 0
}

.header--mobile .header__top .header__right {
    max-width: 60%;
    text-align: right
}

.header--mobile .header__top .header__right .navigation__extra {
    display: inline-block
}

.header--mobile .navigation--mobile {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 10px 30px;
    border-bottom: none
}

.header--mobile .navigation--mobile .navigation__left {
    display: flex;
    align-items: center
}

.header--mobile .header__extra span {
    background-color: #000
}

.header--mobile .header__extra span i {
    color: #fff;
    font-weight: 600
}

.header--mobile.active {
    transform: translateX(270px)
}

.header--mobile.header--sticky .navigation--mobile {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background-color: #fff;
    -ms-box-shadow: 0 0 3px 0 rgba(0, 0, 0, .12);
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, .12)
}

@media (min-width:1200px) {
    .header--mobile {
        display: none
    }
}

@media (max-width:1199px) {
    .header--mobile .ps-search--mobile {
        display: none
    }
}

@media (min-width:768px) {
    .header--mobile .mobile.header__actions {
        width: 100%;
        height: 100%
    }
}

.header--mobile .mobile.header__actions .ps-cart--mini {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap
}

.header--mobile .mobile.header__actions .ps-cart--mini .header__extra .cart_count {
    background-color: #f05e27 !important
}

.header--mobile .mobile.header__actions .ps-cart--mini .header__extra img {
    position: relative;
    width: 30px;
    height: 42px;
    transition: all .4s ease;
    display: flex;
    justify-content: center;
    align-items: center
}

@media (min-width:768px) {
    .header--mobile .mobile.header__actions .ps-cart--mini .header__extra img {
        width: 100%;
        height: 100%
    }
}

@media (max-width:991px) {
    .header--mobile .header__top .header__left {
        display: none
    }

    .header--mobile .header__top .header__right {
        max-width: 100%;
        text-align: center
    }
}

@media (max-width:767px) {
    .header--mobile .navigation__extra li>a {
        display: none
    }
}

@media (max-width:575px) {
    .header--mobile .header__top {
        display: none
    }
}

@media (max-width:479px) {
    .header--mobile .header__top {
        display: none
    }

    .header--mobile .header__actions>* {
        margin: 0 20px 0 0
    }

    .header--mobile .header__actions i {
        font-size: 24px
    }

    .header--mobile .ps-block--user-header {
        margin-right: 0
    }

    .header--mobile .ps-block--user-header i {
        font-size: 24px
    }

    .header--mobile .ps-block--user-header .ps-block__right {
        display: none
    }

    .header--mobile .ps-search--mobile {
        display: block
    }
}

.header--mobile-product .header__back {
    vertical-align: middle;
    text-align: left
}

.header--mobile-product .header__back strong {
    font-size: 18px;
    vertical-align: middle
}

.header--mobile-product .header__back i {
    vertical-align: middle;
    margin-right: 16px;
    font-size: 24px;
    color: #000
}

.header--mobile-product .navigation--mobile .navigation__left {
    justify-content: flex-start
}

.header--mobile-categories .header__back {
    vertical-align: middle;
    text-align: left
}

.header--mobile-categories .header__back strong {
    font-size: 18px;
    vertical-align: middle
}

.header--mobile-categories .header__back i {
    vertical-align: middle;
    margin-right: 16px;
    font-size: 24px;
    color: #000
}

.header--mobile-categories .navigation--mobile .navigation__left {
    justify-content: flex-start
}

.header--mobile-categories .header__filter {
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f5f5f5
}

.header--mobile-categories .header__filter>* {
    flex-basis: 100%;
    max-width: 50%
}

.header--mobile-categories .header__filter button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    background-color: transparent;
    font-size: 14px
}

.header--mobile-categories .header__filter button:after {
    content: "";
    font-family: Linearicons;
    margin-left: 20px
}

.header--mobile-categories .header__filter button i {
    margin-right: 10px;
    font-size: 16px;
    font-size: 20px;
    color: #666
}

.header--mobile-categories .header__filter .header__sort {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px
}

.header--mobile-categories .header__filter .header__sort i {
    margin-right: 10px;
    font-size: 16px;
    font-size: 20px;
    color: #666
}

.header--mobile-categories .header__filter .header__sort .select2 .select2-selection {
    border: none;
    background-color: transparent
}

.header--mobile-categories .header__filter .header__sort .select2 .select2-selection .select2-selection__rendered {
    background-color: transparent;
    text-align: left
}

.header--mobile-categories .header__filter .header__sort .select2 .select2-selection .select2-selection__arrow:before {
    content: "";
    font-family: Linearicons
}

.header--mobile-categories .header__filter>button {
    border-right: 1px solid #ccc
}

.navigation--sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 320px;
    height: 100vh;
    overflow-y: auto;
    z-index: 10001;
    background-color: #fff;
    transform: translateX(-100%);
    transition: all .5s cubic-bezier(.7, 0, .3, 1) 0s
}

.navigation--sidebar .navigation__actions {
    text-align: center
}

.navigation--sidebar .navigation__actions .ps-dropdown {
    margin-bottom: 10px
}

.navigation--sidebar .navigation__actions .ps-dropdown>a {
    font-size: 1.4rem;
    color: #666
}

.navigation--sidebar .navigation__header {
    position: relative;
    text-align: center;
    padding: 15px 0;
    background-color: #fff
}

.navigation--sidebar .navigation__header h3 {
    margin-bottom: 0;
    font-weight: 600;
    color: #fff;
    font-size: 1.6rem;
    line-height: 20px;
    text-transform: uppercase;
    letter-spacing: .05em
}

.navigation--sidebar .navigation__header .ps-btn--close {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px
}

.navigation--sidebar .navigation__header .ps-btn--close:after,
.navigation--sidebar .navigation__header .ps-btn--close:before {
    background-color: #fff;
    height: 60%
}

.navigation--sidebar .navigation__content {
    padding-top: 10px;
    padding-bottom: 70px
}

.navigation--sidebar .header__actions a {
    display: inline-block;
    margin: 0 5px;
    line-height: 40px
}

.navigation--sidebar .header__actions a i {
    font-size: 24px;
    color: #000;
    vertical-align: middle
}

.navigation--sidebar .header__actions .ps-dropdown a {
    padding-right: 0
}

.navigation--sidebar .header__actions .ps-dropdown a:after {
    display: none
}

.navigation--sidebar .header__actions .ps-cart-toggle {
    position: relative;
    display: inline-block;
    padding: 5px 0;
    line-height: 30px
}

.navigation--sidebar .header__actions .ps-cart-toggle span {
    position: absolute;
    top: 40%;
    left: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translate(25%, -100%);
    background-color: #000
}

.navigation--sidebar .header__actions .ps-cart-toggle span i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-style: normal;
    font-size: 11px
}

.navigation--sidebar.active {
    transform: translateX(0)
}

@media (min-width:1200px) {
    .navigation--sidebar .navigation__actions {
        display: none
    }
}

@media (max-width:479px) {
    .navigation--sidebar {
        width: 100%
    }
}

.navigation--list {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 10002;
    padding: 10px 30px;
    border-top: 1px solid #ccc;
    background-color: #fff
}

.navigation--list .navigation__item {
    text-align: center
}

.navigation--list .navigation__item i {
    font-size: 24px
}

.navigation--list .navigation__item span {
    display: block
}

.navigation--list .navigation__item.active i,
.navigation--list .navigation__item.active span {
    color: #fff
}

.navigation--list .navigation__content {
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center
}

@media (min-width:1200px) {
    .navigation--list {
        display: none
    }
}

.navigation--mobile-product {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 10002;
    border-top: 1px solid #ccc;
    background-color: #fff;
    display: flex;
    justify-content: space-between
}

.navigation--mobile-product>* {
    width: 100%;
    flex-basis: 50%;
    font-size: 16px;
    border-radius: 0;
    text-align: center
}

.navigation--mobile-product .ps-btn--black {
    color: #fff
}

@media (min-width:1200px) {
    .navigation--mobile-product {
        display: none
    }
}

.navigation--sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000
}

.navigation--sticky,
.navigation--sticky .navigation {
    background-color: #fff
}

.navigation--sticky .header__top {
    display: none
}

.navigation--sticky.navigation--pin {
    transform: translate(0)
}

.navigation--sticky.navigation--unpin {
    transform: translateY(-100%)
}

.navigation--sticky.header--1.navigation--pin .navigation {
    background-color: rgba(0, 0, 0, .95)
}

.navigation--sticky.header--1.navigation--pin.header--black .navigation {
    background-color: hsla(0, 0%, 100%, .95)
}

.navigation--sticky.header--2.navigation--pin.active {
    background-color: #fff;
    transform: translate(270px)
}

@media (max-width:1199px) {
    .navigation--sticky.navigation--unpin {
        transform: translate(0)
    }
}

.ps-site-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    height: 100vh;
    background-color: rgba(0, 0, 0, .75);
    transition: all .4s ease;
    visibility: hidden;
    opacity: 0
}

.ps-site-overlay.active {
    visibility: visible;
    opacity: 1
}

.ps-search--mobile {
    max-width: 450px;
    margin: 0 auto;
    padding: 10px 20px
}

.notify.success {
    border: unset;
    border-color: #4caf50;
    border-left: 5px solid #4caf50
}

.notify.success,
.notify.warning {
    background: #fff;
    color: #000;
    opacity: 1
}

.notify.warning {
    border: unset;
    border-color: #fff8e1;
    border-left: 5px solid #ffc107
}

.notify.error {
    background: #fff;
    color: #000;
    border: unset;
    border-color: #e91e63;
    opacity: 1;
    border-left: 5px solid #e91e63
}

.notify.error .notify-close-btn,
.notify.error .notify-icon,
.notify.success .notify-close-btn,
.notify.success .notify-icon,
.notify.warning .notify-close-btn,
.notify.warning .notify-icon {
    border-color: #fff
}

@media (max-width:991px) {
    footer .top-footer-row .unset-right-border-md {
        border-right: unset !important
    }
}

@media (max-width:767px) {
    footer .top-footer-row .border-right {
        border-right: unset !important
    }
}

footer .top-footer h4 {
    color: #657786 !important
}

footer .top-footer p {
    font-size: 12px !important;
    color: #aab8c2 !important
}

footer .copyrigit a {
    color: #969696 !important
}

footer .copyrigit a:hover {
    color: #f05e27 !important
}

footer .footer--link .title-footer {
    font-size: 16px;
    color: #484848
}

footer .footer--link ul {
    list-style-type: none;
    padding: 0
}

footer .footer--link ul li a {
    color: #929292
}

footer .footer--link ul li a:hover {
    color: #f05e27
}

footer .footer--link .whatsapp {
    font-size: 14px;
    color: #929292;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .1607843137254902);
    width: 220px
}

footer .footer--link .whatsapp b {
    font-weight: 400;
    color: #717171
}

footer .footer--link .copyrigit a {
    color: #969696 !important
}

footer .footer--link .copyrigit a:hover {
    color: #f05e27 !important
}

footer .footer--link .call-us-parag {
    position: relative
}

footer .footer--link .call-us-parag:before {
    content: "";
    position: absolute;
    left: 63%;
    width: 19%;
    height: 1px;
    background: #acacac;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%)
}

footer .footer--link .call-us-parag:after {
    content: "";
    position: absolute;
    left: 9%;
    width: 19%;
    height: 1px;
    background: #acacac;
    z-index: 1;
    top: 50%;
    transform: translate(50%, -50%)
}

footer .footer--link .download-app {
    color: #484848
}

footer .footer--link .conncet {
    display: block;
    color: #f05e27;
    font-size: 15px;
    border: 1px solid #f05e27;
    margin-left: auto;
    margin-right: auto;
    width: 240px
}

footer .footer--link .conncet:hover {
    color: #fff;
    background-color: #f05e27
}

footer__widgets {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding-bottom: 35px
}

footer__links {
    padding: 60px 0;
    border-top: 1px solid #e1e1e1
}

footer__links p strong {
    color: #000;
    margin-right: 20px;
    font-weight: 600
}

footer__links p a {
    display: inline-block;
    color: #666;
    line-height: 20px;
    margin-right: 10px;
    position: relative
}

footer__links p a:after {
    content: "|";
    margin-left: 5px
}

footer__links p a:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #000;
    transform: scaleX(0);
    transition: transform .4s cubic-bezier(.7, 0, .3, 1);
    transform-origin: 100% 50%
}

footer__links p a:hover:before {
    transform: scaleX(1);
    transform-origin: 0 50%
}

footer__links p a:last-child:after {
    display: none
}

footer__copyright {
    padding: 35px 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    border-top: 1px solid #e1e1e1
}

footer__copyright p {
    margin-bottom: 0;
    line-height: 30px;
    color: #000
}

footer__copyright p:last-child span {
    display: inline-block;
    line-height: inherit;
    vertical-align: middle
}

footer__copyright p:last-child a {
    display: inline-block;
    margin-left: 20px;
    vertical-align: middle
}

@media (max-width:767px) {
    footer__widgets {
        flex-flow: row wrap
    }

    footer__widgets>* {
        width: 100%;
        max-width: 25%
    }

    footer__widgets .widget_contact-us {
        max-width: 100%;
        width: 100%
    }
}

@media (max-width:479px) {
    footer__widgets>* {
        max-width: 50%;
        flex-basis: 50%
    }

    footer__copyright {
        flex-flow: row wrap;
        text-align: center
    }

    footer__copyright p {
        display: block;
        width: 100%
    }

    footer__copyright p span {
        display: block;
        padding-bottom: 10px
    }
}

.ps-footer--2 .widget_newletters .form-group--nest {
    margin-bottom: 30px
}

.ps-footer--3 {
    padding: 0;
    border-top: 1px solid #e1e1e1;
    background-color: #f8f8f8
}

.ps-footer--3 .ps-block--site-features {
    padding: 40px 0;
    margin-bottom: 70px;
    border-bottom: 1px solid #e1e1e1
}

@media (max-width:767px) {
    .ps-footer--3 .ps-block--site-features {
        margin-bottom: 40px
    }
}

.ps-footer--kids .ps-form--newletter .form-group--nest {
    margin-bottom: 20px
}

.ps-footer--photo .ps-site-info h5 {
    color: #c81919;
    font-size: 24px;
    font-weight: 600
}

.ps-footer--photo .ps-form--newletter button {
    color: #fff;
    background-color: #c81919
}

.ps-footer--photo .ps-form--newletter button:hover {
    background-color: #9b1313
}

@media (min-width:1440px) {
    .ps-footer--photo .ps-footer__content {
        flex: 2 1 100%
    }

    .ps-footer--photo .ps-footer__left {
        flex: 1 1 100%;
        max-width: 400px
    }

    .ps-footer--photo .ps-footer__content {
        width: 100%;
        max-width: 100%
    }

    .ps-footer--photo .ps-footer__wrapper {
        display: flex;
        flex-flow: column wrap;
        justify-content: flex-start;
        align-items: flex-start
    }
}

@media (min-width:1680px) {
    .ps-footer--photo .ps-footer__wrapper {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center
    }
}

.ma-0 {
    margin: 0
}

.pd-0 {
    padding: 0
}

.mt-0 {
    margin-top: 0
}

.mr-0 {
    margin-right: 0
}

.mb-0 {
    margin-bottom: 0
}

.ml-0 {
    margin-left: 0
}

.pt-0 {
    padding-top: 0
}

.pr-0 {
    padding-right: 0
}

.pb-0 {
    padding-bottom: 0
}

.pl-0 {
    padding-left: 0
}

.mt-5 {
    margin-top: 5px
}

.mr-5 {
    margin-right: 5px
}

.mb-5 {
    margin-bottom: 5px
}

.ml-5 {
    margin-left: 5px
}

.pt-5 {
    padding-top: 5px
}

.pr-5 {
    padding-right: 5px
}

.pb-5 {
    padding-bottom: 5px
}

.pl-5 {
    padding-left: 5px
}

.mt-10 {
    margin-top: 10px
}

.mr-10 {
    margin-right: 10px
}

.mb-10 {
    margin-bottom: 10px
}

.ml-10 {
    margin-left: 10px
}

.pt-10 {
    padding-top: 10px
}

.pr-10 {
    padding-right: 10px
}

.pb-10 {
    padding-bottom: 10px
}

.pl-10 {
    padding-left: 10px
}

.mt-15 {
    margin-top: 15px
}

.mr-15 {
    margin-right: 15px
}

.mb-15 {
    margin-bottom: 15px
}

.ml-15 {
    margin-left: 15px
}

.pt-15 {
    padding-top: 15px
}

.pr-15 {
    padding-right: 15px
}

.pb-15 {
    padding-bottom: 15px
}

.pl-15 {
    padding-left: 15px
}

.mt-20 {
    margin-top: 20px
}

.mr-20 {
    margin-right: 20px
}

.mb-20 {
    margin-bottom: 20px
}

.ml-20 {
    margin-left: 20px
}

.pt-20 {
    padding-top: 20px
}

.pr-20 {
    padding-right: 20px
}

.pb-20 {
    padding-bottom: 20px
}

.pl-20 {
    padding-left: 20px
}

.mt-25 {
    margin-top: 25px
}

.mr-25 {
    margin-right: 25px
}

.mb-25 {
    margin-bottom: 25px
}

.ml-25 {
    margin-left: 25px
}

.pt-25 {
    padding-top: 25px
}

.pr-25 {
    padding-right: 25px
}

.pb-25 {
    padding-bottom: 25px
}

.pl-25 {
    padding-left: 25px
}

.mt-30 {
    margin-top: 30px
}

.mr-30 {
    margin-right: 30px
}

.mb-30 {
    margin-bottom: 30px
}

.ml-30 {
    margin-left: 30px
}

.pt-30 {
    padding-top: 30px
}

.pr-30 {
    padding-right: 30px
}

.pb-30 {
    padding-bottom: 30px
}

.pl-30 {
    padding-left: 30px
}

.mt-35 {
    margin-top: 35px
}

.mr-35 {
    margin-right: 35px
}

.mb-35 {
    margin-bottom: 35px
}

.ml-35 {
    margin-left: 35px
}

.pt-35 {
    padding-top: 35px
}

.pr-35 {
    padding-right: 35px
}

.pb-35 {
    padding-bottom: 35px
}

.pl-35 {
    padding-left: 35px
}

.mt-40 {
    margin-top: 40px
}

.mr-40 {
    margin-right: 40px
}

.mb-40 {
    margin-bottom: 40px
}

.ml-40 {
    margin-left: 40px
}

.pt-40 {
    padding-top: 40px
}

.pr-40 {
    padding-right: 40px
}

.pb-40 {
    padding-bottom: 40px
}

.pl-40 {
    padding-left: 40px
}

.mt-45 {
    margin-top: 45px
}

.mr-45 {
    margin-right: 45px
}

.mb-45 {
    margin-bottom: 45px
}

.ml-45 {
    margin-left: 45px
}

.pt-45 {
    padding-top: 45px
}

.pr-45 {
    padding-right: 45px
}

.pb-45 {
    padding-bottom: 45px
}

.pl-45 {
    padding-left: 45px
}

.mt-50 {
    margin-top: 50px
}

.mr-50 {
    margin-right: 50px
}

.mb-50 {
    margin-bottom: 50px
}

.ml-50 {
    margin-left: 50px
}

.pt-50 {
    padding-top: 50px
}

.pr-50 {
    padding-right: 50px
}

.pb-50 {
    padding-bottom: 50px
}

.pl-50 {
    padding-left: 50px
}

.mt-55 {
    margin-top: 55px
}

.mr-55 {
    margin-right: 55px
}

.mb-55 {
    margin-bottom: 55px
}

.ml-55 {
    margin-left: 55px
}

.pt-55 {
    padding-top: 55px
}

.pr-55 {
    padding-right: 55px
}

.pb-55 {
    padding-bottom: 55px
}

.pl-55 {
    padding-left: 55px
}

.mt-60 {
    margin-top: 60px
}

.mr-60 {
    margin-right: 60px
}

.mb-60 {
    margin-bottom: 60px
}

.ml-60 {
    margin-left: 60px
}

.pt-60 {
    padding-top: 60px
}

.pr-60 {
    padding-right: 60px
}

.pb-60 {
    padding-bottom: 60px
}

.pl-60 {
    padding-left: 60px
}

.mt-65 {
    margin-top: 65px
}

.mr-65 {
    margin-right: 65px
}

.mb-65 {
    margin-bottom: 65px
}

.ml-65 {
    margin-left: 65px
}

.pt-65 {
    padding-top: 65px
}

.pr-65 {
    padding-right: 65px
}

.pb-65 {
    padding-bottom: 65px
}

.pl-65 {
    padding-left: 65px
}

.mt-70 {
    margin-top: 70px
}

.mr-70 {
    margin-right: 70px
}

.mb-70 {
    margin-bottom: 70px
}

.ml-70 {
    margin-left: 70px
}

.pt-70 {
    padding-top: 70px
}

.pr-70 {
    padding-right: 70px
}

.pb-70 {
    padding-bottom: 70px
}

.pl-70 {
    padding-left: 70px
}

.mt-75 {
    margin-top: 75px
}

.mr-75 {
    margin-right: 75px
}

.mb-75 {
    margin-bottom: 75px
}

.ml-75 {
    margin-left: 75px
}

.pt-75 {
    padding-top: 75px
}

.pr-75 {
    padding-right: 75px
}

.pb-75 {
    padding-bottom: 75px
}

.pl-75 {
    padding-left: 75px
}

.mt-80 {
    margin-top: 80px
}

.mr-80 {
    margin-right: 80px
}

.mb-80 {
    margin-bottom: 80px
}

.ml-80 {
    margin-left: 80px
}

.pt-80 {
    padding-top: 80px
}

.pr-80 {
    padding-right: 80px
}

.pb-80 {
    padding-bottom: 80px
}

.pl-80 {
    padding-left: 80px
}

.mt-85 {
    margin-top: 85px
}

.mr-85 {
    margin-right: 85px
}

.mb-85 {
    margin-bottom: 85px
}

.ml-85 {
    margin-left: 85px
}

.pt-85 {
    padding-top: 85px
}

.pr-85 {
    padding-right: 85px
}

.pb-85 {
    padding-bottom: 85px
}

.pl-85 {
    padding-left: 85px
}

.mt-90 {
    margin-top: 90px
}

.mr-90 {
    margin-right: 90px
}

.mb-90 {
    margin-bottom: 90px
}

.ml-90 {
    margin-left: 90px
}

.pt-90 {
    padding-top: 90px
}

.pr-90 {
    padding-right: 90px
}

.pb-90 {
    padding-bottom: 90px
}

.pl-90 {
    padding-left: 90px
}

.mt-95 {
    margin-top: 95px
}

.mr-95 {
    margin-right: 95px
}

.mb-95 {
    margin-bottom: 95px
}

.ml-95 {
    margin-left: 95px
}

.pt-95 {
    padding-top: 95px
}

.pr-95 {
    padding-right: 95px
}

.pb-95 {
    padding-bottom: 95px
}

.pl-95 {
    padding-left: 95px
}

.mt-100 {
    margin-top: 100px
}

.mr-100 {
    margin-right: 100px
}

.mb-100 {
    margin-bottom: 100px
}

.ml-100 {
    margin-left: 100px
}

.pt-100 {
    padding-top: 100px
}

.pr-100 {
    padding-right: 100px
}

.pb-100 {
    padding-bottom: 100px
}

.pl-100 {
    padding-left: 100px
}

.fw-300 {
    font-weight: 300
}

.fw-500 {
    font-weight: 500
}

.fw-700 {
    font-weight: 700
}

.fw-800 {
    font-weight: 800
}

.fw-900 {
    font-weight: 900
}

.ps-fullwidth {
    width: 100%
}

html .bg--parallax {
    position: relative;
    z-index: 10;
    background-attachment: fixed !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: 50% 50%
}

.bg--cover,
.bg--top {
    background-position: 50% 50% !important;
    background-size: cover !important
}

.header ol,
.header ul,
.navigation--sidebar ol,
.navigation--sidebar ul,
.ps-best-sale-brands ol,
.ps-best-sale-brands ul,
.ps-block--categories-box ol,
.ps-block--categories-box ul,
.ps-block--category-2 ol,
.ps-block--category-2 ul,
.ps-block--menu-categories .ps-block__content ol,
.ps-block--menu-categories .ps-block__content ul,
.ps-block--ourteam ol,
.ps-block--ourteam ul,
.ps-block--payment-method ol,
.ps-block--payment-method ul,
.ps-block--product-box ol,
.ps-block--product-box ul,
.ps-block--products-of-category .ps-block__categories ol,
.ps-block--products-of-category .ps-block__categories ul,
.ps-block--shopping-total ol,
.ps-block--shopping-total ul,
.ps-block--store ol,
.ps-block--store ul,
.ps-block--vendor-filter ol,
.ps-block--vendor-filter ul,
.ps-blog .ps-blog__header ol,
.ps-blog .ps-blog__header ul,
.ps-deal-of-day ol,
.ps-deal-of-day ul,
.ps-form--account ol,
.ps-form--account ul,
.ps-my-account-2 ol,
.ps-my-account-2 ul,
.ps-page--comming-soon ol,
.ps-page--comming-soon ul,
.ps-product-list ol,
.ps-product-list ul,
.ps-shopping .ps-shopping__header ol,
.ps-shopping .ps-shopping__header ul,
.ps-store-list .ps-store-link ol,
.ps-store-list .ps-store-link ul,
.ps-widget--account-dashboard .ps-widget__content ol,
.ps-widget--account-dashboard .ps-widget__content ul,
.widget--blog ol,
.widget--blog ul,
.widget--vendor ol,
.widget--vendor ul,
.widget_category ol,
.widget_category ul,
.widget_footer ol,
.widget_footer ul,
.widget_shop ol,
.widget_shop ul,
.widget_sidebar ol,
.widget_sidebar ul {
    margin: 0;
    padding: 0;
    list-style: none
}

.modal.in .modal-dialog {
    transform: translate(0)
}

.modal-content {
    position: relative;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #999;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 6px;
    outline: 0;
    box-shadow: 0 3px 9px rgba(0, 0, 0, .5)
}

.modal-header {
    border: unset;
    min-height: 16.43px;
    padding: 15px
}

.modal-header .close {
    padding: 1rem;
    margin: -1rem -1rem -1rem auto
}

.btn_choose_sent input:after {
    position: absolute;
    content: "";
    width: 15rem;
    left: 0;
    right: 0;
    height: 40px;
    top: -10px
}

.modal-body {
    position: relative;
    padding: 15px
}

.btn_choose_sent input {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 99;
    top: 12px
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: 0;
    margin-left: 0
}

.btn_choose_sent {
    background: transparent;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    line-height: 10px;
    padding: 14px 19px 14px 20px;
    text-align: left;
    display: inline-block;
    text-decoration: none;
    margin-right: 30px;
    transition: all .3s;
    height: auto;
    cursor: pointer;
    position: relative;
    outline: none;
    color: #666 !important;
    font-size: 14px !important
}

.modal-body p {
    color: var(--main-color);
    position: relative
}

.modal-body p,
.modal-title {
    padding: 0 15px
}

.modal-body p:before {
    content: "";
    position: absolute;
    width: 62%;
    height: 1px;
    background: #f2f2f2;
    top: 50%;
    transform: translateY(50%);
    left: 160px
}

.form-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: 0
}

.form-row>.col,
.form-row>[class*=col-] {
    padding-right: 5px;
    padding-left: 18px
}

.form-control:focus {
    outline: none;
    box-shadow: 0 0 0 #000;
    border-color: #f05e27
}

.form-group {
    margin-bottom: 10px
}

.btn-outline-success:hover {
    color: #fff;
    background-color: #f05e27;
    border-color: #28a745;
    color: #fff !important
}

.text-success {
    color: #f05e27 !important
}

.border-success {
    border-color: #f05e27 !important
}

button.btn.btn-outline-danger.text-uppercase.w-25.border-2.border-danger.font-weight-700,
button.btn.btn-outline-success.unclicabil.text-uppercase.w-25.border-2.border-success.text-success.font-weight-700 {
    height: 40px
}

.steps ul {
    height: 50px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-evenly;
    position: relative
}

.steps ul:before {
    content: "";
    width: 70%;
    height: 1px;
    /* background: var(--yellow); */
    position: absolute;
    top: 50%;
    transform: translateY(-50%)
}

.steps li {
    display: inline-block;
    width: calc(33.33333% - 10px);
    z-index: 2
}

.steps li.current-step a,
.steps li.current a {
    /* background: var(--yellow) !important */
}

.steps li a {
    padding: 4px 0;
    width: 60%;
    display: inline-block;
    border-radius: 25px;
    color: #fff !important;
    /* border: 1px solid var(--yellow) !important */
}

.steps li.disabled-step a .yellow-img-address,
.steps li a .white-img-address {
    display: inline
}

.white-img,
.white-img-address,
.yellow-img,
.yellow-img-address {
    width: 20px;
    margin-right: 3px;
    vertical-align: sub
}

label {
    padding-bottom: 5px;
    font-size: 13px
}

#sidebar {
    margin-top: 74px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    background: #fff;
    width: 20%
}

.checkout-form {
    width: 80%
}

.current-info,
.rightStepBetwen {
    display: none !important
}
.list-icon {
    margin-top: -2px;
    ;
}

.account-list {
    right: -36px !important;
}

.unauth .account-list {
    right: 44px !important;
}

.ps-dropdown ul {
    min-width: 170px !important;
}

.cart-button span {
    height: 39px !important;
    top: -6px;
}

.ps-product--horizontal a.ps-product__title {
    height: 38px;
    display: block;
    overflow: hidden;
}

.owl-carousel.owl-drag .owl-item{
    margin-bottom: 1px;
}
.ps-product .ps-product__actions button{
    background: #fff;
}

:root {
    --main-color: var(--main-color) !important;
    --englishFont: 'Roboto',sans-serif!important;
    --sub-main-color:#19A4E3 !important;
    --green: #3e955e;
    --padding: 1em 0.95em;
    --width: 65%
}

body,
body :not(html):not(style):not(br):not(tr):not(code) {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box
}

body {
    background-color: #f5f8fa !important;
    color: #74787e !important;
    height: 100%;
    -ms-hyphens: auto;
    hyphens: auto;
    line-height: 1.4;
    margin: 0;
    -moz-hyphens: auto;
    -ms-word-break: break-all;
    width: 100% !important;
    -webkit-hyphens: auto;
    -webkit-text-size-adjust: none;
    word-break: break-all;
    word-break: break-word
}

blockquote,
ol,
p,
ul {
    line-height: 1.4;
    text-align: left
}

a {
    color: #3869d4 !important
}

a img {
    border: none
}

h1 {
    font-size: 19px
}

h1,
h2 {
    color: #2f3133 !important;
    font-weight: 700;
    margin-top: 0;
    text-align: left
}

h2 {
    font-size: 16px
}

h3 {
    color: #2f3133 !important;
    font-size: 14px;
    font-weight: 700
}

h3,
p {
    margin-top: 0;
    text-align: left
}

p {
    color: #74787e !important;
    font-size: 1rem;
    line-height: 1.5em
}

p.sub {
    font-size: 12px
}

img {
    max-width: 100%
}

.wrapper {
    background-color: #fff !important;
    border-color: #fff !important
}

.wrapper,
.wrapper>tbody>tr>td .content {
    margin: 0;
    padding: 0;
    width: 100%;
    -premailer-cellpadding: 0;
    -premailer-cellspacing: 0;
    -premailer-width: 100%
}

.header {
    padding: 25px 0;
    text-align: center
}

.header a {
    color: #bbbfc3 !important;
    font-size: 19px;
    font-weight: 700;
    text-decoration: none;
    text-shadow: 0 1px 0 #fff
}

.body {
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    margin: 0
}

.body,
.inner-body {
    background-color: #fff !important;
    padding: 0;
    width: 100%;
    -premailer-cellpadding: 0;
    -premailer-cellspacing: 0;
    -premailer-width: 100%
}

.inner-body {
    margin: 20px auto
}

.subcopy {
    border-top: 1px solid #edeff2;
    margin-top: 25px;
    padding-top: 25px
}

.subcopy p {
    font-size: 12px
}

.table table {
    margin: 30px auto;
    width: 100%;
    -premailer-cellpadding: 0;
    -premailer-cellspacing: 0;
    -premailer-width: 100%
}

.table th {
    border-bottom: 1px solid #edeff2;
    padding-bottom: 8px;
    margin: 0
}

.table td {
    color: #74787e !important;
    font-size: 15px;
    line-height: 18px;
    padding: 10px 0;
    margin: 0
}

.content-cell {
    padding: 35px
}

.action {
    margin: 30px auto;
    padding: 0;
    text-align: center;
    width: 100%;
    -premailer-cellpadding: 0;
    -premailer-cellspacing: 0;
    -premailer-width: 100%
}

.button {
    border-radius: 3px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, .16);
    color: #fff !important;
    display: inline-block;
    text-decoration: none;
    -webkit-text-size-adjust: none
}

.button-blue,
.button-primary {
    background-color: #3097d1 !important;
    border-color: #3097d1;
    border-style: solid;
    border-width: 10px 18px
}

.button-green,
.button-success {
    background-color: #2ab27b !important;
    border-color: #2ab27b;
    border-style: solid;
    border-width: 10px 18px
}

.button-error,
.button-red {
    background-color: #bf5329 !important;
    border-color: #bf5329;
    border-style: solid;
    border-width: 10px 18px
}

.panel {
    margin: 0 0 21px
}

.panel-content {
    background-color: #edeff2 !important;
    padding: 16px
}

.panel-item {
    padding: 0
}

.panel-item p:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0
}

.promotion {
    background-color: #fff !important;
    border: 2px dashed #9ba2ab;
    margin: 25px 0;
    padding: 24px;
    width: 100%;
    -premailer-cellpadding: 0;
    -premailer-cellspacing: 0;
    -premailer-width: 100%
}

.promotion h1,
.promotion p {
    text-align: center
}

.promotion p {
    font-size: 15px
}

.steps table :not(p):not(img) {
    border: 1px solid #7a7c7d
}

.steps table {
    border-collapse: collapse;
    table-layout: fixed;
    margin: auto;
    -premailer-cellpadding: 0;
    -premailer-cellspacing: 0;
    width: 100%
}

.steps td {
    padding: 20px 10px;
    text-align: center;
    width: 25% !important
}

.steps td img {
    width: 50px
}

.steps td p:first-of-type {
    margin-top: 8px;
    margin-bottom: 3px
}

.steps td p {
    font-size: .9rem;
    color: #7a7c7d !important;
    text-align: center;
    font-weight: 600
}

.order-status {
    margin: 20px auto !important;
    padding: 35px;
    background-color: #bde7fa
}

.order-status *,
.order-status h3 {
    text-align: center;
    color: #000 !important
}

.order-status h3 {
    font-size: 22px;
    font-weight: 800;
    margin-top: 0
}

.order-status h3 img {
    vertical-align: top;
    width: 30px
}

.order-status p {
    font-weight: 700;
    margin-top: 0;
    text-align: left
}

.order-status .text-center {
    text-align: center
}

.order-status p a {
    color: #306cbb !important;
    text-decoration: unset
}

.company-information,
.product-table {
    width: 100%;
    border: 1px solid #7a7c7d;
    margin-top: 25px
}

.product-table td {
    padding: 5px 10px
}

.product-table .seller>h4 {
    margin: 0;
    color: #000 !important;
    font-weight: 400;
    font-size: 18px
}

.product-table .seller>h4>.seller-title {
    color: var(--main-color) !important
}

.product-table .order-details {
    width: 30%
}

.product-table .order-details p {
    font-size: 15px;
    margin: 0;
    color: #000 !important;
    text-align: center
}

.product-table .order-details p .order-number {
    font-weight: 600
}

.product-table .product-details {
    display: inline-block;
    vertical-align: top;
    width: 53%
}

.product-table .product-details p {
    margin: 0;
    color: #000 !important;
    font-size: .81rem
}

.product-table .product-details p:first-of-type {
    font-size: .8rem
}

.product-table .product-price {
    display: inline-block;
    vertical-align: top;
    width: 22%;
    text-align: right
}

.product-table .product-price h2 {
    color: var(--main-color) !important;
    margin: 0;
    font-size: 1rem;
    white-space: nowrap;
    display: inline-block;
    vertical-align: top;
    text-align: right
}

.customer-details,
.product-table .border-between {
    border-bottom: 1px solid #ccc
}

.customer-details {
    margin-top: 25px
}

.customer-details :not(h3) {
    color: #000 !important;
    font-weight: 600;
    margin: 0 0 3px
}

.customer-details.margin-top-0 h3 {
    margin-top: 0
}

.customer-details h3 {
    color: var(--main-color) !important;
    font-size: 17px;
    margin: 15px 0 3px
}

.bank-card img {
    display: block
}

.mobile-store {
    padding: 30px 20px;
    position: relative
}

.mobile-store a {
    left: 0;
    height: 80px;
    border-radius: 3px
}

.media {
    padding: 30px 40px;
    background-color: var(--main-color) !important;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between
}

.media * {
    display: inline-block;
    vertical-align: top
}

.media img {
    width: 35px
}

.media h3 {
    font-size: 20px;
    color: #fff !important;
    margin: 0;
    line-height: 39px
}

.media form button,
.media form input {
    vertical-align: sub;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 1em .95em;
    text-align: center;
    border-radius: 37px;
    border: 1px solid #fff;
    outline: unset;
    box-shadow: none;
    font-size: 12px
}

.media form button {
    background-color: #fff !important;
    padding: 1em 2.25em;
    font-size: 12px;
    font-weight: 600
}

.remove-order {
    text-align: center;
    background-color: #f6f6f6 !important;
    padding: 25px
}

.remove-order p {
    color: #000 !important;
    margin: 0;
    text-align: center
}

button {
    cursor: pointer
}

.styled-button {
    background-color: var(--main-color) !important;
    vertical-align: sub;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 12px 25px;
    text-align: center;
    border-radius: 37px;
    border: 1px solid #fff;
    outline: unset;
    box-shadow: none;
    font-size: 12px;
    font-weight: 600;
    margin-top: 5px;
    color: #fff !important
}

.company-information {
    border: 1px dashed
}

.company-information * {
    color: #000 !important;
    font-size: 13px
}

.company-information span {
    font-weight: 600
}

.footer {
    margin: 0 auto;
    padding: 0
}

.footer img {
    margin: 20px 0 12px
}

.footer p {
    color: #000 !important;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 7px
}

.footer p:first-of-type {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px
}

.seller-footer {
    margin: 0 auto;
    padding: 0;
    text-align: center
}

.seller-footer img {
    margin: 20px 0 12px;
    text-align: center
}

.seller-footer p {
    color: #000 !important;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 7px;
    text-align: center
}

.seller-footer p:first-of-type {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 15px
}

.notify{
    z-index: 9999 !important;
}

.navigation {
    background-color: #fff
}

@media (max-width:1300px) {
    .navigation {
        display: none
    }
}

.navigation>.container,
.navigation>.ps-container {
    display: flex;
    flex-flow: row nowrap
}

.navigation>.container>*,
.navigation>.ps-container>* {
    width: 100%
}

.navigation__extra>li {
    position: relative;
    display: inline-block;
    /* margin-right: 9px !important; */
    margin-bottom: 7px;
    margin-right: 15px !important;
}

.navigation__extra>li a {
    font-size: 14px !important;
    font-weight: 400;
    color: #393E46 !important;
    font-family: 'Poppins', sans-serif;
    font-weight: 600 !important;
}

.navigation__extra>li:last-child {
    margin-right: 0;
    padding-right: 0
}

.navigation__extra>li:last-child:after {
    display: none
}

.navigation__extra .ps-dropdown img {
    margin-right: 8px
}

.navigation .navigation__left {
    max-width: 260px
}

.navigation .navigation__right {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px
}

.navigation .navigation__right ul.menu {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
    border-radius: 0 0 10px 10px;
    align-content: center;
    align-items: center;
    padding: 0 20px ;
}

.navigation .navigation__right ul.menu>li {
    position: unset
}

.navigation .navigation__right ul.menu>li.menu-item-has-children>a:after {
    content: ""
}

.navigation .navigation__right ul.menu>li.menu-item-has-children>a:before {
    border-left: 1px solid #fff;
    border-top: 1px solid #fff
}



/* .navigation .navigation__right ul.menu>li>a {
    padding: 20px 0;
    width: 100%;
    text-align: center
} */

.navigation .navigation__right ul.menu>li .mega-menu {
    border-radius: 0 0 30px 30px
}

.navigation .navigation__right ul.menu>li .mega-menu h4 {
    color: #f05e27
}

.navigation .navigation__right ul.menu>li .mega-menu ul.mega-menu__list li a {
    color: #929292;
    font-size: 13px
}

.header .header__extra {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 42px;
    transition: all .4s ease
}

.header .header__extra>i {
    font-size: 30px;
    line-height: 42px
}

.header .header__extra span {
    position: absolute;
    bottom: 0;
    right: -6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    vertical-align: top;
    width: 20px;
    height: 20px;
    color: #fff;
    background-color: #000;
    border-radius: 50%
}

.header .header__extra span i {
    font-size: 12px;
    font-style: normal;
    line-height: 1em;
    font-weight: 500
}

.header .header__extra:hover i {
    color: #fff
}

.header .header__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end
}

.header .header__actions>* {
    margin: 0 20px
}

.header .header__left {
    max-width: 300px;
    display: flex;
    align-items: center
}

.header .header__left .menu--product-categories {
    display: none
}

.header .header__top {
    padding: 20px 0;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, .15)
}

.header .header__top .container,
.header .header__top .ps-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly
}

.header .header__top .container>*,
.header .header__top .ps-container>* {
    width: 100%
}

.header.header--sticky .menu--product-categories .menu__toggle i {
    font-size: 30px
}

.header.header--sticky .menu--product-categories .menu__toggle span {
    font-size: 16px
}

.header.header--sticky .header__top {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    border-bottom: none;
    padding: 10px 0
}

.header.header--sticky .header__left .ps-logo {
    display: none
}

.header.header--sticky .header__left .menu--product-categories {
    display: block;
    background-color: transparent
}

@media (max-width:1199px) {
    .header {
        display: none
    }

    .header.header--mobile {
        display: block
    }
}

.ps-logo img {
    max-width: 160px
}

@media (max-width:767px) {
    .ps-logo img {
        min-width: 160px
    }
}

@media (max-width:767px) {
    .header--mobile .mobile.header__actions {
        width: 100% !important;
        height: 100% !important
    }
}

.header--standard .ps-block--user-header a:hover {
    color: #fff
}

.header--standard .header__top-links {
    width: 100%
}

.header--standard .header__top-links>li {
    display: inline-block;
    margin-right: 16px;
    padding-right: 15px;
    position: relative
}

.header--standard .header__top-links>li:after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    height: 15px;
    width: 0;
    border-right: 1px solid #e1e1e1
}

.header--standard .header__top-links>li>a {
    color: #666
}

.header--standard .header__top-links>li:last-child {
    margin-right: 0;
    padding-right: 0
}

.header--standard .header__top-links>li:last-child:after {
    display: none
}

.header--standard .header__top-links .language>a img {
    margin-right: 5px
}

.header--standard .header__top-links .ps-block--user-header .ps-block__left i {
    font-size: 14px
}

.header--standard .header__top-links .ps-block--user-header .ps-block__right a {
    display: inline-block;
    font-weight: 400;
    margin-right: 10px;
    color: #666
}

.header--standard .header__top-links .ps-block--user-header .ps-block__right a:first-child:after {
    content: "/";
    padding-left: 10px
}

.header--standard .header__top-links .ps-block--user-header .ps-block__right a:hover {
    color: #fff
}

.header--standard .header__top {
    padding: 10px 0;
    background-color: #fff;
    border-bottom: none
}

.header--standard .header__top .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center
}

.header--standard .header__top .header__left {
    max-width: 50%
}

.header--standard .header__top .header__left p {
    margin-bottom: 0;
    color: #666;
    line-height: 30px
}

.header--standard .header__top .header__left p strong {
    color: #000
}

.header--standard .header__top .header__right {
    text-align: right;
    max-width: 50%
}

.header--standard .header__content-left {
    max-width: 270px;
    padding-right: 30px;
    display: flex;
    align-items: center
}

.header--standard .header__content-left .ps-logo {
    margin-right: 30px
}

.header--standard .header__content-left .ps-logo img {
    min-width: 160px
}

.header--standard .header__content-center {
    max-width: 600px
}

.header--standard .menu--product-categories .menu__toggle i {
    font-size: 30px
}

.header--standard .ps-form--quick-search {
    width: 600px
}

.header--standard .ps-form--quick-search button {
    /* background-color: #fcb800; */
    color: #000
}

.header--standard .ps-form--quick-search .form-group--icon {
    border: 1px solid #e1e1e1;
    min-width: 80px;
    border-radius: 4px 0 0 4px
}

.header--standard .ps-form--quick-search .form-group--icon select {
    height: 40px;
    border: none
}

.header--standard .ps-form--quick-search input {
    border: 1px solid #e1e1e1;
    border-left: none
}

.header--standard .header__content {
    padding: 20px 0
}

.header--standard .header__content .menu--product-categories .menu__toggle:hover:before {
    display: none
}

.header--standard .header__content .container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center
}

.header--standard .header__content .container>* {
    width: 100%
}

.header--standard .header__extra span {
    background-color: #fff
}

.header--standard .header__extra span i {
    color: #000;
    font-weight: 700
}

.header--standard.header--sticky .header__top {
    position: relative
}

.header--standard.header--sticky .header__content {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    background-color: #fff
}

.header--standard.header--sticky .header__content .menu--product-categories {
    display: block
}

.header--standard.header--sticky .ps-logo {
    display: none
}

@media (max-width:1199px) {
    .header--standard {
        display: none
    }
}

.header--product {
    visibility: hidden;
    opacity: 0;
    height: 0
}

.header--product .navigation {
    transition: transform .25s ease;
    transform: translateY(-50%)
}

.header--product.header--sticky {
    visibility: visible;
    opacity: 1;
    height: auto
}

.header--product.header--sticky .navigation {
    padding: 10px 0;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    border-bottom: 1px solid #eaeaea;
    transform: translateY(0)
}

.header--mobile {
    position: relative;
    top: 0;
    width: 100%;
    left: 0;
    z-index: 9999;
    text-align: center;
    border-bottom: 0;
    background-color: #fff;
    transition: all .4s cubic-bezier(.455, .03, .515, .955)
}

.header--mobile:after {
    clear: both;
    content: "";
    display: table
}

.header--mobile .navigation__extra {
    display: inline-block
}

.header--mobile .navigation__extra li {
    margin-right: 5px;
    padding-right: 5px
}

.header--mobile .navigation__extra li:after {
    display: none
}

.header--mobile .header__extra span {
    background-color: #fff
}

.header--mobile .header__actions i,
.header--mobile .ps-block--user-header i {
    font-size: 24px
}

.header--mobile .header__top {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    background-color: #f4f5f5;
    padding: 15px 30px
}

.header--mobile .header__top>* {
    width: 100%
}

.header--mobile .header__top .header__left {
    max-width: 40%
}

.header--mobile .header__top .header__left p {
    margin-bottom: 0
}

.header--mobile .header__top .header__right {
    max-width: 60%;
    text-align: right
}

.header--mobile .header__top .header__right .navigation__extra {
    display: inline-block
}
.header--mobile .navigation--mobile {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 10px 30px;
    border-bottom: none
}

.header--mobile .navigation--mobile .navigation__left {
    display: flex;
    align-items: center
}

.header--mobile .header__extra span {
    background-color: #000
}

.header--mobile .header__extra span i {
    color: #fff;
    font-weight: 600
}

.header--mobile.active {
    transform: translateX(270px)
}

.header--mobile.header--sticky .navigation--mobile {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background-color: #fff;
    -ms-box-shadow: 0 0 3px 0 rgba(0, 0, 0, .12);
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, .12)
}

@media (min-width:1200px) {
    .header--mobile {
        display: none
    }
}

@media (max-width:1199px) {
    .header--mobile .ps-search--mobile {
        display: none
    }
}

@media (min-width:768px) {
    .header--mobile .mobile.header__actions {
        width: 100%;
        height: 100%
    }
}

.header--mobile .mobile.header__actions .ps-cart--mini {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap
}

.header--mobile .mobile.header__actions .ps-cart--mini .header__extra .cart_count {
    background-color: #f05e27 !important
}

.header--mobile .mobile.header__actions .ps-cart--mini .header__extra img {
    position: relative;
    width: 30px;
    height: 42px;
    transition: all .4s ease;
    display: flex;
    justify-content: center;
    align-items: center
}

@media (min-width:768px) {
    .header--mobile .mobile.header__actions .ps-cart--mini .header__extra img {
        width: 100%;
        height: 100%
    }
}

@media (max-width:991px) {
    .header--mobile .header__top .header__left {
        display: none
    }

    .header--mobile .header__top .header__right {
        max-width: 100%;
        text-align: center
    }
}

@media (max-width:767px) {
    .header--mobile .navigation__extra li>a {
        display: none
    }
}

@media (max-width:575px) {
    .header--mobile .header__top {
        display: none
    }
}

@media (max-width:479px) {
    .header--mobile .header__top {
        display: none
    }

    .header--mobile .header__actions>* {
        margin: 0 20px 0 0
    }

    .header--mobile .header__actions i {
        font-size: 24px
    }

    .header--mobile .ps-block--user-header {
        margin-right: 0
    }

    .header--mobile .ps-block--user-header i {
        font-size: 24px
    }

    .header--mobile .ps-block--user-header .ps-block__right {
        display: none
    }

    .header--mobile .ps-search--mobile {
        display: block
    }
}

.header--mobile-product .header__back {
    vertical-align: middle;
    text-align: left
}

.header--mobile-product .header__back strong {
    font-size: 18px;
    vertical-align: middle
}

.header--mobile-product .header__back i {
    vertical-align: middle;
    margin-right: 16px;
    font-size: 24px;
    color: #000
}

.header--mobile-product .navigation--mobile .navigation__left {
    justify-content: flex-start
}

.header--mobile-categories .header__back {
    vertical-align: middle;
    text-align: left
}

.header--mobile-categories .header__back strong {
    font-size: 18px;
    vertical-align: middle
}

.header--mobile-categories .header__back i {
    vertical-align: middle;
    margin-right: 16px;
    font-size: 24px;
    color: #000
}

.header--mobile-categories .navigation--mobile .navigation__left {
    justify-content: flex-start
}

.header--mobile-categories .header__filter {
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f5f5f5
}

.header--mobile-categories .header__filter>* {
    flex-basis: 100%;
    max-width: 50%
}

.header--mobile-categories .header__filter button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    background-color: transparent;
    font-size: 14px
}

.header--mobile-categories .header__filter button:after {
    content: "";
    font-family: Linearicons;
    margin-left: 20px
}

.header--mobile-categories .header__filter button i {
    margin-right: 10px;
    font-size: 16px;
    font-size: 20px;
    color: #666
}

.header--mobile-categories .header__filter .header__sort {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px
}

.header--mobile-categories .header__filter .header__sort i {
    margin-right: 10px;
    font-size: 16px;
    font-size: 20px;
    color: #666
}

.header--mobile-categories .header__filter .header__sort .select2 .select2-selection {
    border: none;
    background-color: transparent
}

.header--mobile-categories .header__filter .header__sort .select2 .select2-selection .select2-selection__rendered {
    background-color: transparent;
    text-align: left
}

.header--mobile-categories .header__filter .header__sort .select2 .select2-selection .select2-selection__arrow:before {
    content: "";
    font-family: Linearicons
}

.header--mobile-categories .header__filter>button {
    border-right: 1px solid #ccc
}

.navigation--sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 320px;
    height: 100vh;
    overflow-y: auto;
    z-index: 10001;
    background-color: #fff;
    transform: translateX(-100%);
    transition: all .5s cubic-bezier(.7, 0, .3, 1) 0s
}

.navigation--sidebar .navigation__actions {
    text-align: center
}

.navigation--sidebar .navigation__actions .ps-dropdown {
    margin-bottom: 10px
}

.navigation--sidebar .navigation__actions .ps-dropdown>a {
    font-size: 1.4rem;
    color: #666
}

.navigation--sidebar .navigation__header {
    position: relative;
    text-align: center;
    padding: 15px 0;
    background-color: #fff
}

.navigation--sidebar .navigation__header h3 {
    margin-bottom: 0;
    font-weight: 600;
    color: #fff;
    font-size: 1.6rem;
    line-height: 20px;
    text-transform: uppercase;
    letter-spacing: .05em
}

.navigation--sidebar .navigation__header .ps-btn--close {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px
}

.navigation--sidebar .navigation__header .ps-btn--close:after,
.navigation--sidebar .navigation__header .ps-btn--close:before {
    background-color: #fff;
    height: 60%
}

.navigation--sidebar .navigation__content {
    padding-top: 10px;
    padding-bottom: 70px
}

.navigation--sidebar .header__actions a {
    display: inline-block;
    margin: 0 5px;
    line-height: 40px
}

.navigation--sidebar .header__actions a i {
    font-size: 24px;
    color: #000;
    vertical-align: middle
}

.navigation--sidebar .header__actions .ps-dropdown a {
    padding-right: 0
}

.navigation--sidebar .header__actions .ps-dropdown a:after {
    display: none
}

.navigation--sidebar .header__actions .ps-cart-toggle {
    position: relative;
    display: inline-block;
    padding: 5px 0;
    line-height: 30px
}

.navigation--sidebar .header__actions .ps-cart-toggle span {
    position: absolute;
    top: 40%;
    left: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translate(25%, -100%);
    background-color: #000
}

.navigation--sidebar .header__actions .ps-cart-toggle span i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-style: normal;
    font-size: 11px
}

.navigation--sidebar.active {
    transform: translateX(0)
}

@media (min-width:1200px) {
    .navigation--sidebar .navigation__actions {
        display: none
    }
}

@media (max-width:479px) {
    .navigation--sidebar {
        width: 100%
    }
}

.navigation--list {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 10002;
    padding: 10px 30px;
    border-top: 1px solid #ccc;
    background-color: #fff
}

.navigation--list .navigation__item {
    text-align: center
}

.navigation--list .navigation__item i {
    font-size: 24px
}

.navigation--list .navigation__item span {
    display: block
}

.navigation--list .navigation__item.active i,
.navigation--list .navigation__item.active span {
    color: #fff
}

.navigation--list .navigation__content {
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center
}

@media (min-width:1200px) {
    .navigation--list {
        display: none
    }
}

.navigation--mobile-product {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 10002;
    border-top: 1px solid #ccc;
    background-color: #fff;
    display: flex;
    justify-content: space-between
}

.navigation--mobile-product>* {
    width: 100%;
    flex-basis: 50%;
    font-size: 16px;
    border-radius: 0;
    text-align: center
}

.navigation--mobile-product .ps-btn--black {
    color: #fff
}

@media (min-width:1200px) {
    .navigation--mobile-product {
        display: none
    }
}

.navigation--sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000
}

.navigation--sticky,
.navigation--sticky .navigation {
    background-color: #fff
}

.navigation--sticky .header__top {
    display: none
}

.navigation--sticky.navigation--pin {
    transform: translate(0)
}

.navigation--sticky.navigation--unpin {
    transform: translateY(-100%)
}

.navigation--sticky.header--1.navigation--pin .navigation {
    background-color: rgba(0, 0, 0, .95)
}

.navigation--sticky.header--1.navigation--pin.header--black .navigation {
    background-color: hsla(0, 0%, 100%, .95)
}

.navigation--sticky.header--2.navigation--pin.active {
    background-color: #fff;
    transform: translate(270px)
}

@media (max-width:1199px) {
    .navigation--sticky.navigation--unpin {
        transform: translate(0)
    }
}

.ps-site-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    height: 100vh;
    background-color: rgba(0, 0, 0, .75);
    transition: all .4s ease;
    visibility: hidden;
    opacity: 0
}

.ps-site-overlay.active {
    visibility: visible;
    opacity: 1
}

.ps-search--mobile {
    max-width: 450px;
    margin: 0 auto;
    padding: 10px 20px
}

.notify.success {
    border: unset;
    border-color: #4caf50;
    border-left: 5px solid #4caf50
}

.notify.success,
.notify.warning {
    background: #fff;
    color: #000;
    opacity: 1
}

.notify.warning {
    border: unset;
    border-color: #fff8e1;
    border-left: 5px solid #ffc107
}
    .searchResult {
    border: 1px solid #dedede;
    background: #fff;
    box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 18%);
    display: block;
    overflow: hidden;
    padding: 10px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    position: absolute;
    width: 76%;
    z-index: 999;
    margin-top: 12%;
}
.autoCompleteList li{
    padding-bottom:5px;
}
.listTitle{
    padding-bottom:5px;

}
.border-secondary {
  border-color: #6c757d !important;
}

.ps-form--quick-search {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    border-color: #d9d9d9 !important;
    border-radius: 5px
}

.ps-form--quick-search .form-control {
    background-color: #fff;
    color: #000;
    height: 50px;
    border: none;
    border-radius: 0;
    font-size: 16px;
    font-weight: 400
}

.ps-form--quick-search ::-moz-placeholder {
    color: #d9d9d9 !important
}

.ps-form--quick-search :-ms-input-placeholder {
    color: #d9d9d9 !important
}

.ps-form--quick-search ::placeholder {
    color: #d9d9d9 !important
}

.ps-form--quick-search .form-group--icon {
    background-color: #fff;
    border-radius: 4px 0 0 4px
}

.ps-form--quick-search .form-group--icon i {
    z-index: 1
}

.ps-form--quick-search select.form-control {
    border-right: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    padding: 0 10px;
    text-indent: 10px;
    position: relative;
    z-index: 2;
    background-color: transparent
}

.ps-form--quick-search select.form-control::-webkit-input-placeholder {
    color: #666
}

.ps-form--quick-search select.form-control:-moz-placeholder,
.ps-form--quick-search select.form-control::-moz-placeholder {
    color: #666
}

.ps-form--quick-search select.form-control:-ms-input-placeholder {
    color: #666
}

.ps-form--quick-search a,
.ps-form--quick-search button {
    /* background-color: #F05E27; */
    border-radius: 5px;
    color: #fff;
    border: none;
    font-weight: 700;
    height: 35px;
    padding: 0 6.6px;
    margin-top: 7px;
    margin-right: 7px
}

/* .ps-form--quick-search a:hover,
.ps-form--quick-search button:hover {
    background-color: #F05E27
} */

.ps-form--quick-search a.search-sidebar-button,
.ps-form--quick-search button.search-sidebar-button {
    height: 50px;
    margin-left: -.36rem !important;
    border-radius: 5px 0 0 5px
}

@media (min-width:1300px) {

    .ps-form--quick-search a.search-sidebar-button,
    .ps-form--quick-search button.search-sidebar-button {
        display: none !important
    }
}

.ps-checkbox label {
    color: #214252
}

.ps-checkbox label:before {
    border-radius: 4px !important
}

.ps-form--widget-search {
    position: relative;
    margin-bottom: 20px
}

.ps-form--widget-search input {
    height: 34px;
    background-color: #fff;
    border-radius: 0
}

.ps-form--widget-search button {
    border: none;
    background-color: transparent;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px
}

.ps-form--review h4 {
    margin-bottom: 20px;
    display: block;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2em;
    text-transform: uppercase
}

.ps-form--review p sup {
    margin-left: 5px;
    color: #ec0101
}

.ps-form--review .form-group__rating {
    display: flex;
    align-items: center
}

.ps-form--review .form-group__rating label {
    margin-bottom: 0;
    line-height: 20px;
    margin-right: 15px
}

.ps-form--review .form-group__rating .br-wrapper {
    line-height: 20px
}

.ps-form--review .form-group__rating .br-wrapper a {
    font-size: 14px
}

.ps-form--review .form-group__rating .br-wrapper.br-theme-fontawesome-stars .br-widget {
    height: auto;
    line-height: 20px
}

.ps-form--review .form-control {
    border-radius: 0
}

.ps-form--review button {
    border-radius: 0;
    font-weight: 600
}

.ps-form--post-comment h3 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 24px;
    color: #000
}

.ps-form--post-comment .submit {
    text-align: center
}

.ps-form--post-comment .submit .ps-btn {
    padding: 0 30px;
    height: 50px
}

.ps-form--contact-us .form-control {
    background-color: #fff
}

.ps-form--contact-us .submit {
    text-align: center
}

.ps-form--contact-us .submit button {
    height: 50px;
    padding: 0 30px
}

.ps-form--account {
    max-width: 430px;
    margin: 0 auto;
    padding-top: 130px
}

.ps-form--account .ps-tab-list {
    text-align: center;
    margin-bottom: 30px
}

.ps-form--account .ps-tab-list li {
    display: inline-block;
    padding: 0 15px
}

.ps-form--account .ps-tab-list li a {
    font-size: 30px;
    color: #666;
    font-weight: 600
}

.ps-form--account .ps-tab-list li.active a {
    color: #000
}

.ps-form--account .form-forgot {
    position: relative
}

.ps-form--account .form-forgot input {
    padding-right: 100px
}

.ps-form--account .form-forgot>a {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    color: #06c
}

.ps-form--account .form-forgot>a:hover {
    color: #fff
}

.ps-form--account .ps-checkbox>label {
    color: #000
}

.ps-form--account .ps-checkbox>label:before {
    border-radius: 4px !important
}

.ps-form--account .ps-list--social {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin: 0 -5px
}

.ps-form--account .ps-list--social li {
    padding: 0 5px;
    width: 100%;
    text-align: center;
    margin-right: 0
}

.ps-form--account .ps-list--social li a {
    display: block;
    line-height: 20px;
    padding: 15px 0
}

.ps-form--account .ps-list--social li a i {
    color: #fff;
    text-align: center
}

.ps-form--account .ps-list--social li a.facebook {
    background-color: #3b5999
}

.ps-form--account .ps-list--social li a.google {
    background-color: #dd4b39
}

.ps-form--account .ps-list--social li a.twitter {
    background-color: #55acee
}

.ps-form--account .ps-list--social li a.instagram {
    background-color: #e4405f
}

.ps-form--account .ps-form__content {
    padding: 30px 30px 0
}

.ps-form--account .ps-form__content h5 {
    margin: 0 0 25px;
    font-size: 16px;
    font-weight: 400
}

.ps-form--account .ps-form__footer {
    padding: 30px
}

.ps-form--account .ps-tab {
    background-color: #fff
}

.ps-form--order-tracking {
    max-width: 630px;
    margin: 0 auto 50px
}

.ps-form--order-tracking .form-group {
    margin-bottom: 30px
}

.ps-form--order-tracking .form-group>label {
    font-size: 18px;
    font-weight: 600;
    color: #000
}

.ps-form--order-tracking .form-group input {
    border-color: #bfbfbf
}

.ps-form--order-tracking .form-group input::-webkit-input-placeholder {
    color: #a9a9a9
}

.ps-form--order-tracking .form-group input:-moz-placeholder,
.ps-form--order-tracking .form-group input::-moz-placeholder {
    color: #a9a9a9
}

.ps-form--order-tracking .form-group input:-ms-input-placeholder {
    color: #a9a9a9
}

@media (max-width:991px) {
    .ps-form--order-tracking .form-group>label {
        font-size: 16px;
        font-weight: 500
    }
}

.ps-form--search-mobile input {
    height: 40px;
    background-color: #fff;
    border: none;
    border-radius: 0
}

.ps-form--search-mobile button {
    width: 40px;
    height: 40px;
    background-color: #000;
    border: none
}

.ps-form--search-mobile button i {
    color: #fff
}

.ps-form--subscribe-popup {
    padding: 60px 50px
}

.ps-form--subscribe-popup h4 {
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 400
}

.ps-form--subscribe-popup h4 strong {
    color: #fff
}

.ps-form--subscribe-popup p {
    margin-bottom: 20px
}

.ps-form--subscribe-popup input {
    margin-bottom: 20px;
    height: 40px;
    border: 2px solid #c9c9c9
}

.ps-form--subscribe-popup button {
    height: 40px;
    width: auto;
    padding: 0 30px
}

.ps-form--subscribe-popup .ps-checkbox>label {
    color: #000
}

.ps-form--subscribe-popup .ps-checkbox>label:before {
    border-radius: 4px
}

.ps-form--subscribe-popup .ps-form__content {
    max-width: 360px;
    text-align: center
}

.ps-form--vendor-datetimepicker {
    margin-bottom: 24px
}

.ps-form--vendor-datetimepicker .input-group {
    border: none;
    margin-bottom: 10px
}

.ps-form--vendor-datetimepicker .input-group:after {
    content: "";
    font-family: Linearicons;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    font-size: 16px
}

.ps-form--vendor-datetimepicker .input-group input {
    height: 40px
}

.ps-form--vendor-datetimepicker .input-group .input-group-text {
    padding: 0 20px;
    font-size: 14px;
    min-width: 60px;
    text-align: center;
    font-weight: 500;
    color: #000;
    border-radius: 0
}

.ps-form--vendor-datetimepicker button {
    background-color: #8a0;
    border-radius: 0;
    height: 40px;
    padding: 0 30px;
    color: #fff
}

.ps-form--vendor-datetimepicker button i {
    vertical-align: middle;
    margin-right: 4px
}

.ps-form--vendor-datetimepicker button:hover {
    background-color: #9cc400
}

.ps-form--photo-search .select2 {
    position: relative
}

.ps-form--photo-search .select2:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 1px;
    height: 50px;
    background-color: #dfdfdf;
    z-index: 20
}

.ps-form--photo-search .select2 .select2-selection {
    position: relative;
    height: 60px;
    display: flex;
    align-items: center;
    border: none;
    min-width: 190px;
    border-radius: 0 6px 6px 0
}

.ps-form--photo-search .select2 .select2-selection .select2-selection__rendered {
    width: 100%;
    font-weight: 600;
    color: #000
}

.ps-form--photo-search .form-group--icon {
    margin-bottom: 0;
    width: 100%
}

.ps-form--photo-search .form-group--icon i {
    right: auto;
    left: 20px;
    font-size: 18px;
    color: #000
}

.ps-form--photo-search .form-group--icon i:before {
    font-size: inherit
}

.ps-form--photo-search .form-group--icon input {
    background-color: #fff;
    border: none;
    height: 60px;
    text-indent: 30px;
    padding-left: 20px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 6px 0 0 6px
}

.ps-form--photo-search .form-group--icon input::-webkit-input-placeholder {
    font-weight: 400;
    font-size: 14px
}

.ps-form--photo-search .form-group--icon input:-moz-placeholder,
.ps-form--photo-search .form-group--icon input::-moz-placeholder {
    font-weight: 400;
    font-size: 14px
}

.ps-form--photo-search .form-group--icon input:-ms-input-placeholder {
    font-weight: 400;
    font-size: 14px
}

.ps-form--photo-search .ps-form__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px
}

.ps-form--photo-search .ps-form__footer a {
    display: inline-block;
    margin-right: 10px
}

.ps-form--photo-search .ps-form__footer a:hover {
    color: #c81919
}

.ps-form--photo-search .ps-form__footer a:last-child {
    margin-right: 0
}

@media (max-width:480px) {
    .ps-form--photo-search .ps-form__content {
        align-items: flex-start;
        flex-flow: column-reverse wrap
    }

    .ps-form--photo-search .ps-form__content .select2 {
        margin-bottom: 20px;
        min-width: 100%
    }

    .ps-form--photo-search .ps-form__content .select2 .select2-selection {
        margin: 0 auto
    }
}

.ps-form--checkout h4 {
    margin-bottom: 20px;
    font-weight: 600
}

@media (min-width:768px) {
    .ps-form--checkout .ps-form__submit {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center
    }
}

.ps-form--account-setting .ps-form__header h3 {
    font-weight: 600
}

.ps-search {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 99999;
    transform-style: preserve-3d;
    visibility: hidden;
    opacity: 0;
    transition: all .75s cubic-bezier(.7, 0, .3, 1);
    transition-delay: 0
}

.ps-search:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .95);
    transition: transform .6s cubic-bezier(.7, 0, .3, 1);
    transform: scaleY(0);
    transform-origin: 50% 100%
}

.ps-search__content {
    max-width: 1200px;
    width: 100%;
    padding: 0 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}

.ps-search .ps-form--primary-search {
    transform: translateY(100%);
    transition: all .6s cubic-bezier(.7, 0, .3, 1);
    visibility: hidden;
    opacity: 0
}

.ps-search>.ps-btn--close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 50px;
    height: 50px;
    background-color: #000;
    z-index: 1000;
    transform: scale(0) rotate(0);
    border-radius: 50%;
    transition: all .6s cubic-bezier(.7, 0, .3, 1);
    border: none
}

.ps-search>.ps-btn--close:after,
.ps-search>.ps-btn--close:before {
    background-color: #fff;
    height: 50%
}

.ps-search>.ps-btn--close:hover {
    background-color: #f44336
}

.ps-search.active {
    visibility: visible;
    opacity: 1;
    transition-delay: 0s
}

.ps-search.active:before {
    transform: scaleX(1);
    transform-origin: 50% 0
}

.ps-search.active>.ps-btn--close {
    visibility: visible;
    opacity: 1;
    transform: scale(1) rotate(180deg);
    transition-delay: .75s
}

.ps-search.active .ps-form--primary-search {
    transform: translateY(0);
    transition-delay: .35s;
    visibility: visible;
    opacity: 1
}

@media (max-width:479px) {
    .ps-search__content {
        padding: 0 1.5rem
    }
}

.ps-section--default {
    margin-bottom: 80px
}

.ps-section--default .ps-section__header {
    margin-bottom: 50px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e3e3e3
}

.ps-section--default .ps-section__header h3 {
    margin-bottom: 0;
    font-weight: 600;
    font-size: 20px
}

.ps-section--default .ps-section__links {
    display: inline-block
}

.ps-section--default .ps-section__links li {
    display: inline-block;
    vertical-align: top;
    margin-right: 30px
}

.ps-section--default .ps-section__links li a {
    color: #666
}

.ps-section--default .ps-section__links li a:hover {
    color: #fff
}

.ps-section--default .ps-section__links li:last-child {
    margin-right: 0
}

.ps-section--gray {
    padding: 70px 0;
    background-color: #f4f5f5
}

@media (max-width:767px) {
    .ps-section--gray {
        padding: 50px 0
    }
}

@media (max-width:479px) {
    .ps-section--gray {
        padding: 35px 0
    }
}

.ps-section--vendor {
    padding: 100px 0
}

.ps-section--vendor .ps-section__header {
    text-align: center;
    padding-bottom: 90px
}

.ps-section--vendor .ps-section__header p {
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: 600;
    color: #666;
    text-transform: uppercase
}

.ps-section--vendor .ps-section__header h4 {
    font-weight: 400;
    color: #000;
    font-size: 30px
}

@media (max-width:991px) {
    .ps-section--vendor {
        padding: 75px 0
    }

    .ps-section--vendor .ps-section__header {
        padding-bottom: 50px
    }

    .ps-section--vendor .ps-section__header p {
        margin-bottom: 16px
    }
}

@media (max-width:767px) {
    .ps-section--vendor {
        padding: 60px 0
    }

    .ps-section--vendor .ps-section__header h4 {
        font-size: 24px
    }
}

@media (max-width:479px) {
    .ps-section--vendor {
        padding: 50px 0
    }

    .ps-section--vendor .ps-section__header p {
        font-size: 14px;
        margin-bottom: 10px
    }

    .ps-section--vendor .ps-section__header h4 {
        font-size: 24px
    }
}

.ps-section--shopping {
    padding: 100px 0
}

.ps-section--shopping .ps-section__header {
    text-align: center;
    padding-bottom: 100px
}

.ps-section--shopping .ps-section__header h1 {
    font-size: 48px;
    font-weight: 600
}

@media (max-width:991px) {
    .ps-section--shopping {
        padding: 75px 0
    }

    .ps-section--shopping .ps-section__header h1 {
        font-size: 36px
    }
}

@media (max-width:767px) {
    .ps-section--shopping {
        padding: 60px 0
    }

    .ps-section--shopping .ps-section__header {
        padding-bottom: 40px
    }

    .ps-section--shopping .ps-section__header h1 {
        font-size: 30px
    }
}

@media (max-width:479px) {
    .ps-section--shopping {
        padding: 50px 0
    }
}

.ps-newsletter {
    padding: 65px 0;
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1
}

@media (max-width:767px) {
    .ps-newsletter {
        padding: 50px 0
    }
}

.ps-product-list .ps-section__links {
    display: inline-block
}

.ps-product-list .ps-section__links li {
    display: inline-block;
    vertical-align: top;
    margin-right: 30px
}

.ps-product-list .ps-section__links li a {
    color: #666
}

.ps-product-list .ps-section__links li a:hover {
    color: #fff
}

.ps-product-list .ps-section__links li:last-child {
    margin-right: 0
}

.ps-product-list .ps-section__header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    background-color: #f4f4f4;
    border-bottom: 1px solid #e3e3e3
}

.ps-product-list .ps-section__header h3 {
    margin-bottom: 0;
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
    line-height: 1
}

.ps-product-list .ps-section__content {
    padding-top: 55px
}

.ps-product-list--2 .ps-section__header {
    background-color: transparent;
    border-bottom: 1px solid #e1e1e1
}

.ps-product-list--2 .ps-section__header h3 {
    font-size: 24px;
    font-weight: 600
}

@media (max-width:1199px) {
    .ps-product-list .ps-section__header {
        flex-flow: row wrap
    }
}

@media (max-width:991px) {
    .ps-product-list .ps-section__header h3 {
        padding-bottom: 10px
    }
}

.ps-shopping-product {
    min-height: 80vh
}

@media (max-width:1199px) {
    .ps-shopping-product .ps-product {
        margin-bottom: 30px
    }
}

@media (max-width:767px) {
    .ps-shopping-product .row {
        margin: 0 -2px
    }

    .ps-shopping-product .row>* {
        padding: 0 2px
    }

    .ps-shopping-product .ps-product {
        margin-bottom: 4px
    }

    .ps-shopping-product .ps-product .ps-product__badge {
        top: 5px;
        right: 5px
    }
}

@media (max-width:1440px) and (min-width:1200px) {
    .ps-new-arrivals .ps-section__content .row {
        margin: 0
    }

    .ps-new-arrivals .ps-section__content .col-12 {
        padding: 0
    }
}

@media (max-width:991px) {
    .ps-new-arrivals .ps-section__content .col-12 {
        max-width: 50%;
        flex-basis: 50%
    }
}

@media (max-width:600px) {
    .ps-new-arrivals .ps-section__content .col-12 {
        max-width: 100%;
        flex-basis: 100%
    }
}

.ps-top-categories h3 {
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 1em;
    color: #000;
    font-weight: 600
}

@media (min-width:1680px) {
    .ps-top-categories .row .col-xl-2 {
        max-width: 12.5%
    }
}

.ps-deal-of-day .ps-section__header {
    margin-bottom: 65px;
    padding-bottom: 10px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc
}

.ps-deal-of-day .ps-section__header>a {
    display: inline-block;
    padding-bottom: 2px;
    color: #000;
    border-bottom: 1px solid #000;
    min-width: 60px
}

.ps-deal-of-day .ps-section__header>a:hover {
    color: #fff;
    border-color: #fff
}

.ps-shop-brand {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center
}

@media (max-width:767px) {
    .ps-shop-brand {
        flex-flow: row wrap
    }

    .ps-shop-brand>* {
        max-width: 20%;
        padding: 5px 10px
    }
}

@media (max-width:479px) {
    .ps-shop-brand>* {
        max-width: 25%
    }
}

.ps-layout--shop {
    padding-bottom: 90px;
    display: flex;
    flex-flow: row nowrap
}

@media (max-width:1199px) {
    .ps-layout--shop .ps-shopping__header {
        padding-left: 15px !important
    }

    .ps-layout--shop .row {
        margin-left: 0
    }
}

.ps-layout--shop>* {
    width: 100%
}

.ps-layout--shop .ps-layout__left {
    width: 100%;
    min-width: 310px;
    max-width: 310px;
    padding-right: 15px;
    padding-left: 30px
}

.ps-layout--shop .ps-layout__right {
    max-width: calc(100% - 320px)
}

.ps-layout--shop .ps-layout__right .owl-slider {
    max-width: 100%
}

@media (max-width:1199px) {
    .ps-layout--shop {
        flex-flow: column-reverse wrap
    }

    .ps-layout--shop .ps-layout__left {
        max-width: 100%;
        padding-right: 0;
        display: none
    }

    .ps-layout--shop .ps-layout__right {
        max-width: 100%;
        margin-bottom: 50px
    }
}

@media (max-width:767px) {
    .ps-layout--shop {
        padding-bottom: 45px
    }
}

.ps-shopping .select2 {
    display: inline-block
}

.ps-shopping .select2 .select2-selection__rendered {
    padding: 6px 20px
}

.ps-shopping .ps-shopping__view {
    display: flex;
    flex-flow: row nowrap;
    align-items: center
}

.ps-shopping .ps-shopping__view p {
    margin-bottom: 0;
    margin-right: 20px;
    color: #000
}

.ps-shopping .ps-shopping__view ul li {
    display: inline-block;
    vertical-align: top;
    margin-right: 10px
}

.ps-shopping .ps-shopping__view ul li a {
    font-size: 24px;
    color: #999
}

.ps-shopping .ps-shopping__view ul li:last-child {
    margin-right: 0
}

.ps-shopping .ps-shopping__view ul li.active a {
    color: #000
}

.ps-shopping .ps-shopping__actions {
    display: flex;
    flex-flow: row nowrap;
    align-items: center
}

.ps-shopping .ps-shopping__actions .ps-shopping__view {
    padding-left: 40px
}

.ps-shopping .ps-shopping__header {
    margin-bottom: 40px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    background-color: #f5f5f5;
    align-items: center;
    padding: 8px 15px 20px
}

.ps-shopping .ps-shopping__header p {
    margin-bottom: 0;
    display: inline-block
}

.ps-shopping .ps-shopping__header p strong {
    color: #000
}

.ps-shopping .ps-shop__filter-mb {
    font-size: 16px;
    vertical-align: top;
    display: flex;
    color: #000;
    align-items: center;
    font-weight: 500;
    text-transform: uppercase;
    border: 0;
    background: transparent
}

.ps-shopping .ps-shop__filter-mb i {
    font-weight: 700;
    font-size: 18px;
    margin-right: 10px
}

@media (min-width:1200px) {
    .ps-shopping .ps-shop__filter-mb {
        display: none
    }
}

@media (max-width:1680px) and (min-width:1440px) {
    .ps-shopping .row .col-xl-2 {
        max-width: 20%;
        flex-basis: 20%
    }
}

@media (max-width:1440px) and (min-width:1200px) {
    .ps-shopping .row .col-xl-2 {
        max-width: 25%;
        flex-basis: 25%
    }
}

@media (max-width:767px) {
    .ps-shopping .ps-shopping__header {
        flex-flow: row nowrap;
        justify-content: space-between
    }

    .ps-shopping .ps-shopping__header>* {
        flex-basis: 100%
    }

    .ps-shopping .ps-shopping__header .ps-shopping__view {
        padding-left: 10px
    }

    .ps-shopping .ps-shopping__actions {
        width: 100%;
        justify-content: flex-end
    }

    .ps-shopping .ps-shopping__actions .select2 {
        display: none
    }
}

@media (min-width:1680px) {
    .ps-customer-bought .ps-section__content .row .col-xl-3 {
        padding: 0;
        flex-basis: 14.28571%;
        max-width: 14.28571%
    }
}

.ps-client-say {
    padding: 70px 0;
    background-color: #f5f5f5
}

.ps-client-say .ps-section__header {
    margin-bottom: 30px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between
}

.ps-client-say .ps-section__header h3 {
    display: inline-block;
    margin-bottom: 0;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px
}

.ps-client-say .ps-section__nav a {
    display: inline-block;
    margin-right: 20px;
    font-size: 18px;
    color: #999
}

.ps-client-say .ps-section__nav a:last-child {
    margin-right: 0
}

.ps-client-say .ps-section__nav a:hover {
    color: #000
}

.ps-best-sale-brands {
    padding: 70px 0
}

.ps-best-sale-brands .ps-section__header h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 20px;
    line-height: 1;
    color: #000
}

.ps-best-sale-brands .ps-image-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-self: center;
    border-bottom: 1px solid rgba(0, 0, 0, .15);
    border-right: 1px solid rgba(0, 0, 0, .15)
}

.ps-best-sale-brands .ps-image-list li {
    display: flex;
    min-width: 20%;
    max-width: 20%;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, .15);
    border-right: none;
    border-bottom: none
}

@media (max-width:991px) {
    .ps-best-sale-brands .ps-image-list {
        border: 1px solid rgba(0, 0, 0, .15)
    }

    .ps-best-sale-brands .ps-image-list li {
        min-width: 25%;
        max-width: 25%;
        border: none
    }
}

@media (max-width:767px) {
    .ps-best-sale-brands .ps-image-list li {
        min-width: 33.3333%;
        max-width: 33.3333%
    }
}

@media (max-width:479px) {
    .ps-best-sale-brands .ps-image-list li {
        min-width: 50%;
        max-width: 50%;
        border: 1px solid rgba(0, 0, 0, .15)
    }
}

.ps-deal-hot {
    padding: 70px 0
}

.ps-deal-hot .widget_best-sale {
    border-bottom: 1px solid #d9d9d9
}

.ps-home-categories .ps-section__header {
    margin-bottom: 40px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e1e1e1
}

.ps-home-categories .ps-section__header h3 {
    margin-bottom: 0;
    font-size: 24px;
    font-weight: 400;
    line-height: 1em
}

.ps-search-trending {
    padding: 70px 0
}

.ps-search-trending .ps-section__header {
    margin-bottom: 20px
}

.ps-search-trending .ps-section__header h3 {
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 400
}

.ps-search-trending .ps-section__header h3 span {
    font-size: 14px;
    margin-left: 10px;
    color: #666
}

@media (max-width:479px) {
    .ps-search-trending .ps-section__header h3 {
        font-size: 18px
    }

    .ps-search-trending .ps-section__header h3 span {
        font-size: 12px
    }
}

.ps-categories-box {
    background-color: #f5f5f5;
    padding: 70px 0
}

@media (max-width:767px) {
    .ps-categories-box {
        padding: 45px 0
    }
}

@media (max-width:479px) {
    .ps-categories-box {
        padding: 35px 0
    }
}

.ps-home-blog .ps-section__header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding-bottom: 10px
}

.ps-home-blog .ps-section__header h3 {
    font-size: 24px
}

@media (max-width:767px) {
    .ps-home-blog .ps-section__header {
        flex-flow: row wrap
    }

    .ps-home-blog .ps-section__header h3 {
        display: block;
        margin-bottom: 10px
    }
}

.ps-blog {
    padding-bottom: 100px
}

.ps-blog .ps-blog__header {
    margin-bottom: 50px
}

@media (max-width:767px) {
    .ps-blog {
        padding-bottom: 50px
    }
}

.ps-blog--sidebar {
    padding-bottom: 90px;
    display: flex;
    flex-flow: row nowrap
}

.ps-blog--sidebar>* {
    width: 100%
}

.ps-blog--sidebar .ps-blog__left {
    padding-right: 70px
}

.ps-blog--sidebar .ps-blog__left .ps-pagination {
    text-align: left
}

.ps-blog--sidebar .ps-blog__right {
    max-width: 300px;
    min-width: 300px;
    padding-left: 30px
}

.ps-blog--sidebar.reverse {
    flex-flow: row-reverse nowrap
}

.ps-blog--sidebar.reverse .ps-blog__left {
    padding-left: 100px;
    padding-right: 0
}

.ps-blog--sidebar.reverse .ps-blog__right {
    padding-left: 0
}

@media (max-width:1199px) {
    .ps-blog--sidebar .ps-blog__left {
        padding-right: 0
    }

    .ps-blog--sidebar.reverse .ps-blog__left {
        padding-left: 30px;
        padding-right: 0
    }
}

@media (max-width:991px) {
    .ps-blog--sidebar {
        flex-flow: column wrap
    }

    .ps-blog--sidebar .ps-blog__left {
        margin-bottom: 50px
    }

    .ps-blog--sidebar .ps-blog__right {
        padding-left: 0
    }

    .ps-blog--sidebar.reverse {
        flex-flow: column wrap
    }

    .ps-blog--sidebar.reverse .ps-blog__left {
        padding-left: 0
    }
}

@media (max-width:767px) {
    .ps-blog--sidebar {
        padding-bottom: 45px
    }
}

@media (max-width:479px) {
    .ps-blog--sidebar {
        padding-bottom: 30px
    }
}

.ps-related-posts {
    padding-top: 60px
}

.ps-related-posts h3 {
    margin-bottom: 60px;
    text-align: center;
    font-size: 24px;
    color: #000
}

.ps-post-comments {
    max-width: 770px;
    margin: 0 auto
}

.ps-post-comments h3 {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    color: #000;
    margin-bottom: 40px;
    line-height: 1.4em
}

.ps-about-intro {
    padding: 100px 0
}

.ps-about-intro .ps-section__header {
    max-width: 820px;
    margin: 0 auto 100px
}

.ps-about-intro .ps-section__header h4 {
    margin-bottom: 80px;
    font-size: 24px;
    color: #000;
    font-weight: 600
}

.ps-about-intro .ps-section__header h3 {
    margin-bottom: 40px;
    font-weight: 400;
    line-height: 1.3em;
    color: #000;
    font-size: 36px
}

.ps-about-intro .ps-section__header p {
    font-size: 18px;
    line-height: 1.6em
}

.ps-about-intro .ps-section__content {
    border-top: 1px solid #e1e1e1;
    padding-top: 90px
}

@media (max-width:1199px) {
    .ps-about-intro {
        padding: 80px 0
    }
}

@media (max-width:991px) {
    .ps-about-intro {
        padding: 70px 0
    }
}

@media (max-width:767px) {
    .ps-about-intro {
        padding: 50px 0
    }

    .ps-about-intro .ps-section__header h4 {
        margin-bottom: 50px
    }

    .ps-about-intro .ps-section__header h3 {
        font-size: 24px
    }

    .ps-about-intro .ps-section__header p {
        font-size: 14px
    }
}

.ps-our-team {
    padding: 120px 0
}

.ps-our-team .ps-section__header {
    padding-left: 180px;
    padding-bottom: 90px
}

.ps-our-team .ps-section__header h3 {
    margin-bottom: 0;
    font-size: 36px;
    font-weight: 400;
    color: #000
}

.ps-our-team .ps-section__content {
    display: flex;
    flex-flow: row wrap;
    margin: 0 -15px
}

.ps-our-team .ps-section__content figure {
    margin-bottom: 30px;
    width: 100%;
    max-width: 25%;
    padding: 0 15px
}

@media (max-width:1199px) {
    .ps-our-team .ps-section__header {
        padding-left: 0;
        padding-bottom: 50px
    }
}

@media (max-width:991px) {
    .ps-our-team {
        padding: 90px 0
    }

    .ps-our-team .ps-section__header {
        padding-bottom: 40px
    }

    .ps-our-team .ps-section__header h3 {
        font-size: 28px
    }

    .ps-our-team .ps-section__content figure {
        max-width: 33.3333%
    }
}

@media (max-width:767px) {
    .ps-our-team {
        padding: 60px 0
    }

    .ps-our-team .ps-section__header {
        padding-bottom: 30px
    }

    .ps-our-team .ps-section__header h3 {
        font-size: 24px
    }

    .ps-our-team .ps-section__content figure {
        max-width: 50%
    }
}

.ps-about-milestone {
    padding: 120px 0
}

.ps-about-awards {
    padding: 120px 0;
    background-color: #f5f5f5
}

.ps-about-awards .ps-section__header {
    max-width: 820px;
    margin: 0 auto 100px
}

.ps-about-awards .ps-section__header h4 {
    margin-bottom: 65px;
    font-size: 36px;
    color: #000;
    font-weight: 400
}

.ps-about-awards .ps-section__header p {
    font-size: 18px;
    line-height: 1.6em
}

.ps-about-awards .ps-section__content .owl-slider a {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center
}

@media (max-width:1199px) {
    .ps-about-awards {
        padding: 100px 0
    }
}

@media (max-width:991px) {
    .ps-about-awards {
        padding: 80px 0
    }
}

@media (max-width:767px) {
    .ps-about-awards {
        padding: 70px 0
    }

    .ps-about-awards .ps-section__header h4 {
        margin-bottom: 50px;
        font-size: 24px
    }

    .ps-about-awards .ps-section__header p {
        font-size: 14px
    }
}

@media (max-width:479px) {
    .ps-about-awards {
        padding: 50px 0
    }
}

.ps-contact-info {
    padding: 90px 0
}

.ps-contact-info h3 {
    margin-bottom: 60px;
    text-align: center;
    font-size: 36px;
    font-weight: 600
}

@media (max-width:991px) {
    .ps-contact-info {
        padding: 60px 0
    }

    .ps-contact-info h3 {
        font-size: 24px
    }
}

@media (max-width:479px) {
    .ps-contact-info {
        padding: 45px 0
    }

    .ps-contact-info h3 {
        font-size: 20px
    }
}

.ps-contact-form {
    padding: 100px 0;
    background-color: #f6f6f6
}

.ps-contact-form h3 {
    margin-bottom: 90px;
    text-align: center;
    font-size: 36px;
    font-weight: 600;
    color: #000;
    line-height: 1em
}

@media (max-width:991px) {
    .ps-contact-form h3 {
        font-size: 24px
    }
}

@media (max-width:479px) {
    .ps-contact-form h3 {
        font-size: 20px
    }
}

.ps-faqs {
    padding: 90px 0
}

.ps-faqs .ps-section__header {
    padding-bottom: 100px
}

.ps-faqs .ps-section__header h1 {
    text-align: center;
    font-size: 36px;
    font-weight: 600
}

@media (max-width:767px) {
    .ps-faqs .ps-section__header {
        padding-bottom: 50px
    }

    .ps-faqs .ps-section__header h1 {
        font-size: 24px
    }
}

.ps-call-to-action {
    background-color: #f1f1f1;
    padding: 130px 0;
    text-align: center
}

.ps-call-to-action h3 {
    font-size: 36px;
    color: #000;
    font-weight: 600
}

.ps-call-to-action h3 a {
    color: #fff;
    font-weight: inherit
}

.ps-call-to-action h3 a:hover {
    color: #000
}

@media (max-width:991px) {
    .ps-call-to-action {
        padding: 100px 0
    }
}

@media (max-width:767px) {
    .ps-call-to-action {
        padding: 80px 0
    }
}

@media (max-width:479px) {
    .ps-call-to-action {
        padding: 65px 0
    }
}

.ps-vendor-banner {
    position: relative;
    text-align: center;
    z-index: 10;
    padding: 160px 0
}

.ps-vendor-banner:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    z-index: -1;
    background-color: rgba(0, 0, 0, .25)
}

.ps-vendor-banner h2 {
    color: #fff;
    font-size: 48px;
    margin: 0 auto 30px;
    max-width: 960px;
    font-weight: 600
}

.ps-vendor-banner .ps-btn {
    padding: 20px 40px;
    font-size: 24px;
    border-radius: 0
}

@media (max-width:1199px) {
    .ps-vendor-banner {
        padding: 120px 0
    }

    .ps-vendor-banner h2 {
        font-size: 36px
    }
}

@media (max-width:991px) {
    .ps-vendor-banner {
        padding: 100px 0
    }

    .ps-vendor-banner h2 {
        font-size: 28px
    }

    .ps-vendor-banner .ps-btn {
        font-size: 20px;
        padding: 15px 30px
    }
}

@media (max-width:767px) {
    .ps-vendor-banner {
        padding: 80px 0
    }

    .ps-vendor-banner .ps-btn {
        font-size: 16px
    }
}

@media (max-width:479px) {
    .ps-vendor-banner {
        padding: 60px 0
    }

    .ps-vendor-banner h2 {
        font-size: 24px
    }
}

@media (max-width:991px) {
    .ps-vendor-about .ps-block--icon-box-2 {
        max-width: 450px;
        margin: 0 auto 40px
    }

    .ps-vendor-about .ps-section__header h4 br {
        display: none
    }
}

.ps-vendor-milestone {
    background-color: #f6f6f6
}

.ps-vendor-best-fees .ps-section__numbers {
    display: flex;
    justify-content: center;
    margin-bottom: 60px
}

.ps-vendor-best-fees .ps-section__numbers figure {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    width: 170px;
    height: 170px;
    border: 2px solid #fff;
    margin: 0 40px;
    border-radius: 50%
}

.ps-vendor-best-fees .ps-section__numbers figure h3 {
    display: block;
    margin-bottom: 0;
    width: 100%;
    font-size: 60px;
    font-weight: 400;
    line-height: 1em;
    color: #000
}

.ps-vendor-best-fees .ps-section__numbers figure span {
    font-size: 16px
}

.ps-vendor-best-fees .ps-section__desc {
    max-width: 550px;
    margin: 0 auto 30px
}

.ps-vendor-best-fees .ps-section__desc>figure figcaption {
    text-align: center;
    font-weight: 600;
    color: #000;
    margin-bottom: 40px;
    font-size: 16px
}

.ps-vendor-best-fees .ps-section__desc ul li {
    text-align: left;
    color: #666;
    font-size: 16px;
    margin-bottom: 16px;
    line-height: 1.6em
}

.ps-vendor-best-fees .ps-section__highlight {
    margin-bottom: 40px;
    padding: 30px 20px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    background-color: #f6f6f6
}

.ps-vendor-best-fees .ps-section__highlight figure {
    text-align: justify;
    padding-left: 60px;
    padding-right: 60px
}

.ps-vendor-best-fees .ps-section__highlight figure p {
    font-weight: 500;
    color: #000;
    font-size: 16px
}

.ps-vendor-best-fees .ps-section__content {
    max-width: 730px;
    margin: 0 auto;
    text-align: center
}

.ps-vendor-best-fees .ps-section__content>h5 {
    margin-bottom: 50px;
    font-size: 18px;
    font-weight: 400;
    color: #666;
    line-height: 1.4em
}

@media (max-width:767px) {
    .ps-vendor-best-fees .ps-section__content>h5 {
        font-size: 16px
    }

    .ps-vendor-best-fees .ps-section__desc ul li {
        font-size: 14px
    }

    .ps-vendor-best-fees .ps-section__highlight {
        padding: 30px 10px
    }

    .ps-vendor-best-fees .ps-section__highlight figure {
        text-align: left;
        padding: 0 20px
    }

    .ps-vendor-best-fees .ps-section__highlight figure p {
        font-size: 14px
    }
}

@media (max-width:479px) {
    .ps-vendor-best-fees .ps-section__numbers figure {
        width: 100px;
        height: 100px;
        margin: 0 10px
    }

    .ps-vendor-best-fees .ps-section__numbers figure h3 {
        font-size: 30px
    }

    .ps-vendor-best-fees .ps-section__highlight {
        flex-direction: column;
        text-align: left;
        align-items: flex-start
    }

    .ps-vendor-best-fees .ps-section__highlight img {
        margin-bottom: 30px;
        max-height: 100px
    }
}

.ps-vendor-testimonials {
    background-color: #f6f6f6
}

.ps-vendor-faqs figure {
    margin-bottom: 50px
}

.ps-vendor-faqs figure figcaption {
    font-size: 18px;
    color: #000;
    font-weight: 600;
    margin-bottom: 20px;
    line-height: 1.4em
}

.ps-vendor-faqs figure p {
    font-size: 16px
}

.ps-vendor-faqs .ps-section__footer {
    padding-top: 100px;
    text-align: center;
    border-top: 1px solid #e1e1e1
}

.ps-vendor-faqs .ps-section__footer p {
    margin-bottom: 40px;
    font-size: 30px;
    font-weight: 400;
    color: #000
}

.ps-vendor-faqs .ps-section__footer .ps-btn {
    padding: 20px 40px;
    font-size: 24px
}

@media (max-width:991px) {
    .ps-vendor-faqs .ps-section__footer {
        padding-top: 60px
    }

    .ps-vendor-faqs .ps-section__footer p {
        font-size: 20px
    }

    .ps-vendor-faqs .ps-section__footer .ps-btn {
        font-size: 16px;
        padding: 15px 30px
    }
}

@media (max-width:479px) {
    .ps-vendor-faqs .ps-section__footer {
        padding-top: 50px
    }

    .ps-vendor-faqs .ps-section__footer p {
        font-size: 18px
    }
}

.ps-my-account {
    min-height: 100vh;
    background-color: #f1f1f1
}

.ps-order-tracking {
    padding: 100px 0
}

.ps-order-tracking .ps-section__header {
    text-align: center;
    padding-bottom: 80px
}

.ps-order-tracking .ps-section__header h3 {
    margin-bottom: 40px;
    font-size: 48px;
    font-weight: 600;
    line-height: 1em
}

.ps-order-tracking .ps-section__header p {
    max-width: 960px;
    margin: 0 auto;
    font-size: 16px
}

@media (max-width:991px) {
    .ps-order-tracking {
        padding: 75px 0
    }

    .ps-order-tracking .ps-section__header {
        padding-bottom: 60px
    }

    .ps-order-tracking .ps-section__header h3 {
        margin-bottom: 20px;
        font-size: 36px
    }

    .ps-order-tracking .ps-section__header p {
        font-size: 14px
    }
}

@media (max-width:767px) {
    .ps-order-tracking {
        padding: 60px 0
    }
}

@media (max-width:479px) {
    .ps-order-tracking {
        padding: 50px 0
    }

    .ps-order-tracking .ps-section__header {
        padding-bottom: 40px
    }
}

.ps-shopping-cart .ps-section__cart-actions {
    padding-top: 30px;
    padding-bottom: 90px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between
}

.ps-shopping-cart .ps-section__cart-actions .ps-btn i {
    margin-right: 6px;
    vertical-align: middle
}

.ps-shopping-cart .ps-section__cart-actions .ps-btn--outline {
    border-color: #000;
    color: #000;
    padding: 12px 20px;
    vertical-align: middle
}

.ps-shopping-cart .ps-section__cart-actions .ps-btn--outline i {
    margin-right: 6px;
    vertical-align: middle
}

.ps-shopping-cart .ps-section__cart-actions .ps-btn--outline:hover {
    background-color: #fff;
    border-color: #fff
}

.ps-shopping-cart .ps-section__footer figure figcaption {
    position: relative;
    display: block;
    font-size: 20px;
    color: #000;
    margin-bottom: 35px
}

.ps-shopping-cart .ps-section__footer figure figcaption:after {
    content: "";
    font-family: Linearicons;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0
}

.ps-shopping-cart .ps-section__footer figure .form-control {
    border-color: #ccc
}

.ps-shopping-cart .ps-section__footer .ps-btn--outline {
    border-color: #ccc;
    color: #000;
    border-radius: 0
}

.ps-shopping-cart .ps-section__footer .ps-btn--outline:hover {
    background-color: #fff;
    border-color: #fff;
    color: #fff
}

.ps-shopping-cart .ps-section__footer .select2 {
    min-width: 100%
}

.ps-shopping-cart .ps-section__footer .select2 .select2-selection--single .select2-selection__rendered {
    padding: 15px 20px;
    border: #ccc
}

@media (max-width:479px) {
    .ps-shopping-cart .ps-section__cart-actions {
        flex-flow: row wrap
    }

    .ps-shopping-cart .ps-section__cart-actions .ps-btn {
        width: 100%;
        margin-bottom: 10px;
        text-align: center
    }
}

.ps-vendor-store {
    padding: 40px 0
}

.ps-vendor-store .ps-section__container {
    display: flex;
    flex-flow: row nowrap
}

.ps-vendor-store .ps-section__container>* {
    width: 100%
}

.ps-vendor-store .ps-section__container .ps-section__left {
    max-width: 25%
}

.ps-vendor-store .ps-section__container .ps-section__right {
    max-width: 75%;
    padding-left: 30px
}

.ps-vendor-store .ps-block--vendor-filter {
    margin-bottom: 45px
}

@media (max-width:1199px) {
    .ps-vendor-store .ps-section__container {
        flex-flow: column wrap
    }

    .ps-vendor-store .ps-section__container .ps-section__left {
        max-width: 450px;
        margin-bottom: 30px
    }

    .ps-vendor-store .ps-section__container .ps-section__right {
        max-width: 100%;
        padding-left: 0
    }
}

.ps-vendor-best-seller .ps-section__header {
    margin-bottom: 30px;
    padding-bottom: 16px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    border-bottom: 1px solid #e1e1e1
}

.ps-vendor-best-seller .ps-section__header h3 {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 500;
    font-size: 20px
}

.ps-vendor-dashboard .ps-section__header {
    padding: 100px 0;
    text-align: center
}

.ps-vendor-dashboard .ps-section__header h3 {
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 30px
}

.ps-vendor-dashboard .ps-section__header p {
    color: #666;
    font-size: 16px;
    max-width: 860px;
    margin: 0 auto 30px
}

.ps-vendor-dashboard .ps-section__links {
    background-color: #f5f5f5;
    text-align: center;
    padding: 20px 0;
    margin-bottom: 45px
}

.ps-vendor-dashboard .ps-section__links li {
    display: inline-block;
    margin-right: 30px
}

.ps-vendor-dashboard .ps-section__links li a {
    font-size: 18px;
    font-weight: 600;
    color: #666;
    line-height: 20px
}

.ps-vendor-dashboard .ps-section__links li a:hover {
    color: #000
}

.ps-vendor-dashboard .ps-section__links li:last-child {
    margin-right: 0
}

.ps-vendor-dashboard .ps-section__links li.active a {
    color: #000
}

@media (max-width:767px) {
    .ps-vendor-dashboard .ps-section__header {
        padding: 60px 0
    }

    .ps-vendor-dashboard .ps-section__header h3 {
        font-size: 36px
    }

    .ps-vendor-dashboard .ps-section__header p {
        font-size: 14px
    }

    .ps-vendor-dashboard .ps-section__links li {
        margin-bottom: 4px
    }

    .ps-vendor-dashboard .ps-section__links li a {
        font-size: 16px
    }
}

@media (max-width:479px) {
    .ps-vendor-dashboard .ps-section__header {
        padding: 50px 0
    }

    .ps-vendor-dashboard .ps-section__header h3 {
        margin-bottom: 20px;
        font-size: 28px
    }
}

.ps-media-masonry {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    grid-auto-rows: 100%
}

.ps-media-masonry figure {
    width: 100%
}

.ps-my-account-2 {
    padding: 60px 0
}

.ps-my-account-2 .ps-section__desc {
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 50px;
    padding-bottom: 30px
}

.ps-my-account-2 .ps-section__desc figcaption {
    font-size: 24px;
    font-weight: 600;
    color: #000;
    margin-bottom: 20px
}

.ps-my-account-2 .ps-section__desc p {
    margin-bottom: 35px
}

.ps-my-account-2 .ps-section__desc .ps-list li {
    margin-bottom: 20px;
    display: flex;
    align-items: center
}

.ps-my-account-2 .ps-section__desc .ps-list li span {
    font-size: 18px
}

.ps-my-account-2 .ps-section__desc .ps-list li i {
    margin-right: 20px;
    font-size: 36px;
    color: #fff
}

.ps-my-account-2 .ps-section__coupon {
    border: 1px dashed #b6b6b6;
    background-color: #f6f6f6;
    padding: 30px;
    display: flex;
    align-items: center
}

.ps-my-account-2 .ps-section__coupon span {
    font-size: 72px;
    color: #690;
    margin: 0 30px 0 0
}

.ps-my-account-2 .ps-section__coupon h5 {
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 600
}

.ps-my-account-2 .ps-form--account {
    padding-top: 0;
    margin-bottom: 30px;
    border: 1px solid #e8e8e8
}

.ps-my-account-2 .ps-form--account .ps-tab-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e8e8e8
}

.ps-my-account-2 .ps-form--account .ps-tab-list li {
    width: 100%;
    max-width: 50%;
    margin-right: 0;
    padding: 20px 15px
}

.ps-my-account-2 .ps-form--account .ps-tab-list li a {
    font-size: 24px;
    line-height: 1em
}

.ps-my-account-2 .ps-form--account .ps-tab-list li.active {
    border-bottom: 2px solid #fff
}

.ps-my-account-2 .ps-form--account .ps-tab-list li.active a {
    color: #fff
}

.ps-my-account-2 #register p {
    margin-bottom: 50px
}

.ps-my-account-2 #register p a {
    color: #06c
}

.ps-my-account-2 #register .ps-radio {
    margin-bottom: 10px
}

.ps-my-account-2 #register .ps-radio label:before {
    width: 18px;
    height: 18px
}

.ps-my-account-2 #register .ps-radio input[type=radio]:checked~label:before {
    background-color: transparent;
    border-color: #000
}

.ps-my-account-2 #register .ps-radio input[type=radio]:checked~label:after {
    top: 4px;
    left: 4px;
    transform: scale(1);
    opacity: 1;
    background-color: #000
}

@media (min-width:1200px) {
    .ps-my-account-2 {
        padding-top: 100px;
        padding-bottom: 90px
    }

    .ps-my-account-2 .ps-section__left {
        width: 100%;
        max-width: 430px
    }

    .ps-my-account-2 .ps-section__right {
        padding-left: 130px
    }

    .ps-my-account-2 .ps-section__wrapper {
        display: flex;
        align-items: center
    }
}

.ps-store-list {
    padding-top: 60px
}

.ps-store-list .ps-block--store-2,
.ps-store-list .ps-block--store-banner {
    margin-bottom: 30px
}

.ps-store-list>.container>.ps-section__header {
    text-align: center;
    padding-bottom: 60px
}

.ps-store-list>.container>.ps-section__header h3 {
    font-size: 36px;
    font-weight: 600
}

.ps-store-list .ps-section__search .form-group {
    position: relative
}

.ps-store-list .ps-section__search .form-group button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    background-color: transparent;
    border: none
}

.ps-store-list .ps-section__search .form-control {
    text-indent: 20px;
    height: 40px
}

.ps-store-list .ps-section__wrapper {
    display: flex;
    flex-flow: column-reverse wrap;
    padding-bottom: 60px
}

.ps-store-list .ps-section__wrapper>* {
    flex-basis: 100%
}

.ps-store-list .ps-section__left {
    padding: 25px 20px;
    background-color: #efefef
}

.ps-store-list .ps-section__right {
    margin-bottom: 50px
}

.ps-store-list .ps-store-link {
    margin-bottom: 50px;
    padding: 14px 15px;
    background-color: #f5f5f5
}

.ps-store-list .ps-store-link ul li {
    display: inline-block;
    margin-bottom: 0;
    margin-right: 20px
}

.ps-store-list .ps-store-link ul li a {
    font-weight: 600;
    font-size: 16px;
    color: #999
}

.ps-store-list .ps-store-link ul li.active a {
    color: #000
}

@media (max-width:560px) {
    .ps-store-list .ps-store-link ul {
        display: flex;
        flex-flow: row wrap
    }

    .ps-store-list .ps-store-link ul li {
        margin-right: 0;
        flex-basis: 50%;
        margin-bottom: 10px
    }
}

</style>