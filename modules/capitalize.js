function cap(string, preserve) {
  if (!preserve) {
    string = string.toLowerCase();
  }
  return string.charAt(0).toUpperCase() + string.substring(1);
}

function words(string, preserve) {
  if (!preserve) {
    string = string.toLowerCase();
  }
  return string.replace(
    /(?!^[0-9])(^|[^a-zA-Z\u00C0-\u017F\u0400-\u04FF'])([a-zA-Z\u00C0-\u017F\u0400-\u04FF])/g,
    function (m) {
      return m.toUpperCase();
    }
  );
}

module.exports = {
  cap,
  words
};
