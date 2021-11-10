<template>
  <Row type="flex" align="middle" justify="space-between" class="ivu-mb-16 ivu-pb-16">
    <h2>{{title}}</h2>
    <a @click="$router.back()"><Icon type="ios-arrow-back" /> Back</a>
  </Row>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>
