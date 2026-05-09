import Job from '../models/Job.js'


//get all jobs
export const getJobs = async(req, res)=>{
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs)


    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }
}


//get a single job
export const getJob = async(req,res)=>{
    try {
        const job = await Job.findById(req.params.id)
        if(!job){
            return res.status(404).json({
                message: "job not found"
            })
        }

        res.status(200).json(job);

    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }
}


//create a job
export const createJob= async (req,res)=>{
    try {
        const job = await Job.create(req.body)
        res.status(201).json(job);
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }
}


//update a job
export const updateJob = async (req, res) => {
  try {

    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedJob) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.status(200).json(updatedJob);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


//delete a job

export const DeleteJob = async (req , res)=>{
    try {
        const deleteJob = await Job.findByIdAndDelete(req.params.id);
        res.status(200).json({
      message: "Job deleted",
    });
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }
}