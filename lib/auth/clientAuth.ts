export const isUserLoggedIn = () => {
  if (typeof document === "undefined") return false;
  return document.cookie
    .split(";")
    .some((cookie) => cookie.trim().startsWith("authenticated="));
};
