
import * as React from 'react';
import {Page, Navbar, NavLeft, NavCenter, NavRight, Toolbar, Link, List, ListItem} from 'framework7-react';

export const HomePage = () => (
    <Page toolbarFixed>
        <Navbar>
            <NavLeft>
                <Link icon="icon-bars" onClick={this.openLeftPanel.bind(this)}></Link>
            </NavLeft>
            <NavCenter sliding>Hello World</NavCenter>
            <NavRight>
                <Link icon="icon-bars" onClick={this.openRightPanel.bind(this)}></Link>
            </NavRight>
        </Navbar>        
        <Toolbar>
            <Link>Left</Link>
            <Link>Right</Link>
        </Toolbar>
        <List>
            <ListItem title="Content Block" link="/content-block/" />
            <ListItem title="Cards" link="/cards/" />
            <ListItem title="Lists" link="/lists/" />
            <ListItem title="Contacts" link="/contacts/" />
            <ListItem title="Sortable" link="/sortable/" />
            <ListItem title="Swipeout" link="/swipeout/" />
            <ListItem title="Accordion" link="/accordion/" />
            <ListItem title="Forms" link="/forms/" />
            <ListItem title="Smart Select" link="/smart-select/" />
            <ListItem title="Chips" link="/chips/" />
            <ListItem title="Grid" link="/grid/" />
            <ListItem title="Preloader" link="/preloader/" />
            <ListItem title="Progress Bar" link="/progressbar/" />
            <ListItem title="Pull To Refresh" link="/pull-to-refresh/" />
            <ListItem title="Infinite Scroll" link="/infinite/" />
            <ListItem title="Swiper" link="/swiper/" />
            <ListItem title="Messages" link="/messages/" />
            <ListItem title="Searchbar" link="/searchbar/" />
            <ListItem title="Tabs" link="/tabs/" />
            <ListItem title="Tabs Swipeable" link="/tabs-swipeable/" />
            <ListItem title="Navbars & Toolbars" link="/bars/" />
            <ListItem title="FAB" link="/fab/" />
            <ListItem title="FAB Speed Dial" link="/fab-dial/" />
            <ListItem title="Login Screen" link="/login-screen/" />
            <ListItem title="Virtual List" link="/virtual-list/" />
            <ListItem title="Photo Browser" link="/photo-browser/" />
            <ListItem title="Modals" link="/modals/" />
            <ListItem title="Timeline Vertical" link="/timeline-vertical/" />
            <ListItem title="Timeline Horizontal" link="/timeline-horizontal/" />
            <ListItem title="Timeline Calendar" link="/timeline-calendar/" />
        </List>
        <List>
            <ListItem title="Dynamic Route" link="/user/45/posts/28/?sort=first#opened" />
            <ListItem title="Nested Routes" link="/nested-routes/" />
        </List>
    </Page>
);