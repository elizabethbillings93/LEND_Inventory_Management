const router = require('express').Router();
<<<<<<< HEAD
const { Categories, Products } = require('../../models')
=======
const { Products } = require('../../models')
>>>>>>> c4910da2beb985b5dfb21b1de973e0324ebb51e5


// Update product based on it's name 
router.put('/products/:name', (req, res) => {
//Calls the update method on the Products model
Products.update(
    {
        //All fields you can update and the data attached to the request body
        id,
        name,
        quantity: req.body.quantity,
        image_link,
        product_id,
    },
    {
        // Gets the product based on the name given in the request parameters
        where: {
            name: req.params.name,
        },
    }
)
    .then((updatedQuantity) => {
        //sends the updated quantity as a json response
        res.json(updatedQuantity);
        console.log("Successfully updated quanity")
    })
    .catch((err) => res.json(err));
});



module.exports = router;
