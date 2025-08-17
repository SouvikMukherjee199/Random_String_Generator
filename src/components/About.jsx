import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";

const developers = [
  {
    name: "Ava Martinez",
    role: "UI/UX Designer",
    image: "S2.jpg", 
  },
  {
    name: "Liam Patel",
    role: "Frontend Developer",
    image: "S1.jpg",
  },
  {
    name: "Noah Kim",
    role: "Security Expert",
    image: "S3.jpg",
  },
  {
    name: "Emma Johnson",
    role: "Product Manager",
    image: "s4.jpg",
  },
];

const About = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
  if (leftRef.current && rightRef.current) {
    const tl = gsap.timeline();

    tl.fromTo(
      leftRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1.4, ease: "power1.out" },
      0
    );

    tl.fromTo(
      rightRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1.4, ease: "power1.out" },
      0 
    );
  }
}, []);



  return (
    <div className="flex flex-col lg:flex-row gap-8 px-4 py-10 lg:px-20 bg-gray-900 min-h-screen">
      
      {/* Left: About Info */}
      <div ref={leftRef} className="flex-1">
        <Card className="w-full bg-gray-800 border-gray-700 shadow-xl p-6">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-gray-50">
              About SecurePass
            </CardTitle>
            <CardDescription className="text-gray-400 mt-2">
              Our mission is to make online security simple and accessible for everyone.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              In an increasingly digital world, strong passwords are your first line of defense
              against online threats. SecurePass was built with a single goal in mind: to provide
              a powerful, yet easy-to-use tool for generating highly secure passwords.
            </p>
            <p>
              This application is a demonstration of modern web development principles, utilizing
              a component-based architecture with <strong>React</strong> and styled with{" "}
              <strong>Tailwind CSS</strong> using <strong>shadcn/ui</strong> components. This
              combination allows for a sleek, responsive, and maintainable user interface.
            </p>
            <p>
              SecurePass operates entirely within your browser and does not store or transmit any
              of the passwords it generates. Your privacy is our top priority.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Right: Developer Grid */}
      <div ref={rightRef} className="flex-1">
        <Card className="w-full bg-gray-800 border-gray-700 shadow-xl p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-50">Meet the Team</CardTitle>
            <CardDescription className="text-gray-400">The minds behind SecurePass</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {developers.map((dev, index) => (
                <div key={index} className="flex items-center gap-4 bg-gray-700 p-4 rounded-md shadow">
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className="w-30 h-27 rounded-full object-cover border border-gray-600"
                  />
                  <div>
                    <h4 className="text-gray-50 font-semibold">{dev.name}</h4>
                    <p className="text-sm text-indigo-400">{dev.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
