"use client"

import { signIn, signOut } from "next-auth/react";
import { Button } from "../button";

export default function Footer () {
    return (
        <div>
            <Button onClick={() => signOut()}>SignOut</Button>
            <Button onClick={() => signIn()}>SignIn</Button>
            </div>
    )
};