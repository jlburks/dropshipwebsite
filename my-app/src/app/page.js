import Image from "next/image";
import MainImgCarousel from "./components/Carousel/MainImgCarousel.js"







export default function Home() {
     return (
      <div>
        {/* sliding top products scrollable auto section */}
        <div>
          <button>left</button>
          <MainImgCarousel></MainImgCarousel>
          <button>right</button>
        </div>
      </div>
     )
}
