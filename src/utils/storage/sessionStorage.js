const isSessionStorageSupported = () => {
  try {
    const testKey = '__testKey__';
    sessionStorage.setItem(testKey, testKey);
    sessionStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};

const getSessionItem = (key) => {
  if (isSessionStorageSupported()) {
    const item = sessionStorage.getItem(key);
    try {
      return JSON.parse(item);
    } catch (error) {
      return item;
    }
  }
  return null;
};

const setSessionItem = (key, value) => {
  if (isSessionStorageSupported()) {
    const jsonValue = JSON.stringify(value);
    sessionStorage.setItem(key, jsonValue);
  }
};

const removeSessionItem = (key) => {
  if (isSessionStorageSupported()) {
    sessionStorage.removeItem(key);
  }
};

export { isSessionStorageSupported, getSessionItem, setSessionItem, removeSessionItem };
