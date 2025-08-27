import React, { useEffect, useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const faqs = [
    {
      question: "What makes MCA different from other tutoring services?",
      answer: "MCA combines academic excellence with Islamic values, providing not just subject knowledge but also guidance on maintaining Islamic principles in professional settings. Our mentors are experienced professionals who understand both the academic and faith-based aspects of career development."
    },
    {
      question: "Do you offer online tutoring?",
      answer: "Yes, we offer online tutoring sessions to accommodate different learning preferences and schedules. Our tutors are highly experienced in both in-person and online teaching, and they know how to make online sessions just as effective, if not more so than in-person lessons."
    },
    {
      question: "What subjects do you cover?",
      answer: "We cover all major GCSE and A-Level subjects including Mathematics, Sciences, English, Politics, Psychology, and more. We also provide specialised support for university applications and personal statements."
    },
    {
      question: "How do you incorporate Islamic values into your teaching?",
      answer: "We integrate Islamic principles such as honesty, integrity, and excellence into our teaching approach. This includes discussing ethical business practices, social responsibility, and maintaining Islamic values in professional environments."
    },
    {
      question: "What are your rates for tutoring services?",
      answer: "Our rates vary depending on the service and level of support required. We offer competitive pricing and various packages to suit different needs. Please contact us for specific pricing information."
    },
    {
      question: "Do you provide support for university applications?",
      answer: "Yes, we offer comprehensive support for university applications including personal statement guidance, interview preparation, and CV development. Our mentors have experience in various professional fields and can provide industry-specific advice."
    }
  ];

  return (
    <div className="faq">
      <section className="faq-hero">
        <div className="container">
          <h1 className="faq-hero-title animate-on-scroll">Frequently Asked Questions</h1>
          <p className="faq-hero-subtitle animate-on-scroll">
            Find answers to common questions about our services and academy
          </p>
        </div>
      </section>

      <section className="faq-content">
        <div className="container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item animate-on-scroll">
                <button
                  className={`faq-question ${openFaq === index ? "active" : ""}`}
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span className="faq-icon">{openFaq === index ? "−" : "+"}</span>
                </button>
                <div className={`faq-answer ${openFaq === index ? "open" : ""}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-text animate-on-scroll">
              <h2>Still Have Questions?</h2>
              <p>
                If you could not find the answer you were looking for, 
                please do not hesitate to reach out to us directly.
              </p>
              <div className="contact-action">
                <a href="mailto:info@muslimcorporateacademy.org" className="contact-btn">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="contact-visual animate-on-scroll">
              <div className="visual-placeholder">
                <div className="placeholder-text">Contact Visual</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
