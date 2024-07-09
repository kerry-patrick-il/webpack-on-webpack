import React from 'react';


const MyComponent = () => {
  const imgs = (require as any).context("../assets", true, /\.(png|jpe?g|svg)$/);
  const imgDivs = imgs.keys().map((i: string) => {
    console.log("image", i, imgs(i));
    
    return (
      <div key={i}>
        <img src={imgs(i)} alt={i} />
      </div>
    );
  });

  return (
    <div>
        <div>My kids</div>
        {imgDivs}
    </div>
  );
};

export default MyComponent;