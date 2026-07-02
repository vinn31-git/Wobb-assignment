import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserProfileSummary } from "@/types";

interface SelectedProfilesStore {
    selectedProfiles: UserProfileSummary[];

    addProfile: (profile: UserProfileSummary) => void;

    removeProfile: (username: string) => void;

    reorderProfiles: (startIndex: number, endIndex: number) => void;
}

export const useSelectedProfilesStore = create<SelectedProfilesStore>()(
    persist(
        (set) => ({
            selectedProfiles: [],

            addProfile: (profile) =>
                set((state) => {
                    const exists = state.selectedProfiles.some(
                        (p) => p.username === profile.username
                    );

                    if (exists) return state;

                    return {
                        selectedProfiles: [...state.selectedProfiles, profile],
                    };
                }),

            removeProfile: (username) =>
                set((state) => ({
                    selectedProfiles: state.selectedProfiles.filter(
                        (profile) => profile.username !== username
                    ),
                })),

            reorderProfiles: (startIndex, endIndex) =>
                set((state) => {
                    const updated = [...state.selectedProfiles];

                    const [removed] = updated.splice(startIndex, 1);

                    updated.splice(endIndex, 0, removed);

                    return { selectedProfiles: updated };
                }),
        }),
        {
            name: "selected-profiles",
        }
    )
);