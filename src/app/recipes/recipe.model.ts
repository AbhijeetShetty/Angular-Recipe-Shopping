
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    
    constructor(name:string,descp:string,imagePath:string,) {
        this.description=descp;
        this.imagePath=imagePath;
        this.name=name;
    }

}