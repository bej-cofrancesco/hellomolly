import CtaSection from "@/components/common/molecules/CtaSection";
import Title from "@/components/common/molecules/Title";
import CollectionList from "@/components/common/organisms/CollectionList";
import Hero from "@/components/common/organisms/Hero";
import Header from "@/components/global/Header";
import { Json } from "@/types/types";
import { getData } from "@/utils/getData";
import Image from "next/image";

export default async function Home() {
  const data: Json = await getData()

  const { header, hero, best_selling } = data;

  return (
    <>
      <Hero>
        <Header logo={header.logo} navigation={header.navigation} login={header.login} />
        <Hero.Content>
          <CtaSection heading={hero.heading} description={hero.description} cta={hero.cta} />
          {/* <Image src={hero_image} /> */}
        </Hero.Content>
      </Hero>
      <section className="container flex flex-col items-center pt-[77px] px-[175px]">
        <Title heading={best_selling.heading} description={best_selling.description} />
        <CollectionList products={best_selling.products} cta={best_selling.cta} />
      </section>
    </>
  );
}