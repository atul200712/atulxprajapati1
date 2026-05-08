import { motion } from "framer-motion";

const posts = [
  {
    title: "How to Create Engaging YouTube Videos - Complete Guide",
    excerpt: "Master the art of creating compelling YouTube content with professional editing techniques that keep viewers engaged.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqfEFmgAantJvGc1X98okthC8sF64MwtkYXPlWo2MWOmXtNbMXkOoneQ8Trw76YmPkmcqnDRCAt6kpT5gg92nHec2zTITpLS92gR_zo0IydW0nkVw7aZIySfKsiv3rezokWhAJcQlz4tkA9szxVFFvCzB6SXoG5ALk00uJJdLU8WsIpW1EzEVnbBBI3OXUZIjXtSGWksDm4kW9UjzuyJhwq8i66Gp2gUF36xgEYfS-ucDeilRgDDaTq4hhCkoy4Wg5dWJi2pa4mlDx",
    category: "YouTube",
    readTime: "7 min read",
    date: "Sep 22, 2023",
    catColor: "bg-brand"
  },
  {
    title: "Instagram Reels Editing - Trending Techniques",
    excerpt: "Learn the latest editing techniques to create viral Instagram Reels that engage your audience and build your brand.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8A0pUDB_qaF-ZbNLfsBpKaz4uTr0d_MWGQNRe6OgNxWmEOaJVbWVIN2JEdn0XymeDXgDLV9xjHS-9lYhhSBf5sv5rSdkA-3khf-StM1mC01mX6Wk3gBeH-hBtkk0TBJZeeG3cRBiJZvZ49wRHIuPYRhPtrZ5PB1MoXymmMxXwyIWjiw6vfiBPddRIxXAhakb1Md5uLCT61DwR0DXCI4yJnzVZyDq_2TrFyYqBYehIiuFUm2hgUdTzG3htZBI9A1G-yoYGnDtLiwjg",
    category: "Social Media",
    readTime: "5 min read",
    date: "Oct 05, 2023",
    catColor: "bg-purple-600"
  },
  {
    title: "Essential Color Correction Workflow",
    excerpt: "Learn a simple yet professional color correction workflow to give your videos a cinematic look and feel.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABwfbYGB9d4c8II0wabiC7wcq6cMp1l5dF_2Xj9OV2ktT0RPJV3K1YsKW_8ZoyZqa8xhJCOJkKzpo_5XjzIDqeGlAFY8nN-SPnyOdzvQYv5CMDQ_JdUR9ZYfcWfcPKiHOuzPseaGbWjXUidZAmUXWHRpROfaKiKNqnxp1SIyrmhN2-v4hwAAu-nQuIfAIY8sW5aiea5ekWBTfOSDiKmUj1-CYEOwB5FEnWugP8DCqUHC9sRW9yO55cl8Cw-g4MPQi3X0ngQyqroMAw",
    category: "Color",
    readTime: "10 min read",
    date: "Oct 12, 2023",
    catColor: "bg-blue-600"
  }
];

const Blog = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase">Video Editing Tips <span className="text-brand">&amp; Insights</span></h2>
          <p className="mt-4 text-gray-400">Learn video editing tips, workflow, and practical insights from my projects.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-3xl overflow-hidden group border border-white/5 hover:border-brand/30 transition-all cursor-pointer"
            >
              <div className="aspect-video bg-neutral-800 relative overflow-hidden">
                <img 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                  src={post.image} 
                />
                <div className={`absolute top-4 left-4 ${post.catColor} text-white px-3 py-1 rounded text-[10px] font-black uppercase`}>
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold leading-snug group-hover:text-brand transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-gray-500 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                  <span>{post.readTime}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

