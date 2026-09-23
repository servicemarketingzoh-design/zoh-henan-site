import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { refreshSupabaseSession } from "@/lib/supabase/proxy";

const handleI18nRouting = createMiddleware({
  locales: ["fr", "en"],
  defaultLocale: "fr",
});

export async function proxy(request: NextRequest) {
  const response = handleI18nRouting(request);
  return refreshSupabaseSession(request, response);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};

