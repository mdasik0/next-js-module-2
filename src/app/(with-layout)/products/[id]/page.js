import getSingleProducts from "@/utils/getSingleProducts";
import React from "react";

const singlePageProduct = async ({ params }) => {
  const product = await getSingleProducts(params.id);
  
  console.log("🚀 ~ file: page.js:6 ~ singlePageProduct ~ product:", product);

  return (
    <div className="h-[80vh] flex items-center justify-center ">
      <h1>{product.title}</h1>
    </div>
  );
};

export default singlePageProduct;
