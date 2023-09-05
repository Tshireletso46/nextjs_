import classes from './event-items.module.css';
import Button from "./ui/button";
import DateIcon from './event-items.module.css';
// import AddressIcon from './icons/address-icon';


function EventItems(props) {
    const {title, image, date, location, id} = props;
    const humanRadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    
    const formattedAddress = location.replace(',', '\n');
    const exploreLink = `/events/${id}`;

    return(
        <li className={classes.item}>
           <img src={"/" + image} alt={title} />
           <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.date}>
                    <DateIcon />
                    <time>{humanRadableDate}</time>
                </div>
                <div className={classes.address}>
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink}>
                <span>Explore Event</span>
                <span className={classes.icon}>
                <ArrowRightIcon />
                </span>
                </Button>
            </div>
           </div>
        </li>

    );

}
export default EventItems;