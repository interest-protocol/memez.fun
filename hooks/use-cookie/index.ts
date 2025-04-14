import { useState } from 'react';
const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
};

const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};

export const useCookie = (name: string) => {
  const [cookie, setCookieState] = useState<string | null>(() =>
    getCookie(name)
  );

  const set = (value: string, days: number = 365) => {
    setCookie(name, value, days);
    setCookieState(value);
  };

  const remove = () => {
    deleteCookie(name);
    setCookieState(null);
  };

  return { cookie, set, remove } as const;
};
