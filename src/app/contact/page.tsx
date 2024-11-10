'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useState, FormEvent } from 'react';

const ContactPage = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const text = 'Say Hello';

  const form = useRef<HTMLFormElement | null>(null);

  // Handle form submission
  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    
    try {
      const isSuccess = Math.random() > 0.5; 
      if (isSuccess) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }

    if (form.current) {
      form.current.reset();
    }
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-screen w-full flex items-center justify-center text-6xl">
          <div className="text-center">
            {text.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Fardan Khan,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
            placeholder="Your message here..."
            required
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none"
            placeholder="Your email address"
            required
          />
          <span>Regards</span>
          <button
            type="submit"
            className="bg-purple-200 rounded font-semibold text-gray-600 p-4"
          >
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
