<template>
<div class="bread">

    <Breadcrumb separator=">">
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem >Product Detils</BreadcrumbItem>
        <!-- <BreadcrumbItem>Breadcrumb</BreadcrumbItem> -->
    </Breadcrumb>
</div>
</template>

<style >
.bread{
    margin: 20px 0 ;
    background-color: #F6F6F6;
    padding: 50px;
    display: flex;
    justify-content: start;
}
.ivu-breadcrumb-item-separator{
    color: #6b6a6a !important;
    margin: 0 10px;
}
.ivu-breadcrumb a{
    transition: color .2s ease-in-out;
    text-align: left;
    font: normal normal normal 25px/46px Poppins;
    letter-spacing: 0px;
    color: #111111;
    opacity: 1;
    text-decoration: none;
}
.ivu-breadcrumb a:hover{
   color: rgb(0, 0, 0) !important;
}
.ivu-breadcrumb{
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-content: center;
}
.ivu-breadcrumb span{
    color: #999;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-content: center;
}
</style>