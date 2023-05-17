<script>
  export default {
    onLaunch() {
      plus.navigator.setFullscreen(true)
      plus.screen.lockOrientation('landscape-primary')
    }
  }
</script>
<style lang="scss">
  @import "@/uni_modules/uview-ui/index.scss";
</style>