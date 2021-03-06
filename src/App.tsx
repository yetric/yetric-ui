import "antd/dist/antd.css";
import {Provider} from "mobx-react";
import * as React from "react";
import {hot} from "react-hot-loader/root";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {AppLayout} from "./components/AppLayout";
import * as menuConfig from "./config/menu.json";
import {RootStore} from "./stores/RootStore";
import {MenuItem} from "./ui/MenuItem";
import {Account, ForgotPassword, Home, Login, Settings, Signup} from "./views";
import "./App.scss";

const menuItems = menuConfig.items.map((item: any) => {
    return new MenuItem(item.path, item.label, item.icon);
});

interface AppProps {
    rootStore: RootStore;
}

class App extends React.Component<AppProps, any> {
    constructor(props: AppProps) {
        super(props);
    }

    public render() {
        return (
            <Router>
                <Provider rootStore={this.props.rootStore}>
                    <AppLayout menuItems={menuItems}>
                        <Route path="/" exact component={Home} />
                        <Route path="/account" exact component={Account} />
                        <Route path="/signup" exact component={Signup} />
                        <Route path="/login" exact component={Login} />
                        <Route
                            path="/forgot-pwd"
                            exact
                            component={ForgotPassword}
                        />
                        <Route path="/settings" exact component={Settings} />
                    </AppLayout>
                </Provider>
            </Router>
        );
    }
}

export default hot(App);
