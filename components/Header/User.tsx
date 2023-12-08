"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/firebase";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { LogOut } from "lucide-react";

type Props = {};

function User({}: Props) {
  const [user, setUser] = useAuthState(auth);
  const handleLogout = async () => {
    try {
      await auth.signOut();
      // The auth state will automatically be updated, triggering a re-render.
    } catch (error:any) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div>
      <div className="flex mt-2 font-semibold justify-around text-white text-sm cursor-pointer sm:mt-0">
        {user ? (
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <div className="text-black">Hello, {user?.displayName}</div>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link href="/auth">
                    <div className="flex items-center">
                      <Avatar>
                        {
                          // @ts-ignore
                          <AvatarImage src={user?.photoURL} />
                        }
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="ml-2 font-medium">
                        {user?.displayName}
                      </div>
                    </div>
                  </Link>
                </MenubarItem>

                <MenubarSeparator />
                <MenubarItem>
                  <div onClick={handleLogout} className="flex items-center text-red-500 space-x-2">
                    <LogOut />
                    <div>Log Out</div>
                  </div>
                </MenubarItem>

                <MenubarSeparator />
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        ) : (
          <Link href="/auth">Sign-in</Link>
        )}
      </div>
    </div>
  );
}

export default User;
