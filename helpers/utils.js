export const getCookesFromReq = (req, cookieKey) => {
  if (!req.headers.cookie) return undefined;

  try {
    const resCookie = req.headers.cookie
      .split(";")
      .find((c) => c.trim().startsWith(`${cookieKey}=`));

    if (!resCookie) {
      return undefined;
    }
    return resCookie.split("=")[1];
  } catch (error) {
    console.error(error);
  }
};

export function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  debugger;
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
