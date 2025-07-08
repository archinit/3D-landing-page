import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App(){
  return (
    <main>

      <img className="absolute top-0 right-0 opacity-60 -z-10" src="/gradient.png" alt="" />

      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_400px_20px_#e99b63] rotate-[-30deg]"></div>

      <Header/>
      <Hero/>
    </main>
  )
}