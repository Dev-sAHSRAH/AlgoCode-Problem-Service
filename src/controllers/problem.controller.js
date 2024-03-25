const {StatusCodes} = require('http-status-codes')
const NotImplementedError = require('../errors/notImplemented.error')
const BadRequestError = require('../errors/badRequest.error')

function pingProblemController(req,res){
    res.json(
        {
            message: "Ping constroller is up."
        }
    )
}

function addProblem(req,res,next){
    try{
        throw new BadRequestError('Problem Name',
        {
            missing: ["Problem Name"]
        })
    }catch(err){
        next(err);
    }
}

function getProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    })
}

function getProblems(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    })
}

function updateProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    })
}

function deleteProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    })
}

module.exports = {
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem
}