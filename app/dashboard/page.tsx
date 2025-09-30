import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <>
      <SignedIn>
        <div>dash board root page</div>
      </SignedIn>
      <SignedOut>
        <SignIn routing="hash"/>
      </SignedOut>
    </>
  );
}
