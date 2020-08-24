interface createUserData {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | techObject>;
}

interface techObject {
    title: string;
    experience: number;
}

export default function createUser({ name, email, password }: createUserData) {
    const user = {
        name,
        email,
        password,
    };

    return user;
}
