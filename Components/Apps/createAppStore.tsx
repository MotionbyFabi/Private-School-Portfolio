import React from "react";
import create from "zustand";

interface Props {
    appName: string;
    setAppName: (title: string) => void;
}

export const useAppStore = create<Props>((set) => ({
    appName: "Finder",
    setAppName: (title) => {
        set((state) => ({ appName: state.appName = title }))
        },
    }
)
);

