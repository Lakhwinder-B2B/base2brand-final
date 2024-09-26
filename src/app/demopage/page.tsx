// Make sure this is a valid React component.
export default function TeamPage() {
    return (
      <div>
        <h1>Team Page</h1>
        <p>Welcome to our team page!</p>
      </div>
    );
  }
  
  export function generateMetadata() {
    // Environment variable se URL set karna, agar production environment mein hain toh live domain ka use hoga.
    const baseUrl = "https://www.base2brand.com"; // Hardcoded live URL
  
    return {
      title: "Digital Marketing & Web & Mobile App Development Agency",
      description: "Boost your business with our Digital Marketing, Web, and Mobile App Development services. Discover expert solutions tailored to your needs. Contact us!",
  
      metadataBase: new URL(baseUrl), // Yeh base URL ko set karega production ya local environment ke hisaab se
  
      openGraph: {
        title: "Team Page",
        description: "Meet our amazing team.",
        url: `${baseUrl}/img/portfolio/b1.png`, // Yeh absolute URL hoga, local ya live domain ke sath
        images: [
          {
            url: `${baseUrl}/img/portfolio/b1.png`, // Absolute URL production mein sahi se kaam karega
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
        images: [`${baseUrl}/img/portfolio/b1.png`], // Twitter image ke liye bhi absolute URL
      },
      alternates: {
        canonical: `${baseUrl}`, // Canonical URL jo local ya production domain ko represent karega
      },
    };
  }
  