import express from "express"
// import session from "express-session"
import cors from "cors"
// import flash from "connect-flash"
import { sendContactForm } from "./controllers/contact.controller.js"

const app = express()
app.use(cors({origin : 'http://localhost:5173' , credentials : true}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// app.use(session({ secret: "my-secret", resave: true, saveUninitialized: false }))
// app.use(flash())

app.post('/getintouch',sendContactForm)
// app.get('/getintouch',sendContactForm)

export default app;