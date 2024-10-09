"use server";

import fetching from "@/utils/cliente-http";

export const getDocentes = async () => {
    const endPoint = `/docentes`;

    const docentes = await fetching(endPoint, "no-store", "GET");

    if (!docentes.data) {
        const error = {
            error: docentes.error,
        };
        return error;
    }

    return docentes.data;
}