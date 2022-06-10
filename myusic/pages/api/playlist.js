import prisma from "../../lib/prisma.js";
import { validateRoute } from "../../lib/auth.js";

export default validateRoute(async (req, res, user) => {
  const playlists = await prisma.playlist.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      name: "asc",
    },
  });
  res.json(playlists);
});
