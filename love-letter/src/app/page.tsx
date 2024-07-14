import { posts } from "@/app/fake-posts.json"

export default function Home() {

  const audsPosts = posts.filter((item) => item.author == "auds");
  const kevPosts = posts.filter((item) => item.author == "kev"); 

  console.log(audsPosts, kevPosts);

  return (
    <main className="flex h-[100vh] w-[100vw]">
      <div className="bg-pink-200 w-1/2">
          <PostsView posts={audsPosts}/>
          <NewPostButton author="auds" />
      </div>
      <div className="bg-indigo-200 w-1/2">
          <PostsView posts={kevPosts}/>
          <NewPostButton author="kev"/>
      </div>
    </main>
  );
}
