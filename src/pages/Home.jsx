
import { useQuery } from "@tanstack/react-query";
import {
  UserCheck,
  Star,
  Globe,
  Users,
  ArrowRight,
  BookOpen,
  Target,
  Award
} from "lucide-react";
import { Link } from "react-router";

const languageCategories = [
  { name: "English", code: "EN", tutorCount: "450+", color: "bg-blue-500" },
  { name: "Spanish", code: "ES", tutorCount: "320+", color: "bg-yellow-500" },
  { name: "French", code: "FR", tutorCount: "280+", color: "bg-pink-500" },
  { name: "German", code: "DE", tutorCount: "200+", color: "bg-gray-700" },
  { name: "Chinese", code: "ZH", tutorCount: "180+", color: "bg-red-500" },
  { name: "Japanese", code: "JA", tutorCount: "150+", color: "bg-purple-500" },
  { name: "Italian", code: "IT", tutorCount: "120+", color: "bg-green-500" },
  { name: "Portuguese", code: "PT", tutorCount: "100+", color: "bg-orange-500" },
  { name: "Russian", code: "RU", tutorCount: "90+", color: "bg-cyan-700" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    quote: "Amazing platform! My Spanish tutor was incredibly patient and helped me improve my conversation skills dramatically."
  },
  {
    name: "Michael Chen",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    quote: "The booking system is so easy to use. I found a great French tutor within minutes and have been learning consistently."
  },
  {
    name: "Emily Rodriguez",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    quote: "LinguaConnect helped me find native German speakers. The quality of tutors is excellent and very professional."
  },
];

export default function Home() {
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ["/api/stats"],
  });

  return (
    <div className="min-h-screen">
      {/* Hero/Banner Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learn Languages in a Friendly Atmosphere
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Connect with native speakers and professional tutors worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/find-tutors">
                <button size="lg" className="px-8 py-4 border-gray-100 cursor-pointer bg-white rounded-4xl text-[#4a48d5] font-medium hover:bg-gray-100">
                  Find Tutors
                </button>
              </Link>
              <Link to="/add-tutorial">
                <button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 border-gray-100 cursor-pointer bg-white font-medium rounded-4xl text-[#4a48d5]  hover:bg-white hover:text-blue-600"
                >
                  Become a Tutor
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {statsLoading ? "..." : `${stats?.tutorCount || 40}+`}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Expert Tutors</div>
            </div>

            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {statsLoading ? "..." : `${stats?.reviewCount || 100}+`}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Reviews</div>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {statsLoading ? "..." : `${stats?.languageCount || 30}+`}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Languages</div>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {statsLoading ? "..." : `${stats?.userCount || 4000}+`}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Categories Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Languages
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Choose from our wide selection of languages
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {languageCategories.map((category) => (
              <Link key={category.name} to={`/find-tutors?language=${category.name}`}>
                <div className="cursor-pointer group hover:shadow-lg transition-all duration-300  bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                          <span className="text-white font-bold text-lg">
                            {category.code}
                          </span>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {category.name}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {category.tutorCount} tutors
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Start learning in just 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Choose Your Language
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Browse through our extensive list of languages and select the one you want to learn.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Find Your Tutor
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                View profiles, read reviews, and choose a tutor that matches your learning style.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Start Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Book your lesson and begin your language learning journey with expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Real feedback from our learning community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
