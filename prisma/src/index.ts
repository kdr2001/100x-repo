import { PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(username: string, password:string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            username,
            lastName,
            firstName,
            password
        },
        select: {
            //the data that needs to be given back, i.e., selected back will be written here.
            id: true,
            firstName: true
        }
    });
    console.log(res);
}

interface updateParams{
    firstName: string;
    lastName: string;
}
async function updateUser(username:string, {
        firstName,
        lastName
    }:updateParams){
    const res = await prisma.user.update({
        where: { username},
        data: {
            firstName,
            lastName
        }
    })
}

async function getUser(id: number) {
    const res = await prisma.user.findFirst({
        where:{id}
    })
    console.log(res);
}

insertUser("Deekshitha2","deekshitha", "Deekshitha", "Kasireddy")
updateUser("Deekshitha1",{firstName:"Kasireddy",lastName:"Deekshitha"})
getUser(4);