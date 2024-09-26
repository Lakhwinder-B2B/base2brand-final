// Make sure this is a valid React component.
export default function TeamPage() {
    return (
      <div>
        <h1>Team Page</h1>
        <p>Welcome to our team page!</p>
      </div>
    );
  }
  
  // Metadata generation function (This can stay here, depending on your framework)
  export function generateMetadata() {
    return {
      title: " marketing agency",
      description: " marketing agency in Mohali",
  
      openGraph: {
        title: "Team Page",
        description: "Meet our amazing team.",
        url: "img/portfolio/b1.png",
        images: [
          {
            url: "img/portfolio/b1.png",
            width: 800,
            height: 600,
            alt: "Team Image",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Team Page",
        description: "Meet our amazing team.",
      },
      // Add canonical tag
      alternates: {
        canonical: "http://localhost:3000", // Replace with your canonical URL
      },
    };
  }
  