import { setCookie } from "cookies-next";
import * as jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  setCookie("pscdaprvl", jwt.sign("crash", "wepreachbeneaththestars"), {
    req,
    res,
    httpOnly: true,
    maxAge: 30,
    secure: true,
    sameSite: "lax",
  });
  res.status(200).json({
    name: "Approved",
  });
}
