class VoidResponse {
  constructor(url) {
    this.headers = {};
    this.ok = this.redirected = false;
    this.status = 404;
    this.url = url;
    const self = this;
    this.arrayBuffer = this.blob = this.formData = this.json = this.text = function() {
      return Promise.reject(self.error());
    };
  }
  error() {
    return new Error("");
  }
}

module.exports = function fetch(url, opts) {
  return Promise.resolve(new VoidResponse(url));
};
