function ParallaxBackground({ imageUrl, index }) {
  return (
    <div
      role="image"
      aria-label="Background with abstract design"
      className="parallax lg:bg-fixed bg-center bg-no-repeat bg-cover min-h-[400px] w-full mt-[100px] mb-[100px]"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  );
}

export default ParallaxBackground;

