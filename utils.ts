import { DEFAULT_LANGUAGE } from "@/consts";

export const isBrowser = typeof window != "undefined";

export const copyTextToClipboard = async (text: string) => {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand("copy", true, text);
  }
};

export const language = isBrowser
  ? window.navigator.language.slice(0, 2)
  : DEFAULT_LANGUAGE;

console.log("language", language);
