import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
export default async function login() {
  const session = await getSession();
  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24">
      <a href="/api/auth/login">login</a>
    </main>
  );
}
