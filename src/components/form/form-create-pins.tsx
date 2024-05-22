"use client";

import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import { Label } from "../ui/label"; // Assuming these are custom components that accept standard Input props
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import DisplayUserData from "../display_data/display_user_data";
import DisplayBoardData from "../display_data/display_board-data";
import DisplayPinsData from "../display_data/display_pins_data";
import type { boardList, createPin, pinList, userData } from "@/typage/type";
import { createPinSchema } from "@/typage/type";

export default function CreatePins() {
    const [isUser, setIsUser] = useState(false);
    const [userData, setUserData] = useState<userData | null>(null);
    const [isBoardList, setIsBoardList] = useState(false);
    const [boardList, setBoardList] = useState<boardList | null>(null);
    const [pins, setPins] = useState<pinList | null>(null);
    const [isPins, setIsPins] = useState(false);

    const { register, handleSubmit, formState, control } = useForm<createPin>({
        // resolver: zodResolver(createPinSchema),
        // defaultValues: {
        //   link: "",
        //   title: "",
        //   description: "",
        //   dominant_color: "",
        //   alt_text: "",
        //   board_id: "",
        //   board_section_id: "",
        //   media: { media_type: "" },
        //   media_source: {
        //     source_type: "",
        //     content_type: "",
        //     data: "",
        //     is_standard: false
        //   },
        //   parent_pin_id: "",
        //   note: ""
        // }
      });

    const getProfilePinterest = async () => {
        try {
            const res = await axios.get("/api/pinterest/fetch/user");
            console.log("API response:", res.data); // Debugging line
            const data = res.data.responce;
            console.log("Data:", data); // Debugging line

            setIsUser(true);
            return setUserData(data);
        } catch (error) {
            console.error("Error fetching user data:", error); // Debugging line
        }
    };

    const retrieveBoardList = async () => {
        try {
            const res = await axios.get("/api/pinterest/fetch/boards");
            const data = res.data.responce;
            console.log("Data:", data); // Debugging line
            setIsBoardList(true);
            return setBoardList(data);
        } catch (error) {
            console.error(error);
        }
    };
    const retrievePins = async () => {
        try {
            const res = await axios.get("/api/pinterest/fetch/pins");
            const data = res.data.responce;
            console.log("Data:", data); // Debugging line
            setIsPins(true);
            return setPins(data);
        } catch (error) {
            console.error(error);
        }
    };
    const onSubmit: SubmitHandler<createPin> = async (data, e) => {
        e?.preventDefault();
        console.log("entered the function onSubmit");
        console.log(data, "data");
    
        try {
          const res = await axios.post("/api/pinterest/create/pins", data, {
            headers: {
              "Content-Type": "application/json"
            }
          });
    
          console.log("res", res);
        } catch (error) {
          console.error(error);
        }
      };
    

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <main className="grid-flow-col grid justify-start gap-20 items-start p-6 text-black mx-auto mt-10 bg-white rounded-md shadow-md">
                <div className="gap-2 flex flex-col justify-between">
                    <h1 className="text-4xl font-bold">Create Pins</h1>
                    <Button className="border bg-blue-600 border-blue-500 text-white">
                        <Link href="/api/pinterest/Oauth/auth">Login to Pinterest</Link>
                    </Button>
                    <Button
                        className="border bg-blue-600 border-blue-500 text-white"
                        onClick={getProfilePinterest}
                    >
                        Retrieve account user info
                    </Button>
                    {isUser ? (
                        //@ts-ignore
                        <DisplayUserData data={userData} />
                    ) : (
                        <div>Click the button to display user data</div>
                    )}
                    <Button
                        className="border bg-blue-600 border-blue-500 text-white"
                        onClick={retrieveBoardList}
                    >
                        Retrieve board list
                    </Button>
                    {isBoardList ? (
                        //@ts-ignore
                        <DisplayBoardData data={boardList} />
                    ) : (
                        <div>Click the button to display boadList</div>
                    )}
                    <Button
                        className="border bg-blue-600 border-blue-500 text-white"
                        onClick={retrievePins}
                    >
                        Retrieve pin list
                    </Button>
                    {isPins ? (
                        //@ts-ignore
                        <DisplayPinsData data={pins} />
                    ) : (
                        <div>Click the button to display pins</div>
                    )}
                </div>
                <div>
                <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-3"
          >
            <Label htmlFor="link">Link</Label>
            <Input type="text" id="link" {...register("link")} />
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" {...register("title")} />
            <Label htmlFor="description">Description</Label>
            <Input type="text" id="description" {...register("description")} />
            <Label htmlFor="dominant_color">Dominant Color</Label>
            <Input type="text" id="dominant_color" {...register("dominant_color")} />
            <Label htmlFor="alt_text">Alt Text</Label>
            <Input type="text" id="alt_text" {...register("alt_text")} />
            <Label htmlFor="board_id">Board ID</Label>
            <Input type="text" id="board_id" {...register("board_id")} />
            <Label htmlFor="source_type">Source Type</Label>
            <Input type="text" id="source_type" {...register("media_source.source_type")} />
            <Label htmlFor="content_type">Content Type</Label>
            <Input type="text" id="content_type" {...register("media_source.content_type")} />
            <Label htmlFor="data">Data</Label>
            <Input type="file" id="data" {...register("media_source.data")} />
            <Label htmlFor="is_standard">Is Standard</Label>
            <Input
              type="checkbox"
              id="is_standard"
              {...register("media_source.is_standard")}
            />
            <Button
              type="submit"
              className="border bg-blue-600 border-blue-500 text-white active:bg-blue-950"
            >
              Submit
            </Button>
          </form>


                </div>
            </main>
        </Suspense>
    );
}

