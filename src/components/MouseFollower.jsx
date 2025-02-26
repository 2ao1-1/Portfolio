import { useState, useEffect } from "react";
export default function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 10 });
  const [circleColor, setCircleColor] = useState("#000");

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // دالة لحساب اللون العكسي
  const invertColor = (rgb) => {
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    return `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
  };

  const handleMouseEnter = (event) => {
    const bgColor = window.getComputedStyle(event.target).backgroundColor;
    setCircleColor(invertColor(bgColor));
  };

  const handleMouseLeave = () => {
    setCircleColor("#000"); // اللون الافتراضي
  };

  return (
    <div
      className="follower z-100"
      style={{
        left: position.x,
        top: position.y,
        backgroundColor: circleColor,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ></div>
  );
}
