import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.render('index.hbs');
});

router.get('/about', (req, res) => {
    res.render('about.hbs')
});

router.get('/edit', (req, res) => {
    res.render('edit.hbs')
});

router.post('/tasks/add', (req, res) => {
    res.send('saved')
})

export default router;