import { getFeaturedEvents } from "@/dummy-data";
import EventList from "../components/events/event-list";
import Head from "next/head";


function HomePage(props) {
    return(
        <div>
            <Head>
                <title>NextJS Events</title>
                <meta name='description' 
                content='Find a lot of great evnts that allow you to evolve...'
                />
            </Head>
           <EventList
            items={props.events}/>
        </div>
    );
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();

    return {
        props: {
        events:featuredEvents
        },
        revalidate: 100
    }
}
export default HomePage;