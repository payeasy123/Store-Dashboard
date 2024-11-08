"use client";

import { PageLoader } from "@/components/custom-ui";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";

export const Providers = (props: React.PropsWithChildren) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <PersistGate persistor={persistor} loading={<PageLoader />}>
                <Provider store={store}>
                    <Toaster />
                    {props.children}
                </Provider>
            </PersistGate>
        </QueryClientProvider>
    );
};
