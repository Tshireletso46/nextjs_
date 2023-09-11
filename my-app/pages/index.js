import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage() {
    return(
        <div>
           <EventList
            items={props.events}/>
        </div>
    );
}

export async function getStaticProps() {
    const  featuredEvents = await getFeaturedEvents();

    return {
        props: {
        events:featuredEvents
        },
        revalidate: 10
    }
}
export default HomePage;