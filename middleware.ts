import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Protect everything except the root landing page
    '/((?!_next|api|trpc|\\.|$).*)',
    '/dashboard(.*)', // Explicitly protect dashboard and subroutes
  ],
};