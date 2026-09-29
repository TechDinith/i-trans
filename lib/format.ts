import { SITE } from "@/lib/constants";

export function toLkr(usd: number): number {
  return Math.round((usd * SITE.currencyUsdToLkr) / 500) * 500;
}

export function priceLabel(usd: number): { usd: string; lkr: string } {
  return {
    usd: `$${usd.toLocaleString("en-US")}`,
    lkr: `LKR ${toLkr(usd).toLocaleString("en-US")}`,
  };
}
