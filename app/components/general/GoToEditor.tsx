import { Button } from "@measured/puck";
import Link from "next/link";

export const BackToEditor = () => (
    <div className="w-full flex justify-end my-4"><Link href={'/edit'}><Button>Back to Editor</Button></Link></div>
)