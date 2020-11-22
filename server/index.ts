const cors = require('cors')
const studentlist = require('./mocks/studentlist.json')
const studentResult = require('./mocks/studentResult.json')

let express = require('express')
let app = express()

let bodyParser = require('body-parser')
let backendPort = 4000
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/getStudentList', (req: object, res: any) => {
  res.status(200).json(studentlist)
})

app.post('/getStudentResult', (req: object, res: any) => {
  res.status(200).json(studentResult)
})

app.post('/getAttendenceRecord', (req: object, res: any) => {
  res.status(200).json(studentResult)
})

app.listen(backendPort, () => {
  console.log('Express server listening on port ' + backendPort)
})
