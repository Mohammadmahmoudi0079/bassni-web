import { logout } from "@/src/lib/auth";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login"); // or "/"
  };

  return (
    <button
      className="flex items-center gap-2 text-gray-700 hover:text-purple-600"
      onClick={handleLogout}
    >
      <LogOut className="h-5 w-5" />
      Logout
    </button>
  );
}
