import { currentUser } from "@clerk/nextjs";
import Header from "../header";
import { fetchProfileAction } from "@/actions";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Footer from "../footer";

async function CommonLayout({className, children, ...props }) {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);

  return (
    <NextThemesProvider {...props}>
      <div className="mx-auto max-w-7xl p-3 shadow-sm">
        {/* Header Component */}
        <Header
          className="sticky top-0 bg-white dark:bg-[hsl(var(--background))] dark:text-white z-50"
          profileInfo={profileInfo}
          user={JSON.parse(JSON.stringify(user))}
        />
        {/* Header Component */}

        {/* Main Content */}
        <main>{children}</main>

        {/* Main Content */}
        <Footer
          profileInfo={profileInfo}
          user={JSON.parse(JSON.stringify(user))}
        />
      </div>
    </NextThemesProvider>
  );
}

export default CommonLayout;
