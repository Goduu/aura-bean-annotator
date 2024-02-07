import colors from "tailwindcss/colors";

export type ColorKeys = keyof typeof colors;

export const borderColors: Record<ColorKeys, string> = {
    "slate": "border-slate-500",
    "gray": "border-gray-500",
    "zinc": "border-zinc-500",
    "neutral": "border-neutral-500",
    "stone": "border-stone-500",
    "red": "border-red-500",
    "orange": "border-orange-500",
    "amber": "border-amber-500",
    "yellow": "border-yellow-500",
    "lime": "border-lime-500",
    "green": "border-green-500",
    "emerald": "border-emerald-500",
    "teal": "border-teal-500",
    "cyan": "border-cyan-500",
    "sky": "border-sky-500",
    "blue": "border-blue-500",
    "indigo": "border-indigo-500",
    "violet": "border-violet-500",
    "purple": "border-purple-500",
    "fuchsia": "border-fuchsia-500",
    "pink": "border-pink-500",
    "rose": "border-rose-500",
    "white": "border-white",
    "black": "border-black",
    "lightBlue": "border-lightBlue-500",
    "transparent": "border-transparent",
    "blueGray": "border-blueGray-500",
    "warmGray": "border-warmGray-500",
    "trueGray": "border-trueGray-500",
    "coolGray": "border-coolGray-500",
    "inherit": "border-inherit",
    "current": "border-current",
}

export const bgColors: Record<ColorKeys, string> = {
    "slate": "bg-slate-500",
    "gray": "bg-gray-500",
    "zinc": "bg-zinc-500",
    "neutral": "bg-neutral-500",
    "stone": "bg-stone-500",
    "red": "bg-red-500",
    "orange": "bg-orange-500",
    "amber": "bg-amber-500",
    "yellow": "bg-yellow-500",
    "lime": "bg-lime-500",
    "green": "bg-green-500",
    "emerald": "bg-emerald-500",
    "teal": "bg-teal-500",
    "cyan": "bg-cyan-500",
    "sky": "bg-sky-500",
    "blue": "bg-blue-500",
    "indigo": "bg-indigo-500",
    "violet": "bg-violet-500",
    "purple": "bg-purple-500",
    "fuchsia": "bg-fuchsia-500",
    "pink": "bg-pink-500",
    "rose": "bg-rose-500",
    "white": "bg-white",
    "black": "bg-black",
    "lightBlue": "bg-lightBlue-500",
    "transparent": "bg-transparent",
    "blueGray": "bg-blueGray-500",
    "warmGray": "bg-warmGray-500",
    "trueGray": "bg-trueGray-500",
    "coolGray": "bg-coolGray-500",
    "inherit": "bg-inherit",
    "current": "bg-current",
}

