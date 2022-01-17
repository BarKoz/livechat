import express from "express";

const router = express.Router();

router.post('/register', (req, res) => {
    res.send('register');
})

router.post('/login', (req, res) => {
    res.send('login');
})

router.delete('/delete', (req, res) => {
    res.send('delete');
})

router.put('/update', (req, res) => {
    res.send('update');
})

export default router;