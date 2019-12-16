const mongoose = require('mongoose')

if( process.argv.length < 3 ){
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]
const consoleArgs = process.argv

const url =
`mongodb+srv://tom:${password}@phonebook-db-72amz.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true})

const personSchema = new mongoose.Schema({
    name:   String,
    number:  String,
})

const Person = mongoose.model('Person', personSchema)


if(consoleArgs.length == 3){
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person)
        })
    mongoose.connection.close()
    })
} 
else if(consoleArgs.length == 5){
    const person = new Person({
        name: consoleArgs[3],
        number: consoleArgs[4]
    })
    person.save().then(result => {
        console.log(person, ' saved!')
        mongoose.connection.close()
    })

}