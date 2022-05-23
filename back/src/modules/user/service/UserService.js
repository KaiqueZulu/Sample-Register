import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import UserRepository from '../repository/UserRepository.js';
import * as httpStatus from '../../../config/constants/httpStatus.js';
import HandleError from '../../../error/model/HandleError.js';
import * as secrets from '../../../config/constants/secrets.js';
import ResponseError from '../../../error/model/ResponseError.js';

class UserService {
  // async findByEmail(req) {
  //     try {
  //         const {
  //             email
  //         } = req.params;
  //         const {
  //             authUser
  //         } = req;
  //         this.validateRequestData(email);
  //         let user = await UserRepository.findByEmail(email);
  //         this.validateUserNotFound(user);
  //         this.validateAuthenticatedUser(user, authUser);
  //         return {
  //             status: httpStatus.SUCCESS,
  //             user: {
  //                 id: user.id,
  //                 name: user.name,
  //                 email: user.email,
  //             },
  //         };
  //     } catch (err) {
  //         return {
  //             status: err.status ? err.status : httpStatus.INTERNAL_SERVER_ERROR,
  //             message: err.message,
  //         };
  //     };
  // };

  validateRequestData(email) {
    if (!email) {
      throw new HandleError(httpStatus.BAD_REQUEST, 'User email was not informed. ');
    }
  }

  validateUserNotFound(user) {
    if (!user) {
      throw new HandleError(httpStatus.UNAUTHORIZED, 'Invalid email or password');
    }
  }

  validateAuthenticatedUser(user, authUser) {
    if (!authUser || user.id !== authUser.id) {
      throw new HandleError(httpStatus.FORBIDDEN, 'You cannot see this user data.');
    }
    return true;
  }

  async getAccessToken(req) {
    try {
      const {
        email,
        password
      } = req.body;
      this.validateAccessTokenData(email, password);
      let user = await UserRepository.findByEmail(email);
      this.validateUserNotFound(user);

      await this.validatePassword(String(password), user.password);
      const authUser = {
        id: user.id,
        name: user.name,
        email: user.email
      };

      const accessToken = jwt.sign({
        authUser
      }, secrets.API_SECRET, {
        expiresIn: '1d'
      });
      return {
        status: httpStatus.SUCCESS,
        accessToken,
      };
    } catch (error) {
      return new ResponseError(error);
    }
  }

  validateAccessTokenData(email, password) {
    if (!email || !password) {
      throw new HandleError(httpStatus.UNAUTHORIZED, 'Email and password must be informed');
    }
  }

  async validatePassword(password, hashPassword) {
    if (!await bcrypt.compare(password, hashPassword)) {
      throw new HandleError(httpStatus.UNAUTHORIZED, 'Invalid email or password');
    }
  }
}

export default new UserService();