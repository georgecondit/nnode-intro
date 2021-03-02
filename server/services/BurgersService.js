import { BURGERDB } from "../db/BURGERDB"

let id = 2

class BurgersService{
    getAll() {
        return BURGERDB.burgers
    }

    create(newBurger) {
        newBurger.id = id++
        BURGERDB.burgers.push(newBurger)
        return newBurger
    }
    delete(id) {
        findBurger(id)
        BURGERDB.burgers = BURGERDB.burgers.filter(b => b.id != id)
    }
    edit(editedBurger, id) {
        const foundBurger = findBurger(id)
        Object.keys(editedBurger).forEach(key => {
            foundBurger[key] = editedBurger[key]
        })
        return foundBurger
    }
    getOne(id) {
        const foundBurger = findBurger(id)
        return foundBurger
    }

}  

function findBurger(id){
    let foundBurger = BURGERDB.burgers.find(b => b.id == id)
    if (!foundBurger) { throw new Error("invalid id")
    }
    return foundBurger
}



export const burgersService = new BurgersService()