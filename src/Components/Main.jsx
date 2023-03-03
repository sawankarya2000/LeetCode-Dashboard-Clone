import Card from "../Utils/Card"
import CommunityStats from "./CommunityStats/CommunityStats"
import ProfileData from "./Profile/ProfileData"

const Main = () => {
    return(
        <main className="p-5">
            <Card>
                <div className="flex w-full flex-col gap-3">
                    <ProfileData />
                    <CommunityStats />
                </div>
            </Card>
        </main>
    )
}

export default Main