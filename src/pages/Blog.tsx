import BlogSection from "@/components/home/blog-section";
import NavigationHeroSection from "@/components/NavigationHeroSection";

const Blogs = () => {
  return (
    <section>
      <NavigationHeroSection title="Our Blogs" path="Blogs" />
      <BlogSection />
    </section>
  );
};

export default Blogs;
