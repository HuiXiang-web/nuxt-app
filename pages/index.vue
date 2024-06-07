<template>
  <div>知能云-前端异常管理</div>
</template>

<script lang="ts" setup>
onMounted(async () => {
  const { data } = await useFetch("/api/track/catch");
  console.log("data", data.value);
});
</script>

<style></style>
