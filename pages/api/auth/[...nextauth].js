import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (credentials.email === "test@example.com") {
          if (credentials.pw === "test") {
            return { userName: "John" };
          } else {
            throw new Error("Password is incorrect");
          }
        }
        throw new Error("No user found!");
      },
    }),
  ],
});
