const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find() {
    return db('schemes');
}

function findById(id) {
return db('schemes').where({id});
}

function findSteps(schemeId) {
    return db("steps")
        .join("schemes", "schemes.id", "steps.scheme_id")
        .where({scheme_id: schemeId})
        .select("schemes.scheme_name", "steps.step_number", "steps.instructions")
        .orderBy("steps.step_number")
}

function add(scheme) {
    return db('schemes')
    .insert(scheme)
    .then(ids => ({id : ids[0]}))
} 

function update(changes, id) {
    return db('schemes')
    .where({id})
    .update(changes);
    
}

function remove(id) {
    return db('schemes')
    .where({id})
    .del();
}