import Image from "next/image";
import { PinContainer } from "../components/ui/3d-pin";
import { Spotlight } from "../components/ui/spotlight-new";
import { EncryptedText } from "../components/ui/encrypted-text";

function AnimatedGradientText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`animated-gradient-text ${className}`}>
      {children}
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden font-sans relative bg-black">
      <Spotlight />
      <section id="home" className="w-full flex flex-col items-center justify-center py-32 relative overflow-hidden">
        <div className="relative w-full flex flex-col items-center justify-center z-10">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 via-zinc-300 to-zinc-200 dark:from-zinc-400 dark:via-zinc-100 dark:to-zinc-100">
            <AnimatedGradientText className="text-zinc-300">Backend Engineer</AnimatedGradientText>
          </h1>
                <p className="text-center text-lg md:text-2xl mb-6 text-gray-500 font-semibold">
                  Webサービスやツールの開発が好き
                </p>
                <div className="flex justify-center gap-4 mb-8">
                  <a
                    href="https://github.com/madoa5561"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-gray-900 border border-gray-200 shadow"
                  >
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.479C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
                    </svg>
                  </a>
                  <a
                    href="https://x.com/shota5561"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="X"
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-gray-900 border border-gray-200 shadow"
                  >
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.53 2.47a2.5 2.5 0 0 1 3.54 3.54l-5.25 5.25 5.25 5.25a2.5 2.5 0 0 1-3.54 3.54l-5.25-5.25-5.25 5.25a2.5 2.5 0 0 1-3.54-3.54l5.25-5.25-5.25-5.25a2.5 2.5 0 0 1 3.54-3.54l5.25 5.25 5.25-5.25z"/>
                    </svg>
                  </a>
                </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/90 text-base md:text-lg font-semibold">
              <EncryptedText
                text="バックエンドが得意"
                className="inline-block"
                revealedClassName="text-white"
                encryptedClassName="text-zinc-400"
              />
            </span>
            <span className="text-zinc-300 text-sm md:text-base">
              <EncryptedText
                text="Python / Go / JavaScript / TypeScript"
                className="inline-block"
                revealedClassName="text-zinc-300"
                encryptedClassName="text-zinc-400"
              />
            </span>
          </div>
        </div>
      </section>
      <section id="works" className="w-full flex flex-col items-center justify-center py-24 bg-black/80">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-10">My Works</h2>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <PinContainer
              title="s.moyashi.xyz"
              containerClassName="w-full h-full"
          >
            <Image
              src="/s-moyashi-xyz.jpeg"
              alt="s.moyashi.xyz screenshot"
              width={560}
              height={180}
              className="rounded-xl border border-white/10 shadow-lg object-cover w-full h-40"
            />
            <div className="mt-4 text-white text-center w-full">
              <span className="font-semibold text-lg">s.moyashi.xyz</span>
              <p className="text-zinc-300 text-sm mt-1">短縮URLサービス・URL short API</p>
            </div>
          </PinContainer>
        </div>
      </section>
    </div>
  );
}
