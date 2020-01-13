import axios from 'axios'

const instance = axios.create()

instance.defaults.timeout = 3000

export default instance
