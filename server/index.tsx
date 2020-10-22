import cors from 'cors'
import studentlist from './mocks/studentlist.json'

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

app.get('/getstudentlist', function (req: object, res:object) {
  res.status(200).json(studentlist)
})

app.listen(backendPort, function () {
  console.log('Express server listening on port ' + backendPort)
})
