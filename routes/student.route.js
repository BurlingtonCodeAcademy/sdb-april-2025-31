import { Router } from "express"
import Student from "../models/student.model.js"

const router = Router()

// GET - /api/student - get all students

// GET - /api/student/:id - get student by ID

// POST - /api/student/new - create a new student
router.post("/new", async (req, res) => {
    try {
        // create student to compare to model
        const student = new Student({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })

        // save student to database
        const newStudent = await student.save()

        // return success message
        res.status(200).json({
            student: newStudent,
            message: "good job! it works!"
        })
    } catch (error) {
        // return an error message
        console.error(error)
    }
})

// PUT - /api/student/:id - update student by id

// DELETE - /api/student/:id - delete a student by id

// BONUS - DELETE - /api/student - delete all students

export default router;