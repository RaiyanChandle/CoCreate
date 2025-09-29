import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <>
      <SignedIn>
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-2xl font-semibold">this is dashboard</p>
          <UserButton/>
        </div>
      </SignedIn>
      <SignedOut>
        <SignIn routing="hash"/>
      </SignedOut>
    </>
  );
}
