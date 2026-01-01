import { posts } from './lib/posts';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold mb-4">Pedepano & Bruxa Tesusa</h1>
        <p className="text-xl text-gray-400">Entre a sensibilidade e a realidade ácida.</p>
      </header>

      <section className="grid gap-8">
        {posts.map((post) => (
          <article key={post.id} className="border border-gray-800 p-6 rounded-lg bg-zinc-900/50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium px-3 py-1 bg-zinc-800 rounded-full text-zinc-400">
                {post.category}
              </span>
              <span className="text-sm text-zinc-500">{post.date}</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-zinc-400 mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className={`font-semibold ${post.author === 'Pedepano' ? 'text-blue-400' : 'text-purple-400'}`}>
                Escrito por: {post.author}
              </span>
              <button className="text-white underline underline-offset-4 hover:text-gray-300">
                Ler texto completo →
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
