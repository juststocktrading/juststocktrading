
import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (): Promise<Billboard[]> => {
  try {
    const res = await fetch(URL, {
      signal: AbortSignal.timeout(8000),
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return (await res.json()) as Billboard[];
  } catch (err) {
    console.error("[getBillboards] failed:", err);
    return [];
  }
};

export default getBillboards;
