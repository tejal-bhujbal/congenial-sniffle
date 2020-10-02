import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import fs from 'fs';
import cors from 'cors';
import shine from '@clearc2/headlamp';

const app = express();
app.use(cors());
app.use(bodyParser.json());

shine(app, {
  title: 'my-app API',
  description: 'my-app API',
  routes: path.resolve(__dirname, 'routes'),
  src: path.resolve(__dirname, '..', 'src'),
  server: [
    path.resolve(__dirname),
    // path.resolve(__dirname, '..', 'src', 'redux', 'server')
  ],
  hidePath: path.resolve(__dirname, '..'),
  headers: {
      Authorization: "Barer fake-token",
  },
  responses: [
    {
      title: 'Invalid request',
      status: 400,
      response: {
        errors: [
          {error: 'Invalid request'}
        ]
      }
    },
    {
      title: 'Server error',
      status: 500,
      response: {
        errors: [
          {error: 'Something went wrong.'}
        ]
      }
    }
  ]
});
 
const PORT = process.env.PORT || 5033;

app.listen(PORT, () => {
  console.log('Dev Express server running at htpp:\\localhost:' + PORT)
});