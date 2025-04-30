
export let checkValidData = (email,password)=>{

  let IsemailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  let IspasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)

  if (!IsemailValid) return "Email is not valid"
  if (!IspasswordValid) return "Password is not valid"
  return null;
}