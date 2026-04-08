import { Shield, Clock, SprayCan, Wind } from "lucide-react";

export const packages = [
  {
    name: "Qualifying Lap",
    tier: "Basic",
    price: "$8",
    color: "#3B82F6",
    features: [
      "High-pressure rinse cycle",
      "Undercarriage flush",
      "Spot-free rinse finish",
    ],
  },
  {
    name: "Pace Car",
    tier: "Standard",
    price: "$12",
    color: "#10B981",
    features: [
      "Everything in Qualifying Lap",
      "Foaming pre-soak treatment",
      "Clear coat protectant layer",
    ],
  },
  {
    name: "Pole Position",
    tier: "Premium",
    price: "$16",
    color: "#8B5CF6",
    features: [
      "Everything in Pace Car",
      "Vibrant Tri-Color foam polish",
      "Wheel & tire chemical blast",
    ],
  },
  {
    name: "Checkered Flag",
    tier: "Ultimate",
    price: "$20",
    color: "#F59E0B",
    featured: true,
    tagline: "The undeniable champion of shine.",
    features: [
      "Everything in Pole Position",
      "Ceramic Shield coating",
      "Extreme bug prep treatment",
      "Extended high-velocity drying",
    ],
  },
];

export const features = [
  {
    icon: Shield,
    title: "100% Touch-Free Tech",
    desc: "Zero friction, zero swirl marks. Safe for ceramic coatings, PPF, and custom wraps.",
  },
  {
    icon: Clock,
    title: "24/7/365 Access",
    desc: "Night owls and early birds welcome. Our brightly lit, secure bays never close.",
  },
  {
    icon: SprayCan,
    title: "Premium Chemistry",
    desc: "Top-tier, pH-balanced soaps and vibrant tri-color foams deliver a truly deep clean.",
  },
  {
    icon: Wind,
    title: "Free High-Suction Vacuums",
    desc: "Finish the job right with our complimentary, powerful vacuum stations at every bay.",
  },
];

export const testimonials = [
  {
    name: "Marcus T.",
    rating: 5,
    text: "I've been bringing my Tesla here weekly for 6 months now. The touchless system is the only thing I trust with my matte wrap. Absolutely spotless every time.",
  },
  {
    name: "Sarah K.",
    rating: 5,
    text: "The night lighting at this place is unreal — it's like pulling into a race pit. My SUV comes out looking like it just rolled off the showroom floor. Best car wash in Mechanicsville.",
  },
  {
    name: "David R.",
    rating: 5,
    text: "Cleanest bays I've ever seen at a self-serve wash. The Checkered Flag package with the ceramic coating is absolutely worth it. You can feel the slickness for weeks.",
  },
  {
    name: "Jennifer L.",
    rating: 5,
    text: "24-hour access is a game changer for my schedule. I can swing through at midnight after my shift and the place is spotless and well-lit. Love the free vacuums too!",
  },
];

/** Two Mechanicsville locations — maps use output=embed (no API key required). */
export const locations = [
  {
    track: "Track 1",
    name: "Meadowbridge Road",
    address: "8281 Meadowbridge Rd, Mechanicsville, VA 23116",
    mapUrl: "https://www.google.com/maps?q=8281+Meadowbridge+Rd+Mechanicsville+VA+23116",
    color: "#3B82F6",
  },
  {
    track: "Track 2",
    name: "Atlee Commerce Blvd",
    address: "9444 Atlee Commerce Blvd, Mechanicsville, VA",
    mapUrl: "https://www.google.com/maps?q=9444+Atlee+Commerce+Blvd+Mechanicsville+VA",
    color: "#10B981",
  },
];
