import { env as _env } from 'process'
import { z } from 'zod'

const envSchema = z.object({
  GOOGLE_CLIENT_ID: z.coerce.string(),
  GOOGLE_CLIENT_SECRET: z.coerce.string(),
  DATABASE_URL: z.coerce.string(),
})

const env = envSchema.parse(_env)

export { env }
