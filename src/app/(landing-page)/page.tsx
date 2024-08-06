/* NEW THINGS: */
//style={{ backgroundColor: "#f7f7f7" }} (by chatGPT)
//leading-x (by Tailwind)
//w-5/12 (by Tailwind)
//w-{lo que quiera} (marquitos)
//high, width image (by HTML)
//import React from "react";
//import { Rate } from "antd";
//<Rate disabled defaultValue={4} /> (by Ant Design)
//tracking-normal (by Tailwind)
// list-disc (by Tailwind)

import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex items-center justify-center bg-orange-50 dark:bg-slate-950">
      <div className="max-w-7xl px-10">
        <div className="flex flex-row gap-40 pt-36">
          <div className="flex max-w-xl flex-col">
            <div className="pb-6 text-5xl font-extrabold text-slate-800 dark:text-slate-200">
              <div>
                <span>
                  The platform that helps to achieve{" "}
                  <span className="text-orange-600 dark:text-orange-400">
                    your goals
                  </span>
                </span>
              </div>
            </div>
            <div className="pb-8 text-lg font-medium text-zinc-600 dark:text-zinc-400">
              <span>
                The all-in-one 365-day life management platform that will help
                you streamline your life and reach your goals. Customized to
                your personal interests and aspirations, ensuring a more
                productive and fulfilling future.
              </span>
            </div>
            <div className="flex gap-6 pb-16">
              <button className="rounded-lg bg-orange-500 px-6 py-3 text-lg font-bold text-white dark:bg-orange-500">
                Start organizing
              </button>
              <div className="flex items-center justify-center rounded-lg border-2 border-orange-400 px-6 py-3 text-lg font-bold text-slate-600 dark:border-orange-600 dark:text-slate-400">
                <button>Learn More</button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/more/People.png"
                height={200}
                width={200}
                alt="People"
              ></Image>
              <span className="flex font-semibold text-slate-500 dark:text-slate-500">
                Trusted by 100,000+ people
              </span>
            </div>
            <div className="flex items-center">
              <Image
                src="/icons1/StarRating.png"
                height={150}
                width={150}
                alt="StarRating"
              ></Image>
            </div>
          </div>
          <div className="item-center flex flex-col justify-center gap-10">
            <Image src="/more/Graph.png" height={500} width={500} alt="Graph" />
            <Image src="/icons1/Apps.png" height={100} width={100} alt="Apps" />
          </div>
        </div>
        <div className="flex flex-col gap-40 py-24">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-2">
              <div className="flex text-base font-semibold tracking-wide text-orange-600 dark:text-orange-400">
                <span>HOW IT WORKS</span>
              </div>
              <div className="flex max-w-96 text-base text-zinc-700 dark:text-zinc-300">
                <span>
                  Organizing life effectively often requires a combination of
                  tools that cater to different aspects of planning and
                  productivity. MANA manages this tools for you.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-28">
              <div className="flex flex-row gap-60">
                <div className="flex flex-col gap-4">
                  <div>
                    <span className="flex text-8xl font-extrabold text-zinc-200 dark:text-slate-800">
                      01
                    </span>
                    <span className="flex text-zinc-400 dark:text-zinc-600">
                      Initial Setup and Planning
                    </span>
                    <span className="flex text-3xl font-bold text-zinc-700 dark:text-zinc-300">
                      Tell us what you want to do
                    </span>
                  </div>
                  <div className="flex max-h-20 max-w-96 text-base text-zinc-700 dark:text-zinc-300">
                    <span>
                      Never again waste time thinking about when to do
                      something. MANA IA will help you plan your day, week,
                      month, and year.
                    </span>
                  </div>
                </div>
                <div>
                  <Image
                    src="/more/phone3.png"
                    height={450}
                    width={450}
                    alt="phone3"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-60">
                <div>
                  <Image
                    src="/more/phone3.png"
                    height={385}
                    width={385}
                    alt="phone3"
                  ></Image>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <span className="flex text-8xl font-extrabold text-zinc-200 dark:text-slate-800">
                      02
                    </span>
                    <span className="flex text-zinc-400 dark:text-zinc-600">
                      Setting Up Notion for Centralized Planning
                    </span>
                    <span className="flex text-3xl font-bold text-zinc-700 dark:text-zinc-300">
                      Tell us your commitment
                    </span>
                  </div>
                  <div className="flex h-20 w-96 flex-col gap-1 text-base text-zinc-700 dark:text-zinc-300">
                    <span>MANA will:</span>
                    <ul className="ml-5 list-disc">
                      <li>Set up a new Notion workspace for you</li>
                      <li>
                        Design a central dashboard with links to different areas
                        you added before
                      </li>
                      <li>Create Pages and Databases</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-60">
                <div className="flex flex-col gap-4">
                  <div>
                    <span className="flex text-8xl font-extrabold text-zinc-200 dark:text-slate-800">
                      03
                    </span>
                    <span className="flex text-zinc-400 dark:text-zinc-600">
                      Initial Setup and Planning
                    </span>
                    <span className="flex text-3xl font-bold text-zinc-700 dark:text-zinc-300">
                      Tell us what you want to do
                    </span>
                  </div>
                  <div className="flex max-h-20 max-w-96 text-base text-zinc-700 dark:text-zinc-300">
                    <span>
                      Never again waste time thinking about when to do
                      something. MANA IA will help you plan your day, week,
                      month, and year.
                    </span>
                  </div>
                </div>
                <div>
                  <Image
                    src="/more/phone3.png"
                    height={385}
                    width={385}
                    alt="phone3"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-28 rounded-xl border-2 border-orange-100 py-32 dark:border-orange-900">
            <div className="flex flex-col items-center justify-center gap-4">
              <span className="text-base font-semibold tracking-wide text-orange-600 dark:text-orange-400">
                MEET OUR TEEM
              </span>
              <span className="text-center text-base text-zinc-700 dark:text-zinc-300">
                We are a passionate and dedicated group committed to enhancing
                peoples lives.
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-20">
              <div className="flex flex-col items-center justify-center gap-8">
                <div className="flex flex-row items-center justify-center gap-20">
                  <Image
                    src="/people/natasha.png"
                    height={170}
                    width={170}
                    alt="people"
                    className="rounded-full"
                  ></Image>
                  <Image
                    src="/people/marcos.png"
                    height={170}
                    width={170}
                    alt="marcos"
                    className="rounded-full"
                  ></Image>
                  <Image
                    src="/people/noah.png"
                    height={170}
                    width={170}
                    alt="noah"
                    className="rounded-full"
                  ></Image>
                  <Image
                    src="/people/xingi.png"
                    height={170}
                    width={170}
                    alt="xingi"
                    className="rounded-full"
                  ></Image>
                </div>
                <div className="flex flex-row items-center justify-center gap-48 pr-5 text-lg text-zinc-800 dark:text-slate-200">
                  <span>Natasha</span>
                  <span>Marcos</span>
                  <span>Noah</span>
                  <span className="flex pl-6">Xingi</span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-8">
                <div className="flex flex-row justify-center gap-20">
                  <Image
                    src="/people/aiden.png"
                    height={170}
                    width={170}
                    alt="aiden"
                    className="rounded-full"
                  ></Image>
                  <Image
                    src="/people/ethan.png"
                    height={170}
                    width={170}
                    alt="ethan"
                    className="rounded-full"
                  ></Image>
                  <Image
                    src="/people/sara.png"
                    height={170}
                    width={170}
                    alt="sara"
                    className="rounded-full"
                  ></Image>
                  <Image
                    src="/people/roberto.png"
                    height={170}
                    width={170}
                    alt="roberto"
                    className="rounded-full"
                  ></Image>
                </div>
                <div className="flex flex-row items-center justify-center gap-52 pl-3 text-lg text-zinc-800 dark:text-slate-200">
                  <span>Aiden</span>
                  <span>Ethan</span>
                  <span>Sara</span>
                  <span>Roberto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
