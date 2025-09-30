"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import { Loading } from "../components/auth/loading";
import { usePathname } from "next/navigation";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({ children }: ConvexClientProviderProps) => {
  const pathname = usePathname();

  // 👇 make sure your public paths match Next.js routes
  const isPublic =
    pathname === "/" ||
    pathname === "/sign-in" ||
    pathname === "/sign-up";

  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        {isPublic ? (
          children
        ) : (
          <>
            <AuthLoading>
              <Loading />
            </AuthLoading>
            <Authenticated>{children}</Authenticated>
          </>
        )}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
