import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  try {
    const res = await fetch(URL, {
      signal: AbortSignal.timeout(8000),
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return (await res.json()) as Size[];
  } catch (err) {
    console.error("[getSizes] failed:", err);
    return [];
  }
};

export default getSizes;
