import express from 'express';
import {register_user, login_user, get_balance,remove_balance, update_balance, get_info, transfer_balance, get_transactions} from '../controllers/user.controller.js'

const router = express.Router()
router.post('/api/register', register_user)
router.post('/api/login', login_user)
router.get('/api/balance', get_balance)
router.post('/api/balance', update_balance)
router.post('/api/transaction', transfer_balance)
router.get('/api/user', get_info)
router.get('/api/transaction', get_transactions)
router.post('/api/remove',remove_balance)

export default router