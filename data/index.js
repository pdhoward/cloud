// index.js
module.exports = () => {
  const data = { users: [] }
  // Create 1000 users
  return new Promise ((resolve, reject)) {
    for (let i = 0; i < 1000; i++) {
      data.users.push({ id: i, name: `user${i}` })
    }
    resolve(data)
  }
  
}