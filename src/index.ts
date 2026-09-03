import app from './app';
import config from './config';

const main = async () => {
    await initDb();
    app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
}

main()