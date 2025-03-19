"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function LoginButton() {
    const { data: session } = useSession();

    return session ? (
        <div className="flex">
            <Image 
                src={session.user?.image || "/default-image.png"} 
                width={100} 
                height={100} 
                alt={session.user?.name || "User profile"} 
            />

            <button onClick={() => signOut()}>Sign Out</button>
        </div>
    ) : (
        <button onClick={() => signIn("google")}>Sign in with Google</button>
    );
}
