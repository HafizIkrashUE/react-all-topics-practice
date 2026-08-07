import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-16"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            {/* Quick Links */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                Quick Links
              </h2>

              <ul className="space-y-3 text-gray-500 font-medium">
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-200 hover:text-orange-700 hover:underline"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="transition-colors duration-200 hover:text-orange-700 hover:underline"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="transition-colors duration-200 hover:text-orange-700 hover:underline"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    to="/github"
                    className="transition-colors duration-200 hover:text-orange-700 hover:underline"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                Connect
              </h2>

              <ul className="space-y-3 text-gray-500 font-medium">
                <li>
                  <a
                    href="https://github.com/HafizIkrashUE"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-200 hover:text-orange-700 hover:underline"
                  >
                    GitHub Profile
                  </a>
                </li>

                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-200 hover:text-orange-700 hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:example@gmail.com"
                    className="transition-colors duration-200 hover:text-orange-700 hover:underline"
                  >
                    Email Me
                  </a>
                </li>
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                Built With
              </h2>

              <ul className="space-y-3 text-gray-500 font-medium">
                <li>React.js</li>
                <li>React Router</li>
                <li>Tailwind CSS</li>
                <li>Vite</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 lg:my-8" />

        {/* Bottom Footer */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500">
            © 2026{" "}
            <a
              href="https://github.com/HafizIkrashUE"
              target="_blank"
              rel="noreferrer"
              className="font-semibold hover:text-orange-700 hover:underline"
            >
              HafizIkrashUE
            </a>
            . Built with ❤️ using React, React Router, Tailwind CSS & Vite.
          </span>

          <div className="mt-4 flex space-x-6 sm:mt-0">
            <Link
              to="/"
              className="text-gray-500 transition-colors duration-200 hover:text-orange-700"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-gray-500 transition-colors duration-200 hover:text-orange-700"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-gray-500 transition-colors duration-200 hover:text-orange-700"
            >
              Contact
            </Link>

            <a
              href="https://github.com/HafizIkrashUE"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 transition-colors duration-200 hover:text-orange-700"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}