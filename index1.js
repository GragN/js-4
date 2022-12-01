function getPasswordChecker(password) {
    return function(guess) {
      if (guess === password) {
        return true
      }
      else {return false}
    }
  }
  

  const checkPass2 = getPasswordChecker(12345)

  console.log(checkPass2(12345))

  console.log(checkPass2(12345656))