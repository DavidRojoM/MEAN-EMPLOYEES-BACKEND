const employees = {}
employees.getEmployees = (req, res) => {
  res.send('getEmployees')
}

employees.createEmployee = (req, res) => {
  res.send('createEmployee')
}
employees.getEmployee = (req, res) => {
  res.send('getEmployee')
}
employees.updateEmployee = (req, res) => {
  res.send('updateEmployee')
}
employees.deleteEmployee = (req, res) => {
  res.send('deleteEmploy')
}

module.exports = employees
