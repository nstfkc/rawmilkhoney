const questions = [
  {
    question: "What services you provide?",
    answer:
      "We provide design and development services for web and mobile applications. But we offer anyting we can do with our expertise to help you to remove obstacles in your way.",
  },
  {
    question: "What makes you different?",
    answer:
      "We offer pragmatist solutions. We help you to get your product to market as fast as possible without compromising the quality.",
  },
  {
    question: "How your process looks like?",
    answer:
      "First we get into a discovery call to understand your needs Then we create a roadmap and start working on it. We provide frequent updates and we have weekly meetings to discuss the progress.",
  },
  {
    question: "Which technologies you use?",
    answer:
      "Our core stack is React, React Native, Next.js, TailwindCSS, Storybook but we work with any technology you prefer.",
  },
  {
    question: "Do you provide support after the project is done?",
    answer:
      "Yes, we provide life-long support for the bugs and issues we created.",
  },
];

export const FAQ = () => {
  return (
    <div className="flex flex-col gap-16">
      <div>
        <div className="text-2xl font-semibold text-center">FAQ</div>
      </div>
      <div className="flex flex-col gap-12">
        {questions.map((question, index) => {
          return (
            <div key={index} className="flex flex-col gap-2">
              <div className="text-xl font-semibold">{question.question}</div>
              <div className="leading-loose">{question.answer}</div>
            </div>
          );
        })}
      </div>
      <div className="flex flex gap-8">
        <div>Do you have more questions?</div>
        <div>
          <a href="" className="font-semibold underline">
            Contact us️
          </a>
        </div>
      </div>
    </div>
  );
};
