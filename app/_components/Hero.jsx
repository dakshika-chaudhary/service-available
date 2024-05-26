// import { Button } from '@/components/ui/button'

import React from 'react'
import IconExample from './IconExample'


function Hero() {
  return (
    <div className="flex item-center flex-col justify-center pt-14 pb-7"><h1 className="font-bold text-[46px] text-center">Find out <span className="text-blue-500"> Aarogya_ai </span>Services</h1>
    <h1 className="font-semi-bold text-[37px] text-gray-700 text-center pt-3 pb-7">Explore The Best Services from<br></br> The comfort of your Home</h1>
    <div className="mt-4 flex item-center justify-center">
         {/* <Image src="/logo.svg" alt="logo"></Image> */}
       <button className=" h-[100px] w-[300px]  text-[20px] border-x-black rounded-xl bg-blue-400 hover:bg-blue-500 hover:text-white hover:text-[21px]"> <h2 className="font-bold text-[26px]">Ask your<br></br> Ai-Docter</h2>
        </button></div>
<div className=" justify-around">
        <div className="ml-24 md:mx-32   grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className=" mt-20 h-[180px] w-[150px]  text-[20px] text-center border-x-black rounded-xl bg-blue-400"><h1 className="font-bold text-[36px] text-white text-center">Docter</h1><IconExample/><button  className=" text-black w-[100px] mt-6 text-[20px] border-x-black rounded-xl bg-white ">SignUp</button></div>
            <div className=" mt-20 h-[180px] w-[150px]  text-[20px] text-center border-x-black rounded-xl bg-blue-400"><h1 className="font-bold text-[36px] text-white text-center">Docter</h1><IconExample/><button  className=" text-black w-[100px] mt-6 text-[20px] border-x-black rounded-xl bg-white ">SignIn</button></div>
            <div className=" mt-20 h-[180px] w-[150px]  text-[20px] text-center border-x-black rounded-xl bg-blue-400"><h1 className="font-bold text-[36px] text-white text-center">Docter</h1><IconExample/><button  className=" text-black w-[100px] mt-6 text-[20px] border-x-black rounded-xl bg-white ">Profile</button></div>
            <div className=" mt-20 h-[180px] w-[150px]  text-[20px] text-center border-x-black rounded-xl bg-blue-400"><h1 className="font-bold text-[36px] text-white text-center">Patient</h1><IconExample/><button  className=" text-black w-[100px] mt-6 text-[20px] border-x-black rounded-xl bg-white ">Sign up</button></div>
            <div className=" mt-20 h-[180px] w-[150px]  text-[20px] text-center border-x-black rounded-xl bg-blue-400"><h1 className="font-bold text-[36px] text-white text-center">Patient</h1><IconExample/><button  className=" text-black w-[100px] mt-6 text-[20px] border-x-black rounded-xl bg-white ">SignIp</button></div>
            <div className=" mt-20 h-[180px] w-[150px]  text-[20px] text-center border-x-black rounded-xl bg-blue-400"><h1 className="font-bold text-[36px] text-white text-center">Patient</h1><IconExample/><button  className=" text-black w-[100px] mt-6 text-[20px] border-x-black rounded-xl bg-white ">Profile</button></div>
        </div>
        </div>

        {/* <div className="bg-white p-12 shadow-lg"> */}
        {/* <p className="text-4xl text-center text-blue-500"><u>Our Services</u></p> */}
       <div className="mt-14">

<div className="flex item-center flex-col justify-center pt-14 pb-7 pl-16 pr-14">
<h1 className="font-bold text-[46px] text-center"><u> Book Your Doctor </u></h1>
<p className="text-[20px]">At Aarogya_ai, we prioritize your health and convenience. Our online booking 
system is designed to provide an easy and efficient way for patients to schedule appointments with our network of experienced doctors. </p>

<ol className=""><p className='font-bold text-[30px]'>How to Book an Appointment</p>
<li className="text-[18px]"><u><b className="text-[23px]">step1: </b></u><spam className="f=text-[26px] text-blue-600">Visit Our Website:</spam> Go to our website and navigate to the "Book a Doctor" section or click <button className=" item-center justify-center h-[40px] w-[150px] font-bold text-white text-[20px] border-x-black rounded-xl bg-blue-400 item-center hover:bg-blue-500 hover:text-white hover:text-[21px]">Book Now</button></li>
<li className="text-[18px]"><u><b className="text-[23px]">step2: </b></u><spam className="f=text-[26px] text-blue-600">Select Your Specialist:</spam> Choose the type of specialist you need, whether it's a general practitioner, a cardiologist, a dermatologist, or any other medical professional.</li>
<li className="text-[18px]"><u><b className="text-[23px]"> step3: </b></u><spam className="f=text-[26px] text-blue-600">Choose a Doctor:</spam> Browse through the profiles of our available doctors. Each profile includes qualifications, areas of expertise, and patient reviews.</li>
<li className="text-[18px]"><u><b className="text-[23px]"> step4: </b></u><spam className="f=text-[26px] text-blue-600">Pick a Time Slot:</spam> Select a date and time that suits your schedule. Our system shows real-time availability, ensuring you get the most accurate options.</li>
<li className="text-[18px]"><u><b className="text-[23px]"> step5: </b></u><spam className="f=text-[26px] text-blue-600">Confirm Your Booking:</spam> Enter your details and confirm the appointment. You will receive a confirmation email with all the necessary information.</li>
</ol>


</div>

       </div>
    
       <div className="mt-10">

<div className="flex item-center flex-col justify-center pt-14 pb-7 pl-16 pr-14">
<h1 className="font-bold text-[46px] text-center"><u> Book Your Doctor by Symptoms </u></h1>
<p className="text-[20px]">At Aarogya, we understand that identifying the right specialist for your symptoms can be challenging. Our innovative online booking system allows you to book appointments by simply describing your symptoms.  </p>


<ol className=""><p className='font-bold text-[30px]'>How to Book an Appointment</p>
<li className="text-[18px]"><u><b className="text-[23px]">step1: </b></u><spam className="f=text-[26px] text-blue-600">Visit Our Website: </spam>Go to our website and navigate to the "Book Now" section or click <button className=" item-center justify-center h-[40px] w-[150px] font-bold text-white text-[20px] border-x-black rounded-xl bg-blue-400 item-center hover:bg-blue-500 hover:text-white hover:text-[21px]">Book Now</button>.
</li>
<li className="text-[18px]"><u><b className="text-[23px]">step2: </b></u><spam className="f=text-[26px] text-blue-600">Describe Your Symptoms:</spam> Use our intuitive form to enter the symptoms you're experiencing. For example, you might describe symptoms like "persistent cough," "joint pain," or "skin rash."</li>
<li className="text-[18px]"><u><b className="text-[23px]"> step3: </b></u><spam className="f=text-[26px] text-blue-600">Get Specialist Recommendations:</spam> Based on your symptoms, our system will suggest the most suitable specialists for your condition. You’ll see a list of doctors along with their qualifications and areas of expertise.</li>
<li className="text-[18px]"><u><b className="text-[23px]"> step3: </b></u><spam className="f=text-[26px] text-blue-600">Choose a Doctor: </spam>Browse through the profiles of our available doctors. Each profile includes qualifications, areas of expertise, and patient reviews.</li>
<li className="text-[18px]"><u><b className="text-[23px]"> step4: </b></u><spam className="f=text-[26px] text-blue-600">Pick a Time Slot:</spam> Select a date and time that suits your schedule. Our system shows real-time availability, ensuring you get the most accurate options.</li>
<li className="text-[18px]"><u><b className="text-[23px]"> step5: </b></u><spam className="f=text-[26px] text-blue-600">Confirm Your Booking: </spam>Enter your details and confirm the appointment. You will receive a confirmation email with all the necessary information.</li>
</ol>


</div>



       </div>
    
       <div className="mt-10">

<div className="flex item-center flex-col justify-center pt-14 pb-7 pl-16 pr-14">
<h1 className="font-bold text-[46px] text-center"><u> Book Your AI Doctor Appointment</u></h1>
<p className="text-[20px]">At Aarogya_ai, we are revolutionizing healthcare by offering AI Doctor consultations. Our AI Doctor provides quick, accurate assessments and health advice, making it easier for you to manage your health.   </p>

<ol className=""><p className='font-bold text-[30px]'>How to Book an AI Doctor Consultation</p>
<li className="text-[18px]"><u><b className="text-[23px]">step1: </b></u><spam className="f=text-[26px] text-blue-600">Visit Our Website: </spam>Go to our website and navigate to the "Book by Symptoms" section or click <button className=" item-center justify-center h-[40px] w-[150px] font-bold text-white text-[20px] border-x-black rounded-xl bg-blue-400 item-center hover:bg-blue-500 hover:text-white hover:text-[21px]">Book Now</button>
</li>
<li className="text-[18px]"><u><b className="text-[23px]">step2: </b></u><spam className="f=text-[26px] text-blue-600">Visit Our Website:</spam> Go to our website and navigate to the "Medical-Assistant" section.</li>
<li className="text-[18px]"><u><b className="text-[23px]"> step3: </b></u><spam className="f=text-[26px] text-blue-600">Describe Your Symptoms:</spam> Use the intuitive interface to enter the symptoms you are experiencing. For example, you might input symptoms such as "headache," "stomach pain," or "fatigue."</li>
<li className="text-[18px]"><u><b className="text-[23px]"> step3: </b></u><spam className="f=text-[26px] text-blue-600">Receive Immediate Feedback:</spam> The AI Doctor will analyze your symptoms and provide instant feedback, including possible conditions and recommended actions..</li>
<li className="text-[18px]"><u><b className="text-[23px]"> step4: </b></u><spam className="f=text-[26px] text-blue-600">Follow-Up Options:</spam> Based on the AI Doctor’s assessment, you can choose to:
<br></br><b>A.</b>Schedule an appointment with a human doctor for further evaluation.
<br></br><b>B.</b>Receive health advice and self-care tips directly from the AI Doctor.
<br></br><b>C.</b>Opt for a virtual consultation if your condition can be addressed remotely..</li>

</ol>


</div>



       </div>
        

       <div className="mt-10">

<div className="flex item-center flex-col justify-center pt-14 pb-7 pl-16 pr-14">
<h1 className="font-bold text-[36px] text-center"><u>Benefits of Using Our Online Booking System</u></h1>
<ol className="">
<li className="text-[18px]"><u><b className="text-[20px]">1. </b></u><spam className="f=text-[26px] text-blue-600">Convenience:</spam>  Book appointments from the comfort of your home at any time of day.</li>



<li className="text-[18px]"><u><b className="text-[20px]">2.</b></u><spam className="f=text-[26px] text-blue-600">Quick Access: </spam> Find available doctors and time slots instantly without waiting on hold or visiting the clinic.</li>
<li className="text-[18px]"><u><b className="text-[20px]">3.</b></u><spam className="f=text-[26px] text-blue-600">Detailed Information:</spam>  Access comprehensive profiles of our doctors to make an informed choice.</li>
<li className="text-[18px]"><u><b className="text-[20px]">4.</b></u><spam className="f=text-[26px] text-blue-600">Reminders and Notifications:</spam>  Receive automated reminders and updates about your appointment to ensure you never miss a visit.</li>
</ol>
</div></div>
   
    </div>
  )
}

export default Hero