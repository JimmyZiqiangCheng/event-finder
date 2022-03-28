export const debounce = (func, delay) => {
  let myTimeOut;
  return () => {
    clearTimeout(myTimeOut);
    myTimeOut = setTimeout(() => func(), delay);
  };
};

export const formatUser = (user) => {
  return {
    id: user.uid,
    name: user.displayName,
    email: user.email,
    token: user.xa,
    provider: user.providerData[0].providerId,
    photoURL: user.photoURL,
  };
};
