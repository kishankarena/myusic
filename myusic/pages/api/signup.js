import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import prisma from "../../lib/prisma";

export default async (req, res) => {
  const salt = bcrypt.genSaltSync();
  const { email, password, firstName, lastName } = req.body;
  let user;
  try {
    user = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, salt),
        firstName: "",
        lastName: ""
      },
    });
  } catch (e) {
    res.status(401);
    res.json({ error: "User already exist" });
    return;
  }
  const token = jwt.sign(
    {
      email: user.email,
      id: user.id,
      time: Date.now(),
    },
    "hello",
    {
      expiresIn: "8h",
    }
  );
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("MYUSIC_ACCESS_TOKEN", token, {
      httpOnly: true,
      maxAge: 8 * 60 * 60,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    })
  );
  res.json(user);
};
