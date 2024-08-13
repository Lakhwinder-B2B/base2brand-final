import React from "react";


const AccodianText = () => {
  return (
    <>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item para">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <h4 className="text-black gk-acco-text">
                How long will it take to create my Shopify website?
              </h4>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse "
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div>
              <p className="gk-sub-text-small">
                The timeline for creating a Shopify website depends on the
                complexity of the project and the specific requirements of the
                client. Typically, we aim to complete projects within 4-6 weeks.
                However, this timeline may vary based on the scope of the
                project and the responsiveness of the client.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item para">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <h4 className="text-black gk-acco-text">Can I use my own domain name with a Shopify website?</h4>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div>
              <p className="gk-sub-text-small">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique, laudantium! Ipsam dolores obcaecati neque distinctio
                id error eius, minus eos.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item para">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <h4 className="text-black gk-acco-text">Do I need any technical skills to manage my Shopify website?</h4>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div>
              <p className="gk-sub-text-small">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique, laudantium! Ipsam dolores obcaecati neque distinctio
                id error eius, minus eos.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item para">
          <h2 className="accordion-header" id="flush-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              <h4 className="text-black gk-acco-text">Can you help me set up shipping and taxes on my Shopify store?</h4>
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div>
              <p className="gk-sub-text-small">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique, laudantium! Ipsam dolores obcaecati neque distinctio
                id error eius, minus eos.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item para">
          <h2 className="accordion-header" id="flush-headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              <h4 className="text-black gk-acco-text">How do I know if Shopify is the right platform for my business?</h4>
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample"
          >
            <div>
              <p className="gk-sub-text-small pb-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique, laudantium! Ipsam dolores obcaecati neque distinctio
                id error eius, minus eos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccodianText;
