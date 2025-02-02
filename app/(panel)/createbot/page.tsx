import MyBots from "@/src/modules/myBots"
import Train from "@/src/modules/train"
import TrainCreate from "@/src/modules/trainCreate"
import { Metadata, NextPage } from "next"

const CreateBotsPage: NextPage = () => {
    return (
        <>
            <TrainCreate />
        </>
    )
}
export const metadata: Metadata = {
    title: "Create Assistant | HamyarChat",
    description: "Create and configure a new assistant in HamyarChat.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default CreateBotsPage
