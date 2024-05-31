<template>
  <div>
  </div>
</template>

<script lang="ts" setup>
onMounted(async () => {
  const { data } = await useFetch('/api/trackWeb')
  console.log('data', data);
});
</script>

<style>

</style>