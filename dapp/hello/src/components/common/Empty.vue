<template>
  <div class="ivu-text-center py-40">
    <img src="@/assets/svg/empty.svg" alt="">
    <div class="font-gray ivu-mt">
      {{text}}
    </div>
  </div>
</template>
<script>
    export default {
        props: {
            text: {
                type: String,
                default: 'No Data'
            }
        }
    }
</script>
