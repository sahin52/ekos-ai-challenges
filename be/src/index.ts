// ! Don't convert require into import
require('module-alias/register');
const moduleAlias = require('module-alias');
moduleAlias.addAlias('@', __dirname);

import { createApp } from './app';
import { startServer } from './server';
import {connect} from "./config/database"
if (process.env.NODE_ENV !== 'test') {
  connect();
  const app = createApp();
  startServer(app);
}
