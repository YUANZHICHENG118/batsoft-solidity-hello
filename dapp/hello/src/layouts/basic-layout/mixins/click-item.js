import { findComponentUpward } from 'view-design/src/utils/assist';
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState('layout', [
            'menuSiderReload',
            'menuHeaderReload'
        ])
    },
    methods: {
        handleClick (path, type = 'sider') {
            console.log(type)
            const current = this.$route.path;
            if (current === path) {
                if (type === 'sider' && this.menuSiderReload) this.handleReload();
                else if (type === 'header' && this.menuHeaderReload) this.handleReload();
            }
        },
        handleReload () {
            const $layout = findComponentUpward(this, 'BasicLayout');
            if ($layout) $layout.handleReload();
        }
    }
}
