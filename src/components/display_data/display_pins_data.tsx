import { images, pinList } from "@/typage/type";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
interface pinData {
    data: pinList;
}


export default function DisplayPinsData(data : pinData ) {
    console.log("data from DisplayPinsData", data);
    const datanested = data?.data;
    console.log("datanested from DisplayPinsData", datanested);
    const bookmark = datanested?.bookmark;
    const items = datanested?.items;




    

    return (
        <div className=" flex flex-wrap w-[549px]">
              {/* <div>
                        <div className=" flex flex-col">
                            <Label>Bookmark</Label>
                            <p className="flex flex-wrap w-32"> {bookmark}</p>
                        </div>
                    </div> */}
            <div className="grid grid-cols-3 gap-32 pt-4 pr-4">
                    {/* @ts-ignore */}
                {items?.map((item) => (
                    <div key={item.id} className="grid-flow-row  gap-2  w-fit h-fit  ">
                        <div className=" flex justify-center">
                            <div>
                            {   
                                item.media.images["600x"] ? 
                                <Image  src={item.media.images["600x"].url} alt={ item.description} width={100} height={50} className="rounded-full "  />
                                : 
                                <Image  src={item.media.images["1200x"].url} alt={item.description} width={100} height={50} className="rounded-full "  />

                        
                        }
                        </div>

                        </div>
                        <Label>Pin Description</Label>
                        <p>{item.description}</p>
                        <Label>Pin Id</Label>
                        <p>{item.id}</p>
                        <Label>Pin Board Id</Label>
                        <p>{item.board_id}</p>
                        <Label>Pin Board Owner</Label>
                        <p>{item.board_owner.username}</p>
                        <Label>Pin Board Section Id</Label>
                        <p>{item.board_section_id}</p>
                        <Label>Pin Created At</Label>
                        <p>{item.created_at}</p>
                        <Label>Pin Creative Type</Label>
                        <p>{item.creative_type}</p>
                        <Label>Pin Alt Text</Label>
                        <p>{item.alt_text}</p>

                    </div>
                ))
                    
                        
                        }
                       
                
            </div>
        </div>
    )

}