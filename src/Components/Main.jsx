import Card from "../Utils/Card"
import CommunityStats from "./CommunityStats/CommunityStats"
import Divider from "../Utils/Divider"
import { Graph } from "./graph"
import Language from "./Languages/Language"
import ProfileData from "./Profile/ProfileData"
import SkillsMain from "./Skills/SkillsMain"

const Main = () => {
    return(
        <main className="p-5 w-1/2 mx-auto min-w-max">
            <Card>
                <div className="flex w-full flex-col ">
                    <ProfileData />
                    <Divider />
                    <CommunityStats />
                    <Divider />
                    <Language />
                    <Divider />
                    <SkillsMain />
                </div>
            </Card>
        </main>
    )
}

export default Main