const validatePhone = (value) => {
  if (value) {
    return value.length >= 3
  }
  return true
}
export default validatePhone
