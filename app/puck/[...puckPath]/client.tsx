"use client";

import type { Data } from "@measured/puck";
import { Button, Puck } from "@measured/puck";
import config from "../../../puck.config";
import Link from "next/link";

export function Client({ path, data }: { path: string; data: Partial<Data> }) {

  return (
    <Puck
      config={config}
      data={data}
      onPublish={async (data) => {
        await fetch("/puck/api", {
          method: "post",
          body: JSON.stringify({ data, path }),
        });
      }}
      overrides={{
        headerActions: ({ children }) => (
          <>
            <div>
              <Link href={'/'}>
                <Button variant="secondary">
                  View page
                </Button>
              </Link>
            </div>

            {children}
          </>
        ),
      }}
    />
  );
}
