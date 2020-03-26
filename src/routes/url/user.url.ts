import { router } from '../../server';
import { Request, Response } from 'express';

router.get('/', (req : Request, res : Response)=>{
    res.status(200).send({'msg' : 'Server is working.......!!!!'})
});

router.post('/user/register', );

module.exports = router;