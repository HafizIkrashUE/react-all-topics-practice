import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Hero Section */}
      <aside className="relative overflow-hidden rounded-lg text-black sm:mx-16 mx-2 sm:py-16">
        {/* Text Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 pb-20 pt-10 sm:px-6 lg:px-8 sm:py-24">
          <div className="max-w-xl sm:ml-auto sm:text-right text-center space-y-8 mt-80 sm:mt-0">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Build Modern Web Applications
              <span className="block mt-2 text-3xl sm:text-4xl text-orange-700">
                with React Router
              </span>
            </h2>


            <Link
              to="/about"
              className="inline-flex items-center rounded-lg bg-orange-700 px-6 py-3 font-medium text-white transition hover:bg-orange-800"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              <span className="ml-2">Get Started</span>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="absolute inset-0 flex items-center">
          <img
            className="w-[320px] sm:w-[420px] lg:w-[520px] xl:w-[600px] ml-4 object-contain"
            src="https://images.pexels.com/photos/34803990/pexels-photo-34803990.jpeg"
            alt="Developer"
          />
        </div>
      </aside>

      {/* Second Section */}
      <div className="grid place-items-center mt-16 sm:mt-20">
        <img
          className="w-[300px] sm:w-[450px] lg:w-[650px] rounded-xl shadow-lg"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
          alt="Programming Workspace"
        />
      </div>

      {/* Bottom Heading */}
      <div className="text-center py-10">
        <h1 className="text-3xl sm:text-5xl font-bold">
          Learn. Build. Deploy.
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Master React Router through practical examples and build responsive,
          scalable web applications with modern development practices.
        </p>
      </div>
    </div>
  );
}