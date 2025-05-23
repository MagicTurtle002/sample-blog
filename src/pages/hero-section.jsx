import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  ShareIcon,
  BookmarkIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  ComputerDesktopIcon,
  UsersIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Education", href: "#" },
  { name: "Technology", href: "#" },
  { name: "Culture", href: "#" },
  { name: "About", href: "#" },
];

const blogPost = {
  title: "Globalization and Education: How Global Connectivity is Transforming Learning",
  excerpt: "Exploring the profound ways globalization has revolutionized education systems, learning opportunities, and knowledge sharing across borders - from online learning platforms to international collaborations.",
  author: "John Ismael Villuafuerte",
  date: "May 23, 2025",
  readTime: "12 min read",
  category: "Education",
  image: "/main.jpeg",
  tags: ["Globalization", "Education", "Online Learning", "Technology", "Cultural Exchange"],
};

const relatedPosts = [
  {
    title: "The Rise of Online Education Platforms",
    excerpt: "How digital platforms are democratizing access to quality education worldwide...",
    readTime: "8 min read",
    image: "/Online-Learning.jpg"
  },
  {
    title: "International Student Exchange Programs",
    excerpt: "The impact of student mobility on global understanding and career prospects...",
    readTime: "6 min read",
    image: "/exchange.jpg"
  },
  {
    title: "Cross-Cultural Collaboration in Research",
    excerpt: "How global partnerships are advancing scientific knowledge and innovation...",
    readTime: "10 min read",
    image: "/international-collaboration.jpg"
  }
];

