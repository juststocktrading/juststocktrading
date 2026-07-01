"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Package,
  MapPin,
  Settings,
  Heart,
  LogOut,
  ShoppingBag,
  Clock,
  CreditCard,
  ChevronRight,
  Edit3,
  Plus,
  Mail,
  Phone,
  Calendar,
  Award,
  Star,
  FileText,
  Truck,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";

const userData = {
  name: "Sarah Johnson",
  email: "sarah.johnson@example.com",
  phone: "+44 7700 900123",
  memberSince: "January 2024",
  avatar: "/user.png",
  totalOrders: 12,
  totalSpent: 2847.50,
  wishlistCount: 8,
  tier: "Gold",
};

const recentOrders = [
  {
    id: "ORD-2026-0042",
    date: "28 Jun 2026",
    status: "Delivered",
    total: 249.99,
    items: 1,
    product: "Mixed Women Clothing (25KG)",
    image: "/women.png",
  },
  {
    id: "ORD-2026-0038",
    date: "15 Jun 2026",
    status: "Shipped",
    total: 499.99,
    items: 2,
    product: "Mixed Kids Clothing (25KG)",
    image: "/kiddies.png",
  },
  {
    id: "ORD-2026-0029",
    date: "28 May 2026",
    status: "Delivered",
    total: 249.99,
    items: 1,
    product: "Mixed Men Clothing (25KG)",
    image: "/men.png",
  },
  {
    id: "ORD-2026-0021",
    date: "10 May 2026",
    status: "Cancelled",
    total: 199.99,
    items: 1,
    product: "General Mix (25KG)",
    image: "/men.png",
  },
];

const savedAddresses = [
  {
    label: "Home",
    street: "42 Manchester Road",
    city: "Leeds",
    postcode: "LS1 4AB",
    country: "United Kingdom",
    default: true,
  },
  {
    label: "Business",
    street: "15 Commerce Way",
    city: "London",
    postcode: "EC2A 4NE",
    country: "United Kingdom",
    default: false,
  },
];

