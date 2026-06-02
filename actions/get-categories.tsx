import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(URL, {
      signal: AbortSignal.timeout(8000),
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return (await res.json()) as Category[];
  } catch (err) {
    console.error("[getCategories] failed:", err);
    return [];
  }
};

export default getCategories;

