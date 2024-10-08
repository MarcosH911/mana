"use client";

import { Input } from "@/components/ui/input";
// import signIn from "@/server-actions/auth/signIn";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const router = useRouter();

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage(null);
    setSuccessMessage(null);

    const request = await fetch("/api/auth/sign-in", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    if (request.ok) {
      router.push("/app");
    } else {
      const response = await request.json();
      setErrorMessage(response.message);
    }
  };

  return (
    <div className="bg-orange-50-50 flex h-screen w-screen items-center justify-center dark:bg-slate-950">
      <form
        onSubmit={(e) => handleSignIn(e)}
        className="flex flex-col items-center justify-center gap-4 rounded-xl border border-slate-200 bg-white px-7 py-8 text-slate-950 shadow-sm dark:border-orange-600 dark:bg-slate-900/30 dark:text-orange-50"
      >
        <div className="mb-2.5 flex w-full flex-col gap-1">
          <span className="text-2xl font-semibold dark:text-orange-500">
            Sign In
          </span>
          <span className="text-sm text-slate-600 dark:text-slate-400">
            Enter your email below to create your account
          </span>
        </div>
        <div className="flex w-full flex-col gap-1.5">
          <label
            className="text-sm font-semibold text-slate-950 dark:text-slate-50"
            htmlFor="username"
          >
            Username
          </label>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="marcoshernanz"
            type="text"
            id="username"
            required
          />
        </div>
        <div className="flex w-full flex-col gap-1.5">
          <label
            className="text-sm font-semibold text-slate-950 dark:text-slate-50"
            htmlFor="password"
          >
            Password
          </label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            required
          />
        </div>
        <div className="mt-4 flex w-full flex-col gap-2.5">
          <Button className="h-12 text-base font-semibold">Sign in</Button>
        </div>
        {errorMessage && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {errorMessage} Have you{" "}
              <Link href="/sign-up" className="underline">
                sign-up?
              </Link>
            </AlertDescription>
          </Alert>
        )}
        {successMessage && (
          <Alert
            variant="destructive"
            className="border-green-600 text-green-600"
          >
            <Check className="h-4 w-4" />
            <AlertTitle>success</AlertTitle>
            <AlertDescription>{successMessage}</AlertDescription>
          </Alert>
        )}
      </form>
    </div>
  );
}
