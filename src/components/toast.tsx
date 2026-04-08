"use client";

import { useState } from "react";

export const Toast = ({ message, type }: { message: string; type: "success" | "error" }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className={`fixed top-5 right-5 z-50 px-6 py-4 rounded-lg shadow-lg text-white font-medium ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
      onClick={() => setVisible(false)}
    >
      {message}
    </div>
  );
};