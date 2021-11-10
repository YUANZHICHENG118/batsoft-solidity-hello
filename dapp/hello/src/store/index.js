export default {
    strict: false,
    state: () => ({
        theme: 'dark'
    }),
    mutations: {
        setTheme (state, data) {
            state.theme = data;
        }
    },
    getters: {},
    actions: {}
}
