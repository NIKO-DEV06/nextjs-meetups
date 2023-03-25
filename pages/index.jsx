import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

const apiUrl = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.dtr7jkg.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Niko NextJs Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly niko NextJs meetups"
        ></meta>
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
};

// export async function getServerSideProps(contex) {
//   const req = contex.req;
//   const res = contex.res;

//   // fetch data from an API/DAtabase
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from an API/DAtabase
  const client = await MongoClient.connect(apiUrl);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetupsData = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetupsData.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default HomePage;
