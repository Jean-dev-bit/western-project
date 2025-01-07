import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/app/libs/prisma";

export async function POST(request) {
  const body = await request.json();
  const {
    _id,
    username,
    nomUtilisateur,
    prenomUtilisateur,
    password,
  } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      _id,
      username,
      nomUtilisateur,
      prenomUtilisateur,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
