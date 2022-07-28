/**
 * init dynamic content pieces to page
 */
setHTTPStatusCode();
setCurlCmd();

/**
 * add history back function to page
 */
document.getElementById("history-back-button").addEventListener("click", function () {
  history.back(-1);
});

/**
 * add clipboard function to page
 */
document
  .getElementById("clipboard-button")
  .addEventListener("click", function () {
    navigator.clipboard.writeText(getCurlCmd()).then(
      function () {
        console.log("Copy to clipboard was successful:", getCurlCmd());
      },
      function (err) {
        throw new Error("Copy to clipboard was not successful:", err);
      }
    );
  });

/**
 * get current HTTP status code
 */  
async function getHTTPStatusCode() {
  const response = await fetch(location.href);
  if (response.ok) {
    console.log("Get HTTP status was successful:", response.status);
    return await response.status;
  } else {
    throw new Error("Get HTTP status was not successful:", response.status);
  }
}

/**
 * set current HTTP status code
 */
async function setHTTPStatusCode() {
  let code = await getHTTPStatusCode();
  document.getElementById("http-status-code").textContent = `Http  ${code}`;
}

/**
 * get curl command
 */
function getCurlCmd() {
  return `curl -I -H 'Accept-Encoding: gzip,br,deflate' ${getCurrentURL()}`;
}

/**
 * set curl command
 */
function setCurlCmd() {
  document.getElementById("clipboard-input").textContent = getCurlCmd();
}

/**
 * get current URL
 */
function getCurrentURL() {
  return (
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    window.location.search
  );
}
