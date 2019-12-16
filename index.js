require('dotenv').config()
const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Person = require ('./models/person')

app.use(express.static('build'))
app.use(cors())
app.use(bodyParser.json())

const errorHandler = (error, req, res, next) => {
    console.log(error.message)

    if(error.name === 'CastError' && error.kind === 'ObjectId') {
        return res.status(400).send({ error: 'malformatted id' })
    }

    next(error)
}


app.get('/info', (req, res) => {
    Person
        .find({})
        .then(response => {
            const now = new Date()
            const html = `<p>Phonebook has info for ${response.length} Persons</p><p>${now.toLocaleDateString()} ${now.toLocaleTimeString()}</p>`
            res.send(html)
        })
})

app.get('/api/persons', (req, res) => {
    Person.find({}).then(people => {
        res.json(people.map(person => {
            console.log(person.toJSON())
            return person.toJSON()
        }))
    })
})

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
    .then(person => {
        if(person) {
            res.json(person.toJSON())
        } else {
            res.status(404).end()
        }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res) => {
    Person.findById(req.params.id)
        .deleteOne()
        .then(response => {
            return res.status(204).send([])
        })
})

app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body
    const person = {
      number: body.number
    }
    Person.findByIdAndUpdate(req.params.id, person, { new: true })
      .then(updatedPerson => {
        console.log(updatedPerson)
        res.json(updatedPerson.toJSON())
      })
      .catch(error => next(error))
  })

app.post('/api/persons', (req, res) => {
    const person = req.body
    const name = person.name
    const personWithId = new Person ({
        name: name,
        number: person.number
    })
    personWithId.save().then(savedPerson => {
        res.json(savedPerson.toJSON())
    })  
})

app.use(errorHandler)




const PORT = process.env.PORT || 3001
    app.listen(PORT, () => {
        console.log(`server running on ${PORT} port`)
})