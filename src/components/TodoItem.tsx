"use client"
import { deleteToDo } from "@/app/actions"

import prisma from "@/db"

function buttonClick(id: string) {
    deleteToDo(id)
    window.location.reload()
}

type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void
}

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
    return <li className="flex gap-1 items-center">
        <input id={id} type="checkbox" className="cursor-pointer peer" defaultChecked={complete} onChange={e => toggleTodo(id, e.target.checked)} />
        <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
            {title}
        </label>
        <button onClick={e => buttonClick(id)} className="border border-slate-300 bg-transparent rounded px-1 py-0 outline-none focus-within:border-slate-100">X</button>
    </li>
}