export default function({ $axios, store, redirect }) {
	$axios.defaults.timeout = 15000
	$axios.defaults.baseURL = 'https://api.myjson.com/'
	$axios.onRequest((config) => {
    if(store.state.user)
    config.headers = { 'Authorization': `Bearer ${store.state.user.access_token}` }
    return config
	})
}