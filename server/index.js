const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
   const { email } = req.query;
   if (email == 'krabadaj@gmail.com') {
      res.send({
         name: 'Ленченко Ярослав Юрійович',
         course: '2',
         group: 'ІС-34',
      })
   } else {
      res.status(404).json({ error: 'User not found' });
   }
})

app.listen(port, () => {
   console.log(`Listening on port ${port}`)
})