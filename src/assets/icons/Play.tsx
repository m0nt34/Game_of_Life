type prop = {
  className?: string;
};

const Play = ({ className }: prop) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"

      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.906 4.537A.6.6 0 0 0 6 5.053v13.894a.6.6 0 0 0 .906.516l11.723-6.947a.6.6 0 0 0 0-1.032z"
      />
    </svg>
  );
};

export default Play;
