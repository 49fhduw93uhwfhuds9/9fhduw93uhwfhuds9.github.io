const storage = require('./storage'),
database = storage.database

//offline database ig?

module.exports = {

    exists(identifiers) {

        let ret = false
        Object.getOwnPropertyNames(identifiers).forEach(identifier => {
            if (database.getIndex('/users', identifiers[identifier], identifier) !== -1)
                ret = true
        })

        return ret
    },

    create(identifiers) {
        
        if (!this.exists(identifiers)) {

            let user = storage.dataTemplate
            Object.getOwnPropertyNames(identifiers).forEach(identifier => {
                user[identifier] = identifiers[identifier]
            })

            database.push(`/users[${database.count('/users')}]`, user, true)
        }
    },
        
    load(identifiers) {
        
        let ret = {}

        database.find('/users', user => {
            
            let found = false
            Object.getOwnPropertyNames(identifiers).forEach(identifier => {
                if (database.getIndex('/users', identifiers[identifier], identifier) === -1)
                    found = false

                else 
                    found = true
            })

            if (found === true)
                ret = user
        })

        return ret
    },
    
    update(data, identifiers) {
    
        database.find('/users', (user, index) => {
            
            let found = false
            Object.getOwnPropertyNames(identifiers).forEach(identifier => {
                if (user[identifier] === identifiers[identifier])
                    found = true
                else
                    found = false
            })

            if (found === true) {
                
                Object.getOwnPropertyNames(data).forEach(stat => {
                    user[stat] = data[stat]
                })
                
                database.push(`/users[${index}]`, user, true)
            }
        })
    },

    delete(identifiers) {
    
        database.find('/users', (user, index) => {
            
            let found = false
            Object.getOwnPropertyNames(identifiers).forEach(identifier => {
                if (user[identifier] === identifiers[identifier])
                    found = true
                else
                    found = false
            })

            if (found === true)
                database.delete(`/users[${index}]`, user, true)
        })
    }
}