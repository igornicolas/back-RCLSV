const PORT = process.env.DB_PORT || 5432;
const PASSWORD = process.env.DB_PASSWORD || 'postgres';
const DATABASE = process.env.DB_DATABASE || 'rclsv';
const HOST = process.env.DB_HOST || 'localhost';
const USER = process.env.DB_USER || 'postgres';
module.exports = {
  dialect: 'postgres',
  host: HOST,
  username: USER,
  password: PASSWORD,
  database: DATABASE,
  post: PORT,
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
  },
  // logging: false,
};
