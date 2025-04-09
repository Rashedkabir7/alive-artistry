
import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, Check, AlertCircle, Loader2, Feather } from 'lucide-react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

// Form schema with validation rules
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Initialize form with react-hook-form and zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // In a real app, you would send this data to your backend
      console.log('Form submitted:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success state
      setSubmitSuccess(true);
      toast.success("Your message has been sent. We look forward to connecting with you soon.");
      
      // Reset the form
      form.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Artistic background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-santaran-cream opacity-20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-santaran-jade opacity-10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 relative">
          <h2 className="heading-lg text-santaran-teal mb-4 font-serif">Connect With Our Circle</h2>
          <div className="w-24 h-1 bg-santaran-terracotta mx-auto"></div>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-700">
            Share your thoughts, questions, or visions. Every message begins a new thread 
            in our collective tapestry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white/50 p-8 rounded-lg backdrop-blur-sm shadow-lg border border-santaran-jade/10 transform transition-transform duration-500 hover:shadow-xl relative z-10">
            <h3 className="heading-md text-santaran-terracotta mb-6 font-serif">Pathways to Connect</h3>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="mr-4 mt-1 bg-gradient-to-br from-santaran-teal to-santaran-jade p-3 rounded-full text-white shadow-md group-hover:shadow-lg transition-all duration-300">
                  <MapPin className="text-white" size={24} />
                </div>
                <div className="transform transition-transform group-hover:translate-x-1 duration-300">
                  <h4 className="font-semibold text-lg text-santaran-indigo">Studio Sanctuary</h4>
                  <p className="text-gray-600">Chittagong, Bangladesh</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="mr-4 mt-1 bg-gradient-to-br from-santaran-teal to-santaran-jade p-3 rounded-full text-white shadow-md group-hover:shadow-lg transition-all duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <div className="transform transition-transform group-hover:translate-x-1 duration-300">
                  <h4 className="font-semibold text-lg text-santaran-indigo">Digital Messages</h4>
                  <p className="text-gray-600">contact@santaranart.org</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="mr-4 mt-1 bg-gradient-to-br from-santaran-teal to-santaran-jade p-3 rounded-full text-white shadow-md group-hover:shadow-lg transition-all duration-300">
                  <Phone className="text-white" size={24} />
                </div>
                <div className="transform transition-transform group-hover:translate-x-1 duration-300">
                  <h4 className="font-semibold text-lg text-santaran-indigo">Voice Connection</h4>
                  <p className="text-gray-600">+880 123 456 7890</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="heading-sm text-santaran-terracotta mb-6 font-serif">Join Our Circles</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-santaran-teal to-santaran-jade text-white rounded-full flex items-center justify-center hover:from-santaran-terracotta hover:to-santaran-amber transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-santaran-teal to-santaran-jade text-white rounded-full flex items-center justify-center hover:from-santaran-terracotta hover:to-santaran-amber transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-santaran-teal to-santaran-jade text-white rounded-full flex items-center justify-center hover:from-santaran-terracotta hover:to-santaran-amber transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-santaran-cream/30 to-white p-8 rounded-lg shadow-lg border border-santaran-jade/10 relative z-10 overflow-hidden">
              {/* Decorative art elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-santaran-amber/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-santaran-teal/5 rounded-full blur-3xl"></div>
              
              <h3 className="heading-md text-santaran-terracotta mb-6 font-serif">Share Your Thoughts</h3>
              
              {submitSuccess && (
                <Alert className="mb-6 bg-santaran-jade/10 border-santaran-jade text-santaran-indigo animate-fade-in">
                  <Check className="h-4 w-4 text-santaran-jade" />
                  <AlertTitle>Message Received</AlertTitle>
                  <AlertDescription>
                    Thank you for reaching out. Your words have begun a new thread in our artistic dialogue.
                  </AlertDescription>
                </Alert>
              )}
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-santaran-indigo">Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="border-santaran-jade/20 focus-visible:ring-santaran-teal/50"
                            disabled={isSubmitting}
                            placeholder="How shall we address you?"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-santaran-indigo">Your Email</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email"
                            className="border-santaran-jade/20 focus-visible:ring-santaran-teal/50"
                            disabled={isSubmitting}
                            placeholder="Where can we reach you?"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-santaran-indigo">Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field}
                            rows={5}
                            className="border-santaran-jade/20 focus-visible:ring-santaran-teal/50 resize-none"
                            disabled={isSubmitting}
                            placeholder="What would you like to share with us?"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    variant="artistic"
                    className="w-full bg-gradient-to-br from-santaran-teal to-santaran-jade hover:from-santaran-terracotta hover:to-santaran-amber text-white transition-all duration-300 group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending your message...
                      </>
                    ) : (
                      <>
                        Send Your Message
                        <Feather size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
