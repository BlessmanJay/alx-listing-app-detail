interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-1 bg-gray-100 rounded-full text-sm hover:bg-blue-100 transition"
    >
      {label}
    </button>
  );
};

export default Pill;
