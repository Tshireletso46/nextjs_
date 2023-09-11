import { useRouter } from "next/router";
import { getEventById, getFeaturedEvents } from "../../dummy-data";
import { Fragment } from "react";
import { getEventById, getAllEvents } from "../../helpers/api-util";
import EventSummary from "../../components/event-details/event-summary";
import EventLogistics from "../../components/event-details/event-logistics";
import EventContent from "../../components/event-details/event-content";
import ErrorAlert from "../../components/ui/error-alert";


function EventDetailPage() {
    const router = useRouter();

    const eventId = router.query.eventId;
    const event = props.selectedEvent;

     if (!event) {
        return (
            <div className="center">
            <p>Loading...</p>
        </div>
        ); 
    }

    return(
        <Fragment>
             <EventSummary title={event.title} />
            <EventLogistics 
            date={event.date}  
            address={event.location} 
            image={event.image} 
            imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
}

export async function getStaticProps(context) {
    const eventId = context.params.eventId;
    const event = await getEventById(eventId);

return {
    props: {
        selectedEvent: event
    },
    revalidate: 30
};
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents();

    const paths = events.map(event => ({params: { eventId: event.id} }));

    return {
        paths: paths,
        fallback: true,
    };
}

export default EventDetailPage;