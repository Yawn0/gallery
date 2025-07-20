import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"; // This is to ensure the page is not cached

// This is a server component, so we can directly query the database
// and render the images without needing to fetch them on the client side.
async function Images()
{
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="flex flex-wrap gap-5">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          {/* <Image src={image.url} alt={image.name} width={192} height={192} /> */}
          <img src={image.url} alt={image.name} />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  )
}

export default async function HomePage()
{
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl font-semibold">
          Please sign in to view the gallery.
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
