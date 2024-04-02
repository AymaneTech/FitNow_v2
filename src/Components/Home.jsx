import axios from "axios";
import Navbar from "./partials/Navbar"
import { useEffect, useState } from "react";


const Home = () => {

  const [progresses, setprogresses] = useState([]);

  const getProgresses = async () => {
    const response = await axios.get("progress");
    const data = response.data;
    console.log(data);
  }

  useEffect(() => {
    getProgresses();
  }, [])
  return (
    <section className="container mx-auto">
      <Navbar/>
      <div>
        <h1 className="text-white text-2xl font-bold">Your Progresses</h1>
      </div>
      <div className="flex justify-between gap-8">

      </div>

    </section>
  )
}

export default Home
