import CarouselCard from './CarouselCard';

export default function MainImgCarousel() {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent:"space-between", padding:"10px 30px 10px 30px"}}>
      {prodList.map((item,index) => (
        <CarouselCard key={index} item={item} />
      ))}
    </div>
  );
}

const prodList = ["num1.webp", "num2.webp", "num3.webp"];

