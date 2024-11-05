import fs from 'fs';
import path from 'path';
import __dirname from '../util/rootpath.js';

const FILE_PATH=path.join(__dirname, '/data/lessons.json');

const getFileContent = () =>{
    let content=[];
    try{                                            
        content=JSON.parse(fs.readFileSync(FILE_PATH,'utf-8'));
    }catch(err){
        console.log("File reading error "+err);
    }
    return content;
};

const setFileContent = (content) =>{
    try{                                            
        fs.writeFileSync(FILE_PATH, JSON.stringify(content));
    }catch(err){
        console.log("File reading error "+err);
    }
    return content;
};

export class TimeTable{
    constructor(subject, shortVer, day, fromTime, lengthTime){
        this.subject= subject,
        this.shortVer= shortVer==null ? "" : shortVer,
        this.day= day,
        this.fromTime= fromTime,
        this.lengthTime= lengthTime
    }
    save(){
        const products=getFileContent();
        products.push(this);
        setFileContent(products);
    }

    static getAllProducts(){
        return getFileContent();
    }
}
export default TimeTable