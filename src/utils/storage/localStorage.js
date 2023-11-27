'use client'


const isLocalStorageSupported = async () => {
    try {
        const testKey = '__testKey__';
        if (typeof window !== 'undefined') {
            localStorage.setItem(testKey, testKey);
            localStorage.removeItem(testKey);
            return true
        } else {
            return false
        }
    } catch (e) {
        return false;
    }
};

const getItem = (key) => {
    if (isLocalStorageSupported() && typeof window !== 'undefined') {
        const item = localStorage.getItem(key)
        try {
            return JSON.parse(item);
        } catch (error) {
            return item;
        }
    }

    return null;
};

const setItem = (key, value) => {
    if (isLocalStorageSupported() && typeof window !== 'undefined') {
        const jsonValue = JSON.stringify(value);
        localStorage.setItem(key, jsonValue);
    }
};

const removeItem = (key) => {
    if (isLocalStorageSupported() && typeof window !== 'undefined') {
        localStorage.removeItem(key);
    }
};

export { isLocalStorageSupported, getItem, setItem, removeItem };
