import Link from "next/link";
import React from "react";
import Particles from "@/components/ui/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Profile", href: "/profile" },
];

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center w-screen h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />
      <div className="px-4 mx-16 text-wrap text-zinc-500">
      <h1 className="mb-8 text-2xl font-medium tracking-tighter text-center">
  👋 Hi, I am <span className="text-zinc-300">Hiren Mwanje, Maddara</span>
</h1>

<h1 className="text-base">
  I'm a Full-Stack Developer with a knack for problem-solving and a love for continuous learning. I specialize in building dynamic, user-friendly applications with 
  <Link target="_blank" href="" className="underline duration-500 hover:text-zinc-300">React</Link> and 
  <Link target="_blank" href="" className="underline duration-500 hover:text-zinc-300">Next.js</Link>. Currently, I'm deepening my expertise in Web Development while pursuing studies in Psychological Science at the 
  <Link target="_blank" href="" className="underline duration-500 hover:text-zinc-300">University of Padova</Link>.
</h1>

      </div>

      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          All rights reserved. Hiren Maddara &copy; {(new Date()).getFullYear()}.
        </h2>
      </div>
    </div>
  );
}
