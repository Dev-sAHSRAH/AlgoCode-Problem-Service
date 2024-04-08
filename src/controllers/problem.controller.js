const {StatusCodes} = require('http-status-codes')
const NotImplementedError = require('../errors/notImplemented.error')
const {ProblemService} = require('../services');
const {ProblemRepository} = require('../repositories');

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req,res){
    res.json(
        {
            message: "Ping controller is up."
        }
    )
}

async function addProblem(req,res,next){
    try{
        console.log("Incoming req body: ", req.body);
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new Problem',
            error: {},
            data: newProblem
        })
    }catch(err){
        next(err);
    }
}

async function getProblems(req,res,next){
    try{
        const problems = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successully fetched all the problems',
            error: {},
            data: problems
        })
    }catch(err){
        next(err);
    }
}

async function getProblem(req,res,next){
    try{
        const problem = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            error: {},
            message: 'Successfully fetched the problem',
            data: problem
        })
    }catch(err){
        next(err);
    }
}

function updateProblem(req,res,next){
    try{
        throw new NotImplementedError('updateProblem');
    }catch(err){
        next(err);
    }
}

function deleteProblem(req,res,next){
    try{
        throw new NotImplementedError('deleteProblem');
    }catch(err){
        next(err);
    }
}

module.exports = {
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem
}