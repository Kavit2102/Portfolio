import React, { useState } from "react";
import axios from "axios";
import * as siIcon from "react-icons/si";
import * as slIcon from "react-icons/sl";

const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [Data, setData] = useState([]);
  // let newArr = [];
  // let index = 0;

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newData = {
      Name: Name,
      Email: Email,
      Message: Message,
    };

    axios
      .post("http://127.0.0.1:5000/users/create", newData)
      .then((response) => {
        let newArr = Data.concat(response.data);
        setData(newArr);
        console.log(newArr);
      })
      .catch((err) => {
        console.log({ Error: err });
      });

    // Data.map(element=> console.log(element));
  };

  return (
    <>
      <div className="container py-16 md:py-20" id="contact">
        <h2 className="pt-10 text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-5xl">
          Here's a contact form
        </h2>
        <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Have Any Questions?
        </h4>
        <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
          <p className="font-body text-grey-10">
            Just feel free to send message &#33;&#33;&#33;
          </p>
        </div>
        <form
          action="/users/create"
          method="post"
          className="mx-auto w-full pt-10 sm:w-3/4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row">
            <input
              className="mr-3 w-full rounded border-[1px] px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
              placeholder="Name"
              type="text"
              id="name"
              onChange={handleName}
            />
            <input
              className="mt-6 w-full rounded border-[1px] px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
              placeholder="Email"
              type="text"
              id="email"
              onChange={handleEmail}
            />
          </div>
          <textarea
            className="mt-6 w-full rounded border-[1px] px-4 py-3 font-body text-black md:mt-8"
            placeholder="Message"
            id="message"
            cols={30}
            rows={10}
            defaultValue={""}
            onChange={handleMessage}
          />
          <input
            type="submit"
            className="cursor-pointer mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
            value="Submit"
            // onClick={handleSubmit}
          />
        </form>

        {/* <button type="button" onClick={handleData}>Show Data</button> */}

        <div className="flex flex-col pt-16 lg:flex-row">
          <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
            <div className="flex items-center">
              <p className="pl-2 inline-flex items-center gap-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                <siIcon.SiWhatsapp />
                <span>WhatsApp</span>
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              (+91) 7909988170
            </p>
          </div>
          <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-envelope text-2xl text-grey-40" />
              <p className="pl-2 inline-flex items-center gap-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                <siIcon.SiGmail />
                <span>Email</span>
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              kavitdesai212002@gmail.com
            </p>
          </div>
          <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-map text-2xl text-grey-40" />
              <p className="pl-2 inline-flex items-center gap-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                <slIcon.SlLocationPin />
                Location
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              Indore (MP) , India
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
