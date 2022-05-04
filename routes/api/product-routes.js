const router = require('express').Router();
const {Dairy, Employee, Meat, Pantry, Produce, Products} = require('../../models')

// routing a product 
// updating products info

router.get('/products', (req, res) => {
    Dairy.findAll()
    .then(dairyProducts => res.json(dairyProducts))
    .then(data=> res.render('product', {data}))
    .catch(err)
})
router.put('/dairy/', (req,res) => { 
    Dairy.update({
        where: req.body.id
    })
    .then(dairyProducts => res.json(dairyProducts))
    .then(data => res.render('product', {data}))
}
)


