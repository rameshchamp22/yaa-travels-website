import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <>
      <a
        href="tel:+919788289050"
        className="fixed bottom-24 right-5 z-50 rounded-full bg-blue-600 p-4 text-white shadow-lg hover:bg-blue-700"
      >
        <Phone />
      </a>

      <a
        href="https://wa.me/919788289050"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-5 z-50 rounded-full bg-green-600 p-4 text-white shadow-lg hover:bg-green-700"
      >
        <MessageCircle />
      </a>
    </>
  );
}