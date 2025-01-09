import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      clientId,
      bankName,
      cardType,
      quantity,
      sellingPrice,
      commission,
      observations,
    } = body;

    if (
      !clientId ||
      !bankName ||
      !cardType ||
      !quantity ||
      !sellingPrice ||
      !commission
    ) {
      return new Response(
        JSON.stringify({
          error: "Tous les champs requis doivent être renseignés.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const client = await prisma.client.findUnique({
      where: { id: clientId },
    });

    if (!client) {
      return new Response(JSON.stringify({ error: "Client introuvable." }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const newCard = await prisma.card.create({
      data: {
        clientId: clientId,
        bankName: bankName,
        cardType: cardType,
        quantity: quantity,
        sellingPrice: sellingPrice,
        commission: commission,
        observations: observations || "",
      },
    });

    return new Response(JSON.stringify(newCard), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erreur lors de la création de la carte :", error);
    return new Response(
      JSON.stringify({
        error: "Une erreur est survenue lors de l'enregistrement de la carte.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function GET() {
  try {
    const cards = await prisma.card.findMany({
      include: {
        client: true,
      },
    });

    return NextResponse.json(cards);
  } catch (error) {
    console.error("Erreur lors de la récupération des cartes :", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des cartes." },
      { status: 500 }
    );
  }
}
