import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: "derkian@iands.com.br",
        password: "123456",
        techs: [
            "NodeJS",
            "ReactJS",
            "ReactNative",
            {
                title: "SQL Server",
                experience: 100,
            },
        ],
    });
    return response.json({ message: "Hello World" });
}
