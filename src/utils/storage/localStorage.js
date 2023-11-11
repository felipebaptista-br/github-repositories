const isLocalStorageSupported = async () => {
    try {
        if (typeof window !== 'undefined') {
            const testKey = '__testKey__';
            localStorage.setItem(testKey, testKey);
            localStorage.removeItem(testKey);
            return true;
        }
    } catch (e) {
        return false;
    }
};

const getItem = (key) => {
    if (isLocalStorageSupported()) {
        const item = localStorage.getItem(key);
        try {
            return JSON.parse(item);
        } catch (error) {
            return item;
        }
    }

    return null;
};

const setItem = (key, value) => {
    if (isLocalStorageSupported()) {
        const jsonValue = JSON.stringify(value);
        localStorage.setItem(key, jsonValue);
    }
};

const removeItem = (key) => {
    if (isLocalStorageSupported()) {
        localStorage.removeItem(key);
    }
};

export { isLocalStorageSupported, getItem, setItem, removeItem };
