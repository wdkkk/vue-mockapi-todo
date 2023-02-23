<template>
      <div class="loadingAnim">
            <img src="@/assets/loading.gif" />
            <slot></slot>
      </div>
</template>
<script>
      export default {
            name: "LoadingAnim",
      };
</script>
<style scoped>
      .loadingAnim {
            width: 196px;
            margin: 0 auto;
            height: 70vh;
            display: flex;
            justify-content: center;
            align-items: center;
      }
</style>
