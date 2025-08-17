import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import gsap from "gsap";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/Card";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Button } from "./ui/Button";
import { Separator } from "./ui/Separator";
import { MailIcon, MapPinIcon } from "lucide-react";

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.fromTo(
      leftCardRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1 }
    ).fromTo(
      rightCardRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1 },
      "<" 
    );
  }, []);

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 md:p-12 justify-center items-start w-full max-w-6xl mx-auto">
      
      {/* Contact Info Card  */}
      <Card ref={leftCardRef} className="flex-1 bg-gray-800 border border-gray-700 shadow-lg opacity-0">
        <CardHeader>
          <CardTitle className="text-3xl text-white">Contact Us</CardTitle>
          <CardDescription className="text-gray-400 mt-2">
            We'd love to hear from you. Reach out with questions or feedback.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-gray-300">
          <div className="flex items-start gap-4">
            <MailIcon className="h-6 w-6 text-indigo-400" />
            <div>
              <h4 className="font-semibold text-white">Email</h4>
              <a href="mailto:support@securepass.com" className="text-indigo-400 hover:text-indigo-300 transition">
                support@securepass.com
              </a>
            </div>
          </div>
          <Separator className="bg-gray-700" />
          <div className="flex items-start gap-4">
            <MapPinIcon className="h-6 w-6 text-indigo-400" />
            <div>
              <h4 className="font-semibold text-white">Address</h4>
              <p>123 Secure Lane<br />Privacy City, 45678</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Form Card  */}
      <Card ref={rightCardRef} className="flex-1 bg-gray-800 border border-gray-700 shadow-lg opacity-0">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Send a Message</CardTitle>
          <CardDescription className="text-gray-400">
            Fill out the form and we’ll get back to you shortly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-gray-300">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <Input
                placeholder="Your full name"
                {...register("name", { required: "Name is required" })}
                className="bg-gray-700 border-gray-600 text-white"
              />
              {errors.name && <p className="text-sm text-red-400 mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <Input
                type="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="bg-gray-700 border-gray-600 text-white"
              />
              {errors.email && <p className="text-sm text-red-400 mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <Textarea
                placeholder="Type your message..."
                rows={4}
                {...register("message", { required: "Message is required" })}
                className="bg-gray-700 border-gray-600 text-white"
              />
              {errors.message && <p className="text-sm text-red-400 mt-1">{errors.message.message}</p>}
            </div>

            <Button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white transition w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactPage;
