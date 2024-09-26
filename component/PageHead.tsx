// import Head from "next/head";
// import { usePathname } from "next/navigation";

// export default function PageHead({ PageMeta }) {
//     const pathname = usePathname();
//     const baseUrl = "http://localhost:3000/"; // Define your base URL

//     return (    
//         <Head>        
//             <title>{PageMeta.title}</title>
//             <meta name="title" content={PageMeta.title} />
//             <meta name="description" content={PageMeta.description} />
//             <link rel="canonical" href={`${baseUrl}${pathname}`} /> {/* Updated canonical URL */}
//             <meta property="og:locale" content="en_US" />
//             <meta property="og:type" content="website" />
//             <meta property="og:title" content={PageMeta.title} />
//             <meta property="og:description" content={PageMeta.description} />
//             <meta property="og:url" content={`${baseUrl}${pathname}`} /> {/* Updated Open Graph URL */}
//             <meta property="og:site_name" content="Jemeson Construction Ltd" />
//             <meta property="og:image" content="/images/abacus.jpg" />
//             <meta property="og:image:width" content="1024" />
//             <meta property="og:image:height" content="506" />
//             <meta property="og:image:type" content="image/jpg" />
//             <meta name="twitter:card" content="summary_large_image" />        
//         </Head>
//     );
// }
