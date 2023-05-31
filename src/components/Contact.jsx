import React from "react";
import { contacts } from "../Data";

const Contact = () => {
  return (
    <div className="container mx-auto mb-7 px-6" id="contact">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">Contact</h2>
        <div className="w-14 h-[3px] rounded-sm bg-blue"></div>
      </div>
      <div className="shadow-lg p-4 max-w-[700px] mx-auto bg-ghostWhite opacity-90">
        <div className="grid gap-8 sm:grid-cols-3">
          {contacts.map((contact) => {
            const { id, icon, text } = contact;
            return (
              <div className="flex gap-2 items-center flex-col" key={id}>
                <div className="text-blue text-xl">{icon}</div>
                <div className="text-[0.9rem] opacity-80">{text}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex  gap-12 flex-wrap justify-center text-lg ">
          <div>
            <div className="mb-5">
              <input
                type="text"
                className="outline-none bg-transparent border border-solid border-blue p-2 hover:border-red-500"
                placeholder="Name"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                className="outline-none bg-transparent border border-solid border-blue p-2 hover:border-red-500"
                placeholder="Email"
              />
            </div>
          </div>
          <div>
            <textarea
              placeholder="Message"
              className="outline-none bg-transparent border border-solid border-blue resize-none  p-2 h-40 w-80 hover:border-red-500" 
            ></textarea>
            <div className="mt-2 text-end">
              <a href="" className="py-2 px-4 border-[2px] border-solid border-grey text-[0.9rem] rounded-[2.2rem] shadow-md hover:bg-blue">
                Send message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
