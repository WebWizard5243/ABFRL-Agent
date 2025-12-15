import express from "express";
import cors from "cors";
import "dotenv/config";
import { masterAgent } from "./agents/masterAgent.js";
import { getSessions } from "./sessionStorage.js"

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat",async(req, res)=> {
    console.log(" /chat HIT", req.body);

    const {message, sessionId } = req.body;
    const session = getSessions(sessionId);

    const response = await masterAgent(message, session);
    console.log("MasterAgent Returned",response);

    res.json({
        reply : response.reply || "backend is responding Correctly",
        session
    });
});

app.listen(5001, () => {
    console.log("Sales Agent running on port 5001");
})