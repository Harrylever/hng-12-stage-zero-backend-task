import express, { Request, Response } from 'express';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import compression from 'compression';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: '*',
    methods: ['GET'],
    allowedHeaders: ['Content-Type'],
  })
);
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        frameAncestors: ["'none'"],
      },
    },
  })
);

app.use(compression());
app.use(morgan('combined'));

app.get('/', (req: Request, res: Response) => {
  res.redirect('/harrylever');
});

app.get('/harrylever', (req: Request, res: Response) => {
  res.status(200).json({
    email: 'ukanah15thdean@gmail.com',
    current_datetime: new Date().toISOString(),
    github_url: 'https://github.com/harrylever/hng-12-stage-zero-backend-task',
  });
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
