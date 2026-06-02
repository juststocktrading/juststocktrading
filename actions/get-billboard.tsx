import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard | null> => {
  try {
    const res = await fetch(`${URL}/${id}`, {
      signal: AbortSignal.timeout(8000),
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return (await res.json()) as Billboard;
  } catch (err) {
    console.error("[getBillboard] failed:", err);
    return null;
  }
};

export default getBillboard;
