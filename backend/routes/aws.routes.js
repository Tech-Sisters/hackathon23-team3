const mutateS3 = require("../controllers/aws.controllers");

const router = require("express").Router();

router.post("/aws/", async (req, res) => {
  const result = await mutateS3.post(req.files?.media);
  res.json(result);
});

router.get("/aws/", async (req, res) => {
  const result = await mutateS3.get(req.body.mediaKey);
  res.json(result);
});

router.put("/aws/", async (req, res) => {
  const result = await mutateS3.put(req.body.mediaKey, req.files?.media);
  res.json(result);
});

router.delete("/aws/", async (req, res) => {
  const result = await mutateS3.delete(req.body.mediaKey);
  res.json(result);
});

module.exports = router;
