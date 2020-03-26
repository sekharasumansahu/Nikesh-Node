import { check } from '../../utill/utill';
import { message } from '../../utill/message.utill';

export const UserRegValidation = [
  check("first_name").notEmpty().withMessage(message.user.first_name_empty),
  check("last_name").notEmpty().withMessage(message.user.last_name_empty),
  check("email").notEmpty().withMessage(message.user.email_empty),
  check("phone").notEmpty().withMessage(message.user.phone_empty),
  check("password").notEmpty().withMessage(message.user.password),


  check("first_name").isString().withMessage(message.user.first_name_length_err),
  check("last_name").isString().withMessage(message.user.last_name_length_err),
  check("first_name").isString().withMessage(message.user.first_name_length_err)
];
