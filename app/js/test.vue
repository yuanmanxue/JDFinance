<!--
@Author: yuanmanxue
@Date:   2018-01-16 09:34:40
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-16 04:38:45
-->

<template lang="html">
    <div :class="$style.test">
        <h1>{{ title }}</h1>
        <p>abcdef</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "abcd",
        }
    },
}
</script>

<style lang="scss" module>
  .test{
    color: red;
    h1{
      font-size:40px;
    }
  }
</style>
