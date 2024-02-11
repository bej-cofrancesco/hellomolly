import CtaSection from "@/components/common/molecules/CtaSection";
import Title from "@/components/common/molecules/Title";
import CollectionList from "@/components/common/organisms/CollectionList";
import CollectionsList from "@/components/common/organisms/CollectionsList";
import Hero from "@/components/common/organisms/Hero";
import ExclusiveOffer from "@/components/common/organisms/ExclusiveOffer";
import Header from "@/components/global/Header";
import { CountdownCardProps, Json } from "@/types/types";
import { getData } from "@/utils/getData";
import Image from "next/image";
import Countdown from "@/components/common/molecules/Countdown";

export default async function Home() {
  const data: Json = await getData()

  const { header, hero, best_selling, our_products, exclusive_offer, collections_list } = data;

  return (
    <>
      <Hero>
        <Header logo={header.logo} navigation={header.navigation} login={header.login} />
        <Hero.Content>
          <CtaSection heading={hero.heading} description={hero.description} cta={hero.cta} />
          <picture className="relative">
            <Image src={hero.image} alt={hero.description} priority width={570} height={717} />
          </picture>
        </Hero.Content>
      </Hero>
      <section className="w-full flex flex-col items-center pt-[77px] pb-10 wrapper inner">
        <Title heading={best_selling.heading} description={best_selling.description} />
        <CollectionList size="lg" products={best_selling.products} cta={best_selling.cta} />
      </section>
      <section className="w-full flex-col items-center pt-10 pb-[70px] wrapper inner">
        <Title heading={our_products.heading} description={our_products.description} />
        <CollectionList size="sm" products={our_products.products} />
      </section>
      <section className="w-full flex-col items-center pt-[70px] pb-[83.5px] wrapper inner">
        <ExclusiveOffer
            heading={exclusive_offer.heading}
            cta={exclusive_offer.cta}
            image={exclusive_offer.image}
            description={exclusive_offer.description}
          >
            <Countdown>
              {exclusive_offer.countdowns.map((card: CountdownCardProps, index: number) => (
                <Countdown.Card key={`${card.label}-${index}`} value={card.value} label={card.label} />
              ))}
            </Countdown>
          </ExclusiveOffer>
      </section>
      <section className="w-full flex-col items-center pt-[83.5px] wrapper inner">
        <Title heading={collections_list.heading} description={collections_list.description} />
        <CollectionsList collections={collections_list.collections} />
      </section>
    </>
  );
}