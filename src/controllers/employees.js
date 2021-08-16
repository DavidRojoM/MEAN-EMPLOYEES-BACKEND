const employees = {}
const Employee = require('../models/Employee')

employees.getEmployees = async (req, res) => {
  const employees = await Employee.find()
  res.json(employees)
}

employees.createEmployee = async (req, res) => {
  const employee = new Employee(req.body)

  await employee.save()
  res.send({ message: employee.id })
}

employees.getEmployee = async (req, res) => {
  const employee = await Employee.findById(req.params.id)
  res.send(employee)
}

employees.updateEmployee = async (req, res) => {
  const employee = await Employee.findByIdAndUpdate(req.params.id, req.body)
  res.send({ updated: employee.id })
}

employees.deleteEmployee = async (req, res) => {
  const employee = await Employee.findByIdAndDelete(req.params.id)
  res.json(employee)
}

module.exports = employees
