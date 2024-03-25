const {StatusCodes} = require('http-status-codes')
const NotImplementedError = require('../errors/notImplemented.error')
const BadRequestError = require('../errors/badRequest.error')

function pingProblemController(req,res){
    res.json(
        {
            message: "Ping controller is up."
        }
    )
}

function addProblem(req,res,next){
    try{
        throw new NotImplementedError('addProblem');
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