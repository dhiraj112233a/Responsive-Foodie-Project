export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidPassword = (password) => {
  return password.length >= 6;
};

export const isRequired = (value) => {
  return value.trim().length > 0;
};
