const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const db = require("../../models");


// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

  router
  .route("/:id")
  .get(booksController.findById)
  .delete(booksController.remove);
  
router.get("/books")
  .get(booksController.find);
  
module.exports = router;


