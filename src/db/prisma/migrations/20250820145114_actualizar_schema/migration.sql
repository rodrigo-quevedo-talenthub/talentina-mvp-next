/*
  Warnings:

  - You are about to drop the column `urLinkedin` on the `Candidato` table. All the data in the column will be lost.
  - The `estado` column on the `Candidato` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `updatedAt` to the `Candidato` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."EstadoCandidato" AS ENUM ('PENDIENTE', 'PRESELECCIONADO', 'ENTREVISTA', 'DESCARTADO', 'CONTRATADO');

-- AlterTable
ALTER TABLE "public"."Candidato" DROP COLUMN "urLinkedin",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "urlLinkedin" TEXT,
ALTER COLUMN "telefono" DROP NOT NULL,
ALTER COLUMN "educacion" DROP NOT NULL,
DROP COLUMN "estado",
ADD COLUMN     "estado" "public"."EstadoCandidato" NOT NULL DEFAULT 'PENDIENTE',
ALTER COLUMN "experiencia1" DROP NOT NULL,
ALTER COLUMN "experiencia2" DROP NOT NULL;
