import ReactHelmet from "../../components/commonComponents/ReactHelmet";

const Faq = () => {
  return (
    <div className="max-w-3xl mx-auto px-3 xl:px-0 mt-[128px] mb-16">
      <ReactHelmet title="Hotel X | FAQ" />
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl capitalize mb-5">FAQ</h2>
        <div className="flex justify-center">
          <div className="w-16 h-2 bg-red-500 rounded-xl"></div>
        </div>
      </div>
      <div className="mt-10 space-y-5">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-0" defaultChecked="checked" />
          <div className="collapse-title text-xl font-medium">
            1. What are the check-in and check-out times at Hotel X?
          </div>
          <div className="collapse-content">
            <p>
              <strong>Answer : </strong> Check-in time at Hotel X is at 3:00 PM,
              and check-out time is at 11:00 AM. We do our best to accommodate
              early check-ins and late check-outs, subject to availability.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-0" />
          <div className="collapse-title text-xl font-medium">
            2. Is there parking available at the hotel, and what are the parking
            fees?
          </div>
          <div className="collapse-content">
            <p>
              <strong>Answer : </strong> Yes, Hotel X offers both self-parking
              and valet parking options for our guests. Self-parking is
              available for $15 per day, while valet parking is $25 per day.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-0" />
          <div className="collapse-title text-xl font-medium">
            3. Does Hotel X offer Wi-Fi for guests, and is it complimentary?
          </div>
          <div className="collapse-content">
            <p>
              <strong>Answer : </strong> Yes, we provide complimentary
              high-speed Wi-Fi access to all our guests throughout the hotel,
              including in guest rooms and public areas.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-0" />
          <div className="collapse-title text-xl font-medium">
            4. What dining options are available at Hotel X?
          </div>
          <div className="collapse-content">
            <p>
              <strong>Answer : </strong> Hotel X offers a range of dining
              options to suit your preferences. Our on-site restaurant serves a
              variety of cuisines, and we also have a bar and lounge for drinks
              and light snacks. In-room dining is available 24/7 for your
              convenience.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-0" />
          <div className="collapse-title text-xl font-medium">
            5. Are pets allowed at Hotel X, and is there an additional fee?
          </div>
          <div className="collapse-content">
            <p>
              <strong>Answer : </strong> Yes, Hotel X is a pet-friendly hotel.
              We welcome well-behaved pets for an additional fee of $25 per
              night. Please inform us in advance, so we can prepare for your
              {"pet's"} stay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
