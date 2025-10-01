"use client"
import { useState } from "react";
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import { Hint } from "./hint";

export const NewButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="aspect-square">
        <Hint label="Create Organization" side="right" align="start" sideOffset={18}>
        <button
          className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100"
          onClick={() => setOpen(true)}
        >
          <Plus className="text-white" />
        </button>
        </Hint>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="relative">
            <button
              className="absolute top-2 right-4 text-3xl text-gray-500 hover:text-gray-700 z-10"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <CreateOrganization />
          </div>
        </div>
      )}
    </>
  );
};


