import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  database_url: process.env.DATABASE_URL,
  port: process.env.PORT,
  bycrept_solt_round: process.env.BYCRIPT_SOLT_ROUND,
  jwt_access_secret: process.env.JWT_ACCESS_SECRECT,
}
