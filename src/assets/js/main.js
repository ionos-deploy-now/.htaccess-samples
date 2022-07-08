document
  .getElementById("scanA")
  .addEventListener("click", (evt) =>
    scan("%2Fsecurity%2Fheaders%2F&followRedirects=on", evt)
  );

document
  .getElementById("scanF")
  .addEventListener("click", (evt) =>
    scan("%2F&followRedirects=on", evt)
  );

function scan(path, evt) {
  let hostname = location.hostname;
  if (hostname === "localhost") {
    hostname = "https://htaccess-samples.space";
  }
  window.open("https://securityheaders.com/?q=" + hostname + path, "_blank");
}