<template>
  <div class="flex items-center justify-between">
    <div class="flex items-start md:items-center justify-center gap-5">
      <div class="relative">
        <img :src="img" alt="" class="w-32" />
        <div
          class="md:hidden absolute left-2 top-2"
          v-show="isFavorite"
          @click="isFavorite = !isFavorite"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="12" fill="white" />
            <path
              d="M12.3711 17.2853C12.1671 17.3573 11.8311 17.3573 11.6271 17.2853C9.88715 16.6913 5.99915 14.2133 5.99915 10.0133C5.99915 8.1593 7.49315 6.6593 9.33515 6.6593C10.4271 6.6593 11.3931 7.1873 11.9991 8.0033C12.6051 7.1873 13.5771 6.6593 14.6631 6.6593C16.5051 6.6593 17.9991 8.1593 17.9991 10.0133C17.9991 14.2133 14.1111 16.6913 12.3711 17.2853Z"
              fill="#D20653"
              stroke="#FFF5E9"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div
          class="md:hidden absolute left-2 top-2"
          v-show="!isFavorite"
          @click="isFavorite = !isFavorite"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="12" fill="white" />
            <path
              d="M12.3711 17.2853C12.1671 17.3573 11.8311 17.3573 11.6271 17.2853C9.88715 16.6913 5.99915 14.2133 5.99915 10.0133C5.99915 8.1593 7.49315 6.6593 9.33515 6.6593C10.4271 6.6593 11.3931 7.1873 11.9991 8.0033C12.6051 7.1873 13.5771 6.6593 14.6631 6.6593C16.5051 6.6593 17.9991 8.1593 17.9991 10.0133C17.9991 14.2133 14.1111 16.6913 12.3711 17.2853Z"
              stroke="#292D32"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div
          v-if="isSale"
          class="absolute right-0 bottom-0 bg-[#FF951D] rounded-tl-full rounded-br-full text-[11px] md:text-sm text-white px-3 py-1 md:py-2 md:px-5"
        >
          Hot Sale
        </div>
        <div
          v-else
          class="absolute right-0 bottom-0 bg-[#D20653] rounded-tl-full rounded-br-full text-[11px] md:text-sm text-white px-3 py-1 md:py-2 md:px-5"
        >
          Live Auction
        </div>
      </div>
      <div class="flex flex-col items-start justify-center gap-3">
        <p class="text-sm md:text-base">
          {{ title }}
        </p>
        <div>
          <span class="text-gray-400">starting price </span>
          <span class="font-bold text-sm md:text-xl">1000 EGP</span>
        </div>
        <div
          class="flex flex-col md:flex-row items-start md:items-center justify-center gap-4"
        >
          <span class="text-gray-400 text-sm md:text-base">Lot starts in</span>
          <div class="flex items-center justify-center gap-1 md:gap-3">
            <button
              type="button"
              class="rounded-full px-2 md:px-4 py-1 text-xs md:text-base text-[#FF951D] bg-[#FFF5E9]"
            >
              <span class="font-bold text-sm md:text-lg">2</span> Days
            </button>
            <button
              type="button"
              class="rounded-full px-2 md:px-4 py-1 text-xs md:text-base text-[#FF951D] bg-[#FFF5E9]"
            >
              <span class="font-bold text-sm md:text-lg">10</span> hours
            </button>
            <button
              type="button"
              class="rounded-full px-2 md:px-4 py-1 text-xs md:text-base text-[#FF951D] bg-[#FFF5E9]"
            >
              <span class="font-bold text-sm md:text-lg">50</span> minutes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="hidden md:flex"
      v-show="isFavorite"
      @click="isFavorite = !isFavorite"
    >
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.62 18.81C11.28 18.93 10.72 18.93 10.38 18.81C7.48 17.82 1 13.69 1 6.69C1 3.6 3.49 1.1 6.56 1.1C8.38 1.1 9.99 1.98 11 3.34C12.01 1.98 13.63 1.1 15.44 1.1C18.51 1.1 21 3.6 21 6.69C21 13.69 14.52 17.82 11.62 18.81Z"
          fill="#D20653"
          stroke="#FFF5E9"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div
      class="hidden md:flex"
      v-show="!isFavorite"
      @click="isFavorite = !isFavorite"
    >
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.62 18.81C11.28 18.93 10.72 18.93 10.38 18.81C7.48 17.82 1 13.69 1 6.69001C1 3.60001 3.49 1.10001 6.56 1.10001C8.38 1.10001 9.99 1.98001 11 3.34001C12.01 1.98001 13.63 1.10001 15.44 1.10001C18.51 1.10001 21 3.60001 21 6.69001C21 13.69 14.52 17.82 11.62 18.81Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    isSale: Boolean,
    img: String,
  },
  data() {
    return {
      isFavorite: false,
    };
  },
};
</script>
