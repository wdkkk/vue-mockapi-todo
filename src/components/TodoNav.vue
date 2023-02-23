<template lang="">
      <div class="nav">
            <div class="nav__container">
                  <div class="nav__link" @click="$router.push('/')">
                        Progress
                  </div>
                  <div class="nav__link" @click="$router.push('/todo')">
                        List
                  </div>
            </div>
      </div>
</template>
<script>
      export default {};
</script>
<style scoped>
      .nav {
            height: 85px;
            background-color: #66bb6a;
            display: flex;
            justify-content: space-between;
            align-items: center;
      }
      .nav__container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 50%;
            margin: 0 auto;
      }
      .nav__link {
            padding: 10px 0;
            cursor: pointer;
            text-align: center;
            border-left: 3px solid #fff;
            border-right: 3px solid #fff;
            width: 200px;
            color: #fff;
            font-size: 28px;
            transition: 0.1s ease;
      }
      .nav__link:hover {
            border: 3px solid #fff;
      }
</style>
