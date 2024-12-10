/*
  Warnings:

  - Added the required column `profile_id` to the `misc` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "misc" ADD COLUMN     "profile_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "misc" ADD CONSTRAINT "misc_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
