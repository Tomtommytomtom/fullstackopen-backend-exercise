const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())


let persons = [
    { 
    "name": "Arto Hellas", 
    "number": "040-123456",
    "id": 1
    },
    { 
    "name": "Ada Lovelace", 
    "number": "39-44-5323523",
    "id": 2
    },
    { 
    "name": "Dan Abramov", 
    "number": "12-43-234345",   
    "id": 3
    },
    { 
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122",
    "id": 4
    },
    { 
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122",
    "id": 5
    }
]

app.get('/info', (req, res) => {
    const now = new Date()
    const html = `<p>Phonebook has info for ${persons.length} Persons</p><p>${now.toLocaleDateString()} ${now.toLocaleTimeString()}</p>`
    res.send(html)

})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    console.log('person ',person ,' id ', id)
    if(person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete('api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    res.status(204).end()
})

app.post('/api/persons', (req, res) => {
    const person = req.body
    const name = person.name
    if(!name){
        return res.status(400).json({
            error: "please provide a name"
        })
    }
    if(!person.number){
        return res.status(400).json({
            error: "please provide a number"
        })
    }
    if(alrdyIncludes(name)){
        return res.status(400).json({
            error: "name must be unique"
        })
    }
    const id = Math.floor(Math.random() * 99999)
    const personWithId = { 
        ...person,
        id : id
    }
    persons.push(personWithId)
    res.json(personWithId)    
})

const alrdyIncludes = name => {
    return persons.map(person => person.name).includes(name)
}

const PORT = process.env.PORT || 3001
    app.listen(PORT, () => {
        console.log(`server running on ${PORT} port`)
})