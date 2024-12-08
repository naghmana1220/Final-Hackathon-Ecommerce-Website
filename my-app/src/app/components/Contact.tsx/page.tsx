import React from 'react';

const Contact = () => {
  return (
    <div id="Contact">
    <div className="container mx-auto p-4 pt-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
        <p className="text-gray-600 mt-2">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. 
            Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>

      <div className="flex flex-col md:flex-row">
       
        <div className="md:w-1/2 p-4">
          <div className="flex items-center mb-4">
          <img src="/images/Contact2.png" className='w-6 h-8 pr-2 pt-2 '/>
            <h3 className="text-lg font-semibold">Address</h3>
          </div>
          <p className="text-gray-600 ">236 5th SE Avenue, </p>
          <p className="text-gray-600">New York NY10000, United States</p>
          <div className="flex items-center mb-4">
          <img src="/images/Contact3.png" className='w-8 h-8 pr-2 pt-2 '/>
            <h3 className="text-lg font-semibold pt-4">Phone</h3>
          </div>
          <p className="text-gray-600">Mobile: +(84) 546-6789</p>
          <p className="text-gray-600">Hotline: +(84) 456-6789</p>

          <div className="flex items-center mb-4">
           <img src="/images/Contact2.png" className='w-6 h-8 pr-2 pt-2 '/>
             
            <h3 className="text-lg font-semibold pt-3">Working Hours</h3>
          </div>
          <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
          <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
        </div>

       
        <div className="md:w-1/2 p-4">
          <h3 className="text-lg font-normal mb-4">Your Name</h3>
          <input type="text" placeholder="Your Name" className="w-[400px] p-2 border border-gray-300 rounded mb-4" />

          <h3 className="text-lg font-normal mb-4">Your Email</h3>
          <input type="email" placeholder="Email Address" className="w-[400px] p-2 border border-gray-300 rounded mb-4" />

          <h3 className="text-lg font-normal mb-4">Your Subject</h3>
          <input type="text" placeholder="Subject" className="w-[400px] p-2 border border-gray-300 rounded mb-4" />

          <h3 className="text-lg font-normal mb-4">Message</h3>
          <textarea placeholder="Message" className="w-[400px] p-2 border border-gray-300 rounded mb-4 h-24" />
          <button className="w-[269px] h-[55px] p-2 bg-[#B88E2F] text-white font-semibold rounded ">Submit</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
