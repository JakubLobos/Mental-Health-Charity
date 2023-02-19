import { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {

    };
    // dodajemy właściwość mutate, która przyjmuje obiekt z danymi użytkownika i zwraca Promise
    mutate: (data: { user: Session["user"] }) => Promise<void>;
  }
}
