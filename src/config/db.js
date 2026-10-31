import mongoose from "mongoose";

const DbConnection = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected Successfully!!");
    } catch (error) {
        console.log(error.message)
    }
}

export default DbConnection;