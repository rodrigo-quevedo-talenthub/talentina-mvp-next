import { NextRequest} from "next/server"


export function logTime(req: NextRequest){

    console.log(req.method," request recibida en:", req.url, " ==> ", new Date().toLocaleString())

    return;
}