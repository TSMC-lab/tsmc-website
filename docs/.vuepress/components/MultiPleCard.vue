<template>
    <div class="md-card large" :class="{ 'show-border': !hideBorder}">
      <div class="card-images">
        <div v-for="(image, index) in imageList" :key="index" class="card-image">
          <img :src="$withBase(image)" alt="" style="max-width: 100%; border: 1px solid #eee; border-radius: 0.2rem; object-fit: cover; vertical-align: middle;"
               @click="showImage(index)">
        </div>
      </div>
      <div class="card-content">
        <slot></slot>
      </div>
      <image-zoom :images="imageList" :current-index="currentImageIndex" v-if="showZoom" @close="hideImageZoom"></image-zoom>
    </div>
  </template>
  
  <script>
  import ImageZoom from './ImageZoom.vue';
  
  export default {
    components: {
      ImageZoom,
    },
    props: ['images', 'hideBorder'],
    data() {
      return {
        showZoom: false,
        currentImageIndex: 0,
      };
    },
    computed: {
      imageList() {
        if (Array.isArray(this.images)) {
          return this.images;
        } else {
          return [this.images];
        }
      },
      imageCount() {
        return this.images.length;
      },
    },
    mounted() {
      this.setCardColumns();
      window.addEventListener('resize', this.setCardColumns);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.setCardColumns);
    },
    methods: {
      showImage(index) {
        this.showZoom = true;
        this.currentImageIndex = index;
      },
      hideImageZoom() {
        this.showZoom = false;
        this.currentImageIndex = 0;
      },
      setCardColumns() {
        const cardWidth = this.$el.offsetWidth;
        const imageWidth = this.$refs.cardImages.children[0].offsetWidth;
        const cardColumns = Math.floor(cardWidth / imageWidth);
        document.documentElement.style.setProperty('--card-columns', cardColumns);
      },
    },
  };
  </script>
  
  
  <style lang="stylus">
  @import './styles/config.styl';
  
  .md-card.large
    background-color $frontColor
    margin-top 1em
    min-height 250px
    display flex
    flex-direction row
    align-items: stretch
    .card-images
      display inline-flex
      width 100%
      padding-left 0.5rem
      padding-right 0.5rem
      .card-image
        margin-right 0.5rem
        img 
          max-width 100%
          height auto
    .card-content
      padding 0.5rem
      flex-grow 1
      p
        line-height normal
        -webkit-margin-before 0em
        -webkit-margin-after 0.5em
      blockquote 
        font-size 1rem
  
  .md-card.show-border.large
    border 1px solid #eee
    border-radius 0.5rem
    box-shadow 0 5px 15px -5px rgba(0,0,0,.1)
    padding 0.5rem
  
  @media (max-width: $MQMobileNarrow)
    .md-card.large
      display flex
      flex-direction column
      margin 1rem -0.5rem
      padding 0.5rem
      box-sizing border-box
      .card-images
        width 100%
        padding-left 0
        padding-right 0
        .card-image
          width 100%
          margin-left 0
          margin-right 0
        .double-image
          width 100%
          margin-left 0
          margin-right 0
          display flex
          justify-content space-between
          img 
            max-width 47%
            height auto
  </style>
  