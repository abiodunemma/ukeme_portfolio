"use client";

export default function Header() {
  return (
    <header className="bg-white p-4 shadow-md w-full">
      <div className="flex justify-end gap-6">
        <h4 className="text-black cursor-pointer hover:underline">Works</h4>
        <h4 className="text-black cursor-pointer hover:underline">Blog</h4>
        <h4 className="text-black cursor-pointer hover:underline">Contact</h4>
      </div>
    </header>
  );
}

