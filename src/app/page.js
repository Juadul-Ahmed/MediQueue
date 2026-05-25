import Banner from "@/components/Banner";
import { LocationSection } from "@/components/LocationSection";
import { ReviewSection } from "@/components/ReviewSection";
import TopCoursesSection from "@/components/TopCoursesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <TopCoursesSection/>
      <ReviewSection/>
      <LocationSection/>
    </div>
  );
}
