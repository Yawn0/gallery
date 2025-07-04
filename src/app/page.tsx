import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"; // This is to ensure the page is not cached

export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy:(model, {desc}) => desc(model.id),
  });

  console.log("images", images);

  return (
    <main className="">
      <div className="flex flex-wrap gap-5">
        {[...images].map((image, index) => (
          <div key={image.id + index} className="flex w-48 flex-col">
            <img src={image.url} alt={image.name} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
