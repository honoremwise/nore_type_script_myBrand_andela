import express from 'express';
import { Router,req,res } from 'express';


const appRoutes = Router()
appRoutes.get('/', function (req, res) {
    res.send('Welcome To My Brand')
  })
export default appRoutes;