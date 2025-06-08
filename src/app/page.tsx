import { index } from "drizzle-orm/gel-core";
import Link from "next/link";
import { id } from "zod/v4/locales";

const paths = [
  "/media/20160812_115538.jpg",
  "/media/20160812_131542.jpg",
  "/media/20160812_132909.jpg",
];

const images = paths.map((path, index) => ({
  id: index + 1,
  path
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-5">
        {[...images,...images,...images].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.path} alt="asd" />
          </div>
        ))}
      </div>
      hello world
    </main>
  );
}
