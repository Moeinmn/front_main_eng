import useStoreViewController from "@/src/modules/train/hooks/view-controller"
import useStoreViewControllerCreate from "@/src/modules/trainCreate/components/train/hooks/view-controler-create"
import { FolderAdd } from "iconsax-react"

const TabLink = ({ item, event }: any) => {
    const StoreViewController = useStoreViewControllerCreate()

    const handleClick = () => {
        StoreViewController.changeTab(item.store)
    }
    return (
        <div
            onClick={handleClick}
            className={`flex w-max cursor-pointer items-center gap-2 p-3 ${StoreViewController.activeTab === item.store && "border-b-2 border-custom-blue"}`}
        >
            <div>{item.icon}</div>

            <span>{item.title}</span>
        </div>
    )
}

export default TabLink
