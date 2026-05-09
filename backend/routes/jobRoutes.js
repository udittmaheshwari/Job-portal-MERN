import express from "express"

import {
    getJobs,
    getJob,
    createJob,
    updateJob,
    DeleteJob,
} from '../controllers/jobController.js'

const router = express.Router()

router.get("/",getJobs)

router.get("/:id",getJob)

router.post("/",createJob)

router.put("/:id",updateJob)

router.delete("/:id" , DeleteJob)

export default router;