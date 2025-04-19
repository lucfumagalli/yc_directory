import Image from "next/image";
import SearchForm from "@/app/components/SearchForm";

export default async function Home({ searchParams} : {
  searchParams: Promise<{ query?: string}>
}) {

  const query = (await searchParams).query;

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup, <br /> Connect </h1>
        <p className="sub-heading">Submit ideas or vote </p>
        <SearchForm 
          query={query}
        />
      </section>
    </>
  );
}
