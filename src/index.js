import createServer from './createServer';

const port = process.env.PORT || 3000;
const app = createServer();

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }

  if (__DEV__) {
    console.log('App in development mode');
  }

  console.log(`App listening on port ${port}`);
});
