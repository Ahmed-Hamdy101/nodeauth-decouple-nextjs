// config/url.ts
import config from './config'
const { MONGO_DB_USER: string, MONGO_DB_PASSWORD, MONGO_CLUSTER_URL, MONGO_DB_NAME } = config

const password = encodeURIComponent(config.MONGO_DB_PASSWORD)
const MONGO_URI = `mongodb+srv://${config.MONGO_DB_USER}:${password}@${config.MONGO_CLUSTER_URL}/${config.MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

export default MONGO_URI
