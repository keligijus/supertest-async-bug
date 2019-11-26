"use strict";

module.exports = ({ router, db }) => {
  router.get("/test-async", async (req, res) => {
    try {
      const result = await db.get();
      return res.send(result);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

  router.get("/test", (req, res) => {
    return db
      .get()
      .then(res.send)
      .catch(e => res.sendStatus(500));
  });
};
