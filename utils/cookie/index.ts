type CookieOption = {
  expires?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
}

// Gets the value of a specific cookie.
const getCookie = (name: string) => {
  const match = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return match ? decodeURIComponent(match[2]) : null;
};

const defaultCookieOption: CookieOption = {
  path: '/',
};

// Sets a new cookie with a name, value, and optional settings.
const setCookie = (name: string, value: string, option: CookieOption = defaultCookieOption) => {
  const date = new Date();
  const finalOptions = {...defaultCookieOption, ...option};
  if(finalOptions.expires) {
    date.setTime(date.getTime() + (finalOptions.expires * 24 * 60 * 60 * 1000));
  }

  const cookie = [
    name + "=" + encodeURIComponent(value),
    finalOptions.expires ? "; expires=" + date.toUTCString() : "",
    finalOptions.path ? "; path=" + finalOptions.path : "",
    finalOptions.domain ? "; domain=" + finalOptions.domain : "",
    finalOptions.secure ? "; secure" : "",
  ].join("");

  document.cookie = cookie;
};

export default {
  getCookie,
  setCookie,
};