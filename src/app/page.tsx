"use client";
import { Heart, Calendar, Tag, Sparkles } from "lucide-react";
import React, { useState } from 'react';

// --- 1. Define the TypeScript Interface for Art Data ---
interface ArtPiece {
  id: number;
  name: string;
  date: string;
  status: "Sold" | "Available"; // Union type for specific statuses
  imageUrl: string;
}

// --- 2. Mock Art Data (The content remains the same) ---
const mockArt: ArtPiece[] = [
  { 
    id: 1, 
    name: "Koal Chibi (Custom)", 
    date: "10-10-2025", 
    status: "Sold", 
    imageUrl: "1.jpg" 
  },
  { 
    id: 2, 
    name: "Hyena Chibi (Custom)", 
    date: "09-10-2025", 
    status: "Sold", 
    imageUrl: "2.jpg" 
  },
  { 
    id: 3, 
    name: "Hybrid Chibi (Custom)", 
    date: "15-9-2025", 
    status: "Sold", 
    imageUrl: "3.jpg" 
  },
  { 
    id: 4, 
    name: "Jiggly Puff Halloween Adopt (Premade)", 
    date: "05-10-2025", 
    status: "Available", 
    imageUrl: "4.jpg" 
  },
  { 
    id: 5, 
    name: "Business Branding of Chloe's Bakeshop (Custom)", 
    date: "7-10-25", 
    status: "Sold", 
    imageUrl: "5.jpg" 
  },
  { 
    id: 6, 
    name: "Business Branding of Chloe's Bakeshop (Custom)", 
    date: "7-10-25", 
    status: "Sold", 
    imageUrl: "6.jpg" 
  },
  { 
    id: 7, 
    name: "Cute Goth Bunny Chibi Adopt (Premade)", 
    date: "30-9-25", 
    status: "Available", 
    imageUrl: "7.jpg" 
  },
  { 
    id: 8, 
    name: "Cute Cat-fish Hybrid Goth Chibi Adopt (Premade) ", 
    date: "30-9-25", 
    status: "Available", 
    imageUrl: "8.jpg" 
  },
  { 
    id: 9, 
    name: "Cute Fox Mantis Goth Chibi Adopt (Premade)", 
    date: "30-9-25", 
    status: "Available", 
    imageUrl: "9.jpg" 
  },
  { 
    id: 10, 
    name: "Cute Fox Mantis Goth Chibi Adopt (Premade)", 
    date: "30-9-25", 
    status: "Available", 
    imageUrl: "10.jpg" 
  },
  { 
    id: 11, 
    name: "Cute Opossum Goth Chibi Adopt (Premade)", 
    date: "30-9-25", 
    status: "Available", 
    imageUrl: "11.jpg" 
  },
  { 
    id: 12, 
    name: "Koal Reference Sheet (Custom)", 
    date: "14-8-25", 
    status: "Sold", 
    imageUrl: "12.jpg" 
  },
  { 
    id: 13, 
    name: "Bolt Reference Sheet (Custom)", 
    date: "3-7-25", 
    status: "Sold", 
    imageUrl: "13.jpg" 
  },
  { 
    id: 14, 
    name: "Dangling Chibi Keychain (Base, Premade)", 
    date: "5-7-25", 
    status: "Sold", 
    imageUrl: "14.jpg" 
  },
  { 
    id: 15, 
    name: "Panda Chibi (Custom)", 
    date: "14-10-25", 
    status: "Sold", 
    imageUrl: "15.png" 
  },
  { 
    id: 16, 
    name: "Drew the Dog Chibi (Custom)", 
    date: "12-10-25", 
    status: "Sold", 
    imageUrl: "16.png" 
  },
  { 
    id: 17, 
    name: "Charmander Pokemon Adopt Halloween Batch (Premade)", 
    date: "5-10-25", 
    status: "Available", 
    imageUrl: "17.png" 
  },
];

// --- 3. Define the component's Props type ---
interface ArtCardProps {
  art: ArtPiece;
}

