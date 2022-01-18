import express from "express";

const router = express.Router();

router.get('/login', (req, res) => {
    res.send('login page');
})

router.post('/register', (req, res) => {
    res.send('register user');
})

router.delete('/delete', (req, res) => {
    res.send('deleted user');
})

router.put('/update', (req, res) => {
    res.send('update user');
})

export { router };