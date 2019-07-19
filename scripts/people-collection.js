/* to run this script,
  1) run 'mongo' and type 'load("people-collection.js")'
  2) run in terminal/cmd: 'mongo localhost:27017/israel people-collection.js'  
*/
db.people.insertMany([
    {
        name: { first: 'moshe', last: 'chaim' },
        gender: 'm',
        age: 24,
    },
    {
        name: { first: 'sarit', last: 'hadad' },
        gender: 'f',
        age: 30,
    },
    {
        name: { first: 'yuval', last: 'cohen' },
        gender: 'm',
        age: 18,
    }
]);