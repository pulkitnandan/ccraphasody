import u from 'universal-cookie'

const cook = function(isServer, headers) {
  let cookies = isServer
    ? new u(headers)
    : new u();

  cookies = cookies.getAll();

  var valid = true;
  let user = undefined;
  let sessionId = undefined;
  const userCookies = cookies.user || ''

  const sessionCookies = cookies.sessionId || ''

  if (userCookies.length == 0)
    valid = false;
  return {valid: valid, user: userCookies, sessionId: sessionCookies}

}

const saveCookie = function(key, value) {
  let cookies = new u();

  cookies.set(key, value);
}

const deleteAllCookies = function() {
  let cookies = new u();
  cookies.set('user', "", {
    expires: new Date('Thu, 01 Jan 1970 00:00:00 GMT'),
    maxAge: 1
  });
  cookies.set('sessionId', "", {
    expires: new Date('Thu, 01 Jan 1970 00:00:00 GMT'),
    maxAge: 1
  });

}

export {saveCookie, deleteAllCookies, cook}
