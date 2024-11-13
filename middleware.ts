import {NextRequest, NextResponse} from "next/server";

export async function middleware  (request: NextRequest){
    console.log("this is middleware");
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)'],
}