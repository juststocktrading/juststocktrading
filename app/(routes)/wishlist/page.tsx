"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  Trash2,
  Share2,
  Grid3X3,
  List,
  Search,
  ArrowUpDown,
  ChevronDown,
  HeartOff,
  Check,
  Copy,
  Clock,
  Tag,
  Star,
  Package,
} from "lucide-react";
import useWishlist, { WishlistItem } from "@/hooks/use-wishlist";

const sampleWishlistItems: WishlistItem[] = [
  {
    id: "1",
    name: "Mixed Women Clothing (25KG)",
    price: 249.99,
    image: "/women.png",
    rating: 4.8,
    ratingCount: 124,
    addedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: "2",
    name: "Mixed Kids Clothing (25KG)",
    price: 249.99,
    image: "/kiddies.png",
    rating: 4.6,
    ratingCount: 89,
    addedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
  },
  {
    id: "3",
    name: "Mixed Men Clothing (25KG)",
    price: 249.99,
    image: "/men.png",
    rating: 4.7,
    ratingCount: 156,
    addedAt: new Date(Date.now() - 86400000 * 1).toISOString(),
  },
  {
    id: "4",
    name: "General Mix (25KG)",
    price: 199.99,
    image: "/men.png",
    rating: 4.5,
    ratingCount: 67,
    addedAt: new Date(Date.now() - 86400000 * 7).toISOString(),
  },
  {
    id: "5",
    name: "Ladies Mix Dresses (25KG)",
    price: 249.99,
    image: "/women.jpg",
    rating: 4.9,
    ratingCount: 203,
    addedAt: new Date(Date.now() - 86400000 * 3).toISOString(),
  },
  {
    id: "6",
    name: "Winter General Mix (25KG)",
    price: 149.99,
    image: "/men.png",
    rating: 4.4,
    ratingCount: 42,
    addedAt: new Date(Date.now() - 86400000 * 10).toISOString(),
  },
  {
    id: "7",
    name: "Mixed Women Clothing (55KG)",
    price: 499.99,
    image: "/ladies.png",
    rating: 4.9,
    ratingCount: 88,
    addedAt: new Date(Date.now() - 86400000 * 4).toISOString(),
  },
  {
    id: "8",
    name: "Mixed Kids Clothing (55KG)",
    price: 499.99,
    image: "/kiddies.png",
    rating: 4.7,
    ratingCount: 95,
    addedAt: new Date(Date.now() - 86400000 * 6).toISOString(),
  },
  {
    id: "9",
    name: "Ladies Underwear Mix (25KG)",
    price: 249.99,
    image: "/women.jpg",
    rating: 4.3,
    ratingCount: 34,
    addedAt: new Date(Date.now() - 86400000 * 8).toISOString(),
  },
];

type SortOption = "newest" | "oldest" | "price-low" | "price-high" | "name";
type ViewMode = "grid" | "list";

