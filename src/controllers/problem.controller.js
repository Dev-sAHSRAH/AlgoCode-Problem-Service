function pingProblemController(req,res){
    res.json(
        {
            messge: "ping Service is alive."
        }
    )
}

function addProblem(req,res){

}

function getProblem(req,res){

}

function getProblems(req,res){

}

function updateProblem(req,res){

}

function deleteProblem(req,res){

}

module.exports = {
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem
}