interface RectangleProps {
    color: string;
  }
  
  export default function Rectangle({ color }: RectangleProps) {
    return (
      <div className="grid grid-cols-3 gap-3">
        <div className={`w-64 h-32 bg-${color}-500`}></div>
      </div>
    );
  }