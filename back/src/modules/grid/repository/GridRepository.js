import Grid from "../model/Grid.js";

class GridRepository{
    async create(){
        try {
            for(let interactor = 1; interactor <= 12; interactor++){
                await Grid.create({id: interactor})
            } 
            return await Grid.findAll();
        } catch (error) {
            console.log(error);
        }
    }

    async findSample(line, column){
        try {
            return await Grid.findOne({where: {id: column}, attributes: [`line${line}`]})
        } catch (error) {
            
        }
    }
    async findGrid(){
        try {
            return await Grid.findAll()
        } catch (error) {
            
        }
    }
}

export default new GridRepository();