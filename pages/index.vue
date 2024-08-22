<template>
  <div class="bg-[#eee]">
    <StaticHeader />
    <div
      class="flex flex-col lg:flex-row items-start justify-center gap-8 p-4 md:p-8"
    >
      <div
        class="flex flex-col items-center justify-center gap-5 w-full lg:w-auto"
      >
        <StaticProfile />
        <StaticQrcode />
      </div>
      <StaticProducts class="w-full lg:w-[90%]" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
