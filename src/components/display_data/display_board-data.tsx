import Image from "next/image";
import { Label } from "../ui/label";
import { boardData, boardList } from "@/typage/type";
interface databoard {
  data: boardList;
}

export default function DisplayBoardData(data: databoard | null) {
  console.log("data", data);

  const datanested = data?.data;

  const bookmark = datanested?.bookmark;

  const items = datanested?.items;
  console.log("items", items);

  console.log("bookmark", bookmark);

  console.log("boadListDatafrom DisplayBoardData ", datanested);

  return (
    <>
      <div>
        <Label>Board List</Label>
        <div className="grid grid-cols-3 gap-32 p-4">
          {items?.map((item: boardData) => (
            <div key={item.id} className="grid-flow-row  gap-2  w-fit h-fit  ">
              <div className=" flex justify-center">
                <Image
                  src={item.media.image_cover_url}
                  alt={item.name}
                  width={100}
                  height={50}
                  className="rounded-full "
                />
              </div>
              <Label>Board Name</Label>
              <p>{item.name}</p>
              <Label>Board Description</Label>
              <p>{item.description}</p>
              <Label>Board Id</Label>
              <p>{item.id}</p>
              <Label>Board Owner</Label>
              {/* @ts-ignore */}
              <p>{item.owner.username}</p>
              <Label>Board Pin Count</Label>
              <p>{item.pin_count}</p>
              <Label>Board Follower Count</Label>
              <p>{item.follower_count}</p>
              <Label>Board Collaborator Count</Label>
              <p>{item.collaborator_count}</p>
              <Label>Board Created At</Label>
              <p>{item.created_at}</p>
              <Label>Board Privacy</Label>
              <p>{item.privacy}</p>
              <Label>Board Pins Modified At</Label>
              <p>{item.board_pins_modified_at}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// board_pins_modified_at
// :
// "2024-05-18T00:36:55.136000"
// collaborator_count
// :
// 0
// created_at
// :
// "2024-05-17T20:45:33"
// description
// :
// ""
// follower_count
// :
// 0
// id
// :
// "888546270171269213"
// media
// :
// {pin_thumbnail_urls: Array(2), image_cover_url: 'https://i.pinimg.com/400x300/58/5a/fe/585afeb5715ddbac8e8460e7041f39f6.jpg'}
// name
// :
// "professionnal photo"
// owner
// :
// {username: 'benyamine_dev'}
// pin_count
// :
// 3
// privacy
// :
// "PUBLIC"
