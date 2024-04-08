const {Problem} = require('../models')
const NotFoundError = require('../errors/notFound.error')
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
                throw new NotFoundError("Problem",problemId);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    
    async updateProblem(problemId,updateData){
        try {
            const problem = await Problem.findByIdAndUpdate(problemId,updateData,{new: true});
            if(!problem){
                throw new NotFoundError("Problem", problemId);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(problemId){
        try {
            const problem = await Problem.findByIdAndDelete(problemId);
            if(!problem){
                throw new NotFoundError("Problem", problemId);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemRepository;