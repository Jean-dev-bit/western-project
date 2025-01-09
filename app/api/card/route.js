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

    // Vérifier que tous les champs requis sont fournis
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

    // Vérifier si le client existe
    const client = await prisma.client.findUnique({
      where: { id: clientId },
    });

    if (!client) {
      return new Response(JSON.stringify({ error: "Client introuvable." }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Créer la carte associée au client
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
    // Récupération de toutes les cartes
    const cards = await prisma.card.findMany({
      include: {
        client: true, // Inclut les informations du client associé, si nécessaire
      },
    });

    // Retourner les cartes sous forme de réponse JSON
    return NextResponse.json(cards);
  } catch (error) {
    console.error("Erreur lors de la récupération des cartes :", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des cartes." },
      { status: 500 }
    );
  }
}
