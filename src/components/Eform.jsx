import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Eform = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vdrz1vb",
        "template_x9odzva",
        form.current,
        "4ZOBoX_pcwTLX-Ipq"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("your form is sumbitted");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleClick = () => {
    setTimeout(() => {
      form.current.reset();
    }, 3000);
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex-col h-[500px] w-[300px] mx-auto bg-slate-400 mt-10 px-2"
    >
      <h2 className="py-5 text-center text-white font-bold text-2xl underline">
        FORM
      </h2>
      <div className="mb-8">
        <label>First Name: </label>
        <input type="text" name="fname" className="border-2 capitalize" required />
      </div>
      <div className="mb-8">
        <label>Last Name: </label>
        <input type="text" name="lname" className="border-2 capitalize" required />
      </div>
      <div className="mb-8">
        <label>Email: </label>
        <input type="email" name="email" className="border-2" required  />
      </div>
      <div className="mb-8">
        <label>Mobile: </label>
        <input type="number" name="mobile" className="border-2" required max="10" />
      </div>
      <div className="mb-8">
        <label>Passward: </label>
        <input type="password" name="password" className="border-2" required />
      </div>
      <div className="mb-8">
        <label>Message: </label>
        <textarea name="message" className="border-2" required />
      </div>
      <div className="text-center cursor-pointer">
        <input type="submit" value="Send" onClick={handleClick}  className="cursor-pointer"/>
      </div>
    </form>
  );
};
export default Eform;
