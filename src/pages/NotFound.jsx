import { Link } from "react-router-dom";
import Button from "../components/Button";
import usePageMeta from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta({ title: "Not found — LivLong MD" });
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="label text-eucalyptus mb-6">404</div>
        <h1 className="text-5xl md:text-7xl tracking-tightest font-medium text-charcoal leading-[1.05]">
          A quiet detour.
        </h1>
        <p className="mt-6 text-body leading-relaxed">
          The page you're looking for has moved or never existed. Let's return
          to a more familiar path.
        </p>
        <div className="mt-10">
          <Button as={Link} to="/" variant="primary" size="lg">
            Return home
          </Button>
        </div>
      </div>
    </div>
  );
}
