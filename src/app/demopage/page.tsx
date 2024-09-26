import PageHead from "../../../component/PageHead";

export default function Demopage() {
  // Define the metadata for the page
  const PageMeta = {
    title: "Dar Aluloom Business Consultancy",
    description: "Dar Aluloom Business Consultancy services for your business needs",
    canonical: "https://localhost:3000", // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
  };

  return (
    <div>
      {/* Pass the PageMeta as props to PageHead */}
      <PageHead PageMeta={PageMeta} />

      <h1>Team Page</h1>
      <p>Welcome to our team page!</p>
    </div>
  );
}
