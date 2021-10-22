import React, { useState, useEffect } from "react";
// import Pattern2 from "../assets/img/pattern2.png";
import { DatePicker, CountryPicker } from "../components/Quote/";

const QuoteBudget = () => {
  const [notEmty, setNotEmty] = useState(false);
  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);

  const [text, setTxt] = useState("");
  //   console.log(notEmty);
  console.log(text);
  const handeProced = () => {
    if (notEmty) {
      setStep1(true);
    }
    if (text != "") {
      setStep2(true);
    }
  };

  return (
    <>
      <div className="h-screen bg-blue-dark flex flex-row">
        <div className="hidden h-full w-full lg:w-1/2 bg__quote_img lg:flex">
          {/* <img className="w-full h-full" src={Pattern2} alt="" srcSet="" /> */}
          <div className="mt-auto p-6">
            <button
              disabled="disabled"
              className="  p-6 border-2 rounded-2xl capitalize text-white"
            >
              back
            </button>
          </div>
        </div>

        <div className="text-white flex flex-col pt-6 w-full ">
          {!step1 && (
            <>
              <span className="text-4xl mx-auto mb-4">Let's Meet First 🤗</span>
              <p className="text-2xl">
                It will only take 5 minutes to start your insurance. You ready?
              </p>
              <div className="flex flex-col p-4">
                <DatePicker setNotEmty={setNotEmty} />
              </div>
            </>
          )}
          {step1 && !step2 && (
            <>
              <span className="text-4xl mx-auto mb-4">
                Necessary Info for Checkout!
              </span>
              <p className="text-2xl">
                Ayşe, we need your addresses to start your insurance.
              </p>

              <div className="flex flex-row my-4">
                <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <label
                    for="toggle"
                    class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
                <label for="toggle" class="text-lg  my-auto">
                  Use my registered address
                </label>
              </div>

              <div className="flex flex-col p-4">
                <CountryPicker />
                <textarea
                  className="bg-blue-dark border-2 rounded-xl my-4 text-center"
                  placeholder="Küçükb******  Mah****** Koc******  C******  No:23, ******  Apa****** Kat * Daire * - İs****** / A******
******"
                  name=""
                  onChange={(e) => setTxt(e.target.value)}
                  value={text}
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </>
          )}
          {step2 && (
            <>
              <span className="text-4xl mx-auto mb-4">
                Let’s Talk About Your Health 😷
              </span>
              <p className="text-2xl">
                Ayşe, we have to ask some important details related with your
                health.
              </p>
              <div className="flex flex-col p-4">
                <div className="flex flex-col">
                  <div className="flex flex-row border-2 p-4 w-3/4 mx-auto my-4">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Explicabo vitae at iusto veniam saepe vero nostrum?
                    </p>
                    <div className="flex flex-col">
                      <button
                        // disabled="disabled"
                        onClick={handeProced}
                        className=" p-4 rounded-2xl bg-orangeCustom"
                      >
                        yes
                      </button>
                      <button
                        // disabled="disabled"
                        onClick={handeProced}
                        className=" p-4 rounded-2xl bg-blue-dark"
                      >
                        no
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-row border-2 p-4 w-3/4 mx-auto my-4">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Explicabo vitae at iusto veniam saepe vero nostrum?
                    </p>
                    <div className="flex flex-col">
                      <button
                        // disabled="disabled"
                        onClick={handeProced}
                        className=" p-4 rounded-2xl bg-orangeCustom"
                      >
                        yes
                      </button>
                      <button
                        // disabled="disabled"
                        onClick={handeProced}
                        className=" p-4 rounded-2xl bg-blue-dark"
                      >
                        no
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label class="inline-flex items-center">
                      <input type="checkbox" class="" checked />
                      <span class="ml-2">
                        I have read and approved the information form
                      </span>
                    </label>
                    <label class="inline-flex items-center">
                      <input type="checkbox" class="" checked />
                      <span class="ml-2">
                        I have read and approved the information form
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </>
          )}
          <button
            // disabled="disabled"
            onClick={handeProced}
            className="w-1/3 ml-auto p-4 bg-orangeCustom"
          >
            Proced
          </button>
          <div className="flex flex-row mt-auto p-6 ">
            <div className=" mr-auto lg:hidden">
              <button
                // disabled="disabled"
                onClick={handeProced}
                className="  p-6 border-2 rounded-2xl capitalize text-white"
              >
                back
              </button>
            </div>

            <div className="ml-auto ">
              <button
                // disabled="disabled"
                onClick={handeProced}
                className="  p-6 border-2 rounded-2xl capitalize text-white"
              >
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteBudget;
