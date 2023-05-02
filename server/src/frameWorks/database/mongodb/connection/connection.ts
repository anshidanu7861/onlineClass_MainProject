import mongoose from 'mongoose'
import  dbOptions  from '../../../../types/connectionInterface'

const dbOpt: dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
export default function database(){
    mongoose.connect("mongodb+srv://rockwex:anshidmattara7861@cluster0.g3oinmq.mongodb.net/Project?retryWrites=true&w=majority", dbOpt).then(()=>{ 
        console.log('DB connection success');
    }).catch((err)=>{
        console.log(err);
    })
} 

 