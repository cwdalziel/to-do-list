"use server"
import prisma from "@/db"

export async function deleteToDo(id: string) {

    await prisma.todo.delete({ where: { id: id } })
    
}