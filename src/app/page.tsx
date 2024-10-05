// import Image from "next/image";
import "./components/page"
import Card from "./components/page";

export default function Home() {
  return (
    <>
      <section className="flex flex-wrap ">
      <div className='text-[#f3f34d] bg-[#151547] shadow-[0_10px_25px_rgba(0,0,0,0.8)] w-[600px] p-7 mt-10 m-auto border-solid   rounded-3xl text-2xl  hover:scale-105 hover:shadow-3xl transform transition duration-[800ms]'>
      <Card name=" Daniyal" rollNo={ 95228} city=" Karachi" center=" Governor House" campus=" Main" dayTime=" Monday - 02:00PM - 05:00PM"/>
      </div>
      <div className='text-[#f3f34d] bg-[#151547] shadow-[0_10px_25px_rgba(0,0,0,0.8)] w-[600px] p-7 mt-10 m-auto border-solid   rounded-3xl text-2xl  hover:scale-105 hover:shadow-3xl transform transition duration-[800ms]'>
      <Card name=" Hussnain" rollNo={ 23328} city=" Hydrabad" center=" Governor House" campus=" Main" dayTime=" Tuesday - 07:00PM - 10:00PM"/>
      </div>
      <div className='text-[#f3f34d] bg-[#151547] shadow-[0_10px_25px_rgba(0,0,0,0.8)] w-[600px] p-7 mt-10 m-auto border-solid   rounded-3xl text-2xl  hover:scale-105 hover:shadow-3xl transform transition duration-[800ms]'>
      <Card name=" Abdul Wasay" rollNo={ 21333} city=" Lahore" center=" Governor House" campus=" Main" dayTime=" Thursday - 08:00AM - 11:00AM"/>
      </div>
      <div className='text-[#f3f34d] bg-[#151547] shadow-[0_10px_25px_rgba(0,0,0,0.8)] w-[600px] p-7 mt-10 m-auto border-solid   rounded-3xl text-2xl  hover:scale-105 hover:shadow-3xl transform transition duration-[800ms]'>
      <Card name=" Masood" rollNo={ 10280} city=" Islamabad" center=" Governor House" campus=" Main" dayTime=" Friday - 02:00PM - 05:00PM"/>
      </div>
      <div className='text-[#f3f34d] bg-[#151547] shadow-[0_10px_25px_rgba(0,0,0,0.8)] w-[600px] p-7 mt-10 m-auto border-solid   rounded-3xl text-2xl  hover:scale-105 hover:shadow-3xl transform transition duration-[800ms]'>
      <Card name=" Irfan" rollNo={ 38083} city=" Rawalpindi" center=" Governor House" campus=" Main" dayTime=" Sunday - 02:00PM - 05:00PM"/>
      </div>
      <div className='text-[#f3f34d] bg-[#151547] shadow-[0_10px_25px_rgba(0,0,0,0.8)] w-[600px] p-7 mt-10 m-auto border-solid   rounded-3xl text-2xl  hover:scale-105 hover:shadow-3xl transform transition duration-[800ms]'>
      <Card name=" Osama" rollNo={ 97381} city=" Nawaab Shah" center=" Governor House" campus=" Main" dayTime=" Wednesday - 07:00PM - 10:00PM"/>
      </div>
      </section>
    </>
  );
}
