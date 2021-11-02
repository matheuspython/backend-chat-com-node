import { Router } from "express"; 
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetMessagesController } from "./controllers/GetMessagesController";
const router = Router();

router.get("/getMessages", new GetMessagesController().handle)

router.post("/sendMessages", new CreateMessageController().handle)


export { router }