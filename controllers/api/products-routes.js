const router = require('express').Router();
const { Categories } = require('../../models')


// Update review name
// router.put('/dairy', (req, res) => {
//   const sql = `UPDATE categories SET quantity = ? WHERE id = 3`;
//   const params = [req.body.categories, req.params.product_id];

//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//     } else if (!result.affectedRows) {
//       res.json({
//         message: 'Movie not found'
//       });
//     } else {
//       res.json({
//         message: 'success',
//         data: req.body,
//         changes: result.affectedRows
//       });
//     }
//   });
// });

module.exports = router;
