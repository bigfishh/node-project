const express = require('express')
require('./services/passport')

/**
 * Following two lines are the same as this: require('./routes/authRoutes')(app)
 * const authRoutes = require('./routes/authRoutes')
 * authRoutes(app)
 */


const app = express()
require('./routes/authRoutes')(app)


const PORT = process.env.PORT || 5000
app.listen(PORT)