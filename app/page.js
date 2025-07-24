'use client';

import Image from 'next/image';
import { motion } from "framer-motion";

const fadeUp1 = (i) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});
const Experience = [
  {
    id: 1,
    title: "Full Stack Web Development",
    image: "/experience.png",
    issuer: "Shanti Infosoft LLP",
    date: "May-2025",
  },
  {
    id: 2,
    title: "Full Stack Developer-Backend Devepoler",
    image: "/smartEd.png",
    issuer: "SmartED pvt Lmt",
    date: "Nov-2024",
  },
]
const project = [
  {
    id: 1,
    title: "Wonderlust - Travel Booking App",
    description:
      "A full-featured travel platform like Airbnb with admin approval, bookings, and payments.",
    image: "/wonderlust.png",
    tech: ["EJS","Express","MangoDB","Bootstrap","Mangoose"],
    link: "https://majorproject-68mq.onrender.com/listing",
  },
  {
    id: 2,
    title: "Recipia - Recipe Sharing App ",
    description:
      "It is Recipe Sharing App Where user can see there recipe and share own food recipe.",
    image: "/Recipe.png",
    tech: ["Nextjs","CSS","App Router"],
    link: "https://food-app-seven-red.vercel.app/",
  },
  {
    id: 3,
    title: "News App",
    description:
      "This is a news app.It is not full stack project,for learing purpose project but it hepls me to understand how dynamic , intercepter and parallel route work.",
    image: "/News.png",
    tech: ["NextJs","CSS"],
    link: "https://news-website-three-delta.vercel.app/",
  },
];
const fadeUp2 = (i) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});
const certificates = [
  {
    id: 1,
    title: "Full Stack Web Development",
    image: "/apnaCollage.png",
    issuer: "Apna Collage",
    date: "Jan-2025",
    link: "https://www.apnacollege.in/",
  },
  {
    id: 2,
    title: "DSA Collection in Java",
    image: "/DSA.png",
    issuer: "NPTEL",
    date: "Jul Oct 2024",
    link: "https://nptel.ac.in/",
  },
  {
    id: 3,
    title: "Cloud Computing",
    image: "/Cloud.png",
    issuer: "NPTEL",
    date: "Jan-Apr 2025",
    link: "https://nptel.ac.in/",
  },
];


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
      <section className="max-w-4xl mx-auto px-4 py-12 text-white">
      {/* Experience */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-600 pb-2">Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Full Stack Developer</h3>
            <p className="text-sm text-gray-400">Jan 2025 – May-2025 | Indore, India</p>
            <p className="mt-2 text-gray-300">Built responsive websites using HTML, CSS, JavaScript, and Bootstrap. Collaborated with designers and backend developers to deliver quality web experiences.</p>
          </div>
        </div>
      </div>
      
      <section className="bg-gradient-to-br from-slate-950 to-gray-900 py-20 px-4 md:px-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
      >
        📜 Certificates
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {Experience.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp1(i)} // ✅ correctly used here
            className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.03 }}
          >
            <motion.img
              src={cert.image}
              alt={cert.title}
              className="w-full h-52 object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
            />
            <div className="p-5 text-white space-y-2">
              <h3 className="text-lg font-semibold group-hover:underline underline-offset-4 transition-all">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-400">Issuer: {cert.issuer}</p>
              <span className="inline-block text-xs bg-blue-600 px-3 py-1 rounded-full">
                {cert.date}
              </span>
              <div className="mt-3">
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="inline-block text-sm px-4 py-2 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-200 transition duration-300"
                >
                  View Certificate
                </motion.a>
              </div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.2 + 0.6, duration: 0.3 }}
              className="absolute top-3 right-3 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded shadow"
            >
              ✅ Verified
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
    

      {/* Education */}
      <div>
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-600 pb-2">Education</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">MCA – Medicaps University</h3>
            <p className="text-sm text-gray-400">2023 – 2025 | CGPA: 8.0</p>
            <p className="mt-2 text-gray-300">Specialized in Master Of Computer Application.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">BCA – Career Collage,Bhopal</h3>
            <p className="text-sm text-gray-400">2020 – 2023 | CGPA:7.5</p>
            <p className="mt-2 text-gray-300">Developed strong fundamentals in Data Structures, Java, and DBMS.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="max-w-4xl mx-auto px-4 py-12 text-white">
      <h2 className="text-3xl font-bold mb-6 border-b border-gray-600 pb-2">Certifications</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Full Stack Web Development – Apna Collage</h3>
          <p className="text-sm text-gray-400">Issued: May 2025</p>
          <p className="mt-2 text-gray-300">Learned frontend and backend development using MERN stack. Built projects like Airbnb clone.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">DSA collection Framework in Java – NPTEL</h3>
          <p className="text-sm text-gray-400">Issued: Jan - Apr 2025</p>
          <p className="mt-2 text-gray-300">Learned how Collection Framework works and it helped me solve DSA questions. It helped me optimize my solution through the use of different collection classes and interfaces. </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Cloud Computing – NPTEL</h3>
          <p className="text-sm text-gray-400">Jul-Oct 2024</p>
          <p className="mt-2 text-gray-300">Completed the NPTEL-certified course on Cloud Computing, gaining strong foundational and practical knowledge of cloud architecture, service models (IaaS, PaaS, SaaS), virtualization, and cloud security. Familiar with cloud platforms such as AWS and Google Cloud, cloud deployment models, and modern trends like serverless computing and containerization. Developed the ability to design scalable and cost-effective cloud-based solutions..</p>
        </div>
      </div>
    </section>
  
      <section className="bg-gradient-to-br from-slate-950 to-gray-900 py-20 px-4 md:px-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
      >
        📜 Certificates
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp1(i)} // ✅ correctly used here
            className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.03 }}
          >
            <motion.img
              src={cert.image}
              alt={cert.title}
              className="w-full h-52 object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
            />
            <div className="p-5 text-white space-y-2">
              <h3 className="text-lg font-semibold group-hover:underline underline-offset-4 transition-all">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-400">Issuer: {cert.issuer}</p>
              <span className="inline-block text-xs bg-blue-600 px-3 py-1 rounded-full">
                {cert.date}
              </span>
              <div className="mt-3">
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="inline-block text-sm px-4 py-2 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-200 transition duration-300"
                >
                  View Certificate
                </motion.a>
              </div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.2 + 0.6, duration: 0.3 }}
              className="absolute top-3 right-3 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded shadow"
            >
              ✅ Verified
            </motion.div>
          </motion.div>
        ))}
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
      <section className="bg-gradient-to-br from-black to-gray-900 py-20 px-6 md:px-10 text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        💻 My Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {project.map((project, i) => (
          <motion.div
            key={project.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp2(i)}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-semibold hover:underline">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-indigo-600 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="inline-block mt-3 text-sm text-white font-medium border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
              >
                View Project
              </a>
            </div>
          </motion.div>
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

