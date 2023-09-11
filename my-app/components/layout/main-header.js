import Link from "next/link";
import classes from './main-header.module.css'

function MainHeader() {
    return(
        <headr className={classes.header}>
            <div className={classes.logo}>
                <Link href='/'>NextEvents</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link href='/events'>Browse All Events</Link>
                    </li>
                </ul>
            </nav>
        </headr>
    );
}

export default MainHeader;