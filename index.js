const express = require('express');

const server = express();

// request handling methods
const handleAllTypesOfRequest = (req, res) => {
    res.send("Response from server.use")
}

const handleLoginRequest = (req, res) => {
    res.send("Login here")
}

const handleStreamRequest = (req, res) => {
    res.send("Stream stuffs here")
}

const handleMusicRequest = (req, res) => {
    res.send("Download tracks here")
}

const handleSignupRequest = (req, res) => {
    res.send("Sign Up here")
}

server.post("/profile", handleAllTypesOfRequest)
server.get("/login",  handleLoginRequest)
server.put("/stream", handleStreamRequest)
server.patch("/signup", handleSignupRequest)
server.delete("/music", handleMusicRequest)

server.listen(3000, ()=> console.log('server is ready'));