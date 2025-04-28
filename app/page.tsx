import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/header.svg"
          alt="The Infernal Times"
          width={972}
          height={105}
          priority
        />

        <div className="flex gap-4 items-center flex-col sm:flex-row w-full">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors mx-auto flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[258px]"
            href="https://signal.me/#eu/B19ogjK1ReqNnet150oQTfP_h4YzWKJ-wgJ-rcZ6g8ibFdEoEn1N6LQVDp8Uvl-W"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us on
            <Image
              aria-hidden
              className="inline ml-2 mr-1"
              src="/Signal-Logo-Ultramarine.svg"
              alt="Signal Logo"
              width={16}
              height={16} />
            Signal
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
