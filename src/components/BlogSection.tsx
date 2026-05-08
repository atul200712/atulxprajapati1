import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, User, Tag } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
  image: string;
}

interface BlogSectionProps {
  posts?: BlogPost[];
}

const BlogSection = ({ posts = defaultBlogPosts }: BlogSectionProps) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section className="relative py-20 overflow-hidden " id="blog">

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Video Editing Tips & Insights
          </motion.h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Learn video editing tips, pro workflows, and practical insights from my projects
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl overflow-hidden hover:border-blue-500/60 transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedPost(post)}
            >
              {/* Image */}
              <div className={`relative overflow-hidden h-36 sm:h-48 ${
                post.category === "YouTube"
                  ? "bg-gradient-to-br from-red-600/30 to-orange-600/20"
                  : post.category === "Instagram"
                  ? "bg-gradient-to-br from-pink-600/30 to-purple-600/20"
                  : post.category === "Color Correction"
                  ? "bg-gradient-to-br from-purple-600/30 to-indigo-600/20"
                  : post.category === "Commercial"
                  ? "bg-gradient-to-br from-cyan-600/30 to-blue-600/20"
                  : post.category === "Audio"
                  ? "bg-gradient-to-br from-green-600/30 to-teal-600/20"
                  : post.category === "Tips"
                  ? "bg-gradient-to-br from-yellow-600/30 to-amber-600/20"
                  : post.category === "Mistakes"
                  ? "bg-gradient-to-br from-orange-600/30 to-red-600/20"
                  : "bg-gradient-to-br from-blue-600/30 to-cyan-600/20"
              }`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="text-6xl drop-shadow-lg">{post.image}</div>
                  {post.category && (
                    <div className="text-xs font-semibold text-gray-200 opacity-80 px-2 py-1 rounded-full bg-black/30">{post.category}</div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                  <span className="text-xs sm:text-sm text-blue-400 font-semibold">{post.category}</span>
                </div>

                <h3 className="text-base sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-700/30 pt-3 sm:pt-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime} min read</span>
                  </div>
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Modal */}
        {selectedPost && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              className="bg-slate-900 rounded-t-2xl sm:rounded-lg w-full sm:max-w-2xl max-h-[90vh] sm:max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-slate-900 border-b border-gray-700/30 p-4 sm:p-6 flex items-center justify-between">
                <h2 className="text-lg sm:text-2xl font-bold text-white pr-4">{selectedPost.title}</h2>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" /> {selectedPost.author}
                  </span>
                  <span>{selectedPost.date}</span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {selectedPost.readTime} min
                  </span>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                    {selectedPost.content}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

// Default blog posts
const defaultBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Create Engaging YouTube Videos - Complete Guide",
    excerpt: "Master the art of creating compelling YouTube content with professional editing techniques that keep viewers engaged.",
    content: `Creating engaging YouTube videos requires more than just filming. Here are the key steps:

1. **Planning & Scripting**
   - Write a clear script with hooks in the first 3 seconds
   - Outline your video structure (intro, content, CTA, outro)
   - Plan your B-roll and transitions

2. **Filming Tips**
   - Use good lighting (natural light or ring light)
   - Invest in a microphone for clear audio
   - Film in 4K when possible for editing flexibility
   - Get multiple angles and B-roll footage

3. **Professional Editing Techniques**
   - Cut on the beat to match audio rhythm
   - Use color grading for consistent look
   - Add text overlays for key points
   - Include B-roll to break up talking heads
   - Use transitions sparingly but effectively

4. **Audio Design**
   - Clean up background noise
   - Add background music appropriately
   - Use sound effects for emphasis
   - Ensure voice is clear and at good levels

5. **Publishing Strategy**
   - Create eye-catching thumbnails
   - Write compelling titles and descriptions
   - Use relevant keywords and tags
   - Post consistently on a schedule

Remember: Engagement rate matters more than view count. Focus on keeping viewers watching until the end.`,
    author: "Atul Prajapati",
    date: "Dec 30, 2025",
    category: "YouTube",
    readTime: 5,
    image: "📺",
  },
  {
    id: "2",
    title: "Instagram Reels Editing - Trending Techniques",
    excerpt: "Learn the latest editing techniques to create viral Instagram Reels that engage your audience and boost reach.",
    content: `Instagram Reels require a different approach than YouTube. Here's what works:

1. **Hook in the First Frame**
   - You have 1 second to grab attention
   - Use movement, text, or visual effects
   - Make the first frame interesting

2. **Optimal Timing**
   - Keep reels between 15-30 seconds
   - Longer reels perform better than 15-second ones
   - Match cuts to music beats

3. **Trending Audio**
   - Use trending sounds for reach
   - Add text that matches the audio
   - Consider remixing popular sounds

4. **Visual Effects**
   - Transitions between clips (cuts, wipes, morphs)
   - Text animations and overlays
   - Color transitions and effects
   - Trendy filters (but use sparingly)

5. **Mobile-First Design**
   - Use vertical format (9:16)
   - Text should be readable on small screens
   - Leave space at top/bottom for UI elements
   - Test on mobile before posting

6. **Content Ideas That Work**
   - Before/after transformations
   - Quick tutorials and hacks
   - Funny skits and entertainment
   - Behind-the-scenes content
   - Educational content with visuals

Pro Tip: Post reels 3-5 times per week for best reach. Engage with comments in the first hour for algorithm boost.`,
    author: "Atul Prajapati",
    date: "Dec 28, 2025",
    category: "Social Media",
    readTime: 4,
    image: "📸",
  },
  {
    id: "3",
    title: "Essential Color Correction Workflow",
    excerpt: "Learn simple color correction steps I apply in client edits.",
    content: `Here are reliable color basics I apply on projects:

1. **What is Color Correction?**
   - Fixing colors that look wrong
   - Making clips match each other
   - Simple adjustments for better look

2. **Easy First Steps**
   - Fix exposure (too dark/bright)
   - Adjust white balance (colors look right)
   - Normalize volume levels
   - Keep it simple!

3. **Simple Things I Do**
   - Use basic filter presets
   - Slightly adjust brightness
   - Match colors between clips
   - Avoid overdoing it

4. **Things to Avoid**
   - Don't make it look fake
   - Keep adjustments subtle
   - Less is more
   - Test before finalizing

5. **Tools I Use**
  - Adobe Premiere Pro (primary)
  - DaVinci Resolve for color
  - Look presets for speed
  - Calibrated display for accuracy

6. **Practical Tips**
   - Good lighting while filming helps most
   - Shoot in consistent settings
   - Experiment with small projects
   - Watch tutorials and learn daily

Pro Tip: Good filming = less color correction needed. Consistent capture reduces correction time.`,
    author: "Atul Prajapati",
    date: "Dec 25, 2025",
    category: "Editing",
    readTime: 3,
    image: "🎨",
  },
  {
    id: "4",
    title: "Commercial Video Production - Best Practices",
    excerpt: "Discover the complete process of creating professional commercial videos that drive sales and engagement.",
    content: `Commercial videos require strategic planning and execution. Follow this process:

1. **Pre-Production**
   - Brief and objectives discussion
   - Storyboarding and shot list
   - Location scouting
   - Equipment planning
   - Budget and timeline

2. **Filming Commercial Videos**
   - Get multiple takes of each shot
   - Film key shots in 4K
   - Capture B-roll of environment
   - Record natural sound
   - Use professional lighting

3. **Audio for Commercials**
   - Professional voiceover
   - Background music selection
   - Sound design and effects
   - Audio mixing and mastering

4. **Editing Techniques**
   - Pacing matches product/brand
   - Color grading consistency
   - Text overlays for key messaging
   - Professional transitions
   - Product shots clearly visible

5. **Marketing Integration**
   - Optimize for different platforms
   - Add CTA (Call-to-Action)
   - Include branding elements
   - Ensure mobile compatibility

6. **Performance Metrics**
   - Track video completion rate
   - Monitor click-through rate
   - Measure engagement
   - Analyze conversion rate

Result: Professional commercials increase product sales by 40-60% when done right.`,
    author: "Atul Prajapati",
    date: "Dec 20, 2025",
    category: "Commercial",
    readTime: 5,
    image: "🎬",
  },
  {
    id: "5",
    title: "Audio Design for Video - Sound Matters",
    excerpt: "Understand why audio is 50% of your video's impact and how to create professional sound design.",
    content: `Many creators neglect audio, but it's just as important as visuals. Here's why:

1. **Audio Quality Impact**
   - Poor audio ruins even great visuals
   - Good audio makes mediocre video better
   - Viewers tolerate bad video with good audio
   - But not the reverse

2. **Voice Recording Tips**
   - Use quality microphone (not phone speaker)
   - Record in quiet room with soft furnishings
   - Maintain consistent distance from mic
   - Do multiple takes for best sound
   - Record in WAV format for better quality

3. **Audio Editing Process**
   - Remove background noise
   - Normalize levels (-3dB to -6dB peak)
   - Reduce hum and clicks
   - Equalize for clarity
   - Add compression for consistency

4. **Background Music Selection**
   - Match mood and pacing
   - Use royalty-free music
   - Keep music quieter than dialogue
   - Avoid music with vocals (usually)
   - Test on different speakers

5. **Sound Effects**
   - Add foley sounds for realism
   - Use subtle effects (not overdone)
   - Add impact sounds at key moments
   - Layer sounds for depth
   - Match effects to visuals

6. **Professional Audio Mixing**
   - Level dialogue at -6dB
   - Music at -12 to -18dB
   - Effects at varying levels
   - Pan for stereo interest
   - Use automation for changes

Investment: A $100 USB microphone is better than expensive camera audio.`,
    author: "Atul Prajapati",
    date: "Dec 18, 2025",
    category: "Audio",
    readTime: 5,
    image: "🔊",
  },
  {
    id: "6",
    title: "10 Editing Tips That Elevate Your Cuts",
    excerpt: "Practical editing tips that consistently make your videos stronger.",
    content: `Here are 10 proven editing tips that really make a difference:

1. **Use J-Cuts and L-Cuts**
   📌 What: Audio from next clip starts before video transition (or vice versa)
   📌 Why: Makes edits feel smooth and professional
   📌 How: Drag audio 0.5-1 second before the video cut

2. **Cut on Action**
   📌 What: Make cuts during movement, not stillness
   📌 Why: Viewer's eye follows action, hiding the cut
   📌 How: Identify natural motion points and cut there

3. **The 6-Second Rule**
   📌 What: Hold shots for at least 6 seconds minimum
   📌 Why: Viewers need time to see and absorb content
   📌 How: Count shots - too quick feels chaotic

4. **Match Cuts**
   📌 What: Cut between similar objects/movements
   📌 Why: Creates smooth transitions without formal effects
   📌 How: Find similar shapes, sizes, or movements in clips

5. **Lower Third Timing**
   📌 What: Add name/title graphics during introductions
   📌 Why: Professional and informative
   📌 How: Bring in 1 second before person speaks

6. **Color Balance Clips**
   📌 What: Make clips shot at different times look similar
   📌 Why: Inconsistent colors distract viewers
   📌 How: Adjust brightness/contrast to match

7. **Add B-Roll Early**
   📌 What: Film extra footage beyond the main content
   📌 Why: Covers cuts, shows what you're talking about
   📌 How: Shoot 30% extra footage for editing flexibility

8. **Use Keyboard Shortcuts**
   📌 What: Learn shortcuts (Space=play, I=in point, O=out point)
   📌 Why: Editing 10x faster than using mouse
   📌 How: Print a shortcut list and memorize 5 daily

9. **Backup Your Project**
   📌 What: Save multiple versions (Project_v1, v2, v3)
   📌 Why: Prevents losing hours of work
   📌 How: Save every 30 minutes with version numbers

10. **Export at Right Settings**
    📌 What: YouTube=1080p 30fps, Reels=1080x1920 format
    📌 Why: Wrong format = looks bad or gets compressed
    📌 How: Check platform requirements before exporting

💡 Pro Tip: Watch your edited video on phone/TV before uploading. Mistakes look different on different screens!`,
    author: "Atul Prajapati",
    date: "Dec 28, 2025",
    category: "Tips",
    readTime: 6,
    image: "💡",
  },
  {
    id: "7",
    title: "Common Editing Mistakes I Made & How to Fix Them",
    excerpt: "Mistakes editors often make early and how to avoid them.",
    content: `Learning by mistakes! Here are common issues I faced:

**❌ MISTAKE 1: Cutting Too Fast**
😬 What I did: Cut every shot in 2-3 seconds thinking it's exciting
😤 Problem: Looks chaotic and confusing
✅ Fix: Hold shots 6-10 seconds, use natural pacing

**❌ MISTAKE 2: Using Too Many Transitions**
😬 What I did: Used fancy transitions between every clip
😤 Problem: Looked amateur and distracting
✅ Fix: Use 80% cuts, 20% transitions max

**❌ MISTAKE 3: Unmatched Audio Levels**
😬 What I did: Some clips loud, some quiet, audience adjusting volume
😤 Problem: Unprofessional and annoying
✅ Fix: Normalize all audio to similar levels

**❌ MISTAKE 4: Ignoring Eye Line**
😬 What I did: Random clips, confusing camera directions
😤 Problem: Viewers don't understand spatial relationships
✅ Fix: Match camera directions (left→right→left makes sense)

**❌ MISTAKE 5: Bad Color Matching**
😬 What I did: Clips shot at different times look completely different
😤 Problem: Looks like video quality is bad
✅ Fix: Adjust brightness/contrast to match

**❌ MISTAKE 6: No B-Roll**
😬 What I did: Just talking head for entire video
😤 Problem: Boring, no visual interest
✅ Fix: Shoot 2x the footage you need

**❌ MISTAKE 7: Text Too Long**
😬 What I did: 5-line paragraphs on screen
😤 Problem: No one reads it all
✅ Fix: 1-3 words max, 2-3 seconds on screen

**❌ MISTAKE 8: Exporting Wrong**
😬 What I did: Exported 4K file (2GB!) for YouTube
😤 Problem: Takes 1 hour to upload
✅ Fix: Export 1080p, 8-10 Mbps bitrate for web

**❌ MISTAKE 9: No Sound Design**
😬 What I did: Just dialogue, no music or effects
😤 Problem: Sounds hollow and amateurish
✅ Fix: Add background music (quiet) + subtle effects

**❌ MISTAKE 10: Saving in Wrong Format**
😬 What I did: Saved project as video, lost all editing layers
😤 Problem: Can't edit again
✅ Fix: Save .aep (Adobe) or .drp (DaVinci) - keeps layers

📚 **What I Learned:**
Details matter. One small thing like audio levels can make video look amateur or professional.
The difference between good and bad editing is often the small stuff you don't notice.

💪 **Keep Learning:**
Every video teaches me something new. Your 10th video will be 10x better than your 1st!`,
    author: "Atul Prajapati",
    date: "Dec 27, 2025",
    category: "Learning",
    readTime: 7,
    image: "🎯",
  },
  {
    id: "8",
    title: "Transitions & Motion - Creative Techniques",
    excerpt: "Learn creative transition techniques that elevate your videos and maintain viewer engagement.",
    content: `Transitions done right make videos feel polished. Here's how:

1. **Types of Transitions**
   - Cuts (instant, best for pacing)
   - Fades (between concepts)
   - Dissolves (smooth between clips)
   - Wipes (directional movement)
   - Morphs (creative object transitions)

2. **When to Use Transitions**
   - Between different topics
   - Scene changes
   - Time jumps
   - Concept shifts
   - For visual interest

3. **Transition Timing**
   - Keep transitions under 0.5 seconds
   - Match transition to audio beat
   - Consistent timing throughout
   - Don't overuse (less is more)

4. **Creative Techniques**
   - Zoom transitions
   - Object wipes
   - Camera movements
   - Text reveals
   - Color transitions

5. **Motion Graphics**
   - Animated lower thirds
   - Animated text overlays
   - Motion backgrounds
   - Kinetic typography
   - Custom animations

6. **Software Tools**
   - Adobe Premiere Pro
   - DaVinci Resolve
   - After Effects for complex
   - Motion (for Mac)
   - Filmora for templates

Rule: Use transitions purposefully. Every transition should serve the story, not distract from it.`,
    author: "Atul Prajapati",
    date: "Dec 15, 2025",
    category: "Editing",
    readTime: 4,
    image: "✨",
  },
];

export default BlogSection;
