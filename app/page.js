'use client';

import Image from 'next/image';
const projects=[
  {
    id:1,
    title:"WonderLust-A Airbnb clone",
    image:"/wonderlust.png",
    Link:"https://majorproject-68mq.onrender.com/listing",
    description:"This is a full stack project where user sharing there property with full security.This website provide user authentication to secure user data. "

  },
  {
    id:2,
    title:"Recipia-A receipe Share website",
    image:"/Recipe.png",
    Link:"https://www.ashutoshgurjar.site/",
    description:"This website made by next.js framwork.In this website user can share recipe.see other food recipe also.This project is work on all device.For user experience there is use different route system and provide good user interface, for that increase the user experience."
  }

]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-700/20 via-transparent to-transparent z-0 animate-pulse" />
        <div className="z-10">
          <Image
            src="/ashu2.jpg"
            alt="Profile"
            width={180}
            height={140}
            className="rounded-full border-4 border-purple-600 shadow-lg mb-6"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Ashutosh Gurjar
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-6">
            Frontend Developer | React | Next.js | Tailwind CSS | Express
      
          </p>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 max-w-xl text-sm md:text-base">
            Passionate about building beautiful, fast and accessible web apps with modern tech stacks.
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
        <p className="text-gray-400 leading-relaxed text-lg text-center">
          I specialize in crafting responsive, accessible, and user-friendly web interfaces. With a deep understanding of modern tools and frameworks, I bring ideas to life through clean, efficient code and creative designs.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto bg-gray-900 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Git', 'Firebase', 'Node.js'].map((skill) => (
            <span key={skill} className="bg-gradient-to-tr from-purple-600 to-pink-500 px-5 py-2 rounded-full text-white text-sm shadow-md hover:scale-105 transition">
              {skill}
            </span>
          ))}
        </div>
      </section>
      <section className="py-24 px-6 max-w-6xl mx-auto">
  <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
    {projects.map((items) => (
      <div
        key={items.id}
        className="group bg-gray-800 hover:bg-gray-700 transition rounded-xl shadow-xl overflow-hidden border border-gray-700"
      >
        <div className="h-48  flex items-center justify-center">
          <span className="text-6xl font-bold text-white"><img src={items.image} alt={items.title} >
          </img></span>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2 group-hover:text-pink-400 transition">
            {items.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            {items.description}
          </p>
          <div className="flex justify-between items-center mt-4">
            <a
              href={items.Link}
              className="text-sm text-purple-400 hover:underline"
              target="_blank"
            >
              View Demo
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-white transition"
              target="_blank"
            >
              GitHub →
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

     {/* Contact Section */}
<section className="py-20 px-6 text-center bg-gradient-to-t from-black to-gray-900">
  <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
 

  <form
    action="mailto:ashutosh@example.com"
    method="POST"
    encType="text/plain"
    className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl shadow-md"
  >
    <div className="mb-4 text-left">
      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Enter your name"
      />
    </div>

    <div className="mb-4 text-left">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Enter your email"
      />
    </div>

    <div className="mb-6 text-left">
      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows="5"
        required
        className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Tell me about your project or message"
      />
    </div>

    <button
      type="submit"
      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 px-8 py-3 rounded-full text-white font-medium shadow-md transition"
    >
      Send Message
    </button>
  </form>
</section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Ashutosh Gurjar. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}
