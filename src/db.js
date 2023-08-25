import { connect } from "mongoose";

(async () => {
    try {
        const db = await connect("mongodb://localhost:27017/crud-mongo")
        console.log('db is connected to ' + db.connection.name)    
    } catch (error) {
        console.log(error);
    }
})();


