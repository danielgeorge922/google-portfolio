import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-white px-4">
      {/* Google-style 404 */}
      <div className="text-center">
        <h1 className="text-8xl font-normal mb-8">
          <span className="text-[#4285f4]">4</span>
          <span className="text-[#ea4335]">0</span>
          <span className="text-[#fbbc04]">4</span>
        </h1>
        
        <h2 className="text-2xl text-gray-600 mb-4">
          That&apos;s an error.
        </h2>
        
        <p className="text-gray-500 mb-8 max-w-md">
          The requested URL was not found on this server. That&apos;s all we know.
        </p>
        
        <Link
          href="/"
          className="inline-block px-6 py-2 text-[#1a73e8] border border-[#1a73e8] rounded hover:bg-[#1a73e8] hover:text-white transition-colors"
        >
          Go to Daniel&apos;s Homepage
        </Link>
      </div>
    </div>
  );
}