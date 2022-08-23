import { useEffect } from "react";

export const parseJwt = (token) => {
  if (!token) {
    return;
  }

  const base64Url = token.split(".")[1];
  //   var base64Url =
  //     "eyJwYXNzcG9ydCI6eyJ1c2VyIjp7ImlkIjoiMTA2NzYyMzA5MjU1NTM3MTM5MzQ4IiwiZGlzcGxheU5hbWUiOiJSYW1lc2ggUGF0aGFrIiwibmFtZSI6eyJmYW1pbHlOYW1lIjoiUGF0aGFrIiwiZ2l2ZW5OYW1lIjoiUmFtZXNoIn0sInBob3RvcyI6W3sidmFsdWUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BSXRidm1sZ2N6Mkx0SDZrcGcwNlZWSkhUaDFZOHFFemlCV19Mc3FrZ0NWdD1zOTYtYyJ9XSwicHJvdmlkZXIiOiJnb29nbGUiLCJfcmF3Ijoie1xuICBcInN1YlwiOiBcIjEwNjc2MjMwOTI1NTUzNzEzOTM0OFwiLFxuICBcIm5hbWVcIjogXCJSYW1lc2ggUGF0aGFrXCIsXG4gIFwiZ2l2ZW5fbmFtZVwiOiBcIlJhbWVzaFwiLFxuICBcImZhbWlseV9uYW1lXCI6IFwiUGF0aGFrXCIsXG4gIFwicGljdHVyZVwiOiBcImh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FJdGJ2bWxnY3oyTHRINmtwZzA2VlZKSFRoMVk4cUV6aUJXX0xzcWtnQ1Z0XFx1MDAzZHM5Ni1jXCIsXG4gIFwibG9jYWxlXCI6IFwiZW5cIlxufSIsIl9qc29uIjp7InN1YiI6IjEwNjc2MjMwOTI1NTUzNzEzOTM0OCIsIm5hbWUiOiJSYW1lc2ggUGF0aGFrIiwiZ2l2ZW5fbmFtZSI6IlJhbWVzaCIsImZhbWlseV9uYW1lIjoiUGF0aGFrIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FJdGJ2bWxnY3oyTHRINmtwZzA2VlZKSFRoMVk4cUV6aUJXX0xzcWtnQ1Z0PXM5Ni1jIiwibG9jYWxlIjoiZW4ifX19fQ==";

  const base64 = base64Url.replace("-", "+").replace("_", "/");

  return JSON.parse(window.atob(base64));
};

// console.log(parseJwt(""));

export const useScript = (url, onload) => {
  useEffect(() => {
    let script = document.createElement("script");

    //add the url parameter to the script src, don't worry it will get clear later
    script.src = url;
    //set onload of script to the onload parameter
    script.onload = onload;

    //add the script to the document
    document.head.appendChild(script);

    return () => document.head.removeChild(script);
  }, [url, onload]);
};
