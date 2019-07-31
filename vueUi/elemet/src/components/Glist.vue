<template>
  <section class="index-container_10L_lQb shop-0">
        <div class="index-shopInfo_1RRTZ0d">
            <div class="logo-container_XoH2Vit_0">
                <div class="logo-main_21aInWJ_0"><img alt="潮汕肥肥油炸(大德路店)" class="logo-logo_3S1eSkn_0" src="https://fuss10.elemecdn.com/8/88/3175c77a0088869bcb904f4645221jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/">
                    <!---->
                    <!---->
                </div>
                <div class="logo-newShop_PI2TWde_0"><span>新店</span></div>
            </div>
            <div class="index-main_N3FfcSz">
                <section class="index-line_2-iYR1A">
                    <h3 class="index-shopname_39Y7e3U">
                        <!----><span>潮汕肥肥油炸(大德路店)</span></h3>
                    <ul class="index-supportWrap_2lTcxr2">
                        <!----><span class="index-omit_1q3Tw0_"> </span></ul>
                </section>
                <section class="index-line_2-iYR1A">
                    <div class="index-rateWrap_39dWx_g">
                        <div class="Rating-wrapper_TYbDrku_0 index-stars_vPkk9Vv">
                            <div class="Rating-gray_1kpffd5_0"><img src="">
                            </div>
                            <div class="Rating-actived_GBtiHkB_0" style="width: 92%;"><img src="">
                            </div>
                        </div> <span class="index-rate_WsK58g8">4.6</span> <span>月售1441单</span>
                    </div>
                    <!---->
                </section>
                <section class="index-line_2-iYR1A">
                    <div class="index-moneylimit_2fCq9W5"><span>¥20起送</span> <span>免配送费</span>
                        <!---->
                    </div>
                    <div class="index-timedistanceWrap_2Dp_kzY"><span class="index-distanceWrap_1EPAlti">1.70km</span>
                        <span>41分钟</span></div>
                </section>
            </div>
        </div>
        <div class="index-activityWrap_3mo1GyG">
            <!---->
            <section class="index-tagLine_1rJw_lq">
                <!----><span class="mini-tag-tag_3Tm_6bw_0 index-tag_3oprLi5">炸鸡炸串<span
                        class="index-tagGhost_1KCu_KY mini-tag-ghost_3DwLU8E_0"
                        style="color: rgb(102, 102, 102); border-color: rgb(221, 221, 221);">炸鸡炸串</span></span><span class="mini-tag-tag_3Tm_6bw_0 index-tag_3oprLi5">支持自取<span
                        class="index-tagGhost_1KCu_KY mini-tag-ghost_3DwLU8E_0"
                        style="color: rgba(153, 0, 0, 0); border-color: rgba(76, 0, 0, 0);">支持自取</span></span><span class="mini-tag-tag_3Tm_6bw_0 index-tag_3oprLi5">品质联盟<span
                        class="index-tagGhost_1KCu_KY mini-tag-ghost_3DwLU8E_0"
                        style="color: rgb(51, 51, 51); border-color: rgb(221, 221, 221);">品质联盟</span></span>
                <!---->
            </section> <span><img src="" class="index-dashedline_7B79b3W"></span>
            <section class="index-activities_25AUDsx">
                <div class="index-activityList_1wvwwUY">
                    <div class="index-actRow_2f_uNNA"><span class="index-iconWrap_1xJuKaY"><span
                                class="index-icon_1fBCxBk" style="background-color: rgb(240, 115, 115);">
                                减
                            </span></span> <span class="index-desc_JLha7Vr">满32减16，满58减25，满82减35，满108减47</span></div>
                    <div class="index-actRow_2f_uNNA"><span class="index-iconWrap_1xJuKaY"><span
                                class="index-icon_1fBCxBk" style="background-color: rgb(60, 199, 145);">
                                赠
                            </span></span> <span class="index-desc_JLha7Vr">满68元赠送王老吉一瓶1份</span></div>
                    <div class="index-actRow_2f_uNNA" style="display: none;"><span class="index-iconWrap_1xJuKaY"><span
                                class="index-icon_1fBCxBk" style="background-color: rgb(112, 188, 70);">
                                首
                            </span></span> <span class="index-desc_JLha7Vr">新用户下单立减17元</span></div>
                    <div class="index-actRow_2f_uNNA" style="display: none;"><span class="index-iconWrap_1xJuKaY"><span
                                class="index-icon_1fBCxBk" style="background-color: rgb(0, 183, 98);">
                                新
                            </span></span> <span class="index-desc_JLha7Vr">本店新用户立减1元</span></div>
                </div>
                <div class="index-activityBtn_tMk-e1C"><span>4个活动</span> <img src="" class=""></div>
            </section>
        </div>

    </section>
</template>
<script>
export default {
  data() {
    return {
      Goods: ""
    };
  },
  async created() {
    let data2 = await this.$axios(
      "https://www.easy-mock.com/mock/5d403ed2447df940a974ad35/has_next/goods"
    );
    this.Goods = data2.data;
  }
};
</script>

