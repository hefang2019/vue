<template>
<div>
    <van-search
        v-model="val"
        placeholder="搜索饿了么商家、商品名称"
        show-action
        shape="round"
        @search="onSearch"
        background="#0085ff"
        >
        <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    
    <van-swipe indicator-color="white"> 
        <van-swipe-item>
            <van-grid square>
                <van-grid-item
                    v-for="(shop,index) in entriesComputed"
                    :key="index"
                    :icon="shop.image_hash"
                    :text="shop.name"
                />
            </van-grid>
        </van-swipe-item>
  
        <van-swipe-item>
            <van-grid square>
                <van-grid-item
                    v-for="(shop,index) in entriesComputed2"
                    :key="index"
                    :icon="shop.image_hash"
                    :text="shop.name"
                />
            </van-grid>
        </van-swipe-item>

    </van-swipe>
    <van-divider>附近商家</van-divider>

    <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
        <van-dropdown-item v-model="value4" :options="option4" />
    </van-dropdown-menu>

    
</div>
</template>
<script>
export default {
  data() {
    return {
      val: "",
      //宫格
      entries: "",
      value1: 0,
      value2: "a",
      value3: "a",
      value4: "a",
      option1: [
        { text: "全部商品", value: 3 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
        { text: "默认排序", value: 0 },
        { text: "好评排序", value: 4 }
      ],
      option2: [{ text: "销量排序", value: "a" }],
      option3: [{ text: "好评排序", value: "a" }],
      option4: [{ text: "距离最近", value: "a" }]
    };
  },
  methods: {
    onSearch() {},
    onConfirm() {
      this.$refs.item.toggle();
    }
    // btn() {
    //   overlay = false;
    // }
  },
  computed: {
    entriesComputed() {
      return this.entries.slice(0, 8);
    },
    entriesComputed2() {
      return this.entries.slice(9, 14);
    }
  },
  async created() {
    let data = await this.$axios(
      "https://www.easy-mock.com/mock/5d4003874dd8bf2c109edfe5/list/entries"
    );

    this.entries = data.data.entries;
  }
};
</script>
<style>
.van-search {
  padding-top: 40px;
}
.van-ellipsis {
  font-size: 14px;
  color: #999;
}
</style>


