const { Pool } = require('pg');
const PG_URI = 'postgres://wgpafsft:qclBQ1i-dHj_TfCMXjn6t3fY0FtyQMXj@ruby.db.elephantsql.com:5432/wgpafsft';

// Create new Postgres Pool instance
const pool = new Pool({ connectionString: PG_URI });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};
