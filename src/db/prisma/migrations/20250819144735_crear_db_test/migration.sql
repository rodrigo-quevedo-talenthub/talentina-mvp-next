-- CreateTable
CREATE TABLE "public"."Candidato" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "skills" TEXT[],
    "experiencia" INTEGER NOT NULL,
    "educacion" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "urLinkedin" TEXT NOT NULL,
    "experiencia1" TEXT NOT NULL,
    "experiencia2" TEXT NOT NULL,

    CONSTRAINT "Candidato_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Candidato_email_key" ON "public"."Candidato"("email");
