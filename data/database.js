import mongoose from "mongoose";


 export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI,{
    dbName: "todoapi",
  })
  .then(()=> console.log("Database connected"))
  .catch((e)=> console.log(e))
  
  
}