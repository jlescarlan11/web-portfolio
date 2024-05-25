import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-svh overflow-hidden bg-bg-dark text-text-dark">
      <Navbar />
    </main>
  );
}
