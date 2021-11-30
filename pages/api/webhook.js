import nc from "next-connect";
import dbConnect from "../../config/dbConnect";
import { webhookCheckout } from "../../controllers/paymentControllers";
import onError from "../../middlewares/error";

const handler = nc({
  onError,
});

dbConnect();

// Disable bodyParser to use rawBody
export const config = {
  api: {
    bodyParser: false,
  },
};

handler.post(webhookCheckout);

export default handler;