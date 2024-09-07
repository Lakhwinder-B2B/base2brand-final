"use client";
import { useState, useEffect } from 'react';
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import "../blog/blog.css";
import { useRouter } from 'next/navigation'

interface BlogItem {
  id: string;
  title: string;
  term: string;
  image_url: string;
  created_at: string;
}
function BlogDetail() {
  const router = useRouter();

  const [id, setId] = useState<string | null>(null);
  const [blogpost, setBlogpost] = useState<any>(null);
  console.log("blogpost",blogpost);
  
  const [data, setData] = useState<BlogItem[] | null>(null);
  console.log("data",data);
  
  const [currentPage, setCurrentPage] = useState<number>(0);
  console.log("currentPage",currentPage);
  
  const itemsPerPage = 5;

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');
    setId(id);

  }, []);

  useEffect(() => {
    const fetchSingleData = async () => {
      try {
        if (id) {
          const response = await fetch(`https://empbackend.base2brand.com/get-blogposts/${id}`);
          const result = await response.json();
          setBlogpost(result.blogpost); // Accessing the blogpost object from the API response
        }
      } catch (error) {
        console.error('Error updating blog post:', error);
      }
    };

    fetchSingleData();
  }, [id]);

  useEffect(() => {
    // Perform some action when `blogpost` changes
    console.log('Blogpost has been updated:', blogpost);
  }, [blogpost]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
        const response = await fetch('https://empbackend.base2brand.com/blog-postdata');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedData = data ? data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage) : [];
  return (
    <>
      <Header />
      <div className="bgblack">
        <div className="container-fluid p-5 pb-5">
          <div className="row text-white mb-5 pb-5 justify-content-center g-0 g-lg-0 g-xl-5">
            {blogpost && (
              <div className="col-md-12 mb-4 col-lg-12 col-xl-8 ">
                <div className="blog_section bg-dark">
                  <img className="blogs w-100" src={blogpost.image_url} alt="Blog" />
                  <div className="p-4 pb-3 bgblack">
                    <p className="date">{new Date(blogpost.created_at).toLocaleDateString()}</p>
                    <p className="blog_desc mb-2">{blogpost.title}</p>
                    <div className="title_description" dangerouslySetInnerHTML={{ __html: blogpost.term }}></div>
                  </div>
                </div>
              </div>
            )}

            <div className="col-md-12 col-lg-12 col-xl-3 latest-side-bar p-4">
              <h2 className='pb-3 border-bottom'>Latest Post</h2>
              {displayedData &&
                displayedData.map((blog: BlogItem) => (
                  <div key={blog.id} className=" col-md-12">
                    <div className="blog_section_resent d-flex pb-3  border-bottom ">
                      <img className="blog_recent" src={blog.image_url} alt="Blog" />
                      <div className="  event_blog pr-2" onClick={() => {
                        router.push(`/blog-detail?id=${blog.id}`); setTimeout(() => {
                          window.location.reload();
                        }, 1000);
                      }}>
                        <p className="blog_descs mb-0 p-2">{blog.title}</p>

                      </div>
                    </div>
                  </div>
                ))}
               <div className="pagination-buttons mt-4 d-none">
                <button onClick={handlePreviousPage} disabled={currentPage === 0}>
                  Previous
                </button>
                <span className="mx-3">
                  Page {currentPage + 1} of {totalPages}
                </span>
                <button onClick={handleNextPage} disabled={currentPage >= totalPages - 1}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default BlogDetail;
