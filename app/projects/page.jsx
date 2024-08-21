import { Article } from "@/components/projects/article";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/ui/nav";
import { Eye } from "lucide-react";
import Link from "next/link";

export default async function ProjectsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some projects are from work and others from my time. All clients
            projects were posted after seeking permission. Some links may
            nolonger due discontinued funding from the client, but I try to
            provide detailed info about each project
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/123eert`}>
              <div className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    <span>SOON</span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" /> 0
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Motorcraft parts
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi sunt distinctio possimus nemo repellendus assumenda,
                  dolorum totam asperiores ad quod perferendis, illo atque
                  aliquam natus doloribus repudiandae cumque quas earum?
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </div>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            <Card>
              <Article
                project={{
                  title: "trfwdyqweuwwk",
                  description:
                    "qwertyuiojjhfhygabebfiuaefehvbaibvuibguiae fbufheuif",
                  date: Date.now(),
                  slug: "wtetyuyrueuue",
                }}
                views={0}
              />
            </Card>
            <Card>
              <Article
                project={{
                  title: "trfwdyqweuwwk",
                  description:
                    "qwertyuiojjhfhygabebfiuaefehvbaibvuibguiae fbufheuif",
                  date: Date.now(),
                  slug: "wtetyuyrueuue",
                }}
                views={0}
              />
            </Card>
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <Article
                project={{
                  title: "trfwdyqweuwwk",
                  description:
                    "qwertyuiojjhfhygabebfiuaefehvbaibvuibguiae fbufheuif",
                  date: Date.now(),
                  slug: "wtetyuyrueuue",
                }}
                views={0}
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <Article
                project={{
                  title: "trfwdyqweuwwk",
                  description:
                    "qwertyuiojjhfhygabebfiuaefehvbaibvuibguiae fbufheuif",
                  date: Date.now(),
                  slug: "wtetyuyrueuue",
                }}
                views={0}
              />
            </Card>
            <Card>
              <Article
                project={{
                  title: "trfwdyqweuwwk",
                  description:
                    "qwertyuiojjhfhygabebfiuaefehvbaibvuibguiae fbufheuif",
                  date: Date.now(),
                  slug: "wtetyuyrueuue",
                }}
                views={0}
              />
            </Card>
            <Card>
              <Article
                project={{
                  title: "trfwdyqweuwwk",
                  description:
                    "qwertyuiojjhfhygabebfiuaefehvbaibvuibguiae fbufheuif",
                  date: Date.now(),
                  slug: "wtetyuyrueuue",
                }}
                views={0}
              />
            </Card>


          </div>


          <div className="grid grid-cols-1 gap-4">
            <Card>
              <Article
                project={{
                  title: "trfwdyqweuwwk",
                  description:
                    "qwertyuiojjhfhygabebfiuaefehvbaibvuibguiae fbufheuif",
                  date: Date.now(),
                  slug: "wtetyuyrueuue",
                }}
                views={0}
              />
            </Card>
            <Card>
              <Article
                project={{
                  title: "trfwdyqweuwwk",
                  description:
                    "qwertyuiojjhfhygabebfiuaefehvbaibvuibguiae fbufheuif",
                  date: Date.now(),
                  slug: "wtetyuyrueuue",
                }}
                views={0}
              />
            </Card>
            <Card>
              <Article
                project={{
                  title: "trfwdyqweuwwk",
                  description:
                    "qwertyuiojjhfhygabebfiuaefehvbaibvuibguiae fbufheuif",
                  date: Date.now(),
                  slug: "wtetyuyrueuue",
                }}
                views={0}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
