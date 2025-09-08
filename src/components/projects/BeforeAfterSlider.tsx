import { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeAlt = "Before image",
  afterAlt = "After image",
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    
    // Get cursor or touch position
    let clientX;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    
    const position = ((clientX - rect.left) / rect.width) * 100;
    // Clamp the position between 0 and 100
    const clampedPosition = Math.max(0, Math.min(100, position));
    
    setSliderPosition(clampedPosition);
  };
  
  const handleMouseDown = () => {
    if (!containerRef.current) return;
    
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  
  const handleTouchStart = () => {
    if (!containerRef.current) return;
    
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('touchend', handleTouchEnd);
  };
  
  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };
  
  const handleTouchEnd = () => {
    document.removeEventListener('touchmove', handleMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };
  
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg cursor-col-resize"
    >
      {/* Before image (visible based on slider position) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="object-cover w-full h-full"
        />
      </div>
      
      {/* After image (clipped based on slider position) */}
      <div 
        className="absolute inset-0 overflow-hidden h-full"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={afterImage}
          alt={afterAlt}
          className="object-cover w-full h-full absolute"
          style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: '2000%' }}
        />
      </div>
      
      {/* Slider control */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-md cursor-col-resize z-10"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
          <svg
            className="w-4 h-4 text-stone-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-semibold">
        Before
      </div>
      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-semibold">
        After
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
