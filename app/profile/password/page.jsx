import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import MenuData from "../../components/Layout/Header/MenuData";
import { getCurrentUser } from "../../actions/getCurrentUser";
import ProfileLayout from "../comp/ProfileLayout";
import Banner from "../../components/Layout/Banner/Banner";
import PassClient from "./PassClient";

const page = async () => {
  const headerdata = await MenuData();
  const user = await getCurrentUser();

  return (
    <>
      <Header headerdata={headerdata} user={user} />
      <Banner title="Profile" />
      <main>
        <ProfileLayout user={user}>
          <PassClient user={user} />
        </ProfileLayout>
      </main>
      <Footer />
    </>
  );
};

export default page;