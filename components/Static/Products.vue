<template>
  <div class="rounded-3xl bg-white px-3 py-4 md:p-6">
    <!-- Filter Section -->
    <StaticFilter />
    <!-- Products -->
    <div>
      <div class="flex items-center justify-start gap-2 my-8">
        <h1 class="font-bold text-3xl">Products</h1>
        <span class="text-[#888]">(12)</span>
      </div>
      <div class="flex flex-col gap-5">
        <StaticCard
          v-for="(item, index) in items"
          :key="index"
          :img="item.img"
          :title="item.title"
          :isSale="index == '2' || index == '4' ? true : false"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Six-piece clothing set (blouse - pants - hat and ...",
          img: "/images/card1.png",
        },
        {
          title: "Jeep Car, new, used for only one time",
          img: "/images/card2.png",
        },
        {
          title: "Six-piece clothing set (blouse - pants - hat and ...",
          img: "/images/card3.png",
        },
        {
          title: "Jeep Car, new, used for only one time",
          img: "/images/card4.png",
        },
        {
          title: "Six-piece clothing set (blouse - pants - hat and ...",
          img: "/images/card5.png",
        },
        {
          title: "Jeep Car, new, used for only one time",
          img: "/images/card4.png",
        },
        {
          title: "Six-piece clothing set (blouse - pants - hat and ...",
          img: "/images/card7.png",
        },
      ],
    };
  },
};
</script>
