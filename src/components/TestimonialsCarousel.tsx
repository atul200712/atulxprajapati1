import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company?: string;
  quote: string;
  rating: number;
  avatarUrl: string;
}

interface TestimonialsCarouselProps {
  testimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
}

const TestimonialsCarousel = ({
  testimonials = [
  ],
  title = "Testimonials",
  subtitle = "Happy Clients Feedback",
}: TestimonialsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${i < rating ? "text-yellow-500" : "text-gray-400"}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-red-600 font-bold text-xl mb-2">{title}</h2>
          <h3 className="text-3xl font-bold">{subtitle}</h3>
        </div>

        <div className="relative">
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Testimonial avatars circle */}
              <div className="absolute w-full h-full">
                {testimonials.map((testimonial, index) => {
                  // Calculate position in a circle
                  const angle =
                    index * (360 / testimonials.length) * (Math.PI / 180);
                  const radius = 120; // Circle radius
                  const left = Math.cos(angle) * radius + radius;
                  const top = Math.sin(angle) * radius + radius;

                  return (
                    <div
                      key={testimonial.id}
                      className={`absolute transition-opacity duration-300 ${index === currentIndex ? "opacity-100" : "opacity-50"}`}
                      style={{
                        left: `${left}px`,
                        top: `${top}px`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <Avatar className="h-12 w-12 border-2 border-red-600">
                        <AvatarImage
                          src={testimonial.avatarUrl}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  );
                })}
              </div>

              {/* Current testimonial avatar (center) */}
              <Avatar className="h-24 w-24 border-4 border-red-600 relative z-10">
                <AvatarImage
                  src={testimonials[currentIndex].avatarUrl}
                  alt={testimonials[currentIndex].name}
                />
                <AvatarFallback>
                  {testimonials[currentIndex].name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          <Card className="bg-zinc-900 border-zinc-800 max-w-3xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="text-4xl text-red-600 mb-4 font-serif">
                &ldquo;
              </div>
              <p className="text-lg mb-6">{testimonials[currentIndex].quote}</p>
              <h4 className="text-xl font-bold mb-1">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-400 mb-2">
                {testimonials[currentIndex].position}
                {testimonials[currentIndex].company &&
                  ` at ${testimonials[currentIndex].company}`}
              </p>
              <div className="flex justify-center">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-red-600 text-red-600 hover:bg-red-600/10"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-red-600 text-red-600 hover:bg-red-600/10"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
