import feeddata from "../Components/Feeddata";
import TitlePageClient from "./TitlePageClient";

export async function generateStaticParams() {
  return feeddata.map((item) => ({
    title: item.title.replace(/\s+/g, "-").toLowerCase(),
  }));
}

export default function TitlePage({ params }) {
  const title = params.title;
  const item = feeddata.find(
    (e) => e.title.replace(/\s+/g, "-").toLowerCase() === title
  );

  if (!item) {
    return <div>Item not found</div>;
  }

  const sortedfeed = feeddata.filter((e) => e.id !== item.id).slice(0, 3);

  return <TitlePageClient item={item} sortedfeed={sortedfeed} />;
}
