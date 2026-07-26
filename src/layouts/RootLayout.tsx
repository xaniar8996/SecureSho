import type { PropsWithChildren } from "react"

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <div className="w-full h-dvh flex items-center justify-center  bg-background text-white">
        <main>
          {children}
        </main>
      </div>
    );
}

