import Image from "next/image";
import { Label } from "../ui/label";
import { userData } from "@/typage/type";


export default function DisplayUserData(data: userData | null) {
    const datanested = data?.data


    return (
        <div className=" flex flex-col gap-2   items-center">
            <div  >
                {/* @ts-ignore */}
                <Image src={datanested?.profile_image} defaultValue={'b'} alt={datanested?.business_name} width={100} height={50} className="rounded-full " />
            </div>
            <div className="grid-cols-3 flex items-center  gap-3 flex-wrap">
                <div>
                    <Label>Business Name </Label>
                    <p> {datanested?.business_name}</p>
                </div>
                <div  >
                    <Label>Username </Label>
                    <p>{datanested?.username}</p>
                </div>

                <div>

                    <Label>Website Url </Label>
                    <p defaultValue="0">{datanested?.website_url}</p>
                </div>
                <div>
                    <Label>Monthly Views </Label>
                    <p>{datanested?.monthly_views}</p>
                </div>
                <div>
                    <Label>Followers </Label>
                    <p>{datanested?.follower_count}</p>
                </div>
                <div>
                    <Label>Following </Label>
                    <p>{datanested?.following_count}</p>
                </div>
                <div>
                    <Label>Pin Count </Label>
                    <p>{datanested?.pin_count}</p>
                </div>
                <div>
                    <Label>Board Count </Label>
                    <p>{datanested?.board_count}</p>
                </div>

            </div>

        </div>
    )
}

// follower_count: 0, id: '888546338889980463', 
// following_count: 0,
//  business_name: 'benyamine_photo',
//   profile_image: 'https://i.pinimg.com/600x600_R/eb/29/12/eb2912d0a0d1ebd2a0a8aa7301b22e89.jpg', …}
// about
// : 
// ""
// account_type
// : 
// "BUSINESS"
// board_count
// : 
// 2
// business_name
// : 
// "benyamine_photo"
// follower_count
// : 
// 0
// following_count
// : 
// 0
// id
// : 
// "888546338889980463"
// monthly_views
// : 
// 26
// pin_count
// : 
// 4
// profile_image
// : 
// "https://i.pinimg.com/600x600_R/eb/29/12/eb2912d0a0d1ebd2a0a8aa7301b22e89.jpg"
// username
// : 
// "benyamine_dev"
// website_url
