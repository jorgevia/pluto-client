import * as React from 'react';

const useLocalStorageState = <T,>(
  key: string,
  initialValue: T,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) => {
  const prevKeyRef = React.useRef(key);
  const [value, setValue] = React.useState<T>(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    return valueInLocalStorage ? deserialize(valueInLocalStorage) : initialValue;
  });

  React.useEffect(() => {
    if (key !== prevKeyRef.current) {
      window.localStorage.removeItem(prevKeyRef.current);
      prevKeyRef.current = key;
    }
    window.localStorage.setItem(key, serialize(value));
  }, [key, serialize, value]);

  return { value, setValue };
};

export default useLocalStorageState;
