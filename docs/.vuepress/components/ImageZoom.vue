<template>
    <div class="image-zoom" @click.self="$emit('close')">
      <img :src="$withBase(images[currentIndex])" alt="" style="max-width: 90%; max-height: 90%; margin: auto; display: block;">
    </div>
  </template>
  
  <script>
  export default {
    props: ['images', 'currentIndex'],
  };
  </script>
  
  <style lang="stylus">
  .image-soom {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    overflow-y: auto;
  }
  .image-zoom img {
    cursor: zoom-out;
  }
  </style>
  