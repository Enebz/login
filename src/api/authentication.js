async function isLoggedIn() {
  try {
    const res = await fetch('/api/isLoggedIn', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    })
    return res.json();
  }
  catch (e) {
    throw e;
  }
    
}

async function login(email, password) {
  const res = await fetch('/api/login', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })

  return res.json();
}

async function logout() {
  const res = await fetch('/api/logout', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
  })

  return res.json();
}


const authentication = {
  isLoggedIn,
  login,
  logout
}

export default authentication;