import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import { getAllRooms, addNewRoom } from "../../../controllers/roomControllers";

const handler = nc();

dbConnect();

handler.get(getAllRooms);
handler.post(addNewRoom);

export default handler;
