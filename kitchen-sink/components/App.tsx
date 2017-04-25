import * as React from 'react';
import {
    Framework7App,    
    Views, View,
    Pages, Page, PageContent,
    Navbar, NavLeft, NavCenter, NavRight, Toolbar,
    Panel, Statusbar, Link, List, ListItem
} from 'framework7-react';

import {routes} from '../routes';

export interface IKitchenSinkPage {
    path: string;
    pageTitle: string;
    component: React.ComponentClass<any> | React.StatelessComponent<any>;
}

let framework7: any;
let currentRoute: any;

export const getFramework7 = () => {
    return framework7;
}

const onRouteChange = (route: any) => {
    currentRoute = route;
}

export const getCurrentRoute = () => {
    return currentRoute;
}

export interface IAppState {
    leftPanelOpened: boolean;
    rightPanelOpened: boolean;
}

export class App extends React.Component<any, IAppState> {
    constructor() {
        super();

        this.state = {
            leftPanelOpened: false,
            rightPanelOpened: false
        }
    }

    render() {
        return (
            <Framework7App onFramework7Init={(f7) => {framework7 = f7}} themeType="ios" routes={routes} onRouteChange={onRouteChange}>
                <Statusbar></Statusbar>
                <Panel opened={this.state.leftPanelOpened} left reveal layout="dark" theme="pink" onPanelClosed={this.closedLeftPanel.bind(this)}>
                    <View navbarFixed>
                        <Pages>
                            <Page>
                                <Navbar title="Left Panel"></Navbar>
                                <List>
                                    <ListItem link="/cards/" title="Cards" />
                                    <ListItem link="/lists/" title="Lists" />
                                </List>
                            </Page>
                        </Pages>
                    </View>
                </Panel>
                <Panel opened={this.state.rightPanelOpened} right cover layout="dark" onPanelClosed={this.closedRightPanel.bind(this)}>
                    <p>Panel right content</p>
                </Panel>
                <Views navbarThrough>
                    <View main url="/home/" dynamicNavbar>
                    </View>
                </Views>       
            </Framework7App>
        );
    }

    private openLeftPanel() {
        this.setState({
            ...this.state,
            leftPanelOpened: true
        })
    }

    private openRightPanel() {
        this.setState({
            ...this.state,
            rightPanelOpened: true
        })
    }

    
    private closedLeftPanel() {
        this.setState({
            ...this.state,
            leftPanelOpened: false
        })
    }

    private closedRightPanel() {
        this.setState({
            ...this.state,
            rightPanelOpened: false
        })
    }
};