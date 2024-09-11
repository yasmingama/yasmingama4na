import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://yasmin_gama:obR8FshD6xpdydjPIBZrbz1VlDJgnyGb@dpg-crcfg9qj1k6c73cljot0-a.oregon-postgres.render.com/yasmin4na_wnw3";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
