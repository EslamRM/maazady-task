<template>
  <div class="flex items-center justify-center md:justify-between">
    <div class="flex items-center justify-center gap-3">
      <button
        type="button"
        class="rounded-2xl border border-[#FF951D] py-2 px-4 text-sm text-[#FF951D] bg-[#FFF5E9]"
      >
        Products
      </button>
      <button type="button" class="rounded-2xl border border py-2 px-4 text-sm">
        Articles
      </button>
      <button type="button" class="rounded-2xl border border py-2 px-4 text-sm">
        Reviews
      </button>
    </div>
    <div>
      <button
        type="button"
        class="flex items-center justify-center gap-3 bg-[linear-gradient(90deg,_#d20653_0%,_#ff951d_100%)] text-white shadow-none focus:ring-4 text-base focus:orange-blue-300 font-medium rounded-xl px-5 py-2 focus:outline-none md:relative fixed top-[50%] right-0"
      >
        <span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g opacity="0.4">
              <path
                d="M6 9H12"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 12V6"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </span>
        Add Review
      </button>
    </div>
  </div>
</template>
