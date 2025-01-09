import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const { search } = Object.fromEntries(req.nextUrl.searchParams);

    if (!search || search.trim() === "") {
      return new Response(
        JSON.stringify({ error: "Veuillez fournir un terme de recherche." }),
        { status: 400 }
      );
    }

    const clients = await prisma.client.findMany({
      where: {
        OR: [
          { nom: { contains: search, mode: "insensitive" } },
          { prenoms: { contains: search, mode: "insensitive" } },
        ],
      },
      select: {
        id: true,
        nom: true,
        prenoms: true,
      },
    });

    return new Response(JSON.stringify(clients), { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la recherche des clients :", error);
    return new Response(JSON.stringify({ error: "Une erreur est survenue." }), {
      status: 500,
    });
  }
}
