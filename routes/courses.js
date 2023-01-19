const express = require("express");
const router = express.Router();

router.get("/api/v1/courses", (req, res) => {
  res.send(courses);
});

router.get("/api/v1/courses/:id", (req, res) => {
  const course = courses?.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("Course not found against given ID");
  res.send(course);
});

router.put("/api/v1/courses/:id", (req, res) => {
  const course = courses?.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("Course not found against given ID");

  course.name = req.body.name;
  res.send(course);
});

router.delete("/api/v1/courses/:id", (req, res) => {
  const course = courses?.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("Course not found against given ID");

  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});
