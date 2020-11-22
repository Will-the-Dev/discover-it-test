import axios, { AxiosInstance } from "axios";

let instance: AxiosInstance;

const projectId = "b61a77df-b2e3-0095-a454-64ffc39d06d3";

function getTransport(): AxiosInstance {
    if (!instance) {
        instance = axios.create({
            withCredentials: false,
            headers: {
                Accept: "application/json"
            }
        });

        instance.interceptors.request.use((config) => {
            config.url = `https://deliver.kenticocloud.com/${projectId}/items?${config.url}`;
            return config;
        });
    }

    return instance;
}

export const transport = getTransport();
