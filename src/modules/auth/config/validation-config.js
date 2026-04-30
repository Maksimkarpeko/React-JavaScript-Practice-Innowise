const required = {
  isAction: false,
  message: 'The fields must be filled',
  isValid: (fieldValue) => fieldValue.length > 0,
};
const min = {
  isAction: false,
  message: 'The username must be more than 2 characters long.',
  isValid: (fieldValue) => fieldValue.length >= 2,
};

export const validationConfig = {
  username: {
    required,
    min,
  },
  password: {
    required,
    min,
  },
};