// --- Art Card Component (Updated for Cute/Colorful Mode) ---
const ArtCard = ({ art }: ArtCardProps) => {
  const [isTouched, setIsTouched] = useState(false);

  // Determine status colors (Brighter, more cheerful)
  const statusColor = art.status === "Sold" ? "text-red-600" : "text-green-600";
  const statusBg = art.status === "Sold" ? "bg-red-200/80" : "bg-green-200/80";

  // Handler for touch events (mobile friendly overlay display)
  const handleTouch = (active: boolean) => {
    setIsTouched(active);
  };

  // Class to control overlay visibility based on hover (desktop) or touch (mobile)
  const overlayClass = `opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isTouched ? '!opacity-100' : ''}`;

  return (
    <div 
      className="relative overflow-hidden rounded-3xl shadow-xl group transform transition-transform duration-300 hover:scale-[1.03] cursor-pointer border-4 border-white bg-white shadow-pink-300/60"
      onTouchStart={() => handleTouch(true)} // Touch start shows overlay
      onTouchEnd={() => setTimeout(() => handleTouch(false), 2000)} // Touch end hides after a pause
    >
      {/* Art Image Container */}
      <div className="w-full aspect-square overflow-hidden bg-gray-100">
        <img 
          src={art.imageUrl} 
          alt={art.name} 
          width="600" 
          height="600"
          // Slight hover effect on image
          className="object-cover w-full h-full transition-all duration-500 group-hover:opacity-50" 
          loading="lazy" 
          // Fallback in case local images are not found
          onError={(e) => {
             e.currentTarget.onerror = null; 
             e.currentTarget.src = `https://placehold.co/600x600/F9A8D4/6D28D9?text=CUTE+ART`; // Pastel/Cute placeholder
          }}
        />
      </div>

      {/* Overlay Content on Hover/Touch - Now Soft Pink/Yellow */}
      <div className={`absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 bg-pink-300/90 backdrop-blur-sm ${overlayClass}`}>
        {/* Adjusted title style for cuteness */}
        <h3 className="text-xl sm:text-2xl font-black text-white mb-4 text-center tracking-tight drop-shadow-md">{art.name}</h3>
        
        <div className="space-y-4">
          
          {/* Date */}
          <p className="flex items-center text-white text-base font-semibold">
            <Calendar className="w-5 h-5 mr-3 text-yellow-300" />
            Created: {art.date}
          </p>

          {/* Status */}
          <p className={`flex items-center text-white text-base font-semibold`}>
            <Tag className={`w-5 h-5 mr-3 ${statusColor}`} />
            Status: 
            <span className={`ml-2 px-3 py-1 rounded-full text-sm font-extrabold ${statusBg} ${statusColor}`}>
              {art.status}
            </span>
          </p>

          {/* Icon Decoration - Vibrant, filled heart */}
          <Heart 
            className="w-8 h-8 mx-auto mt-6 animate-ping-slow" 
            fill="rgb(255, 99, 132)" // Chartreuse-like color
            stroke="white" 
            strokeWidth={2}
          />
        </div>
      </div>
    </div>
  );
};


export default function Home() {
  return (
    // Cute Mode Base: Soft gradient background with dark text
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-200 text-gray-800 p-4 sm:p-8">
        
      {/* --- 1. Hero Section: Evelyn's Art Space --- */}
      <header className=" text-center">
        {/* Sparkle Icon - Large and Pink/Purple */}
        <Sparkles className="w-16 h-16 mx-auto text-purple-600 mb-6 animate-pulse-slow" /> 
        
        {/* Image Title: Centered and Responsive */}
        <img 
          src="web.png" 
          className="w-full max-w-2xl mx-auto block mb-6 drop-shadow-lg" 
          alt="Gwen's Art Space Title Image" 
        />
        
  
        
      </header>
    
      {/* --- 2. Gallery Section --- */}
      <main className="max-w-7xl mx-auto">
        {/* Title: Purple text, warm yellow accent line, bouncy feel */}
        <h2 className="text-4xl font-extrabold text-purple-700 mb-10 border-b-4 border-yellow-400 pb-4 tracking-tight">
          My Gallery 😸
        </h2>
        
        {/* Responsive Grid: Still spacious */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {mockArt.map(art => (
            <ArtCard key={art.id} art={art} />
          ))}
        </div>
      </main>

      {/* --- 3. Simple Footer Decoration --- */}
      <footer className="mt-32 py-10 text-center text-gray-600 text-sm border-t border-pink-300">
        <p>&copy; {new Date().getFullYear()} Gwen's Art Space. Everything is cute! <Heart className="inline w-4 h-4 text-red-500 animate-wiggle" fill="currentColor" /></p>
      </footer>

    </div>
  );
}
