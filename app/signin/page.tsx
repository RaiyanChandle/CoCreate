"use client";
import { SignedIn, SignedOut, SignIn, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Signin() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace("/dashboard");
    }
  }, [isLoaded, isSignedIn, router]);

  return (
    <>
      <SignedIn />
      <SignedOut>
        <div className="flex min-h-screen items-center justify-center">
          <SignIn routing="hash" />
        </div>
      </SignedOut>
    </>
  );
}
