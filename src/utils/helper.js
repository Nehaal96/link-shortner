export function hasProperty(data, property) {
  return Object.prototype.hasOwnProperty.call(data, property);
}
export function showSnackBar(title) {
  let element = document.getElementById("snackbar");
  if (element && element.classList) {
    element.classList.add("show");
    element.innerHTML = title;
    setTimeout(function () {
      element.classList.remove("show");
      element.innerHTML = "";
    }, 3000);
  }
}