import { useContext } from "react";
import { NewsContext } from "../../context";
import useNewsQuery from "../../hooks/useNewsQuery";
import Loader from "../../ui/Loader";
import { renderErrorState } from "../../utils/renderErrorMsg";
import Card from "./Card";

export default function NewsHub() {
  const { newsFilter } = useContext(NewsContext);
  const { newsData, loading, error } = useNewsQuery(newsFilter);

  const half = Math.ceil(newsData?.length / 3);
  const rightSection = newsData?.slice(0, half);
  const leftSection = newsData?.slice(half);

  // decide what to render
  let content = null;
  if (loading.state) {
    content = <Loader />;
  }

  if (!loading.state && error !== "") {
    content = renderErrorState('"An error occurred. Please try again later."');
  }
  if (!loading.state && error === "" && newsData?.length === 0) {
    content = (
      <main className=' my-10 lg:my-14 max-w-7xl container flex place-content-center'>
        <h1 className='text-center mb-10 text-lg text-slate-800 bg-gray-400 px-6 py-2 rounded-lg'>
          No news found! Please try again.
        </h1>
      </main>
    );
  }

  if (!loading.state && error === "" && newsData?.length > 0) {
    content = (
      <main className='my-10 lg:my-14'>
        {newsFilter.searchTerm !== "" && (
          <h1 className='text-center mb-10 text-lg text-gray-800/90'>
            {newsData?.length > 0
              ? `Showing ${newsData?.length} news for searching :`
              : "No news found for searching:"}
            <pre className='font-bold ml-2 text-black inline'>{`"${newsFilter.searchTerm}"`}</pre>
          </h1>
        )}
        <div className='container mx-auto grid grid-cols-12 gap-8'>
          {newsData?.length > 2 ? (
            <>
              {/* <!-- left --> */}
              <div className='col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8'>
                {leftSection?.map((article, index) => (
                  <Card
                    key={article.title}
                    article={article}
                    index={index}
                    right={false}
                  />
                ))}
              </div>
              {/* <!-- right --> */}
              <div className='col-span-12 self-start xl:col-span-4'>
                <div className='space-y-6 divide-y-2 divide-[#D5D1C9]'>
                  {rightSection?.map((article, index) => (
                    <Card
                      key={article.title}
                      article={article}
                      index={index}
                      right={true}
                    />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className='col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8'>
              {newsData?.map((article, index) => (
                <Card
                  key={article.title}
                  article={article}
                  index={index}
                  right={false}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    );
  }

  return content;
}
