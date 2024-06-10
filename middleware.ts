import { NextResponse } from "next/server"

export const middleWare =  (request : Request) => {
    return NextResponse.redirect(new URL(('/'), request.url))
}

export default middleWare

export const config = {
    matcher: ['/wrong']
}