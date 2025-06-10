import { db } from "~/server/db";

export const dynamic = "force-dynamic"; // This is to ensure the page is not cached

const paths = [
  "/media/20160812_115538.jpg",
  "/media/20160812_131542.jpg",
  "/media/20160812_132909.jpg",
];

const images = paths.map((path, index) => ({
  id: index + 1,
  path
}));

export default async function HomePage() {



  const posts = await db.query.posts.findMany();

  console.log("posts", posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-5">
        {posts.map(post => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...images,...images,...images].map((image, index) => (
          <div key={image.id + index} className="w-48">
            <img src={image.path} alt="asd" />
          </div>
        ))}
      </div>
      hello world
    </main>
  );
}
