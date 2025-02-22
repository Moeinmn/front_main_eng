import { create } from "zustand"

// Define a type for the tabs
type SettingTab = "General" | "Model" | "Apperence" | "Security" |"Leads"

interface StoreViewControllerSetting {
    activeTab: SettingTab
    changeTab: (newTab: any) => void
    isLoading: boolean
    setLoading: (loading: boolean) => void
}

const useStoreViewControllerSetting = create<StoreViewControllerSetting>(
    (set) => ({
        isLoading: false,
        activeTab: "General",
        setLoading: (loading) => set({ isLoading: loading }),

        changeTab: (newTab: any) =>
            set((state: any) => ({ activeTab: newTab })),
    }),
)

export default useStoreViewControllerSetting
