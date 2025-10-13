import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const Deezer: AppMeta = {
  icon: "https://cdn-files.dzcdn.net/cache/slash/images/common/logos/logo-horizontal-white-text.c409af08ede4db772948.svg",
  id: "deezer-stable",
  friendlyName: "Deezer App",
  twitter: "Deezer",
  async checkIsFixed() {
    const url =
      "https://www.deezer.com/desktop/download?platform=darwin&architecture=x64&platformVersion=10.15.7";
    const pat = "_cornerMask";
    const result = await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
