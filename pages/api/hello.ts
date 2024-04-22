// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs, { Stats } from "fs";
import path from "path";

type Data = {
    base64: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const file = path.resolve('.', 'public/SamplePdfFile.pdf');
    var fileData = fs.readFileSync(file);
    const base64Data = Buffer.from(fileData).toString('base64');
    // console.log(fileData);
    // const stats: Stats = await fs.promises.stat(file);
    // const data: ReadableStream<Uint8Array> = streamFile(file);   //Stream the file with a 1kb chunk
    // const res = new NextResponse(data, {
    //     status: 200,
    //     headers: new Headers({
    //         "content-disposition": `attachment; filename=${path.basename(file)}`,
    //         "content-type": "application/iso",
    //         "content-length": stats.size + "",
    //     }),
    // });
    res.status(200).json({ base64: base64Data })
}
