import { DevDesHome } from "@/components/devdes-home";
import type { Metadata } from "next";
import { headers } from "next/headers";
import "./home.css";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
  },
};

export default async function Home() {
  const requestHeaders = await headers();
  const countryCode =
    requestHeaders.get("x-vercel-ip-country") ??
    requestHeaders.get("cf-ipcountry");

  return <DevDesHome isVietnam={countryCode?.toUpperCase() === "VN"} />;
}
