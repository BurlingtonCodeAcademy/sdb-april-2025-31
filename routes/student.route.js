import { Router } from "express"
import Student from "../models/student.model.js"

const router = Router()

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

export default router;