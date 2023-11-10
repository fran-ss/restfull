import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.get("/user", async (req, res) => {
  const users = await prisma.usuario.findMany();
  return res.json(users);
});

app.get("/user/:id", async (req, res) => {
    
  const user = await prisma.usuario.findFirst({
    where: {
      id: Number(req.params.id),
    },
  });
  return res.json(user);
});

app.post("/user", async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await prisma.usuario.create({
            data: {
                name,
                email,
            },
        });
        return res.json(user);
    } catch (error) {
        return res.status(500).json({error: "Usuario já existe"})
    }
});

app.put("/user/:id", async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await prisma.usuario.update({
            data: {
                name,
                email,
            },
            where: {
                id: Number(req.params.id),
            },
        });
        return res.json(user);
    } catch (error) {
        return res.status(500).json({ error: "Usuario não encontrado" });
    }
});

app.delete("/user/:id", async (req, res) => {
    try {
        await prisma.usuario.delete({
            where: {
                id: Number(req.params.id),
            },
        });
        return res.status(204).send();
    } catch (error) {
         return res.status(500).json({ error: "Usuario não encontrado" });
        
    }
});
// tive que muda a porta porque a porta 3333 tava dando erro e nao sei fazer aquele negocio do kill
app.listen(3000, () => console.log("Server Running"));
