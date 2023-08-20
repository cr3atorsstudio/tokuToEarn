"use client";
import { ConnectWallet, ThirdwebProvider } from "@thirdweb-dev/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col justify-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          徳Quest
        </h1>

        <ThirdwebProvider>
          <ConnectWallet />
        </ThirdwebProvider>
      </div>
    </main>
  );
}
