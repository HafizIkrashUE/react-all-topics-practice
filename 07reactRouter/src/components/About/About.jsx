export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          
          {/* Image */}
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://images.pexels.com/photos/34803973/pexels-photo-34803973.jpeg"
              alt="React Development"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">
              Learn and Build Modern Web Applications with React
            </h2>

            <p className="mt-6 text-gray-600">
              React is one of the most popular JavaScript libraries for
              building fast, interactive, and scalable user interfaces.
              It allows developers to create reusable components, making
              applications easier to maintain and extend as they grow.
            </p>

            <p className="mt-4 text-gray-600">
              This project demonstrates the power of React Router by
              implementing seamless navigation, dynamic routes, nested
              layouts, and reusable components. Combined with Tailwind CSS,
              it delivers a clean, responsive, and modern user experience
              while following best development practices.
            </p>

            <p className="mt-4 text-gray-600">
              Whether you are a beginner learning React or an experienced
              developer exploring advanced routing concepts, this project
              provides a solid foundation for building professional single-page
              applications (SPAs).
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}