const WishlistPage = () => {
  const wishlist = useWishlist();
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Seed initial items if empty
  useEffect(() => {
    if (isMounted && wishlist.items.length === 0) {
      sampleWishlistItems.forEach((item) => {
        wishlist.addItem(item);
      });
    }
  }, [isMounted, wishlist]);

  const sortedAndFiltered = useMemo(() => {
    let items = [...wishlist.items];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.id.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case "newest":
        items.sort(
          (a, b) =>
            new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime()
        );
        break;
      case "oldest":
        items.sort(
          (a, b) =>
            new Date(a.addedAt).getTime() - new Date(b.addedAt).getTime()
        );
        break;
      case "price-low":
        items.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        items.sort((a, b) => b.price - a.price);
        break;
      case "name":
        items.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
    return items;
  }, [wishlist.items, sortBy, searchQuery]);

  const totalValue = wishlist.items.reduce((sum, item) => sum + item.price, 0);

  const toggleSelect = (id: string) => {
    const next = new Set(selectedItems);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelectedItems(next);
  };

  const toggleSelectAll = () => {
    if (selectedItems.size === sortedAndFiltered.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(sortedAndFiltered.map((i) => i.id)));
    }
  };

  const removeSelected = () => {
    selectedItems.forEach((id) => wishlist.removeItem(id));
    setSelectedItems(new Set());
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / 86400000);

    if (days === 0) return "Today";
    if (days === 1) return "Yesterday";
    if (days < 7) return `${days} days ago`;
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "My Wishlist | Just Stock Trading",
        text: `Check out my wishlist with ${wishlist.items.length} items!`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "name", label: "Name (A-Z)" },
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    My Wishlist
                  </h1>
                  <p className="text-sm text-gray-500">
                    {wishlist.items.length} item
                    {wishlist.items.length !== 1 ? "s" : ""} saved
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-50 rounded-lg p-1 flex">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "grid"
                      ? "bg-white shadow-sm text-blue-600"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                  aria-label="Grid view"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "list"
                      ? "bg-white shadow-sm text-blue-600"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      {wishlist.items.length > 0 && (
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Package className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">
                    {wishlist.items.length}
                  </div>
                  <div className="text-xs text-gray-500">Items Saved</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center">
                  <Tag className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">
                    £{totalValue.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500">Total Value</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center">
                  <Star className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">
                    {(
                      wishlist.items.reduce(
                        (s, i) => s + (i.rating || 4.5),
                        0
                      ) / wishlist.items.length
                    ).toFixed(1)}
                  </div>
                  <div className="text-xs text-gray-500">Avg Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">
                    {new Date(
                      Math.min(
                        ...wishlist.items.map((i) => new Date(i.addedAt).getTime())
                      )
                    ).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                    })}
                  </div>
                  <div className="text-xs text-gray-500">Oldest Item</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Controls Bar */}
      {wishlist.items.length > 0 && (
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={
                      sortedAndFiltered.length > 0 &&
                      selectedItems.size === sortedAndFiltered.length
                    }
                    onChange={toggleSelectAll}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  Select All ({sortedAndFiltered.length})
                </label>
                {selectedItems.size > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">
                      {selectedItems.size} selected
                    </span>
                    <button
                      onClick={removeSelected}
                      className="text-sm text-red-500 hover:text-red-600 font-medium flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Remove
                    </button>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search wishlist..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-48 sm:w-56"
                  />
                </div>

                <div className="relative">
                  <button
                    onClick={() => setShowSortDropdown(!showSortDropdown)}
                    className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <ArrowUpDown className="w-4 h-4" />
                    <span className="hidden sm:inline">
                      {sortOptions.find((o) => o.value === sortBy)?.label}
                    </span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  {showSortDropdown && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setShowSortDropdown(false)}
                      />
                      <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-20 py-1.5 w-48">
                        {sortOptions.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => {
                              setSortBy(opt.value);
                              setShowSortDropdown(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                              sortBy === opt.value
                                ? "text-blue-600 bg-blue-50 font-medium"
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {wishlist.items.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-2xl border border-gray-100 p-12 sm:p-16 text-center">
            <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6">
              <HeartOff className="w-10 h-10 text-red-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Your Wishlist is Empty
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Start saving your favourite stock items to your wishlist. Browse
              our products and tap the heart icon to add them here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                Browse Products
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Go Home
              </Link>
            </div>
          </div>
        ) : searchQuery && sortedAndFiltered.length === 0 ? (
          /* No Results */
          <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              No Results Found
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              No items match &ldquo;{searchQuery}&rdquo; in your wishlist.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-blue-600 font-medium text-sm hover:underline"
            >
              Clear search
            </button>
          </div>
        ) : viewMode === "grid" ? (
          /* Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {sortedAndFiltered.map((item) => (
              <div
                key={item.id}
                className={`group bg-white rounded-2xl border overflow-hidden transition-all duration-200 hover:shadow-lg ${
                  selectedItems.has(item.id)
                    ? "border-blue-400 ring-2 ring-blue-100"
                    : "border-gray-100"
                }`}
              >
                <div className="relative aspect-square bg-gray-50">
                  <input
                    type="checkbox"
                    checked={selectedItems.has(item.id)}
                    onChange={() => toggleSelect(item.id)}
                    className="absolute top-3 left-3 z-10 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => wishlist.removeItem(item.id)}
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 min-h-[2.5rem]">
                    {item.name}
                  </h3>
                  <p className="text-lg font-bold text-blue-600">
                    £{item.price.toFixed(2)}
                  </p>
                  {item.rating && (
                    <div className="flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium text-gray-700">
                        {item.rating.toFixed(1)}
                      </span>
                      {item.ratingCount && (
                        <span className="text-xs text-gray-400">
                          ({item.ratingCount})
                        </span>
                      )}
                    </div>
                  )}
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Added {formatDate(item.addedAt)}
                  </p>
                  <div className="flex gap-2 pt-1">
                    <button className="flex-1 inline-flex items-center justify-center gap-1.5 bg-blue-600 text-white text-xs font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Cart
                    </button>
                    <button className="w-9 h-9 inline-flex items-center justify-center border border-gray-200 rounded-lg text-gray-400 hover:text-blue-600 hover:border-blue-200 transition-colors">
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-3">
            {sortedAndFiltered.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border p-4 transition-all duration-200 hover:shadow-md ${
                  selectedItems.has(item.id)
                    ? "border-blue-400 ring-2 ring-blue-100"
                    : "border-gray-100"
                }`}
              >
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    checked={selectedItems.has(item.id)}
                    onChange={() => toggleSelect(item.id)}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 flex-shrink-0"
                  />
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                        {item.name}
                      </h3>
                      <p className="text-lg font-bold text-blue-600">
                        £{item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                      {item.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-medium text-gray-700">
                            {item.rating.toFixed(1)}
                          </span>
                          {item.ratingCount && (
                            <span className="text-xs text-gray-400">
                              ({item.ratingCount})
                            </span>
                          )}
                        </div>
                      )}
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Added {formatDate(item.addedAt)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button className="hidden sm:inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Cart
                    </button>
                    <button
                      onClick={() => wishlist.removeItem(item.id)}
                      className="w-9 h-9 inline-flex items-center justify-center border border-gray-200 rounded-lg text-gray-400 hover:text-red-500 hover:border-red-200 transition-colors"
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      {wishlist.items.length > 0 && (
        <div className="bg-white border-t border-gray-100 sticky bottom-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  {wishlist.items.length} item
                  {wishlist.items.length !== 1 ? "s" : ""} · £
                  {totalValue.toLocaleString()} total
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => wishlist.clearAll()}
                  className="text-sm text-gray-500 hover:text-red-500 font-medium transition-colors flex items-center gap-1"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear All
                </button>
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add More Items
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Share Toast */}
      {copied && (
        <div className="fixed bottom-8 right-8 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-2.5 z-50 animate-in slide-in-from-bottom-2">
          <Check className="w-4 h-4 text-green-400" />
          <span className="text-sm font-medium">Link copied!</span>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
