import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import HandleError from '../error/model/HandleError.js';
import * as secrets from '../config/constants/secrets.js';
import * as httpStatus from '../config/constants/httpStatus.js';

export default async (req, res, next) => {
  try {
    let emptySpace = ' ';
    let {
      authorization
    } = req.headers;
    if (!authorization) {
      throw new HandleError(httpStatus.UNAUTHORIZED, 'Access token was not informed.');
    }
    let accessToken = authorization;
    if (accessToken.includes(emptySpace)) {
      accessToken = accessToken.split(emptySpace)[1];
    }
    const decoded = await promisify(jwt.verify)(accessToken, secrets.API_SECRET);
    req.authUser = decoded.authUser;
    return next();
  } catch (err) {
    const status = err.status ? err.status : httpStatus.INTERNAL_SERVER_ERROR;
    return res.status(status).json({
      status,
      message: err.message
    });
  }

};