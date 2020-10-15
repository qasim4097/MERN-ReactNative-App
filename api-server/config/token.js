import dotenv from "dotenv";
import path from "path";

const root = path.join.bind(this, __dirname, "../");
dotenv.config({ path: root(".env") });

const secretAccess = process.env.SECRET_TOKEN_ACCESS;
const expireAccess = process.env.EXPIRE_TOKEN_ACCESS;

export default {
    secretAccess,
    expireAccess,
}