type Tab = "orders" | "addresses" | "settings" | "reviews";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("orders");

  const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: "orders", label: "Orders", icon: Package },
    { id: "addresses", label: "Addresses", icon: MapPin },
    { id: "reviews", label: "Reviews", icon: Star },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      Delivered: "bg-green-100 text-green-700",
      Shipped: "bg-blue-100 text-blue-700",
      Processing: "bg-yellow-100 text-yellow-700",
      Cancelled: "bg-red-100 text-red-700",
    };
    return (
      <span
        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
          styles[status] || "bg-gray-100 text-gray-700"
        }`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full ring-4 ring-white/30 overflow-hidden flex-shrink-0">
              <Image
                src={userData.avatar}
                alt={userData.name}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            <div className="text-center sm:text-left flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                <h1 className="text-2xl sm:text-3xl font-bold">
                  {userData.name}
                </h1>
                <span className="inline-flex items-center gap-1.5 bg-yellow-400/20 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full w-fit mx-auto sm:mx-0">
                  <Award className="w-3.5 h-3.5" />
                  {userData.tier} Member
                </span>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-blue-200">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4" />
                  {userData.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4" />
                  {userData.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  Member since {userData.memberSince}
                </span>
              </div>
            </div>
            <button className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-4 py-2 text-sm font-medium transition-colors flex-shrink-0">
              <Edit3 className="w-4 h-4" />
              Edit Profile
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <ShoppingBag className="w-5 h-5 mx-auto mb-1.5 text-blue-300" />
              <div className="text-xl font-bold">{userData.totalOrders}</div>
              <div className="text-xs text-blue-200">Total Orders</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <CreditCard className="w-5 h-5 mx-auto mb-1.5 text-blue-300" />
              <div className="text-xl font-bold">
                £{userData.totalSpent.toLocaleString()}
              </div>
              <div className="text-xs text-blue-200">Total Spent</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Heart className="w-5 h-5 mx-auto mb-1.5 text-blue-300" />
              <div className="text-xl font-bold">{userData.wishlistCount}</div>
              <div className="text-xs text-blue-200">Wishlist Items</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Award className="w-5 h-5 mx-auto mb-1.5 text-blue-300" />
              <div className="text-xl font-bold">{userData.tier}</div>
              <div className="text-xs text-blue-200">Membership Tier</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
              <nav className="p-3 space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {tab.label}
                    </button>
                  );
                })}
                <hr className="my-2 border-gray-100" />
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all">
                  <LogOut className="w-5 h-5" />
                  Log Out
                </button>
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Order History
                    </h2>
                    <p className="text-sm text-gray-500">
                      Track and manage your orders
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Orders</option>
                      <option>Delivered</option>
                      <option>Shipped</option>
                      <option>Processing</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {order.id}
                          </p>
                          <p className="text-xs text-gray-500">{order.date}</p>
                        </div>
                        {getStatusBadge(order.status)}
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                          <Image
                            src={order.image}
                            alt={order.product}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                            {order.product}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {order.items} item{order.items > 1 ? "s" : ""}
                          </p>
                          <p className="text-sm font-bold text-blue-600 mt-1">
                            £{order.total.toFixed(2)}
                          </p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors p-1">
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex gap-2 mt-4 pt-3 border-t border-gray-50">
                        <button className="flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors">
                          <Truck className="w-3.5 h-3.5" />
                          Track Order
                        </button>
                        <button className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors">
                          <RefreshCw className="w-3.5 h-3.5" />
                          Reorder
                        </button>
                        <button className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors">
                          <FileText className="w-3.5 h-3.5" />
                          Invoice
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === "addresses" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Saved Addresses
                    </h2>
                    <p className="text-sm text-gray-500">
                      Manage your shipping addresses
                    </p>
                  </div>
                  <button className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    Add New
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {savedAddresses.map((address, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow relative"
                    >
                      {address.default && (
                        <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3 h-3" />
                          Default
                        </span>
                      )}
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        <h3 className="font-semibold text-gray-900">
                          {address.label}
                        </h3>
                      </div>
                      <div className="text-sm text-gray-600 space-y-0.5 ml-7">
                        <p>{address.street}</p>
                        <p>
                          {address.city}, {address.postcode}
                        </p>
                        <p>{address.country}</p>
                      </div>
                      <div className="flex gap-3 mt-4 ml-7">
                        <button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                          Edit
                        </button>
                        <button className="text-xs font-medium text-red-500 hover:text-red-600">
                          Remove
                        </button>
                        {!address.default && (
                          <button className="text-xs font-medium text-gray-500 hover:text-gray-700">
                            Set as Default
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === "reviews" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      My Reviews
                    </h2>
                    <p className="text-sm text-gray-500">
                      Products you have reviewed
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                  <Star className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No Reviews Yet
                  </h3>
                  <p className="text-sm text-gray-500 mb-6 max-w-sm mx-auto">
                    You haven&apos;t reviewed any products yet. Share your
                    experience to help other resellers!
                  </p>
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Browse Products
                  </Link>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Account Settings
                    </h2>
                    <p className="text-sm text-gray-500">
                      Manage your account preferences
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Personal Info */}
                  <div className="bg-white rounded-2xl border border-gray-100 p-6">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <User className="w-5 h-5 text-blue-600" />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue={userData.name}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          defaultValue={userData.email}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          defaultValue={userData.phone}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1.5">
                          Member Since
                        </label>
                        <input
                          type="text"
                          defaultValue={userData.memberSince}
                          disabled
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-gray-50 text-gray-400 cursor-not-allowed"
                        />
                      </div>
                    </div>
                    <button className="mt-4 bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                      Save Changes
                    </button>
                  </div>

                  {/* Notifications */}
                  <div className="bg-white rounded-2xl border border-gray-100 p-6">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      Notification Preferences
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          label: "Order Updates",
                          desc: "Get notified when your order status changes",
                        },
                        {
                          label: "New Arrivals",
                          desc: "Be the first to know about new stock",
                        },
                        {
                          label: "Promotions & Deals",
                          desc: "Receive exclusive offers and discounts",
                        },
                        {
                          label: "Newsletter",
                          desc: "Monthly updates from Just Stock Trading",
                        },
                      ].map((pref, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between py-2"
                        >
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {pref.label}
                            </p>
                            <p className="text-xs text-gray-500">
                              {pref.desc}
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="sr-only peer"
                            />
                            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Password */}
                  <div className="bg-white rounded-2xl border border-gray-100 p-6">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <LogOut className="w-5 h-5 text-blue-600" />
                      Change Password
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1.5">
                          Current Password
                        </label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1.5">
                          New Password
                        </label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <button className="mt-4 bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors">
                      Update Password
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
