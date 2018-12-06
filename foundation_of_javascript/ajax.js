let ajax = new XMLHttpRequest();

ajax.request = function(url, method, callback, content = "") {
  let xhr = this;
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr);
    }
  };
  xhr.open(method.toUpperCase(), url);
  xhr.send(content);
};


function myCallback(xhr) {
  alert(xhr.responseText);
}
ajax.request("somefile.txt", "get", myCallback);
ajax.request("script.php", "post", myCallback, "first=John&last=Smith");
