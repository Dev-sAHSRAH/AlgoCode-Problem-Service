const sanitizeMarkdownContent = require('../utils/markdownSanitizer');

class ProblemService {
    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData){
        try{
            problemData.description = sanitizeMarkdownContent(problemData.description);
            console.log("problem data: ", problemData);

            const problem = await this.problemRepository.createProblem(problemData);
            console.log("Problem Created",problem);
            return problem;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemService;