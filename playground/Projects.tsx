import Cards from "./Cards";

export default function Projects() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // 3 columns with equal width
        gap: "16px", // 16px gap between grid items
        padding: "16px",
      }}
    >
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
}
