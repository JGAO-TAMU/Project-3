import Image from "next/image";
import NavBar from "./components/navbar";
import Cashier from "./pages/cashier";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Cashier />
    </div>
  );
}
