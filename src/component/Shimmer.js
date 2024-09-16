const Shimmer = () => {
  const shimmerCards = 10;
  return (
    <div className="shimmer-container">
      {Array.from({ length: shimmerCards }, (_, index) => (
        <div className="shimmer-card" key={index}></div>
      ))}
    </div>
  );
};

export default Shimmer;
