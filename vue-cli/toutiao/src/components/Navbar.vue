<template>
   <div class="top_menu_bar "><div class="top_menu_more"><div class="list_shadow"></div><a class="more_btn" href="javascript:void(0)"><span class="cross"></span></a></div><div class="top_menu_list"><a href="javascript:void(0)" data-channel="__all__" data-query="channel=__all__" class="btn cur">推荐</a><a href="javascript:void(0)" data-channel="video" data-query="channel=video" class="btn">视频</a><a href="javascript:void(0)" data-channel="news_hot" data-query="channel=news_hot" class="btn">热点</a><a href="javascript:void(0)" data-channel="news_society" data-query="channel=news_society" class="btn">社会</a><a href="javascript:void(0)" data-channel="news_entertainment" data-query="channel=news_entertainment" class="btn">娱乐</a><a href="javascript:void(0)" data-channel="news_military" data-query="channel=news_military" class="btn">军事</a><a href="javascript:void(0)" data-channel="news_tech" data-query="channel=news_tech" class="btn">科技</a><a href="javascript:void(0)" data-channel="news_car" data-query="channel=news_car" class="btn">汽车</a><a href="javascript:void(0)" data-channel="news_house" data-query="channel=news_house" class="btn">房产</a><a href="javascript:void(0)" data-channel="new_furnish" data-query="channel=new_furnish" class="btn">家居</a><a href="javascript:void(0)" data-channel="news_sports" data-query="channel=news_sports" class="btn">体育</a><a href="javascript:void(0)" data-channel="news_finance" data-query="channel=news_finance" class="btn">财经</a></div></div>
</template>

<script>
export default {
  data() {
    return {
      tab: [
        { nav: "推荐" },
        { nav: "视频" },
        { nav: "热点" },
        { nav: "社会" },
        { nav: "娱乐" },
        { nav: "军事" },
        { nav: "科技" },
        { nav: "汽车" }
      ]
    };
  }
};
</script>
<style>
</style>