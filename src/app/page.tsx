import Header from "@/components/global/Header";
import { Json } from "@/types/types";
import { getData } from "@/utils/getData";

export default async function Home() {
  const data: Json = await getData()

  const { header } = data;
  const { logo, navigation, cart, login } = header;


  return (
    <Header logo={logo} navigation={navigation} cart={cart} login={login} />
  );
}