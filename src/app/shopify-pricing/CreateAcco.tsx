import React from "react";

const CreateAcco = () => {
  const faqs = [
    {
      id: "one",
      question: "How long will it take to create my Shopify website?",
      answer: "The timeline for creating a Shopify website depends on the complexity of the project and the specific requirements of the client. Typically, we aim to complete projects within 4-6 weeks. However, this timeline may vary based on the scope of the project and the responsiveness of the client."
    },
    {
      id: "two",
      question: "Can I use my own domain name with a Shopify website?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, laudantium! Ipsam dolores obcaecati neque distinctio id error eius, minus eos."
    },
    {
      id: "three",
      question: "Do I need any technical skills to manage my Shopify website?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, laudantium! Ipsam dolores obcaecati neque distinctio id error eius, minus eos."
    },
    {
      id: "four",
      question: "Can you help me set up shipping and taxes on my Shopify store?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, laudantium! Ipsam dolores obcaecati neque distinctio id error eius, minus eos."
    },
    {
      id: "five",
      question: "How do I know if Shopify is the right platform for my business?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, laudantium! Ipsam dolores obcaecati neque distinctio id error eius, minus eos."
    }
  ];

  return (
    <div className="accordion accordion-flush bg-accodian  rounded" id="accordionFlushExample">
      {faqs.map(({ id, question, answer }) => (
        <div className="accordion-item para" key={id}>
          <h2 className="accordion-header" id={`flush-heading${id}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#flush-collapse${id}`}
              aria-expanded="false"
              aria-controls={`flush-collapse${id}`}
            >
              <h4 className="text-black gk-acco-text text-white">{question}</h4>
            </button>
          </h2>
          <div
            id={`flush-collapse${id}`}
            className="accordion-collapse collapse"
            aria-labelledby={`flush-heading${id}`}
            data-bs-parent="#accordionFlushExample"
          >
            <div>
              <p className="gk-sub-text-small text-white">
                {answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CreateAcco;
