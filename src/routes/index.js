const express = require('express');
const router = express.Router();

const Task = require('../models/task');
const task = require('../models/task');


router.get('/', async (req, res) => {
    const tasks =  await Task.find();
    //console.log(tasks);
    res.render('index',{
        tasks
    });
});

router.post('/add', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.redirect('/');
});

router.get('/paper.ejs', async (req, res) => { 
    const tasks =  await Task.find();
    res.render('paper',{
        tasks
    });
});

router.get('/turn/:id', async (req, res) => {
    //console.log(req.params)
    const { id } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render('edit', {
        task
    });
});

router.post('/update/:id', async (req, res) => {
    const { id } = req.params;
    await Task.update({_id:id}, req.body);
    res.redirect('/');
});


// CChange LOG || Gaston 21/07/20

router.get('/delete/:id', async (req, res) => {
    //console.log(req.params)
    const { id } = req.params;
    const task = await Task.findById(id);
    task.eliminado = !task.eliminado;
    await task.save();
    res.redirect('/');
});

module.exports = router;