import { Router } from "express";
import {
  create,
  findOne,
  findAll,
  updateById,
  inviteGuests,
  confirm,
  newRegistration,
  acceptTheJoin,
} from "../controllers/events.controller.js";
import { checkLogin } from "../middlewares/auth.middleware.js";

const eventRouter = Router();

eventRouter.get("/:id", findOne);
eventRouter.post("/user", findAll);
eventRouter.post("/create", checkLogin, create);
eventRouter.post("/update/:id", checkLogin, updateById);
eventRouter.post("/inviteGuests/:id", checkLogin, inviteGuests);
eventRouter.post("/confirm/:id", checkLogin, confirm);
eventRouter.post("/registration/:id", checkLogin, newRegistration);
eventRouter.post("/accept/:id", checkLogin, acceptTheJoin);

export default eventRouter;
