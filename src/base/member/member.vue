<template>
  <div id="member">
        <div class="mtop">
            <div class="userImg">
                <div class="thisImg"></div>
                <p class="userName">Login</p>
            </div>
            <div class="stropInfo">
                <div class="sl">
                    <a href="#">
                        <img src="../../common/image/favorite_w.png"/>
                        <p class="cont">Liked items</p>
                    </a>
                </div>
                <div class="sl">
                    <a href="#">
                        <img src="../../common/image/store_w.png"/>
                        <p class="cont">Liked Stores</p>
                    </a>
                </div>
                <div class="sl">
                    <a href="#">
                        <img src="../../common/image/goods-browse_w.png"/>
                        <p class="cont">Viewed</p>
                    </a>
                </div>
            </div>
        </div>

        <ul class="orderList">
            <li class="myOrder">
                <div class="liTitle"><img src="../../common/image/mc_01.png"/>My Orders <div class="allOrder">More<a href="#">></a></div></div>
                <div class="navList">
                    <div class="childList">
                        <a href="#">
                            <img src="../../common/image/mcc_01.png"/>
                            <p class="userName">Awaiting<br/>Payment</p>
                        </a>
                    </div>
                    <div class="childList">
                        <a href="#">
                            <img src="../../common/image/mcc_02.png"/>
                            <p class="userName">Awaiting<br/>Shipment</p>
                        </a>
                    </div>
                    <div class="childList">
                        <a href="#">
                            <img src="../../common/image/mcc_03.png"/>
                            <p class="userName">Shipped<br/>Orders</p>
                        </a>
                    </div>
                    <div class="childList">
                        <a href="#">
                            <img src="../../common/image/mcc_04.png"/>
                            <p class="userName">Leave<br/>Feedback</p>
                        </a>
                    </div>
                </div>
            </li>
            <li class="myOrder">
                <div class="liTitle"><img src="../../common/image/mc_02.png"/>MyProperty</div>
                <div class="navList">
                    <div class="childList myPront">
                        <a href="#">
                            <img src="../../common/image/mcc_10_b.png"/>
                            <p class="userName">points</p>
                        </a>
                    </div>
                    <div class="childList myPront">
                        <a href="#">
                            <img src="../../common/image/mcc_05.png"/>
                            <p class="userName">ZegoPay</p>
                        </a>
                    </div>
                </div>
            </li>
            <li class="myOrder noMargin"><div class="liTitle"><img src="../../common/image/mc_03.png"/>Shipping Address<div class="allOrder"><a href="#">></a></div></div></li>
            <li class="myOrder noMargin"><div class="liTitle"><img src="../../common/image/mc_04.png"/>Setting<div class="allOrder"><a href="#">></a></div></div></li>
            <li class="myOrder noMargin"><div class="liTitle"><img src="../../common/image/mc_05.png"/>Invitation code:</div></li>
        </ul>
  </div>
</template>

<script>
export default{

}
</script>


<style lang='less' scoped>
    @import '../../common/css/store.less' ;
</style>
