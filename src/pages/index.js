import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/dex/axis-swap");
  }, []);

  return (
    <div>
      <h1>IndexPage</h1>
    </div>
  );
};

export default IndexPage;
