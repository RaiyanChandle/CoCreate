"use client"
import Image from "next/image";
import {
  useOrganization,
  useOrganizationList
} from "@clerk/nextjs";
import { Hint } from "./hint";
import { cn } from "@/lib/utils";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const Item = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const handleClick = () => {
    if (!setActive) return;
    setActive({
      organization: id,
    });
  };

  return (
    <div
      className={cn(
        "aspect-square relative rounded-md cursor-pointer overflow-hidden group",
        isActive && "ring-2 ring-blue-500"
      )}
      onClick={handleClick}
    >
      {/* Pulsing background while image loads */}
      <div className="absolute inset-0 bg-gray-200 animate-pulse" id={`placeholder-${id}`} />

      <Hint label={name} side="right" align="start" sideOffset={18}>
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="64px"
          className={cn(
            "object-cover transition-opacity duration-300 opacity-70 group-hover:opacity-100",
            isActive && "opacity-100"
          )}
          onLoadingComplete={(img) => {
            img.setAttribute("data-loaded", "true");
            const placeholder = document.getElementById(`placeholder-${id}`);
            if (placeholder) placeholder.remove(); // remove pulsing bg once loaded
          }}
        />
      </Hint>
    </div>
  );
};
