<template>
    <div class="p-4 mt-5 mb-5 ">
        <div class="Bannar">
            <div class="col-lg-12">
                <div class="row">
                    <a href="#" class="col-lg-6 col-md-6 col-sm-6 col-xs-6 mb-2 bannar">
                        <img class="w-100" src="../assets/images/bacola-banner-left/bacola-banner-07.png" alt="">
                        <div class="content">
                            <div class="title">
                                The freshest <br> Milk products
                            </div>
                            <span class="con_text">
                                A family place of grocery
                            </span>
                            <a href="#"> shop Now </a>
                        </div>
                    </a>

                    <a href="#" class="col-lg-6 col-md-6 col-sm-6 col-xs-6 mb-2 bannar">
                        <img class="w-100" src="../assets/images/bacola-banner-right/bacola-banner-08.png" alt="">
                         <div class="content">
                            <div class="title">
                                Yogurt with <br> Delicious fruits
                            </div>
                            <span class="con_text">
                                A family place of grocery
                            </span>
                            <a href="#"> shop Now </a>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{

        }
    },
}
</script>

<style scoped>
.bannar{
    position: relative;
}
.content{
    position: absolute;
    top: 17%;
    transform: translate(50px);
    left: -20px;
    text-align: start;
}
.title{
    color: #393E46;
    font-size: 40px;
    font-family: system-ui;
    font-weight: 500;
    line-height: 01;
}
.con_text{
    color: #020202a1;
    line-height: 3;
    display: block;
    font-size: 24px;
}
.content a{
    background-color: #F05E27;
    padding: 10px 34px;
    border-radius: 5px;
    color: #FFF;
    text-decoration: none;
}
</style>