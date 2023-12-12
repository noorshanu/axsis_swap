import "styles/globals.css";
import localFont from "next/font/local";
import SidebarLayout from "layout/SidebarLayout";
import { memo } from "react";

const RedHatFont = localFont({
  src: "../../public/fonts/Red-Hat/RedHatDisplay-VariableFont_wght.ttf",
  variable: "--red-hat",
});
const Moment = localFont({
  src: [
    {
      path: "../../public/fonts/MonumentExtended/MonumentExtended-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/MonumentExtended/MonumentExtended-Ultrabold.otf",
      weight: "800",
    },
  ],
  variable: "--moment",
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout
    ? Component.getLayout
    : (page) => <SidebarLayout>{page}</SidebarLayout>;

  return (
    <div className={`${RedHatFont.variable} ${Moment.variable}`}>
      {getLayout(<Component {...pageProps} />)}

    </div>
  );
}
