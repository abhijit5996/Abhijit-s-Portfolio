import { motion } from "framer-motion";
import { SectionTitle } from "../components/SectionTitle";
import { GraduationCap, Code, Target, Users } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "B.Tech Student",
      description: "Currently pursuing B.Tech at Adamas University with a CGPA of 7.98"
    },
    {
      icon: Code,
      title: "Web Developer", 
      description: "Hands-on experience in building responsive and interactive websites"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Passionate about solving real-world problems with technology"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Looking forward to internships to apply skills and grow as a developer"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know more about my background and passion for web development"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a B.Tech student with hands-on web development experience. I enjoy 
              building interactive, responsive websites and solving real-world problems 
              with technology. My passion lies in creating user-friendly frontend solutions 
              that make a difference.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I am looking forward to internships to apply my skills and grow 
              as a developer. I believe in continuous learning and staying updated with 
              the latest technologies and best practices in web development.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-2">7.98</h3>
            <p className="text-muted-foreground">Current CGPA</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-2">2+</h3>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-2">3</h3>
            <p className="text-muted-foreground">Languages Spoken</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}