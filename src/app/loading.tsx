import dynamic from "next/dynamic";

const Loader = dynamic(() => import("@/components/hero/loader"), { ssr: false });

function Loading() {
  return <Loader />;
}

export default Loading;
