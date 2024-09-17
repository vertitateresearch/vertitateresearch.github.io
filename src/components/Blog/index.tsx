import SectionTitle from "../Common/SectionTitle";

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-16 bg-gray-light dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Series"
          paragraph="VOLUME 1 | ISSUE 1"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3"></div>
      </div>
    </section>
  );
};

export default Blog;
