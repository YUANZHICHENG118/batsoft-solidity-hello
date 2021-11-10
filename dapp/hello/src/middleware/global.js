// import axios from 'axios';

export default async function ({ isHMR, app, store, route, params, error, redirect }) {
    if (isHMR) return
    if (process.server) {
        // let { data } = await axios.get(process.env.base_url + '/open/api/global/param')
        // store.commit('common/setPublicParams', data.data)
    }
}
