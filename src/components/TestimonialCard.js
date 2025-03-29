'use client';

import Image from 'next/image';

export default function TestimonialCard({ name, role, company, testimonial, image }) {
  return (
    <div className="bg-[#1A1625] p-6 rounded-xl border border-[#2D2B3A] shadow-lg shadow-purple-500/5 hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-start gap-4 mb-6">
        <div className="relative h-16 w-16 flex-shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-full border-2 border-purple-500/20"
            sizes="(max-width: 768px) 64px, 64px"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-gray-400 text-sm">
            {role} {company && `• ${company}`}
          </p>
        </div>
      </div>

      <div className="relative">
        <svg 
          className="absolute -top-4 -left-2 w-8 h-8 text-purple-500/20" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-300 relative z-10">
          {testimonial}
        </p>
      </div>
    </div>
  );
}