export default function GlobalizationEducationBlog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <AcademicCapIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">EduGlobal</span>
              </div>
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <Bars3Icon className="size-6" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-4">
            <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <MagnifyingGlassIcon className="size-5" />
            </button>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50 bg-black bg-opacity-25" onClick={() => setMobileMenuOpen(false)} />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm border-l">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                      <AcademicCapIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-gray-900">EduGlobal</span>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <XMarkIcon className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700">
                      Subscribe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Blog Post Content */}
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <a href="#" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to all posts
          </a>
        </div>

        {/* Article Header */}
        <article>
          <header className="mb-12">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {blogPost.category}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {blogPost.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {blogPost.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-gray-200">
              <div className="flex items-center space-x-6 text-gray-600 text-sm">
                <div className="flex items-center space-x-2">
                  <UserIcon className="w-4 h-4" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon className="w-4 h-4" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <ShareIcon className="w-4 h-4" />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <BookmarkIcon className="w-4 h-4" />
                  <span>Save</span>
                </button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={blogPost.image}
              alt="Global education and learning"
              className="w-full h-80 sm:h-96 object-cover rounded-2xl"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            
            {/* Introduction */}
            <div className="text-lg leading-relaxed space-y-6 mb-12">
              <p>
                The intersection of globalization and education has fundamentally transformed how we learn, teach, and share knowledge. As someone who has witnessed this transformation firsthand—both as a student and educator—I've come to understand that globalization hasn't just changed what we learn, but how, where, and with whom we learn.
              </p>
              
              <p>
                This digital revolution in education represents one of the most democratizing forces of our time. A student in rural Kenya can now access the same MIT lectures as someone in Boston. A researcher in Brazil can collaborate in real-time with colleagues in Japan. These aren't just technological achievements—they represent a fundamental shift in how human knowledge is created, shared, and preserved.
              </p>
            </div>

            {/* Key Insights Section */}
            <div className="bg-blue-50 p-8 rounded-2xl mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <GlobeAltIcon className="w-6 h-6 mr-3 text-blue-600" />
                How Globalization Has Transformed Education
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <ComputerDesktopIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Digital Access</h3>
                  <p className="text-sm text-gray-600">Online platforms have made quality education accessible regardless of geographic location.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <UsersIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Global Collaboration</h3>
                  <p className="text-sm text-gray-600">Students and researchers collaborate across continents on shared projects and research.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <BookOpenIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Knowledge Sharing</h3>
                  <p className="text-sm text-gray-600">Educational resources and research are shared instantly across global networks.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Digital Revolution in Learning</h2>
            
            <p>
              Perhaps the most visible impact of globalization on education has been the explosion of online learning platforms. Massive Open Online Courses (MOOCs) have democratized access to high-quality education in unprecedented ways. I remember when platforms like Coursera, edX, and Khan Academy first emerged—they seemed almost too good to be true. World-class universities offering their courses for free to anyone with an internet connection.
            </p>

            <p>
              What struck me most was not just the technological achievement, but the philosophical shift it represented. Traditional education had been constrained by physical boundaries, institutional capacity, and geographic proximity. Suddenly, these constraints began to dissolve. A working mother in the Philippines could pursue a computer science degree from Stanford while managing her family responsibilities. An entrepreneur in Nigeria could learn digital marketing from industry experts without leaving his home country.
            </p>

            <blockquote className="border-l-4 border-blue-600 pl-6 italic text-lg text-gray-700 my-8">
              "Globalization has transformed education from a local, time-bound experience into a continuous, worldwide conversation about knowledge and learning."
            </blockquote>

            <p>
              However, this digital transformation also revealed new challenges. The digital divide became starkly apparent—those without reliable internet access or modern devices were left behind. Language barriers persisted, as much of the high-quality content remained in English. These issues taught me that true educational globalization requires intentional efforts to ensure inclusivity and accessibility.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">International Collaboration and Student Mobility</h2>

            <p>
              Beyond digital platforms, globalization has dramatically increased student mobility and international collaboration. The number of students studying abroad has grown exponentially over the past few decades. I've witnessed firsthand how these exchanges create not just academic benefits, but profound personal transformations.
            </p>

            <p>
              International students bring diverse perspectives to classrooms, challenging assumptions and broadening worldviews. When I participated in study abroad programs, I discovered that learning wasn't just about absorbing information—it was about understanding how different cultures approach problems, structure knowledge, and value different types of learning.
            </p>

            <p>
              Research collaboration has become increasingly global as well. Modern scientific breakthroughs often emerge from international teams working across time zones, combining expertise from different educational traditions and research methodologies. The COVID-19 vaccine development, for instance, demonstrated how global scientific collaboration could accelerate innovation in unprecedented ways.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cultural Exchange and Cross-Cultural Learning</h2>

            <p>
              One of the most enriching aspects of globalized education has been the cultural exchange it facilitates. Virtual exchange programs now allow students to collaborate on projects with peers from different continents without leaving their home campuses. These experiences have taught me that cultural diversity in education isn't just about tolerance—it's about enhancing the learning process itself.
            </p>

            <p>
              Different educational cultures bring unique strengths. The Scandinavian emphasis on collaborative learning, the Asian focus on disciplined practice, the American encouragement of critical questioning, and the indigenous traditions of experiential learning all offer valuable approaches that can be shared globally.
            </p>

            <p>
              However, I've also observed the challenges of cultural homogenization in education. There's a risk that globalized education could become dominated by Western educational models and English-language content, potentially marginalizing local knowledge systems and pedagogical traditions that have evolved over centuries.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Changing Role of Educators</h2>

            <p>
              Globalization has fundamentally altered the role of educators. Teachers are no longer the sole gatekeepers of knowledge—students can access information from countless sources worldwide. This shift has pushed educators to evolve from information deliverers to learning facilitators, mentors, and critical thinking guides.
            </p>

            <p>
              I've seen teachers embrace this change by focusing on developing students' abilities to evaluate information critically, synthesize knowledge from multiple sources, and apply learning to real-world problems. The best educators have learned to leverage global resources while maintaining the personal connection and guidance that only human teachers can provide.
            </p>

            <p>
              Professional development for educators has also become globalized. Teachers can now participate in international conferences virtually, collaborate with colleagues worldwide, and access professional learning resources from leading educational institutions globally.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenges and Inequalities</h2>

            <p>
              Despite its benefits, globalized education has also revealed and sometimes exacerbated inequalities. The digital divide means that students in well-connected, affluent areas have significantly more access to global educational resources than those in remote or economically disadvantaged regions.
            </p>

            <p>
              Language barriers remain significant. While machine translation has improved, nuanced educational content often loses meaning in translation. This creates advantages for native English speakers and challenges for others, potentially perpetuating linguistic and cultural hierarchies in global education.
            </p>

            <p>
              There's also the challenge of credential recognition. As education becomes more globalized, ensuring that qualifications and skills gained through international or online education are recognized and valued remains complex. Different countries and institutions have varying standards for recognizing global educational experiences.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills for a Globalized World</h2>

            <p>
              The globalization of education has highlighted the need for new types of skills and competencies. Cultural competency, digital literacy, and global awareness have become as important as traditional academic subjects. Students need to learn how to navigate diverse cultural contexts, communicate across cultural boundaries, and work effectively in international teams.
            </p>

            <p>
              Critical thinking skills have become particularly crucial in an era of information abundance. Students must learn to evaluate sources, identify bias, and synthesize information from diverse perspectives. The ability to distinguish between reliable and unreliable information sources has become a fundamental literacy requirement.
            </p>

            <div className="bg-gray-50 p-8 rounded-2xl my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Lessons from Globalization in Education:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Digital platforms have democratized access to quality education but the digital divide remains a significant challenge
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  International collaboration enhances learning outcomes and prepares students for global careers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Cultural diversity in education enriches the learning experience but requires careful balance to avoid homogenization
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Educators must evolve from information providers to learning facilitators and critical thinking guides
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  New skills like cultural competency and digital literacy are essential for success in a globalized world
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Future of Global Education</h2>

            <p>
              Looking ahead, I believe we're still in the early stages of educational globalization. Emerging technologies like artificial intelligence, virtual reality, and blockchain could further transform how we learn and validate learning. AI tutors could provide personalized learning experiences at scale, while VR could enable immersive cultural exchanges and field experiences regardless of physical location.
            </p>

            <p>
              The COVID-19 pandemic accelerated many trends in educational globalization, normalizing remote learning and international virtual collaboration. This experience has shown both the potential and limitations of digital education, informing how we might design more effective hybrid learning models.
            </p>

            <p>
              I envision a future where education is truly global and inclusive—where a student's location, economic status, or cultural background don't limit their access to quality learning opportunities. This will require continued efforts to bridge digital divides, preserve cultural diversity in educational approaches, and ensure that globalized education serves to enhance rather than replace local knowledge systems.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion: Education as a Global Public Good</h2>

            <p>
              My exploration of globalization's impact on education has convinced me that we're witnessing one of the most significant transformations in human learning since the invention of writing. The ability to share knowledge instantaneously across global networks has the potential to accelerate human progress in remarkable ways.
            </p>

            <p>
              However, realizing this potential requires intentional effort to ensure that globalized education is equitable, inclusive, and culturally sensitive. We must work to bridge digital divides, preserve educational diversity, and create systems that validate and recognize learning regardless of where or how it occurs.
            </p>

            <p>
              The future of education is global, but it must also remain human. As we embrace the opportunities that globalization offers, we must remember that education is ultimately about human development, critical thinking, and the cultivation of wisdom—goals that require both global connectivity and local understanding.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-200">
              {blogPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <TagIcon className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <article key={index} className="group cursor-pointer">
                <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <AcademicCapIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">EduGlobal</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Exploring how globalization transforms education, learning, and knowledge sharing in our interconnected world.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Medium</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Topics</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Online Learning</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Cultural Exchange</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Digital Literacy</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Global Skills</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Newsletter</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">RSS Feed</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EduGlobal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}