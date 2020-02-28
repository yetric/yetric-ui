import React, { Suspense } from "react";
import { LazyLoader } from "./LazyLoader";

export * from "./Home";

const SignupView = React.lazy(() => import("./Signup"));
const LoginView = React.lazy(() => import("./Login"));
const ForgotPasswordView = React.lazy(() => import("./ForgotPassword"));
const AccountView = React.lazy(() => import("./Account"));
const SettingsView = React.lazy(() => import("./Settings"));

export const Signup = () => {
    return (
        <LazyLoader>
            <SignupView />
        </LazyLoader>
    );
};

export const Login = () => {
    return (
        <LazyLoader>
            <LoginView />
        </LazyLoader>
    );
};

export const ForgotPassword = () => {
    return (
        <LazyLoader>
            <ForgotPasswordView />
        </LazyLoader>
    );
};

export const Account = () => {
    return (
        <LazyLoader>
            <AccountView />
        </LazyLoader>
    );
};

export const Settings = () => {
    return (
        <LazyLoader>
            <SettingsView />
        </LazyLoader>
    );
};
