function validEmail(email) {
  return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

function validPassword(password) {
  return password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
}

function validUsername(username) {
  return username.match(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/)
}

const validation = {
  validEmail, validPassword, validUsername
}

export default validation;