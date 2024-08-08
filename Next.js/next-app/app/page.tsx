import BarIcon from "./ui/BarIcon";
import PaperPlaneIcon from "./ui/PaperPlaneIcon";

export default function Home() {
  return (
    <section className="w-full  p-4 md:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto p-5 mt-10 text-center">
        <span
          style={{ lineHeight: "1.4", wordSpacing: "10px", textShadow: "0px 2px 2px rgba(66, 68, 90, 1)" }}
          className="text-4xl md:text-5xl lg:text-6xl text-blue-800 hover:text-blue-900 transition-all font-bold"
        >
          Build websites even faster with components on top of Tailwind CSS
        </span>
        <p
          style={{ lineHeight: "1.5" }}
          className="font-light p-2 mt-5 text-base md:text-lg lg:text-xl text-gray-500"
        >
          Start developing with an open-source library of over 600+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.
        </p>
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
          <button className="px-4 py-2 bg-blue-700 text-white font-bold rounded-md flex items-center space-x-2">
            <PaperPlaneIcon classe="text-white" />
            <span>Get Started</span>
          </button>
          <button className="px-4 py-2 bg-gray-200 border border-gray-400 text-gray-900 font-light rounded-md flex items-center space-x-2">
            <BarIcon />
            <span>Explore Product</span>
          </button>
        </div>
      </div>
    </section>
  );
}
