import { Link } from "react-router-dom";
import { Plane } from "lucide-react";

const PublicHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 text-[#8B5CF6] hover:text-[#7C3AED] transition-colors"
        >
          <Plane className="h-8 w-8" />
          <span className="text-2xl font-montserrat font-bold">
            Roteirize Já
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
          >
            Entrar
          </Link>
        </div>
      </div>
    </header>
  );
};

export default PublicHeader;