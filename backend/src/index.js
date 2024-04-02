import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const port = 4000;

const prisma = new PrismaClient();


app.get('/', (req, res) => {
    res.send('Hello World')
})

async function main() {
  
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    })
    console.dir(allUsers, { depth: null })
}
  

main()
    .then( async () => {
        await prisma.$disconnect()
    })
    .catch( async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

app.listen(port);
