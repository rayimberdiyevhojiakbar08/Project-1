import { Router } from "express";

import {Main} from '../controllers/main.controller.js'
const main = new Main()

import {List} from '../controllers/main.controller.js'
const list = new List()

import {AddOrder} from '../controllers/main.controller.js'
const order = new AddOrder()

import {Search} from '../controllers/main.controller.js'
const search = new Search()

import {Edit} from '../controllers/main.controller.js'
const edit = new Edit();

import {Delete} from '../controllers/main.controller.js'
const deletedata = new Delete();

const router = new  Router();

router.get('/', main.signInPage);
router.get('/list', list.listPage);
router.get('/addorder', order.addOrderPage);
router.get('/edit/:id', edit.editPage);
router.get('/delete/:id', deletedata.deleteData);


router.post('/', main.signIn);
router.post('/addorder', order.addOrder);
router.post('/datasearch', search.searchresult);
router.post('/edit/:id', edit.edit);


export default router