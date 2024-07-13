const express = require('express')

const createUser = require('./routes/createUser');
const deleteUser = require('./routes/deleteUser');
const getUser = require('./routes/getUser');
const listUser = require('./routes/listUsers');
const updateUser = require('./routes/updateUser');

const router= new express.Router()
router.use(express.urlencoded({ extended: true }));
router.get('/', (req , res)=>{
    listUser(req, res);})
router.post('/', (req , res)=>{
    createUser(req, res);})
router.get('/:id', (req , res)=>{
    getUser(req, res);})
router.put('/:id', (req , res)=>{
    updateUser(req, res);})
router.delete('/:id', (req , res)=>{
    deleteUser(req, res);})

module.exports=router;