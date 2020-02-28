import React, { Suspense } from "react";

export const LoadingView = () => <div>Loading...</div>;

export const LazyLoader: React.FunctionComponent = ({ children }) => (
    <div>
        <Suspense fallback={<LoadingView />}>{children}</Suspense>
    </div>
);
