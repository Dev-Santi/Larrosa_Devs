import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0088B4",
                danger: "#F95C19",
                soft_danger: "#FFE4D9",
                soft_warning: "#FFEDC9",
                warning: "#FFAF0F",
                success: "#00BA77",
                info: "#00CEC2",
                white: "#FFFFFF",
                light_text: "#F0F4F9",
                dark_text: "#817382",
                background: "#FFF7E7",
            },
        },
    },
    plugins: [],
};
export default config;
