import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category | null> => {
  try {
    const res = await fetch(`${URL}/${id}`, {
      signal: AbortSignal.timeout(8000),
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return (await res.json()) as Category;
  } catch (err) {
    console.error("[getCategory] failed:", err);
    return null;
  }
};

export default getCategory;
