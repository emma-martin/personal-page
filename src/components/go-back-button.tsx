"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function GoBackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm
       transition-colors focus-visible:outline-none focus-visible:ring-1 
       focus-visible:ring-ring disabled:pointer-events-none 
       disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0bg-transparent
        hover:bg-gray-100 text-primary font-semibold py-2 px-4 rounded"
    >
      <ArrowLeft className="h-4 w-4" />
      Go Back
    </button>
  );
}
