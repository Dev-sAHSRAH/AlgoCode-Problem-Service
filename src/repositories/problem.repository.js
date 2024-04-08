const {Problem} = require('../models')
const NotFound = require('../errors/notFound.error')
class ProblemRepository {
    async createProblem(problemData){
        try{
            const problem = await Problem.create({
                ...problemData
            })
            return problem;
        }catch(error){
            console.log(error);
            throw error;
        }
    }

    async getAllProblems(){
        try {
            const problems = await Problem.find({});
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(problemId){
        try {
            const problem = await Problem.findById(problemId);
            if(!problem){
                throw new NotFound("Problem",problemId);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemRepository;