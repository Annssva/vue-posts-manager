<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button-ui'
};
</script>

<style scoped>
  .button {
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
  }

  .button:hover {
    color: #006b6b;
    border: 2px solid #006b6b;
    padding: 9px 14px;
  }

  .button:active {
    color: #003333;
    border: 2px solid #003333;
    padding: 9px 14px;
  }
</style>