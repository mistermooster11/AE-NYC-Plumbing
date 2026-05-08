import type { ChannelPageData } from "@/components/custom/channel/types";
import aeNycPlumbing from "./ae-nyc-plumbing";

const channelDataMap: Record<string, ChannelPageData> = {
  "ae-nyc-plumbing": aeNycPlumbing,
};

export function getChannelData(slug: string): ChannelPageData | null {
  return channelDataMap[slug] ?? null;
}

export { channelDataMap };