{/* <form
onSubmit={handleSubmit(onSubmit)}
className="w-full flex flex-col gap-3"
>
<Label htmlFor="link">Link</Label>
<Input type="text" id="link" {...register("link")} />
<Label htmlFor="title">Title</Label>
<Input type="text" id="title" {...register("title")} />
<Label htmlFor="description">Description</Label>
<Input type="text" id="description" {...register("description")} />
<Label htmlFor="dominant_color">Dominant Color</Label>
<Input
    type="text"
    id="dominant_color"
    {...register("dominant_color")}
/>
<Label htmlFor="alt_text">Alt Text</Label>
<Input type="text" id="alt_text" {...register("alt_text")} />
<Label htmlFor="board_id">Board ID</Label>
<Input type="text" id="board_id" {...register("board_id")} />
<Label htmlFor="board_section_id">Board Section ID</Label>
<Input
    type="text"
    id="board_section_id"
    {...register("board_section_id")}
/>
<Label htmlFor="media_type">Media Type</Label>
<Input
    type="text"
    id="media_type"
    {...register("media.media_type")}
/>
<Label htmlFor="source_type">Source Type</Label>
<Input
    type="text"
    id="source_type"
    {...register("media_source.source_type")}
/>
<Label htmlFor="content_type">Content Type</Label>
<Input
    type="text"
    id="content_type"
    {...register("media_source.content_type")}
/>
<Label htmlFor="data">Data</Label>
<Input type="file" id="data" {...register("media_source.data")} />
<Label htmlFor="is_standard">Is Standard</Label>
<Input
    type="checkbox"
    id="is_standard"
    {...register("media_source.is_standard")}
/>
<Label htmlFor="parent_pin_id">Parent Pin ID</Label>
<Input
    type="text"
    id="parent_pin_id"
    {...register("parent_pin_id")}
/>
<Label htmlFor="note">Note</Label>
<Input type="text" id="note" {...register("note")} />

<Button
    type="submit"
    className="border bg-blue-600 border-blue-500 text-white"
>
    Submit
</Button>
</form> */}