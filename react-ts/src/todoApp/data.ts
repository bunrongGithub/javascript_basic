import { ReactNode } from "react"

type data = {
    id:string| number,
    title:string,
    description:string,
    status:Object | string| number| ReactNode,
    level: Object| string| number | ReactNode,
    date: string | Date
}
export const data:data[] = [
    {
        id:"1",
        title:"The worl wid web",
        description: "lorem posem",
        status:1,
        level:2,
        date: new Date()
    },
    {
        id:"2",
        title:"Lokako",
        description: "lorem posem",
        status:2,
        level:3,
        date: new Date()
    }
]