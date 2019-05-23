export function initializeAppMock(body) {
  document.body.innerHTML = `${body}`
};

export function clean() {
  document.body.innerHTML = ''
};
