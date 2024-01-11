import { Client, Account } from "appwrite";
const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65a05a15e5700eeb68d5");

export const account = new Account(Client);

export default client;