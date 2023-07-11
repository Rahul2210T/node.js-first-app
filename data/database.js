import mongoose from "mongoose";


 export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI,{
    dbName: "todoapi",
  })
  .then((c)=> console.log(`Database connected with ${c.connection.host}`))
  .catch((e)=> console.log(e))
  
  
}