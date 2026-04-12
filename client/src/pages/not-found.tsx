import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#080B0F]">
      <div className="w-full max-w-md mx-4 text-center">
        <div className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-8 md:p-12">
          <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="h-8 w-8 text-red-400" />
          </div>
          <h1 className="text-3xl font-bold text-[#F0F4F8] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
            404
          </h1>
          <p className="text-[#8899AA] mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <Button variant="outline" className="bg-transparent border-white/[0.08] text-[#F0F4F8] hover:bg-white/[0.04]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
