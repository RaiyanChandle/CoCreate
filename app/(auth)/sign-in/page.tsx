"use client";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn
        routing="hash"
        signUpUrl="/sign-up"           // 👈 ensures the link goes to your native sign-up page
        fallbackRedirectUrl="/dashboard"
      />
    </div>
  );
}
