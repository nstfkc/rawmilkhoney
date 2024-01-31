import Link from "next/link";
import { Work } from "./components/Work";
import { WhatWeDo } from "./components/WhatWeDo";
import { Solutions } from "./components/Solutions";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";

export default function Home() {
  return (
    <main>
      <div className="container max-w-5xl mx-auto px-4 lg:px-0">
        <div className="py-16 md:py-32 max-w-2xl">
          <div className="font-bold text-4xl">
            Design and development partner <br /> of your startup 🤝
          </div>
          <div className="h-4"></div>
          <div className="text-lg leading-relaxed">
            We design and develop your UI components for your requirements and
            you focus on what makes your app unique
          </div>
        </div>
        <div className="flex py-8 gap-8">
          <div className="flex gap-1">
            <span>&#x2022;</span>Next day turnover
          </div>
          <div className="flex gap-1">
            <span>&#x2022;</span>Cancel anytime
          </div>
          <div className="flex gap-1">
            <span>&#x2022;</span>Unlimited requests
          </div>
        </div>
        <div className="flex items-center gap-8">
          <a
            href=""
            className="text-lg py-6 px-6 bg-stone-800 text-stone-200 tracking-wider font-medium rounded-lg"
          >
            Book a call 🗓️
          </a>
          <Link className="font-medium tracking-wide" href="#pricing">
            View pricing
          </Link>
        </div>
      </div>
      <div className="h-24"></div>
      <div>
        <Work />
      </div>
      <div className="container max-w-5xl mx-auto px-4 lg:px-0 py-32">
        <WhatWeDo />
      </div>
      <div className="bg-stone-900 text-stone-200">
        <div className="container max-w-5xl mx-auto px-4 lg:px-0 py-32">
          <Solutions />
        </div>
      </div>
      <div className="container max-w-5xl mx-auto px-4 lg:px-0 py-32">
        <Pricing />
      </div>
      <div className="container max-w-2xl mx-auto px-4 lg:px-0 py-32">
        <FAQ />
      </div>
    </main>
  );
}
