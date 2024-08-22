<template>
  <div class="px-4 md:px-11 py-3 md:py-0 bg-white">
    <header class="flex justify-between items-center">
      <div class="flex items-center justify-center gap-4 relative lg:hidden">
        <button type="button" class="mt-3" @click="show = !show">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7H21"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              opacity="0.34"
              d="M3 12H21"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3 17H21"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div><img src="/images/logo.png" alt="" srcset="" /></div>
        <div
          class="flex flex-col items-center justify-center gap-3 lg:hidden absolute left-0 bg-white top-16 py-3 w-40 rounded-xl"
          v-show="show"
        >
          <nuxt-link to="">Home</nuxt-link>
          <nuxt-link to="">Blog</nuxt-link>
          <nuxt-link to="">Gifts</nuxt-link>
        </div>
      </div>
      <div class="lg:flex items-center justify-center gap-4 hidden">
        <div><img src="/images/logo.png" alt="" srcset="" /></div>
        <div class="flex items-center justify-center gap-8">
          <div
            class="h-14 flex items-center justify-center relative cursor-pointer"
            @click="activateButton(1)"
          >
            <nuxt-link
              to=""
              class="font-bold"
              :class="{ 'text-[#D20653]': activeIndex === 1 }"
              >Home</nuxt-link
            >
            <div
              class="h-2 w-11 bg-[#D20653] rounded-t-3xl absolute bottom-0 left-0 right-0"
              :class="activeIndex === 1 ? 'block' : 'hidden'"
            ></div>
          </div>
          <div
            class="h-14 flex items-center justify-center relative cursor-pointer"
            @click="activateButton(2)"
          >
            <nuxt-link
              to=""
              class="font-bold"
              :class="{ 'text-[#D20653]': activeIndex === 2 }"
              >Blog</nuxt-link
            >
            <div
              class="h-2 w-11 bg-[#D20653] rounded-t-3xl absolute bottom-0 left-0 right-0"
              :class="activeIndex === 2 ? 'block' : 'hidden'"
            ></div>
          </div>
          <div
            class="h-14 flex items-center justify-center relative cursor-pointer"
            @click="activateButton(3)"
          >
            <nuxt-link
              to=""
              class="font-bold"
              :class="{ 'text-[#D20653]': activeIndex === 3 }"
              >Gifts</nuxt-link
            >
            <div
              class="h-2 w-11 bg-[#D20653] rounded-t-3xl absolute bottom-0 left-0 right-0"
              :class="activeIndex === 3 ? 'block' : 'hidden'"
            ></div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <div class="pr-4 md:pr-8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="px-4 md:px-8 border-x border-[#FFEAD2]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.02 2.91C8.71 2.91 6.02 5.6 6.02 8.91V11.8C6.02 12.41 5.76 13.34 5.45 13.86L4.3 15.77C3.59 16.95 4.08 18.26 5.38 18.7C9.69 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.9 21.18C9.36 20.64 9.02 19.88 9.02 19.06"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
          </svg>
        </div>
        <div class="pl-4 md:pl-8">
          <img src="/images/user.png" alt="" class="rounded-full" />
        </div>
        <div>
          <button
            type="button"
            class="mx-4 md:mx-8 hidden md:flex items-center justify-center gap-3 bg-[linear-gradient(90deg,_#d20653_0%,_#ff951d_100%)] text-white shadow-none focus:ring-4 text-base focus:orange-blue-300 font-medium rounded-xl px-5 py-2 focus:outline-none"
          >
            <span>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 16.5C13.625 16.5 17 13.125 17 9C17 4.875 13.625 1.5 9.5 1.5C5.375 1.5 2 4.875 2 9C2 13.125 5.375 16.5 9.5 16.5Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.5 9H12.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.5 12V6"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Add New Product
          </button>
        </div>
        <div class="hidden md:flex items-center">
          <span class="pr-3"
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 3C16.95 8.84 16.95 15.16 15 21"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 9.00001C8.84 7.05001 15.16 7.05001 21 9.00001"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span class="pl-3 border-l border-gray-300">EN</span>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      activeIndex: 1,
    };
  },
  methods: {
    activateButton(index) {
      this.activeIndex = index;
    },
  },
};
</script>
