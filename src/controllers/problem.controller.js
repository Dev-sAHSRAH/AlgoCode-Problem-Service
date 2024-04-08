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

function getProblem(req,res){
    try{
        throw new NotImplementedError('getProblem');
    }catch(err){
        next(err);
    }
}

function getProblems(req,res){
    try{
        throw new NotImplementedError('getProblems');
    }catch(err){
        next(err);
    }
}

function updateProblem(req,res){
    try{
        throw new NotImplementedError('updateProblem');
    }catch(err){
        next(err);
    }
}

function deleteProblem(req,res){
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