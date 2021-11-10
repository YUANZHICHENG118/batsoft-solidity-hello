<template>
  <span class="i-layout-header-trigger i-layout-header-trigger-min ivu-mr-8 d-lg-inline-block d-none">
    <Dropdown
      transfer
      :trigger="isMobile ? 'click' : 'hover'"
      class="i-layout-header-i18n"
      :class="{ 'i-layout-header-user-mobile': isMobile }"
      @on-click="handleClick"
    >
      {{ current.name }}
        <Icon type="ios-arrow-down"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem
          v-for="(item, idx) in locales"
          :key="idx"
          :name="item.lang"
          :selected="locale === item.lang"
        >
          <span>{{ item.name }}</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </span>
</template>
<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'iHeaderI18n',
        data () {
            return {
                changeRouter: false
            };
        },
        computed: {
            ...mapState('i18n', ['locale', 'locales', 'current']),
            ...mapState('layout', ['isMobile'])
        },
        watch: {
            '$route' (to, from) {
                if (this.changeRouter) { this.$router.go(0); }
            }
        },
        methods: {
            ...mapActions('i18n', ['setLocale']),
            handleClick (locale) {
                const routeLang = this.$route.params.lang;
                const newLang = locale.toLowerCase();
                if (locale === this.locale) return;
                if (routeLang !== newLang) {
                    this.changeRouter = true;
                    this.$router.replace(this.$route.fullPath.replace(routeLang, newLang));
                    this.setLocale({ locale, vm: this });
                }
            }
        }
    };
</script>
<style lang="less" scoped>
  /deep/.ivu-dropdown-rel{
    &:hover{
      .ivu-icon-ios-arrow-down{
        transform: rotate(-180deg);
      }

     }
  }
  @media screen and (max-width: 768px) {
    /deep/.i-layout-header-i18n{
        display: none;
    }
  }
</style>
